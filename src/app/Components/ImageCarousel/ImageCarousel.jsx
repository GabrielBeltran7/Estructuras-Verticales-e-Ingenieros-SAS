import React, { useState, useEffect } from 'react';  
import styles from './ImageCarousel.module.css';
import Image from "next/image";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    "https://res.cloudinary.com/dby8lelja/image/upload/f_auto,q_auto/v1737605127/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Servicio_de_Interventoria_jpkw6n.webp",
    "https://res.cloudinary.com/dby8lelja/image/upload/f_auto,q_auto/v1739112965/interventoria_y_supervision_de_obras_pkb2ck.webp",
    "https://res.cloudinary.com/dby8lelja/image/upload/f_auto,q_auto/v1737490967/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Supervisi%C3%B3n_de_Obras_s463d0.webp",
  ];

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            width={isMobile ? 300 : 900} 
            height={isMobile ? 200 : 550}
            priority={!isMobile && currentIndex === 0} // Evita `priority` en móviles
            placeholder="blur" 
            blurDataURL={images[currentIndex]} 
            sizes="(max-width: 768px) 300px, 900px"
            className={styles.image}
          />
        </div>
        <button className={styles.nextButton} onClick={nextImage}>❯</button>
      </div>
    </div>
  );
};

export default ImageCarousel;



