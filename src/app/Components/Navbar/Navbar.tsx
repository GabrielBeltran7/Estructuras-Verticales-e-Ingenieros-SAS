"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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

  // Para enlaces a secciones del home: si ya estamos en "/", hacemos scroll suave;
  // si no, dejamos que <Link> navegue a "/#seccion" y el navegador salta al ancla.
  const handleHashNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    closeMenu();
    if (pathname === "/") {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
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
          <Link href="/" className={styles.navLink} onClick={closeMenu}>
            Inicio
          </Link>
        </li>

        {/* Sección de Servicios con Submenú */}
        <li className={`${styles.dropdown} ${subMenuOpen ? styles.open : ""}`}>
          <button
            className={styles.navLink}
            onClick={toggleSubMenu}
            aria-expanded={subMenuOpen}
          >
            Servicios ▾
          </button>
          {subMenuOpen && (
            <ul className={styles.dropdownMenu}>
              {servicios.map((servicio) => (
                <li key={servicio.id}>
                  <Link href={`/servicios/${servicio.id}`} className={styles.dropdownLink} onClick={closeMenu}>
                    {servicio.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <Link
            href="/#faq"
            className={styles.navLink}
            onClick={(e) => handleHashNav(e, "#faq")}
          >
            Preguntas
          </Link>
        </li>
        <li>
          <Link
            href="/#contacto"
            className={styles.navLink}
            onClick={(e) => handleHashNav(e, "#contacto")}
          >
            Contacto
          </Link>
        </li>
        <li>
          <Link href="/blog" className={styles.navLink} onClick={closeMenu}>
            Blog
          </Link>
        </li>
        <li>
          <a
            href="https://sistema-estructuras-verticalese-ingenierossas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
            onClick={closeMenu}
          >
            Acceso Corporativo
          </a>
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
