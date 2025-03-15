import styles from "./VideoComponent.module.css";

const VideoComponent = () => {
  const videoId = "Kpj0nKqcb2c";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
  const contentUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Video Institucional | Estructuras Verticales e Ingenieros SAS",
    "description": "Video institucional de Estructuras Verticales e Ingenieros SAS.",
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": "2024-03-13",
    "embedUrl": videoUrl,
    "contentUrl": contentUrl,
  };

  return (
    <div className={styles.videoContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <iframe
        width="100%"
        height="500"
        src={videoUrl}
        title="Video Institucional | Estructuras Verticales e Ingenieros SAS"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;


// import { useState } from "react";
// import Image from "next/image";
// import styles from "./VideoComponent.module.css";

// const VideoComponent = () => {
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);

//   return (
//     <div className={styles.videoContainer}>
//       {!isVideoLoaded ? (
//         <button
//           className={styles.videoPlaceholder}
//           onClick={() => setIsVideoLoaded(true)}
//           aria-label="Reproducir video"
//         >
//           <Image
//             src="https://res.cloudinary.com/dby8lelja/image/upload/q_auto,f_webp,w_800/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Estructuras_Verticales_e_Ingenieros_sas_idjptp.webp"
//             alt="Estructuras Verticales e Ingenieros SAS"
//             width={800}
//             height={450}
//             className={styles.thumbnail}
//             placeholder="blur"
//             blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAA..."
//             fetchPriority="low"
//             loading="lazy"
//             quality={85}
//           />
//           <span className={styles.playButton}>▶</span>
//         </button>
//       ) : (
//         <iframe
//           className={styles.video}
//           src="https://www.youtube-nocookie.com/embed/Kpj0nKqcb2c?autoplay=1&rel=0"
//           title="Video Institucional | Estructuras Verticales e Ingenieros SAS"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           loading="lazy"
//         ></iframe>
//       )}
//     </div>
//   );
// };

// export default VideoComponent;
