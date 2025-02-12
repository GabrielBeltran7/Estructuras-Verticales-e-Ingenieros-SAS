import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
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

// ✅ generateMetadata optimizado (sin cambios en lógica)
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
          url: data.image, // ✅ 
          width: 800,
          height: 533,
          alt: data.title,
        },
      ],
    },
  };
}

// ✅ BlogPost optimizado (sin cambiar la lógica de carga de datos)
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

      {/* ✅ Ahora la imagen viene del MDX */}
      {data.image && (
        <Image 
          src={data.image} 
          alt={data.title} 
          width={600} 
          height={350} 
          priority={true}  // ✅ Carga la imagen antes que otras
          loading="eager"  // ✅ No espera a que cargue el resto del contenido
          fetchPriority="high"  // ✅ Corregido: la P en mayúscula
          className={styles.contentimgen} 
        />     
      )}

      <p className={styles.date}>{data.date}</p>

      <article className={styles.content}>
        <MDXRemote source={content} />
      </article>
    </main>
    <ContactButtons/>
    </>
  );
}
