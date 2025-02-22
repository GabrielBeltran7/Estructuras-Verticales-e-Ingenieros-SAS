"use server";
import Link from "next/link";
import Image from "next/image";
import styles from "./Blog.module.css";
import Navbar from "../Components/Navbar/Navbar";
import ContactButtons from "../Components/ContactButtons/ContactButtons";
import { getPosts } from "./lib/posts";

export default async function Blog({ searchParams }) {
  // Asegurarse de que `searchParams` se resuelva correctamente
  const resolvedParams = await searchParams; 

  const posts = await getPosts();

  // Asegurar valores predeterminados para paginación
  const postsPerPage = 8;
  const currentPage = resolvedParams?.page ? parseInt(resolvedParams.page, 10) : 1;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const paginatedPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.blogContent}>
          <h1 className={styles.title}>Nuestro Blog</h1>

          {/* 📌 Imagen destacada */}
          {posts.length > 0 && (
            <div className={styles.featuredPost}>
              <Image
                src={posts[0].image}
                alt={posts[0].title}
                width={1200}
                height={500}
                className={styles.featuredImage}
                priority
              />
              <div className={styles.featuredContent}>
                <Link href={`/blog/${posts[0].slug}`} className={styles.featuredLink}>
                  {posts[0].title}
                </Link>
              </div>
            </div>
          )}

          {/* 📌 PostGrid y Sidebar */}
          <div className={styles.blogLayout}>
            <ul className={styles.postGrid}>
              {paginatedPosts.map((post) => (
                <li key={post.slug} className={styles.postItem}>
                  <Image src={post.image} alt={post.title} width={400} height={250} className={styles.postImage} />
                  <div className={styles.postContent}>
                    <Link href={`/blog/${post.slug}`} className={styles.postLink}>{post.title}</Link>
                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>Leer más →</Link>
                  </div>
                </li>
              ))}
            </ul>

            {/* 📌 Sidebar */}
            <aside className={styles.sidebar}>
              <h2 className={styles.sidebarTitle}>Posts Recientes</h2>
              <ul className={styles.sidebarList}>
                {posts.slice(0, 12).map((post) => (
                  <li key={post.slug} className={styles.sidebarItem}>
                    <Image src={post.image} alt={post.title} width={80} height={60} className={styles.sidebarImage} />
                    <div className={styles.sidebarContent}>
                      <Link href={`/blog/${post.slug}`} className={styles.sidebarLink}>{post.title}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>

        {/* 📌 Paginación al final */}
        <div className={styles.pagination}>
          {currentPage > 1 && (
            <Link href={`?page=${currentPage - 1}`} className={styles.pageButton}>
              ← Anterior
            </Link>
          )}
          <span>Página {currentPage} de {totalPages}</span>
          {currentPage < totalPages && (
            <Link href={`?page=${currentPage + 1}`} className={styles.pageButton}>
              Siguiente →
            </Link>
          )}
        </div>
      </main>
      <ContactButtons />
    </>
  );
}
