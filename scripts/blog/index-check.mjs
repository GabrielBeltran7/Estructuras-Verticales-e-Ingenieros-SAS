#!/usr/bin/env node
/**
 * Revisa en Google (URL Inspection API) el estado de indexación de cada post
 * publicado y vuelve a avisar a IndexNow los que sigan sin indexar.
 *
 *   node scripts/blog/index-check.mjs
 *
 * Necesita GOOGLE_SERVICE_ACCOUNT_JSON (la service account debe ser propietaria
 * de la propiedad de Search Console). INDEXNOW_KEY para el re-aviso.
 * NO vuelve a llamar a la Indexing API en bucle (eso no ayuda y es uso fuera de
 * norma) — solo re-notifica IndexNow, que sí está pensado para repetirse.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const POSTS_DIR = resolve(process.cwd(), 'src/app/blog/posts');
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.estructurasverticales.com').replace(/\/$/, '');
const HOST = new URL(SITE_URL).host;
const PROPERTY = process.env.GSC_PROPERTY || `sc-domain:${HOST.replace(/^www\./, '')}`;

const isIndexable = (raw) => {
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const head = fm ? fm[1] : '';
  return !/^\s*noindex:\s*true\s*$/im.test(head) && !/^\s*draft:\s*true\s*$/im.test(head);
};

const posts = readdirSync(POSTS_DIR)
  .filter((n) => n.endsWith('.mdx') && isIndexable(readFileSync(resolve(POSTS_DIR, n), 'utf8')))
  .map((n) => ({ slug: n.replace(/\.mdx?$/, ''), url: `${SITE_URL}/blog/${n.replace(/\.mdx?$/, '')}` }));

const saRaw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON ?? '';
if (!saRaw) {
  console.log('index-check: skipped (GOOGLE_SERVICE_ACCOUNT_JSON not set).');
  process.exit(0);
}
const sa = JSON.parse(saRaw.trim().startsWith('{') ? saRaw : Buffer.from(saRaw, 'base64').toString());
const token = await googleAccessToken(sa, 'https://www.googleapis.com/auth/webmasters.readonly');

console.log(`Revisando ${posts.length} post(s) en ${PROPERTY}\n`);
const stuck = [];
let indexed = 0;

for (const p of posts) {
  let state = '?';
  try {
    const r = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
      method: 'POST',
      headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
      body: JSON.stringify({ inspectionUrl: p.url, siteUrl: PROPERTY }),
    });
    if (!r.ok) {
      console.log(`  ??  ${p.slug}  (API ${r.status})`);
      continue;
    }
    const j = await r.json();
    const idx = j.inspectionResult?.indexStatusResult ?? {};
    state = idx.coverageState || idx.verdict || 'unknown';
    const ok = idx.verdict === 'PASS'; // PASS = la página está indexada
    if (ok) indexed++;
    else stuck.push(p);
    console.log(`  ${ok ? 'OK ' : '...'} ${p.slug}  —  ${state}`);
  } catch (e) {
    console.log(`  ??  ${p.slug}  (${e.message})`);
  }
  await new Promise((r) => setTimeout(r, 250)); // suave con la cuota
}

console.log(`\nIndexados: ${indexed}/${posts.length}  ·  sin indexar: ${stuck.length}`);

// Re-aviso IndexNow (seguro de repetir) para los que siguen sin indexar.
const key = process.env.INDEXNOW_KEY ?? '';
if (stuck.length && key) {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key,
      keyLocation: `${SITE_URL}/${key}.txt`,
      urlList: stuck.map((p) => p.url),
    }),
  });
  console.log(`IndexNow re-aviso (${stuck.length} URL): ${res.status} ${res.statusText}`);
} else if (stuck.length) {
  console.log('IndexNow re-aviso: skipped (INDEXNOW_KEY not set).');
}

/** OAuth JWT-bearer mínimo para una service account — sin dependencia googleapis. */
async function googleAccessToken(sa, scope) {
  const crypto = await import('node:crypto');
  const now = Math.floor(Date.now() / 1000);
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const claim = `${enc({ alg: 'RS256', typ: 'JWT' })}.${enc({
    iss: sa.client_email,
    scope,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })}`;
  const sig = crypto.createSign('RSA-SHA256').update(claim).sign(sa.private_key, 'base64url');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${claim}.${sig}`,
    }),
  });
  if (!res.ok) throw new Error(`token ${res.status}: ${await res.text()}`);
  return (await res.json()).access_token;
}
