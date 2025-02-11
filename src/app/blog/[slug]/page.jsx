
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./BlogPost.module.css"; // Importa los estilos

export async function generateMetadata({ params }) {
  const filePath = path.join(process.cwd(), "src/app/blog/posts", `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) return {};

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
    },
  };
}

export default function BlogPost({ params }) {
  const filePath = path.join(process.cwd(), "src/app/blog/posts", `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <main className={styles.blogContainer}>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.date}>{data.date}</p>
      <article className={styles.content}>
        <MDXRemote source={content} />
      </article>
    </main>
  );
}





