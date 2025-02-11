
import React, { useState, useEffect } from 'react'; 
import styles from './ImageCarousel.module.css';
import Image from 'next/image';
import placeholderImage from './images/placeholder.jpg'; // Imagen de carga rápida

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
  width={600} // Asegurar tamaño adecuado
  height={400}
  className={styles.image}
  loading={currentIndex === 0 ? "eager" : "lazy"} // Primera imagen carga rápido
  priority={currentIndex === 0} // 🔥 Primera imagen se carga antes que el resto
  placeholder="blur"
  blurDataURL={placeholderImage.src}
  sizes="(max-width: 768px) 100vw, 50vw"
  style={{ objectFit: "cover" }}
/>

        </div>
        <button className={styles.nextButton} onClick={nextImage}>❯</button>
      </div>
    </div>
  );
};

export default ImageCarousel;



// import React, { useState, useEffect } from 'react';
// import Head from 'next/head'; // Importa el componente Head
// import styles from './ImageCarousel.module.css';
// import Image from 'next/image';
// import placeholderImage from './images/placeholder.jpg';

// const ImageCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const images = [
//         {
//             src: "https://res.cloudinary.com/dby8lelja/image/upload/v1737605127/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Servicio_de_Interventoria_jpkw6n.webp",
//             alt: "Imagen 1",
//         },
//         {
//             src: "https://res.cloudinary.com/dby8lelja/image/upload/v1739112965/interventoria_y_supervision_de_obras_pkb2ck.webp",
//             alt: "Imagen 2",
//         },
//         {
//             src: "https://res.cloudinary.com/dby8lelja/image/upload/v1737490967/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Supervisi%C3%B3n_de_Obras_s463d0.webp",
//             alt: "Imagen 3",
//         },
//     ];

//     const nextImage = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     const prevImage = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? images.length - 1 : prevIndex - 1
//         );
//     };

//     useEffect(() => {
//         const interval = setInterval(nextImage, 5000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div>
//             <Head> {/* Agrega el componente Head */}
//                 <link rel="preload" as="image" href={images[0].src} /> {/* Precarga la primera imagen */}
//             </Head>
//             <div className={styles.carouselContainer}>
//                 <div className={styles.carousel}>
//                     <button className={styles.prevButton} onClick={prevImage}>❮</button>
//                     <div className={styles.imageWrapper}>
//                         <Image
//                             src={images[currentIndex].src}
//                             alt={images[currentIndex].alt}
//                             width={900} // Ajusta el ancho para escritorio
//                             height={600} // Ajusta el alto para escritorio
//                             className={styles.image}
//                             loading={currentIndex === 0 ? "eager" : "lazy"}
//                             placeholder="blur"
//                             blurDataURL={placeholderImage.src}
//                             objectFit="cover"
//                             priority={currentIndex === 0}
//                             sizes="100vw" // Ajusta el tamaño para móviles
//                         />
//                     </div>
//                     <button className={styles.nextButton} onClick={nextImage}>❯</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ImageCarousel;


// import React, { useState, useEffect } from 'react';
// import styles from './ImageCarousel.module.css';
// import Image from 'next/image';
// import placeholderImage from './images/placeholder.jpg'; // Importa la imagen placeholder


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
//         <Image
//                         src={images[currentIndex].src}
//                         alt={images[currentIndex].alt}
//                         width={130}
//                         height={86}
//                         className={styles.image}
//                         loading={currentIndex === 0 ? "eager" : "lazy"}
//                         placeholder="blur"
//                         blurDataURL={placeholderImage.src} // Usa placeholderImage.src
//                         objectFit="cover"
//                         priority={currentIndex === 0}
//                         sizes="100vw"
//                     />
//         </div>
//         <button className={styles.nextButton} onClick={nextImage}>❯</button>
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;
