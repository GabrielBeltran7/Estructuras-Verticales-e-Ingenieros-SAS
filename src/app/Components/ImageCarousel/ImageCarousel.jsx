import React, { useState, useEffect } from 'react';
import styles from './ImageCarousel.module.css';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://res.cloudinary.com/dby8lelja/image/upload/v1737605127/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Servicio_de_Interventoria_jpkw6n.webp",
    "https://res.cloudinary.com/dby8lelja/image/upload/v1737553290/Estructuras%20Verticales%20e%20Ingenieros%20SAS/interventor%C3%ADa_de_obras_supervisi%C3%B3n_de_obras_dise%C3%B1o_estructural_montajes_estructurales_oru8yv.png",
    "https://res.cloudinary.com/dby8lelja/image/upload/v1737490967/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Supervisi%C3%B3n_de_Obras_s463d0.webp",
  ];

  // Función para cambiar la imagen
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Agregar autoplay
  useEffect(() => {
    const interval = setInterval(nextImage, 10000); // Cambiar la imagen cada 3 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <button className={styles.prevButton} onClick={prevImage}>❮</button>
        <div className={styles.imageWrapper}>
          <img
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            className={styles.image}
          />
        </div>
        <button className={styles.nextButton} onClick={nextImage}>❯</button>
      </div>
    </div>
  );
};

export default ImageCarousel;

// import React, { useState } from 'react';
// import styles from './ImageCarousel.module.css';

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     "https://res.cloudinary.com/dby8lelja/image/upload/v1737605127/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Servicio_de_Interventoria_jpkw6n.webp",
//     "https://res.cloudinary.com/dby8lelja/image/upload/v1737553290/Estructuras%20Verticales%20e%20Ingenieros%20SAS/interventor%C3%ADa_de_obras_supervisi%C3%B3n_de_obras_dise%C3%B1o_estructural_montajes_estructurales_oru8yv.png",
//     "https://res.cloudinary.com/dby8lelja/image/upload/v1737490967/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Supervisi%C3%B3n_de_Obras_s463d0.webp",
//   ];

//   // Función para cambiar la imagen
//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className={styles.carouselContainer}>
//       <div className={styles.carousel}>
//         <button className={styles.prevButton} onClick={prevImage}>❮</button>
//         <div className={styles.imageWrapper}>
//           <img
//             src={images[currentIndex]}
//             alt={`Imagen ${currentIndex + 1}`}
//             className={styles.image}
//           />
//         </div>
//         <button className={styles.nextButton} onClick={nextImage}>❯</button>
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;
