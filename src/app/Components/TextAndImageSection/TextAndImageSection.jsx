'use client'
import { Typography, Box } from '@mui/material';
import Image from 'next/image';

const TextAndImageSection = ({ imageUrl, altText, title, description }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Columna en móvil, fila en escritorio
        justifyContent: 'center',
        alignItems: 'center',
        
        width: '90%',
        
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      {/* Sección de texto */}
      <Box
        sx={{
          flex: 1,
          textAlign: 'center',
          marginBottom: { xs: '20px', md: '0' },
          padding: { xs: '0 20px', md: '0 40px' }, // Espaciado en los lados
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '2.7rem' },
            fontWeight: 'bold',
            marginBottom: '20px', // Margen inferior para separar del texto
            marginTop: '70px',
            
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: { xs: '1.1rem', sm: '1.3rem' }, // Mejor tamaño en escritorio
           
            textAlign: 'justify',
            margin: '0 auto',
        
            color: '#333', // Color de texto para mejor contraste
          }}
        >
          {description}
        </Typography>
      </Box>

      {/* Sección de imagen */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: { xs: '20px', md: '0' },
          width: '100%',
        }}
      >
        <Image
          src={imageUrl}
          alt={altText}
          width={400} // Tamaño de la imagen más grande para escritorio
          height={300} // Ajusta el tamaño de la imagen
          quality={75} // Calidad de la imagen
          priority
          sizes="(max-width: 600px) 100vw, 50vw" // Responsividad para móvil
        />
      </Box>
    </Box>
  );
};

export default TextAndImageSection;




// "use client"
// import { Grid, Typography } from '@mui/material';
// import Image from 'next/image';
// import styles from './TextAndImageSection.module.css';
// import '../../globals.css'; // Ajusta la ruta si es necesario

// const TextAndImageSection = ({ imageUrl, altText, title, description }) => {
//   return (
//     <Grid container spacing={3} alignItems="center" className={styles.container}>
//       <Grid item xs={12} md={6}>
//         <Typography variant="h6" gutterBottom className={styles.title}>
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
//             priority
//             sizes="(max-width: 600px) 100vw, 50vw" // Responsividad para móvil
//           />
//         </div>
//       </Grid>
//     </Grid>
//   );
// };

// export default TextAndImageSection;

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

