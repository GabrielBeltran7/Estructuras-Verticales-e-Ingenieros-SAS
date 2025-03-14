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
          src="https://www.youtube.com/watch?v=Kpj0nKqcb2c?autoplay=1&rel=0"
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
