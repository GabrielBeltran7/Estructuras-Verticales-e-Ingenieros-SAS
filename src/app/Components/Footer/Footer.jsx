import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.about}>
                    <h3 className={styles.heading}>Ubicación</h3>
                    <p className={styles.contactInfo}>Dirección: KR 7 B BIS # 126 - 36</p>
                    <p className={styles.contactInfo}>Bogotá, Colombia</p>
                    <p className={styles.contactInfo}>Teléfono: +57 3132581599</p>
                    <p className={styles.contactInfo}>Email: estructurasverticalessas@gmail.com</p>
                </div>

                <div className={styles.about}>
                    <h3 className={styles.heading}>Sucursal</h3>
                    <p className={styles.contactInfo}>Dirección: Kr 12 # 172-60, Barrio El País</p>
                    <p className={styles.contactInfo}>Ciudad: Ibagué, Tolima, Colombia</p>
                    <p className={styles.contactInfo}>Teléfono: +57 3132581599</p>
                    <p className={styles.contactInfo}>Email: estructurasverticalessas@gmail.com</p>
                </div>

                <div className={styles.links}>
                    <h3 className={styles.heading}>Enlaces</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><a className={styles.link} href="#">Inicio</a></li>
                        <li className={styles.listItem}><a className={styles.link} href="#servicios">Servicios</a></li>
                        <li className={styles.listItem}><a className={styles.link} href="#contacto">Contacto</a></li>
                        <li className={styles.listItem}><a className={styles.link} href="/blog">Blog</a></li>
                    </ul>
                </div>

                <div className={styles.socials}>
                    <h3 className={styles.heading}>Redes Sociales</h3>
                    <ul className={styles.socialIcons}>
                        <a href="https://www.facebook.com/profile.php?id=61573647493154" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://x.com/EstructurasVert" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.instagram.com/estructurasverticaleseingenier/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/company/estructuras-verticales-e-ingenieros-sas/?viewAsMember=true" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="https://www.youtube.com/@EstructurasVerticaleseIngenier" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        <a href="https://www.tiktok.com/@estructurasverticalesein" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
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
