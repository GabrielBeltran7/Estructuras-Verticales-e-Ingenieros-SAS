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
            src="https://res.cloudinary.com/dby8lelja/image/upload/q_auto,f_webp,w_800/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Estructuras_Verticales_e_Ingenieros_sas_idjptp.webp"
            alt="Ver video"
            width={800}
            height={450}
            className={styles.thumbnail}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAA..."
            priority={true}
            quality={75}
          />
          <button className={styles.playButton}>▶</button>
        </div>
      ) : (
        <iframe
          className={styles.video}
          src="https://www.youtube-nocookie.com/embed/Kpj0nKqcb2c?autoplay=1&rel=0"
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
