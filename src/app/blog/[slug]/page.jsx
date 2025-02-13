
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

// ✅ Optimización de generateMetadata
export async function generateMetadata({ params }) {
  if (!params) return {};

  const { slug } = await params;
  if (!slug) return {};

  const post = await getBlogPost(slug);
  if (!post) {
    return {
      title: "Artículo no encontrado",
      description: "El artículo que buscas no está disponible.",
    };
  }

  const { data } = post;

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: data.image,
          width: 800,
          height: 533,
          alt: data.title,
        },
      ],
    },
  };
}

// ✅ BlogPost optimizado con CustomLink
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
        <h1 className={styles.title}>{data.title}</h1>

        {/* ✅ Imagen del artículo */}
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

        {/* ✅ Renderizado del contenido MDX con CustomLink */}
        <article className={styles.content}>
          <MDXRemote source={content} components={{ a: CustomLink }} />
        </article>
      </main>
      <ContactButtons />
    </>
  );
}
