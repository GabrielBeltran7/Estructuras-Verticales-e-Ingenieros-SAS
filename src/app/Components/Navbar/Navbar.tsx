"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.css";
import servicesData from "@/app/data/services.json";
import BarraAzul from "../../Components/BarraAzul/BarraAzul"

type Servicio = {
  id: string;
  title: string;
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setServicios(servicesData);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setSubMenuOpen(false);
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
    <>
    <nav className={styles.navbar}>
      <div className={styles.empresa}>
        <Link href="/" className={styles.empresa}>
          Estructuras Verticales e Ingenieros SAS
        </Link>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
        <li>
          <button className={styles.navLink} onClick={() => handleNavigation("#inicio")}>
            Inicio
          </button>
        </li>

        {/* Sección de Servicios con Submenú */}
        <li className={`${styles.dropdown} ${subMenuOpen ? styles.open : ""}`}>
          <button className={styles.navLink} onClick={toggleSubMenu}>
            Servicios ▾
          </button>
          {subMenuOpen && (
            <ul className={styles.dropdownMenu}>
              {servicios.map((servicio) => (
                <li key={servicio.id}>
                  <Link href={`/servicios/${servicio.id}`} className={styles.dropdownLink}>
                    {servicio.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
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
            onClick={() =>
              window.open("https://sistema-estructuras-verticalese-ingenierossas.vercel.app/", "_blank", "noopener,noreferrer")
            }
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
    <BarraAzul/>
    </>
  );
};

export default Navbar;
