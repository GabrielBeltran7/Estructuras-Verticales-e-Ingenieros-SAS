import { useState } from "react";
import Head from "next/head";
import styles from "./VideoComponent.module.css";

const VideoComponent = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      <Head>
        <title>Video Institucional | Estructuras Verticales e Ingenieros SAS</title>
        <meta
          name="description"
          content="Conoce más sobre Estructuras Verticales e Ingenieros SAS a través de nuestro video institucional."
        />
      </Head>

      <div className={styles.videoContainer}>
        {!videoLoaded ? (
          <div className={styles.videoPlaceholder} onClick={() => setVideoLoaded(true)}>
            <img
              src="https://img.youtube.com/vi/6YjE9wgWJlw/hqdefault.jpg"
              alt="Video Institucional"
              className={styles.videoThumbnail}
            />
            <button className={styles.playButton}>▶</button>
          </div>
        ) : (
          <iframe
            className={styles.video}
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/6YjE9wgWJlw?autoplay=1"
            title="Video Institucional | Estructuras Verticales e Ingenieros SAS"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        )}
      </div>
    </>
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
