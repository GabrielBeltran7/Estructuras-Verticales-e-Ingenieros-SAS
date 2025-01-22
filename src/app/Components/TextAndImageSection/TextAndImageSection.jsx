"use client"
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './TextAndImageSection.module.css';

const TextAndImageSection = ({ imageUrl, altText, title, description }) => {
  return (
    <Grid container spacing={3} alignItems="center" className={styles.container}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom className={styles.title}>
          {title}
        </Typography>
        <Typography variant="body1" paragraph className={styles.description}>
          {description}
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={altText}
            width={400} // Ajusta el tamaño de la imagen
            height={300} // Ajusta el tamaño de la imagen
            quality={75} // Calidad de la imagen
            priority
            sizes="(max-width: 600px) 100vw, 50vw" // Responsividad para móvil
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default TextAndImageSection;

// import { Grid, Typography } from '@mui/material';
// import Image from 'next/image';
// import styles from './TextAndImageSection.module.css';

// const TextAndImageSection = ({ imageUrl, altText, title, description }) => {
//   return (
//     <Grid container spacing={3} alignItems="center" className={styles.container}>
//       <Grid item xs={12} md={6}>
//         <Typography variant="h5" gutterBottom className={styles.title}>
//           {title}
//         </Typography>
//         <Typography variant="body1" paragraph className={styles.description}>
//           {description}
//         </Typography>
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <div className={styles.imageContainer}>
//           <Image
//             src={imageUrl}
//             alt={altText}
//             width={400} // Ajusta el tamaño de la imagen
//             height={300} // Ajusta el tamaño de la imagen
//             quality={75} // Calidad de la imagen
//             priority // Mantén esta propiedad para carga inmediata
//           />
//         </div>
//       </Grid>
//     </Grid>
//   );
// };

// export default TextAndImageSection;

