// app/components/LazyYouTubeServer.tsx (Next.js 15 - Server Component)

import styles from "./LazyYouTubeServer.module.css";

const LazyYouTubeServer = () => {
  const videoId = "_eyZlySGT7c";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  const contentUrl = `https://www.youtube.com/watch?v=${videoId}`; // ✅ Enlace directo al video


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Diseño Estructural",
    "description": "Ofrecemos servicio de Diseño estructural.",
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": "2024-03-13",
    "embedUrl": videoUrl,
    "contentUrl": contentUrl, // ✅ Mejora la indexación en Google
  };

  return (
    <div className={styles.videoContainer}>
      <h2 className={styles.titulo}>Diseño y Montaje Estructural</h2>
      {/* ✅ SEO: Datos estructurados para mejorar indexación en Google */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ✅ Directamente el iframe (sin eventos del cliente) */}
      <iframe
        width="100%"
        height="500"
        src={videoUrl}
        title="Diseño Estructural Profesional"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LazyYouTubeServer;
