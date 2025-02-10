import React, { useState, useEffect } from 'react';
import styles from './ImageCarousel.module.css';
import Image from 'next/image';
import placeholderImage from './images/placeholder.jpg'; // Importa la imagen placeholder


const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "https://res.cloudinary.com/dby8lelja/image/upload/v1737605127/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Servicio_de_Interventoria_jpkw6n.webp",
      alt: "Imagen 1",
    },
    {
      src: "https://res.cloudinary.com/dby8lelja/image/upload/v1739112965/interventoria_y_supervision_de_obras_pkb2ck.webp",
      alt: "Imagen 2",
    },
    {
      src: "https://res.cloudinary.com/dby8lelja/image/upload/v1737490967/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Supervisi%C3%B3n_de_Obras_s463d0.webp",
      alt: "Imagen 3",
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
                        width={130}
                        height={86}
                        className={styles.image}
                        loading={currentIndex === 0 ? "eager" : "lazy"}
                        placeholder="blur"
                        blurDataURL={placeholderImage.src} // Usa placeholderImage.src
                        objectFit="cover"
                        priority={currentIndex === 0}
                        sizes="100vw"
                    />
        </div>
        <button className={styles.nextButton} onClick={nextImage}>❯</button>
      </div>
    </div>
  );
};

export default ImageCarousel;

// import React, { useState, useEffect } from 'react';
// import styles from './ImageCarousel.module.css';
// import Image from 'next/image';

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     {
//       src: "https://res.cloudinary.com/dby8lelja/image/upload/v1737605127/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Servicio_de_Interventoria_jpkw6n.webp",
//       alt: "Imagen 1",
//     },
//     {
//       src: "https://res.cloudinary.com/dby8lelja/image/upload/v1739112965/interventoria_y_supervision_de_obras_pkb2ck.webp",
//       alt: "Imagen 2",
//     },
//     {
//       src: "https://res.cloudinary.com/dby8lelja/image/upload/v1737490967/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Supervisi%C3%B3n_de_Obras_s463d0.webp",
//       alt: "Imagen 3",
//     },
//   ];

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(nextImage, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={styles.carouselContainer}>
//       <div className={styles.carousel}>
//         <button className={styles.prevButton} onClick={prevImage}>❮</button>
//         <div className={styles.imageWrapper}>
//           <Image
//             src={images[currentIndex].src}
//             alt={images[currentIndex].alt}
//             width={900}
//             height={600}
//             className={styles.image}
//             loading={currentIndex === 0 ? "eager" : "lazy"} // Carga la primera imagen de inmediato
//             placeholder="blur" // O usa una imagen de baja resolución como placeholder
//             blurDataURL="/images/placeholder.jpg" // URL de la imagen placeholder
//             objectFit="cover" // Ajusta la imagen al contenedor
//           />
//         </div>
//         <button className={styles.nextButton} onClick={nextImage}>❯</button>
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;

