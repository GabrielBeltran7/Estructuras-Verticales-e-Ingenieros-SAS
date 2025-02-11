import styles from "./EncabezadoServicios.module.css";

import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Link from "next/link";

const EncabezadoServicios = () => {
  return (
    <header id="inicio" className={styles.hero}>
      <h1 className={styles.titulo}>
      Interventoría y Supervisión de Obras, Diseño y Montaje Estructural.
      </h1>
      <ImageCarousel />
      <div className={styles.textContainer}>
        <p>
          En {" "}
          <strong className={styles.color}>
            Estructuras Verticales e Ingenieros SAS,{" "}
          </strong>
           nos especializamos en ofrecer soluciones integrales para la
          interventoría y supervisión de obras, así como en el diseño y
          fabricación de montajes estructurales.
        </p>
        <p>
          Además, somos expertos en la elaboración de pliegos de condiciones,
          enfocados en el desarrollo de proyectos que cumplen con los más altos
          estándares técnicos y normativos.
        </p>
        <p>
          Nuestra experiencia abarca también el diseño estructural especializado
          y el recibo de zonas comunes sometidas a propiedad horizontal (PH),
          garantizando que cada proyecto se ajuste a las regulaciones vigentes
          en Colombia.
        </p>
        <p>
          Trabajamos bajo un riguroso cumplimiento de las normativas locales, lo
          que nos permite asegurar la calidad, seguridad y durabilidad de cada
          obra.
        </p>
        
        <p>
          Nos enorgullece ofrecer informes técnicos detallados que facilitan la
          toma de decisiones informadas, brindando a nuestros clientes la
          confianza de que sus proyectos cumplen no solo con los más altos
          estándares de calidad, sino también con las{' '}
          <Link href="https://www.minvivienda.gov.co" legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              regulaciones oficiales{' '}
            </a>
          </Link>
           que rigen la industria de la construcción en Colombia.
        </p>
      </div>
      <a href="tel:3132581599" className={styles.cta}>
        Llámanos ahora.
      </a>
    </header>
  );
};

export default EncabezadoServicios;
