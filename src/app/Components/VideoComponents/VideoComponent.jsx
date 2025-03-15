
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

