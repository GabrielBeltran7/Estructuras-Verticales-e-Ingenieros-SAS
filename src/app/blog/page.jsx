"use client"; // ✅ Hace que este componente sea cliente

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Blog.module.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [sidePosts, setSidePosts] = useState([]);

  // ✅ Cargar los posts desde la API del servidor
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/blog/api/posts"); // 🔥 Hacemos la petición
        const data = await response.json();
        setPosts(data);

        // ✅ Seleccionar un post aleatorio para el destacado
        if (data.length > 0) {
          setFeaturedPost(data[Math.floor(Math.random() * data.length)]);
        }

        // ✅ Seleccionar 3 posts aleatorios para la barra lateral
        if (data.length > 3) {
          const shuffled = [...data].sort(() => 0.5 - Math.random());
          setSidePosts(shuffled.slice(0, 3));
        } else {
          setSidePosts(data);
        }
      } catch (error) {
        console.error("Error cargando posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Nuestro Blog</h1>

      {/* ✅ Estructura en dos columnas (adaptable) */}
      <div className={styles.blogLayout}>
        {/* 📌 Columna principal */}
        <div className={styles.mainContent}>
          {featuredPost && (
            <div className={styles.featuredPost}>
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                width={1200}
                height={500}
                className={styles.featuredImage}
                priority
              />
              <div className={styles.featuredContent}>
                <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredLink}>
                  {featuredPost.title}
                </Link>
                
              </div>
            </div>
          )}

          <ul className={styles.postGrid}>
            {posts.map((post) => (
              <li key={post.slug} className={styles.postItem}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={350}
                  height={250}
                  className={styles.postImage}
                />
                <div className={styles.postContent}>
                  <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                    {post.title}
                  </Link>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Leer más →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 📌 Columna lateral con 3 posts */}
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Posts Recientes</h2>
          <ul className={styles.sidebarList}>
            {sidePosts.map((post) => (
              <li key={post.slug} className={styles.sidebarItem}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={100}
                  height={80}
                  className={styles.sidebarImage}
                />
                <div className={styles.sidebarContent}>
                  <Link href={`/blog/${post.slug}`} className={styles.sidebarLink}>
                    {post.title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
