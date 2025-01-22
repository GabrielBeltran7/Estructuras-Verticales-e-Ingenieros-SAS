"use client";
import styles from "./page.module.css";
import Head from "next/head";
import Navbar from "./Components/Navbar/Navbar";
import ServicesCard from "./Components/Card/Servicescard";
import FaqSection from "./Components/FAQSection/FaqSection";
import Image from "next/image";
import ContactButtons from "./Components/ContactButtons/ContactButtons";
import TextAndImageSection from './Components/TextAndImageSection/TextAndImageSection';

const img = "https://res.cloudinary.com/dby8lelja/image/upload/v1737496234/Estructuras%20Verticales%20e%20Ingenieros%20SAS/servicio_de_interventoria_supervision_de_obras_y_dise%C3%B1o_estructural_hnmfth.webp";

export default function Home() {
    
    
  return (
    <>
      <main className={styles.container}>
        <Navbar />

        {/* Sección Principal */}
        <header id="inicio" className={styles.hero}>
          <h1 className={styles.titulo}>
            Servicio de Interventoria, Supervisión de Obras y Diseño Estructural en Colombia..
          </h1>

          <div className={styles.heroImageContainer}>
            <Image
              src={img}
              alt="Servicio de Interventoría, Supervisión de Obras y Diseño Estructural en Colombia"
              width={400}
              height={300}
              priority
              className="heroImage"
              quality={75}
              
            />
          </div>

          <p>
            En Estructuras Verticales e Ingenieros SAS, nos especializamos en ofrecer soluciones integrales para la interventoría y supervisión de obras,
            así como en el diseño y fabricación de montajes estructurales. Además, somos expertos en la elaboración de pliegos de condiciones,
            enfocados en el desarrollo de proyectos que cumplen con los más altos estándares técnicos y normativos. Nuestra experiencia abarca también el diseño estructural especializado y
            el recibo de zonas comunes sometidas a propiedad horizontal (PH), garantizando que cada proyecto se ajuste a las regulaciones vigentes en Colombia.
            Trabajamos bajo un riguroso cumplimiento de las normativas locales, lo que nos permite asegurar la calidad, seguridad y durabilidad de cada obra.
          </p>
          <p>
            Nos enorgullece ofrecer informes técnicos detallados que facilitan la toma de decisiones informadas, brindando a nuestros clientes la confianza de que sus proyectos cumplen
            no solo con los más altos estándares de calidad, sino también con las regulaciones oficiales que rigen la industria de la construcción en Colombia.
          </p>
          <a href="tel:+573229578866" className={styles.cta}>Llámanos ahora</a>
        </header>

        <section id="servicios" className={styles.services}>
          <h2>Nuestros Servicios</h2>
        </section>
        <ServicesCard />
        <div>
      {/* Usamos el componente TextAndImageSection */}
      <TextAndImageSection/>
    </div>
        <section id="faq" className={styles.faq}>
          <FaqSection />
        </section>

        <section id="contacto" className={styles.contacto}>
          <ContactButtons />
        </section>
      </main>
    </>
  );
}
