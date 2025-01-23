'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.empresa}>
        <Link href="#">Estructuras Verticales e Ingenieros SAS</Link>
      </div>

      {/* Menú de navegación (Escritorio) */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
        <li>
          <Link href="#inicio" className={styles.navLink} onClick={closeMenu}>Inicio</Link>
        </li>
        <li>
          <Link href="#servicios" className={styles.navLink} onClick={closeMenu}>Servicios</Link>
        </li>
        <li>
          <Link href="#faq" className={styles.navLink} onClick={closeMenu}>Preguntas</Link>
        </li>
        <li>
          <Link href="#contacto" className={styles.navLink} onClick={closeMenu}>Contacto</Link>
        </li>
        
      </ul>
      

      {/* Menú Hamburguesa (Solo en Móvil) */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={menuOpen ? styles.open : ''}></div>
        <div className={menuOpen ? styles.open : ''}></div>
        <div className={menuOpen ? styles.open : ''}></div>
      </div>
      
    </nav>
  );
};

export default Navbar;










