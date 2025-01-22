// src/components/Footer.js
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h3 className={styles.heading}>Acerca de</h3>
          <p>
            Somos una empresa dedicada a proporcionar soluciones tecnológicas innovadoras y eficientes.
          </p>
        </div>
        <div className={styles.links}>
          <h3 className={styles.heading}>Enlaces</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}><a className={styles.link} href="#">Inicio</a></li>
            <li className={styles.listItem}><a className={styles.link} href="#">Servicios</a></li>
            <li className={styles.listItem}><a className={styles.link} href="#">Contacto</a></li>
         
          </ul>
        </div>
        <div className={styles.socials}>
          <h3 className={styles.heading}>Redes Sociales</h3>
          <ul className={styles.socialIcons}>
            <li><a href="#" aria-label="Facebook"><FaFacebookF /></a></li>
            <li><a href="#" aria-label="Twitter"><FaTwitter /></a></li>
            <li><a href="#" aria-label="Instagram"><FaInstagram /></a></li>
            <li><a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copy}>
        <p>&copy; 2025 Estructuras Verticales e Ingenieros SAS. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;


