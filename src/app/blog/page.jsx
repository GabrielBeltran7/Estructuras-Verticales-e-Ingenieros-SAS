

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Blog.module.css";
import Navbar from "../Components/Navbar/Navbar";
import ContactButtons from "../Components/ContactButtons/ContactButtons";


export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [sidePosts, setSidePosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/blog/api/posts");
        const data = await response.json();
        setPosts(data);

        if (data.length > 0) {
          setFeaturedPost(data[Math.floor(Math.random() * data.length)]);
        }

        if (data.length > 3) {
          const shuffled = [...data].sort(() => 0.5 - Math.random());
          setSidePosts(shuffled.slice(0, 15));
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
    <>
  <Navbar/>
 
 <main className={styles.container}>
      <h1 className={styles.title}>Nuestro Blog</h1>

      {/* 📌 Imagen destacada ocupa todo el ancho */}
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

      {/* 📌 PostGrid (2/3) y Sidebar (1/de3) debajo */}
      <div className={styles.blogLayout}>
        {/* 📌 PostGrid a la izquierda */}
        <ul className={styles.postGrid}>
          {posts.slice(0, 15).map((post) => (
            <li key={post.slug} className={styles.postItem}>
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className={styles.postImage}
              />
              <div className={styles.postContent}>
                <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                  {post.title}
                </Link>
                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                <div></div>
                Leer más →
                </Link> 
                  
                
              </div>
            </li>
          ))}
        </ul>

        {/* 📌 Sidebar a la derecha */}
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Posts Recientes</h2>
          <ul className={styles.sidebarList}>
            {sidePosts.map((post) => (
              <li key={post.slug} className={styles.sidebarItem}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={80}
                  height={60}
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
    

    <ContactButtons/>

 


    </>
    
  );
  
}



// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import styles from "./Blog.module.css";
// import Navbar from "../Components/Navbar/Navbar";
// import Footer from "../Components/Footer/Footer";

// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//   const [featuredPost, setFeaturedPost] = useState(null);
//   const [sidePosts, setSidePosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("/blog/api/posts");
//         const data = await response.json();
//         setPosts(data);

//         if (data.length > 0) {
//           setFeaturedPost(data[Math.floor(Math.random() * data.length)]);
//         }

//         if (data.length > 3) {
//           const shuffled = [...data].sort(() => 0.5 - Math.random());
//           setSidePosts(shuffled.slice(0, 9));
//         } else {
//           setSidePosts(data);
//         }
//       } catch (error) {
//         console.error("Error cargando posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <>
//     <Navbar/>

//     <main className={styles.container}>
//       <h1 className={styles.title}>Nuestro Blog</h1>

//       {/* 📌 Imagen destacada ocupa todo el ancho */}
//       {featuredPost && (
//         <div className={styles.featuredPost}>
//           <Image
//             src={featuredPost.image}
//             alt={featuredPost.title}
//             width={1200}
//             height={500}
//             className={styles.featuredImage}
//             priority
//           />
//           <div className={styles.featuredContent}>
//             <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredLink}>
//               {featuredPost.title}
//             </Link>
//           </div>
//         </div>
//       )}

//       {/* 📌 PostGrid (2/3) y Sidebar (1/3) debajo */}
//       <div className={styles.blogLayout}>
//         {/* 📌 PostGrid a la izquierda */}
//         <ul className={styles.postGrid}>
//           {posts.slice(0, 6).map((post) => (
//             <li key={post.slug} className={styles.postItem}>
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 width={400}
//                 height={250}
//                 className={styles.postImage}
//               />
//               <div className={styles.postContent}>
//                 <Link href={`/blog/${post.slug}`} className={styles.postLink}>
//                   {post.title}
//                 </Link>
//                 <Link href={`/blog/${post.slug}`} className={styles.readMore}>
//                 <div></div>
//                 Leer más →
//                 </Link>
                
                
                  
                
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* 📌 Sidebar a la derecha */}
//         <aside className={styles.sidebar}>
//           <h2 className={styles.sidebarTitle}>Posts Recientes</h2>
//           <ul className={styles.sidebarList}>
//             {sidePosts.map((post) => (
//               <li key={post.slug} className={styles.sidebarItem}>
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   width={80}
//                   height={60}
//                   className={styles.sidebarImage}
//                 />
//                 <div className={styles.sidebarContent}>
//                   <Link href={`/blog/${post.slug}`} className={styles.sidebarLink}>
//                     {post.title}
//                   </Link>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </aside>
//       </div>
//       <Footer/>
//     </main>
    
//     </>
    
//   );
  
// }

