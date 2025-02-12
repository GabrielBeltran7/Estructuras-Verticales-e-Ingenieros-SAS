import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import styles from "./Blog.module.css";

export default function Blog() {
  const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((fileName) => {
    const fileContent = fs.readFileSync(path.join(postsDirectory, fileName), "utf-8");
    const { data } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      slug: fileName.replace(".mdx", ""),
      image: data.image || "/placeholder.jpg", // ✅ Imagen por defecto si no hay imagen
    };
  });

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.slug} className={styles.postItem}>
            <Image
              src={post.image}
              alt={post.title}
              width={150}
              height={100}
              className={styles.postImage}
            />
            <div className={styles.postContent}>
              <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                {post.title}
              </Link>
              <span className={styles.postDate}>{post.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
