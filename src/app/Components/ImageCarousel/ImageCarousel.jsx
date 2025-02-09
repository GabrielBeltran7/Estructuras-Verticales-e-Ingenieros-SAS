import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./ImageCarousel.module.css";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    "https://res.cloudinary.com/dby8lelja/image/upload/f_auto,q_auto,w_900,q_80/v1737605127/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Servicio_de_Interventoria_jpkw6n.webp",
    "https://res.cloudinary.com/dby8lelja/image/upload/f_auto,q_auto,w_900,q_80/v1739112965/interventoria_y_supervision_de_obras_pkb2ck.webp",
    "https://res.cloudinary.com/dby8lelja/image/upload/f_auto,q_auto,w_900,q_80/v1737490967/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Supervisi%C3%B3n_de_Obras_s463d0.webp",
  ];

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ✅ PRELOAD de la imagen principal */}
      <Head>
        <link rel="preload" as="image" href={images[0]} />
      </Head>

      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <button
            className={styles.prevButton}
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }
          >
            ❮
          </button>
          <div className={styles.imageWrapper}>
            <Image
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              width={isMobile ? 90 : 900} // 📌 Tamaño dinámico según el viewport
              height={isMobile ? 90 : 550}
              priority={true} // 🔥 Fuerza la carga inmediata en LCP
              className={`${styles.image} ${isMobile ? styles.mobileImage : ""}`} // 📌 Estilos distintos para móviles
            />
          </div>
          <button
            className={styles.nextButton}
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
          >
            ❯
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;






