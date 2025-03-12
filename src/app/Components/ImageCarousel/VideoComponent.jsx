import { useState } from "react";
import Image from "next/image";
import styles from "./VideoComponent.module.css";

const VideoComponent = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className={styles.videoContainer}>
      {!isVideoLoaded ? (
        <div className={styles.videoPlaceholder} onClick={() => setIsVideoLoaded(true)}>
          <Image
            src="https://res.cloudinary.com/dby8lelja/image/upload/v1741788875/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Imagenes%20Blog/estructurasverticaleseingenierossas_itww2f.webp"
            alt="Ver video"
            width={800}  // ✅ Ajustar al mismo tamaño que el iframe
            height={450} // ✅ Mantener proporción 16:9
            className={styles.thumbnail}
            priority
          />
          <button className={styles.playButton}>▶</button>
        </div>
      ) : (
        <iframe
          className={styles.video}
          width="800"
          height="450"
          src="https://www.youtube-nocookie.com/embed/6YjE9wgWJlw?autoplay=1"
          title="Video Institucional | Estructuras Verticales e Ingenieros SAS"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
};

export default VideoComponent;


// import Head from "next/head";
// import styles from "./VideoComponent.module.css";

// const VideoComponent = () => {
//   return (
//     <>
//       <Head>
//         <title>Video Institucional | Estructuras Verticales e Ingenieros SAS</title>
//         <meta
//           name="description"
//           content="Conoce más sobre Estructuras Verticales e Ingenieros SAS a través de nuestro video institucional."
//         />
//       </Head>

//       <div className={styles.videoContainer}>
//         <iframe
//           className={styles.video}
//           width="560"
//           height="315"
//           src="https://www.youtube.com/embed/6YjE9wgWJlw"
//           title="Video Institucional | Estructuras Verticales e Ingenieros SAS"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           loading="lazy"
//         ></iframe>
//       </div>
//     </>
//   );
// };

// export default VideoComponent;
