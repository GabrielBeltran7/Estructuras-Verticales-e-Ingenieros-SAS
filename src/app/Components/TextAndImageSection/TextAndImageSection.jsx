"use client";

import Image from "next/image";
import styles from "./TextAndImageSection.module.css";

const imageUrl =
  "https://res.cloudinary.com/dby8lelja/image/upload/v1737501497/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Qu%C3%A9_es_una_interventor%C3%ADa_auauz4.webp";
const altText =
  "Servicio de Interventoría, Supervisión de Obras y Diseño Estructural en Colombia";

const TextAndImageSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.titulo}>¿Por qué Elegirnos?</h2>
        <p className={styles.parrafo}>
          Elegirnos como tu socio para el diseño y supervisión de obras es optar por la experiencia, la calidad y la seguridad.
          Contamos con un equipo de profesionales altamente calificados y con amplia experiencia en la industria.
          Nuestro enfoque se basa en ofrecer soluciones integrales, asegurando que cada proyecto sea exitoso desde el inicio hasta la finalización.
          Trabajamos de cerca con nuestros clientes para entender sus necesidades específicas y garantizar que sus expectativas sean superadas.
          La confianza que depositan en nosotros es la base de nuestro trabajo.
          Además, nos aseguramos de estar al día con las mejores prácticas y tecnologías para ofrecer resultados óptimos en todos nuestros proyectos.
        
        </p>
      </div>
      <div className={styles.ImagenContainer}>
        <Image
          src={imageUrl}
          alt={altText}
          width={400} // Ajusta el tamaño de la imagen
          height={300} // Ajusta el tamaño de la imagen
          quality={85} // Mejor calidad de imagen
          priority
          className={styles.imagen}
        />
        <a href="tel:3132581599" className={styles.contacto}>Solicita  asesoría gratuita</a>

      </div>
    </div>
  );
};

export default TextAndImageSection;

