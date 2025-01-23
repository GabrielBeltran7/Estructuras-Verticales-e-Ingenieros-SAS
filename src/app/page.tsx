"use client";
import styles from "./page.module.css";

import Navbar from "./Components/Navbar/Navbar";
import ServicesCard from "./Components/Card/Servicescard";
import FaqSection from "./Components/FAQSection/FaqSection";
import ContactButtons from "./Components/ContactButtons/ContactButtons";
import TextAndImageSection from './Components/TextAndImageSection/TextAndImageSection';
import Footer from "./Components/Footer/Footer"
import EncabezadoServicios from "./Components/EncabezadoServicios/EncabezadoServicios"
export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.barraazul}></div>
        <EncabezadoServicios />
        <section id="servicios" className={styles.services}>
          <h2>Nuestros Servicios</h2>
        </section>
        <ServicesCard />
        <div>
          {/* Usamos el componente TextAndImageSection */}
          <TextAndImageSection />
        </div>
        <section id="faq" className={styles.faq}>
          <FaqSection />
        </section>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaHeading}>¡Transforma tu proyecto con nosotros hoy mismo!</h2>
          <p className={styles.ctaSubheading}>Contáctanos ahora y empieza a llevar tu negocio al siguiente nivel. Aportamos soluciones personalizadas y efectivas.
            <br /> <br />¡No pierdas esta oportunidad única!</p>
          <a href="tel:3229578866" className={styles.ctaButton}>¡Quiero empezar ahora!</a>
        </div>
        <section id="contacto" className={styles.contacto}>
          <ContactButtons />
          < Footer />
        </section>
      </main>
    </>
  );
}
