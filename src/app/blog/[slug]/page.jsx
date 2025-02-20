import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
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
const CustomLink = (props) => {
  const isExternal = props.href?.startsWith("http");

  return isExternal ? (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link href={props.href}>{props.children}</Link>
  );
};

// ✅ Componente personalizado para imágenes dentro del contenido MDX
const CustomImage = (props) => {
  return <img {...props} className={styles.centeredImage} />;
};

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
  console.log("SEO Metadata:", data); // 🔥 Verificar en la consola del servidor
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords || [],
    robots: "index, follow",
    alternates: {
      canonical: `https://estructurasverticales.com/blog/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://estructurasverticales.com/blog/${slug}`,
      type: "article",
      publishedTime: data.date,
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

// ✅ BlogPost optimizado con imágenes centradas en MDX
export default async function BlogPost({ params }) {
  if (!params) return notFound();

  const { slug } = await params;
  if (!slug) return notFound();

  const post = await getBlogPost(slug);
  if (!post) return notFound();

  const { content, data } = post;

  return (
    <>
      <Navbar />
      <main className={styles.blogContainer}>
        <h2 className={styles.title}>{data.title}</h2>

        {/* ✅ Imagen principal del artículo */}
        {data.image && (
          <Image 
            src={data.image} 
            alt={data.title}
            width={600} 
            height={350} 
            priority={true}  
            loading="eager"  
            fetchPriority="high"  
            className={styles.contentimgen} 
          />     
        )}

        <p className={styles.date}>{data.date}</p>

        {/* ✅ Renderizado del contenido MDX con CustomLink y CustomImage */}
        <article className={styles.content}>
          <MDXRemote source={content} components={{ a: CustomLink, img: CustomImage }} />
        </article>
      </main>
      <ContactButtons />
    </>
  );
}
