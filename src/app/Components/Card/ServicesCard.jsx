"use client";

import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesCard({ services, backgroundImage = false }) {
  // Función para truncar el texto al 80% del total de caracteres
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={15} // Reducir el espacio entre tarjetas
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 4 }, 
    }}
    autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
    loop={true}
    navigation
    pagination={{ clickable: true }}
    style={{ padding: "20px 0", maxWidth: "100%" }} // Asegurar que ocupe todo el ancho disponible
  >
  
      {services.map((service, index) => (
        <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              width: 345,
              height: 580,
              display: "flex",
              flexDirection: "column",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              transition: "transform 0.2s ease-in-out",
              "&:hover": { transform: "scale(1.03)", boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.3)" },
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: backgroundImage ? `url(${service.image})` : "none",
            }}
          >
            {!backgroundImage && (
              <CardMedia
                component="img"
                height="220"
                image={service.image}
                alt={service.title}
                sx={{ objectFit: "cover", borderRadius: "10px 10px 0 0" }}
              />
            )}
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "justify",
                padding: "16px",
                backdropFilter: backgroundImage ? "blur(5px)" : "none",
                backgroundColor: backgroundImage ? "rgba(0,0,0,0.5)" : "white",
                color: backgroundImage ? "white" : "black",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6, mb: 2, minHeight: "80px" }}>
                {truncateText(service.description, Math.floor(service.description.length * 0.8))}
              </Typography>
              <Button
  variant="contained"
  href={service.link}
  sx={{
    mt: "auto",
    background: "linear-gradient(45deg, #007BFF, #0056b3)",
    "&:hover": { background: "linear-gradient(45deg, #0056b3, #003a80)" },
  }}
>
  Ver más
</Button>

            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}




// "use client";

// import React from "react";
// import { Card, CardContent, CardMedia, Typography } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// export default function ServicesCard({ services }) {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       spaceBetween={20}
//       slidesPerView={1}
//       breakpoints={{
//         640: { slidesPerView: 1 },
//         768: { slidesPerView: 2 },
//         1024: { slidesPerView: 3 },
//       }}
//       autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
//       loop={true}
//       navigation
//       pagination={{ clickable: true }}
//     >
//       {services.map((service, index) => (
//         <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
//           <Card
//             sx={{
//               width: 345,
//               height: 520,
//               display: "flex",
//               flexDirection: "column",
//               boxShadow: 3,
//               borderRadius: 2,
//             }}
//           >
//             <CardMedia
//               component="img"
//               height="200"
//               image={service.image}
//               alt={service.title}
//               sx={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
//             />
//             <CardContent
//               sx={{
//                 flexGrow: 1,
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 textAlign: "justify",
//               }}
//             >
//               <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//                 {service.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {service.description}
//               </Typography>
//             </CardContent>
//           </Card>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }


