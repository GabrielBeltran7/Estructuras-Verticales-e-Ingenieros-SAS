#!/usr/bin/env node
/**
 * Avisa a los buscadores después de un deploy.
 *   - IndexNow (Bing, Yandex, Seznam, Naver…): si INDEXNOW_KEY está definida.
 *   - Google: reenvía el sitemap por la Search Console API, si hay
 *     GOOGLE_SERVICE_ACCOUNT_JSON. Si no, se salta (Google lo descubre por el
 *     sitemap igual).
 *
 * Sin dependencias: el slug sale del nombre del archivo y solo miramos si el
 * frontmatter trae `noindex: true` / `draft: true`.
 *
 *   node scripts/blog/ping.mjs <url> [<url> …]
 *   node scripts/blog/ping.mjs --since HEAD~1   # URLs de posts tocados en el último commit
 */
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const POSTS_DIR = resolve(process.cwd(), 'src/app/blog/posts');
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.estructurasverticales.com').replace(/\/$/, '');

const args = process.argv.slice(2);
let urls = args.filter((a) => a.startsWith('http'));

const urlFor = (file) => `${SITE_URL}/blog/${file.replace(/\.mdx?$/, '')}`;
const isIndexable = (raw) => {
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const head = fm ? fm[1] : '';
  return !/^\s*noindex:\s*true\s*$/im.test(head) && !/^\s*draft:\s*true\s*$/im.test(head);
};

const sinceIdx = args.indexOf('--since');
if (sinceIdx !== -1) {
  const ref = args[sinceIdx + 1] ?? 'HEAD~1';
  const changed = execFileSync('git', ['diff', '--name-only', ref, 'HEAD'], { encoding: 'utf8' })
    .split('\n')
    .filter((f) => f.includes('src/app/blog/posts/') && f.endsWith('.mdx'));
  for (const f of changed) {
    try {
      if (isIndexable(readFileSync(resolve(process.cwd(), f), 'utf8'))) urls.push(urlFor(f.split('/').pop()));
    } catch {
      /* archivo borrado en el diff */
    }
  }
}

if (urls.length === 0) {
  for (const name of readdirSync(POSTS_DIR)) {
    if (!name.endsWith('.mdx')) continue;
    if (isIndexable(readFileSync(resolve(POSTS_DIR, name), 'utf8'))) urls.push(urlFor(name));
  }
}
urls = [...new Set(urls)];
console.log(`${urls.length} URL(s) to submit.`);

// ── IndexNow ──
const key = process.env.INDEXNOW_KEY ?? '';
if (key) {
  const host = new URL(SITE_URL).host;
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation: `${SITE_URL}/${key}.txt`, urlList: urls }),
  });
  console.log(`IndexNow: ${res.status} ${res.statusText}`);
  if (res.status >= 400) console.error(await res.text());
} else {
  console.log('IndexNow: skipped (INDEXNOW_KEY not set).');
}

// ── Google Search Console (opcional) ──
const saRaw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON ?? '';
if (saRaw) {
  try {
    const sa = JSON.parse(saRaw.trim().startsWith('{') ? saRaw : Buffer.from(saRaw, 'base64').toString());
    const token = await googleAccessToken(sa, 'https://www.googleapis.com/auth/webmasters');
    // La propiedad de Search Console con los datos es la de DOMINIO
    // (sc-domain:estructurasverticales.com), no la de prefijo de URL.
    // Override con GSC_PROPERTY si algún día cambia.
    const property = process.env.GSC_PROPERTY || `sc-domain:${new URL(SITE_URL).host.replace(/^www\./, '')}`;
    const siteUrl = encodeURIComponent(property);
    const feed = encodeURIComponent(`${SITE_URL}/sitemap.xml`);
    const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${siteUrl}/sitemaps/${feed}`, {
      method: 'PUT',
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(`Google sitemap resubmit (${property}): ${r.status}`);
    if (r.status >= 400) console.error(await r.text());

    // ── Indexing API: pide indexación de cada URL nueva/cambiada ──
    // Requiere "Indexing API" habilitada en el proyecto GCP y la service
    // account como propietaria de la propiedad. `--since HEAD~1` ya limita
    // esto a los posts tocados en el commit, así que no se re-pide lo viejo.
    try {
      const idxToken = await googleAccessToken(sa, 'https://www.googleapis.com/auth/indexing');
      let ok = 0;
      for (const url of urls) {
        const ir = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
          method: 'POST',
          headers: { authorization: `Bearer ${idxToken}`, 'content-type': 'application/json' },
          body: JSON.stringify({ url, type: 'URL_UPDATED' }),
        });
        if (ir.ok) ok++;
        else console.error(`Indexing API ${ir.status} for ${url}: ${(await ir.text()).slice(0, 200)}`);
      }
      console.log(`Indexing API: ${ok}/${urls.length} URL(s) notificadas`);
    } catch (e) {
      console.error(`Indexing API step failed: ${e.message}`);
    }
  } catch (e) {
    console.error(`Google Search Console step failed: ${e.message}`);
  }
} else {
  console.log('Google Search Console: skipped (GOOGLE_SERVICE_ACCOUNT_JSON not set).');
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
