import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogPost.module.css";
import ContactButtons from "@/app/Components/ContactButtons/ContactButtons";
import Navbar from "@/app/Components/Navbar/Navbar";

// Función para obtener el contenido del blog de manera asíncrona
async function getBlogPost(slug) {
  const filePath = path.join(process.cwd(), "src/app/blog/posts", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  return matter(fileContent);
}

// ✅ Componente personalizado para enlaces
// Un enlace absoluto al propio dominio (https://www.estructurasverticales.com/...)
// se trata como interno: usa <Link> (sin recarga completa ni pestaña nueva).
const OWN_DOMAIN = /^https?:\/\/(www\.)?estructurasverticales\.com/;

const CustomLink = (props) => {
  const href = props.href || "";
  const isInternal = href.startsWith("/") || href.startsWith("#") || OWN_DOMAIN.test(href);

  if (isInternal) {
    const relativeHref = href.replace(OWN_DOMAIN, "") || "/";
    return <Link href={relativeHref}>{props.children}</Link>;
  }

  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};

// ✅ Componente personalizado para imágenes dentro del contenido MDX
const CustomImage = (props) => {
  return <img {...props} className={styles.centeredImage} />;
};

// ✅ Genera las rutas de todos los posts en build time (SSG) en vez de
// renderizarlas bajo demanda en cada visita.
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => ({ slug: file.replace(".mdx", "") }));
}

// ✅ generateMetadata optimizado con SEO completo
export async function generateMetadata({ params }) {
  if (!params) return {};

  const { slug } = await params;
  if (!slug) return {};

  const post = await getBlogPost(slug);
  if (!post) {
    return {
      title: "Artículo no encontrado",
      description: "El artículo que buscas no está disponible.",
      robots: "noindex, nofollow",
    };
  }

  const { data } = post;
  const BASE_URL = "https://www.estructurasverticales.com";
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords || [],
    robots: "index, follow",
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${BASE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: data.date,
      modifiedTime: data.dateModified || data.date,
      authors: [data.author || "Estructuras Verticales e Ingenieros SAS"],
      images: [
        {
          url: data.image,
          width: 800,
          height: 533,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.image],
    },
  };
}

// ── Helpers de SEO (aditivos, no cambian el render del contenido) ───────────

function readingTime(md) {
  const words = String(md).replace(/[#>*_`~\-|]/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function stripMd(s) {
  return String(s)
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`>#~]+/g, "")
    .replace(/\s+/g, " ")
    .replace(/^[^\p{L}¿"'(]+/u, "")
    .trim();
}

// Extrae los pares pregunta/respuesta de la sección "## Preguntas Frecuentes".
// Soporta "### ¿Pregunta?", "**¿Pregunta?**" y "- **[emoji] ¿Pregunta?**".
// Si algo falla o no reconoce el formato, devuelve [] (sin romper nada).
function parseFaq(md) {
  try {
    // Sin flag `m`: `$` = fin real del texto (con `m`, la `*?` pararía en el 1er salto de línea).
    const m = String(md).match(
      /(?:^|\n)#{2,3}[ \t]*Preguntas Frecuentes[^\n]*\n([\s\S]*?)(?=\n---[ \t]*\n|\n#{2}[ \t]|$)/i
    );
    if (!m) return [];
    const block = m[1];
    const collect = (re) => {
      const hits = [];
      let x;
      while ((x = re.exec(block))) hits.push({ q: x[1], at: x.index, len: x[0].length });
      const out = [];
      for (let i = 0; i < hits.length; i++) {
        const start = hits[i].at + hits[i].len;
        const end = i + 1 < hits.length ? hits[i + 1].at : block.length;
        const q = stripMd(hits[i].q);
        const a = stripMd(block.slice(start, end));
        if (q && a && a.length > 10) out.push({ q, a });
      }
      return out;
    };
    const byH = collect(/^#{3,4}[ \t]+(.+?)[ \t]*$/gm);
    if (byH.length >= 2) return byH;
    return collect(/^[ \t]*(?:[-*][ \t]+)?\*\*[ \t]*[^\p{L}\d\n]*?(¿[^*\n]+\?)[^*\n]*\*\*/gmu);
  } catch {
    return [];
  }
}

// ✅ BlogPost optimizado con imágenes centradas en MDX
export default async function BlogPost({ params }) {
  if (!params) return notFound();

  const { slug } = await params;
  if (!slug) return notFound();

  const post = await getBlogPost(slug);
  if (!post) return notFound();

  const { content, data } = post;

  // ✅ Nueva forma de renderizar MDX en RSC para Next.js 15/16
  const { content: mdxContent } = await compileMDX({
    source: content,
    components: {
      a: CustomLink,
      img: CustomImage
    },
    options: { parseFrontmatter: true }
  });

  const BASE_URL = "https://www.estructurasverticales.com";
  const dateModified = data.dateModified || data.date;
  const readMins = readingTime(content);
  const faq =
    Array.isArray(data.faq) && data.faq.length
      ? data.faq
          .map((x) => ({ q: stripMd(x.q ?? x.question ?? ""), a: stripMd(x.a ?? x.answer ?? "") }))
          .filter((x) => x.q && x.a)
      : parseFaq(content);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    image: data.image ? [data.image] : undefined,
    datePublished: data.date,
    dateModified,
    author: {
      "@type": "Organization",
      name: data.author || "Estructuras Verticales e Ingenieros SAS",
    },
    publisher: {
      "@type": "Organization",
      name: "Estructuras Verticales e Ingenieros SAS",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: data.title, item: `${BASE_URL}/blog/${slug}` },
    ],
  };

  const faqJsonLd =
    faq.length >= 2
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }
      : null;

  const jsonLd = [articleJsonLd, breadcrumbJsonLd, ...(faqJsonLd ? [faqJsonLd] : [])];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className={styles.blogContainer}>

        {/* ✅ Imagen principal del artículo */}
        {data.image && (
          <Image
            src={data.image}
            alt={data.title}
            width={900}
            height={650}
            priority={true}
            loading="eager"
            fetchPriority="high"
            className={styles.contentimgen}
          />
        )}

        <p className={styles.date}>
          {data.date} · {readMins} min de lectura
          {dateModified && dateModified !== data.date ? ` · Actualizado ${dateModified}` : ""}
        </p>
        {data.author && <p className={styles.author}>Por {data.author}</p>}

        {/* ✅ Renderizado del contenido MDX pre-compilado */}
        <article className={styles.content}>
          {mdxContent}
        </article>
      </main>
      <ContactButtons />
    </>
  );
}
