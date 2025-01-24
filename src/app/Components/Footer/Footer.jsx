// src/components/Footer.js
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.about}>
                    <h3 className={styles.heading}>Ubicacion</h3>

                    <p className={styles.contactInfo}>Direccion: KR 7 B BIS # 126 - 36</p>
                    <p className={styles.contactInfo}>Bogota, Colombia</p>
                    <p className={styles.contactInfo}>Teléfono: +57 3132581599</p>
                    <p className={styles.contactInfo}>Email: estructurasverticalessas@gmail.com</p>

                </div>
                <div className={styles.about}>
                    <h3 className={styles.heading}>Sucursal</h3>

                    <p className={styles.contactInfo}>Direccion: Kr 12 # 172- 60 barrio el pais</p>
                    <p className={styles.contactInfo}>Ciudad: Ibague, Tolima, Colombia</p>
                    <p className={styles.contactInfo}>Teléfono: +57 3132581599</p>
                    <p className={styles.contactInfo}>Email: estructurasverticalessas@gmail.com</p>

                </div>
                <div className={styles.links}>
                    <h3 className={styles.heading}>Enlaces</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><a className={styles.link} href="#">Inicio</a></li>
                        <li className={styles.listItem}><a className={styles.link} href="#servicios">Servicios</a></li>
                        <li className={styles.listItem}><a className={styles.link} href="#contacto">Contacto</a></li>

                    </ul>
                </div>
                <div className={styles.socials}>
                    <h3 className={styles.heading}>Redes Sociales</h3>
                    <ul className={styles.socialIcons}>
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
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


