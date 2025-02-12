"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    closeMenu();

    if (href.startsWith("#")) {
      if (pathname !== "/") {
        router.push(`/${href}`);
      } else {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      router.push(href);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.empresa}>
        <Link href="/" className={styles.empresa}>Estructuras Verticales e Ingenieros SAS</Link>
      </div>
      
      <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
        <li>
          <button className={styles.navLink} onClick={() => handleNavigation("#inicio")}>
            Inicio
          </button>
        </li>
        <li>
          <button className={styles.navLink} onClick={() => handleNavigation("#servicios")}>
            Servicios
          </button>
        </li>
        <li>
          <button className={styles.navLink} onClick={() => handleNavigation("#faq")}>
            Preguntas
          </button>
        </li>
        <li>
          <button className={styles.navLink} onClick={() => handleNavigation("#contacto")}>
            Contacto
          </button>
        </li>
        <li>
          <button className={styles.navLink} onClick={() => handleNavigation("/blog")}>
            Blog
          </button>
        </li>
        <li>
        <button
  className={styles.navLink}
  onClick={() => window.open("https://sistema-estructuras-verticalese-ingenierossas.vercel.app/", "_blank", "noopener,noreferrer")}
>
  Acceso Corporativo
</button>

        </li>
      </ul>
      
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={menuOpen ? styles.open : ""}></div>
        <div className={menuOpen ? styles.open : ""}></div>
        <div className={menuOpen ? styles.open : ""}></div>
      </div>
    </nav>
  );
};

export default Navbar;
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import styles from "./Navbar.module.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   const handleNavigation = (href: string) => {
//     closeMenu(); // Cierra el menú al hacer clic en un enlace

//     if (href.startsWith("#")) {
//       // Si es una sección dentro de la misma página
//       if (pathname !== "/") {
//         router.push(`/${href}`); // Redirige a la página principal antes de hacer scroll
//       } else {
//         const targetElement = document.querySelector(href);
//         if (targetElement) {
//           targetElement.scrollIntoView({ behavior: "smooth" });
//         }
//       }
//     } else {
//       // Si es una ruta normal, cambia de página
//       router.push(href);
//     }
//   };

//   return (
//     <nav className={styles.navbar}>
//       {/* Logo */}
//       <div className={styles.empresa}>
//         <Link href="/" className={styles.navLink}>Estructuras Verticales e Ingenieros SAS</Link>
//       </div>

//       {/* Menú de navegación (Escritorio) */}
//       <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
//         <li>
//           <button className={styles.navLink} onClick={() => handleNavigation("#inicio")}>
//             Inicio
//           </button>
//         </li>
//         <li>
//           <button className={styles.navLink} onClick={() => handleNavigation("#servicios")}>
//             Servicios
//           </button>
//         </li>
//         <li>
//           <button className={styles.navLink} onClick={() => handleNavigation("#faq")}>
//             Preguntas
//           </button>
//         </li>
//         <li>
//           <button className={styles.navLink} onClick={() => handleNavigation("#contacto")}>
//             Contacto
//           </button>
//         </li>
//         <li>
//           <button className={styles.navLink} onClick={() => handleNavigation("/blog")}>
//             Blog
//           </button>
//         </li>
//         <li>
//           <a
//             href="https://sistema-estructuras-verticalese-ingenierossas.vercel.app/"
//             className={styles.navLink}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Acceso Corporativo
//           </a>
//         </li>
//       </ul>

//       {/* Menú Hamburguesa (Móvil) */}
//       <div className={styles.hamburger} onClick={toggleMenu}>
//         <div className={menuOpen ? styles.open : ""}></div>
//         <div className={menuOpen ? styles.open : ""}></div>
//         <div className={menuOpen ? styles.open : ""}></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

