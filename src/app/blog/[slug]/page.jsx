
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import styles from "./BlogPost.module.css";

// URL fija de la imagen
const imginterventoriaobras = "https://res.cloudinary.com/dby8lelja/image/upload/f_auto,q_auto,w_600/interventoria_y_supervision_de_obras_pkb2ck.webp";

// Función para obtener el contenido del blog de manera asíncrona
async function getBlogPost(slug) {
  const filePath = path.join(process.cwd(), "src/app/blog/posts", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  return matter(fileContent);
}

// ✅ CORREGIDO: generateMetadata ahora es una función async con `params` await
export async function generateMetadata({ params }) {
  if (!params) return {};

  const { slug } = await params; // 👈 Importante: await params
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
          url: imginterventoriaobras,
          width: 800,
          height: 533,
          alt: "Interventoría de Obras en Construcción",
        },
      ],
    },
  };
}

// ✅ CORREGIDO: Ahora `params` se obtiene con `await`
export default async function BlogPost({ params }) {
  if (!params) return notFound();

  const { slug } = await params; // 👈 Importante: await params
  if (!slug) return notFound();

  const post = await getBlogPost(slug);
  if (!post) return notFound();

  const { content, data } = post;

  return (
    <main className={styles.blogContainer}>
      <h1 className={styles.title}>{data.title}</h1>

      {/* Imagen fija */}
      <Image 
        src={imginterventoriaobras} 
        alt="Interventoría de Obras en Construcción" 
        width={800} 
        height={533} 
        priority 
        className={styles.contentimgen} 
      />

      <p className={styles.date}>{data.date}</p>

      <article className={styles.content}>
        <MDXRemote source={content} />
      </article>
    </main>
  );
}


// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { notFound } from "next/navigation";
// import { MDXRemote } from "next-mdx-remote/rsc";
// import Image from "next/image";
// import styles from "./BlogPost.module.css";

// // URL fija de la imagen
// const imginterventoriaobras = "https://res.cloudinary.com/dby8lelja/image/upload/v1739112965/interventoria_y_supervision_de_obras_pkb2ck.webp";

// // Función para obtener el contenido del blog de manera asíncrona
// async function getBlogPost(slug) {
//   const filePath = path.join(process.cwd(), "src/app/blog/posts", `${slug}.mdx`);

//   if (!fs.existsSync(filePath)) return null;

//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   return matter(fileContent);
// }

// // ✅ CORREGIDO: generateMetadata ahora es una función async con `params` await
// export async function generateMetadata({ params }) {
//   if (!params) return {};

//   const { slug } = await params; // 👈 Importante: await params
//   if (!slug) return {};

//   const post = await getBlogPost(slug);
//   if (!post) {
//     return {
//       title: "Artículo no encontrado",
//       description: "El artículo que buscas no está disponible.",
//     };
//   }

//   const { data } = post;

//   return {
//     title: data.title,
//     description: data.description,
//     openGraph: {
//       title: data.title,
//       description: data.description,
//       images: [
//         {
//           url: imginterventoriaobras,
//           width: 800,
//           height: 533,
//           alt: "Interventoría de Obras en Construcción",
//         },
//       ],
//     },
//   };
// }

// // ✅ CORREGIDO: Ahora `params` se obtiene con `await`
// export default async function BlogPost({ params }) {
//   if (!params) return notFound();

//   const { slug } = await params; // 👈 Importante: await params
//   if (!slug) return notFound();

//   const post = await getBlogPost(slug);
//   if (!post) return notFound();

//   const { content, data } = post;

//   return (
//     <main className={styles.blogContainer}>
//       <h1 className={styles.title}>{data.title}</h1>

//       {/* Imagen fija */}
//       <Image 
//         src={imginterventoriaobras} 
//         alt="Interventoría de Obras en Construcción" 
//         width={800} 
//         height={533} 
//         priority 
//         className={styles.contentimgen}
//       />

//       <p className={styles.date}>{data.date}</p>

//       <article className={styles.content}>
//         <MDXRemote source={content} />
//       </article>
//     </main>
//   );
// }
