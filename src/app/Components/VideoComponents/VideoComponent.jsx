
import { useState } from "react";
import styles from "./VideoComponent.module.css";
import Image from "next/image";

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "Kpj0nKqcb2c";
  const videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <div className={styles.videoWrapper}>
      {!isPlaying ? (
        <div className={styles.thumbnail} onClick={() => setIsPlaying(true)}>
          {/* Miniatura local en vez de la de YouTube */}
          <Image
  src="/imagen/ESTRUCTURAS-VERTICALES-E-INGENIEROS-SAS.webp" // Nombre sin espacios recomendados
  alt="Estructuras Verticales e Ingenieros SAS"
  width={1280}
  height={720}
  priority // Carga antes que otras imágenes
  loading="eager"
  decoding="async"
  fetchPriority="high"
  sizes="(max-width: 768px) 100vw, 1280px"
/>


          {/* Botón de Play estilo YouTube */}
          <div className={styles.playButton}>
            <svg viewBox="0 0 68 48" width="68" height="48">
              <path className={styles.playBg} d="M66.52 7.6C66.14 5.8 64.74 4.4 62.94 4c-5.48-1.2-27.48-1.2-27.48-1.2s-21.98 0-27.46 1.2C6.2 4.4 4.8 5.8 4.4 7.6 3.2 13.08 3.2 24 3.2 24s0 10.92 1.2 16.4c0.4 1.8 1.8 3.2 3.6 3.6 5.48 1.2 27.46 1.2 27.46 1.2s21.98 0 27.48-1.2c1.8-0.4 3.2-1.8 3.6-3.6 1.2-5.48 1.2-16.4 1.2-16.4s0-10.92-1.2-16.4z"></path>
              <path className={styles.playIcon} d="M45 24L27 14v20"></path>
            </svg>
          </div>
        </div>
      ) : (
        <div className={styles.videoContainer}>
          <iframe
            className={styles.iframe}
            src={videoUrl}
            title="Video Institucional"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
