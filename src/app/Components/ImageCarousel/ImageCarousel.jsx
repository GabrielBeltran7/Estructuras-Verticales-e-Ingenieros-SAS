
import React, { useState, useEffect } from 'react'; 
import styles from './ImageCarousel.module.css';
import Image from 'next/image';
import placeholderImage from './images/placeholder.jpg'; // Imagen de carga rápida

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "https://res.cloudinary.com/dby8lelja/image/upload/v1737605127/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Servicio_de_Interventoria_jpkw6n.webp",
      alt: "Servicio de interventoria de obras",
    },
    {
      src: "https://res.cloudinary.com/dby8lelja/image/upload/v1739112965/interventoria_y_supervision_de_obras_pkb2ck.webp",
      alt: "Interventoria y supervision de obras",
    },
    {
      src: "https://res.cloudinary.com/dby8lelja/image/upload/v1737490967/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Supervisi%C3%B3n_de_Obras_s463d0.webp",
      alt: "Estructuras Verticales e Ingenieros sas",
    },
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <button className={styles.prevButton} onClick={prevImage}>❮</button>
        <div className={styles.imageWrapper}>
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={300} // Incrementar tamaño para LCP
            height={200} // Incrementar tamaño para LCP
            className={styles.image}
            loading={currentIndex === 0 ? "eager" : "lazy"} // No lazy load en la primera imagen
            placeholder="blur"
            blurDataURL={placeholderImage.src} // Imagen de baja calidad para carga previa
            priority={currentIndex === 0} // Priorizar la primera imagen para mejorar el LCP
            sizes="(max-width: 768px) 100vw, 50vw" // Optimizar para diferentes dispositivos
            style={{ objectFit: "cover" }} // Evitar distorsión
          />
        </div>
        <button className={styles.nextButton} onClick={nextImage}>❯</button>
      </div>
    </div>
  );
};

export default ImageCarousel;

