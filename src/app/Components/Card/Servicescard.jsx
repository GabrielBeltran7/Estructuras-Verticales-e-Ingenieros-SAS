"use client";
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Datos de los servicios
const services = [
  {
    title: "Interventoría de Obras",
    description: "Aseguramos la correcta ejecución y cumplimiento de los plazos de tus obras.",
    image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
  },
  {
    title: "Supervisión de Obras",
    description: "Monitoreamos de cerca cada proyecto para garantizar calidad y seguridad.",
    image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
  },
  {
    title: "Elaboración de Pliegos de Condiciones",
    description: "Creación de documentos que aseguran la correcta ejecución de proyectos.",
    image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
  },
  {
    title: "Diseño y Fabricación de Montajes Estructurales",
    description: "Soluciones innovadoras para la fabricación e instalación de estructuras.",
    image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
  },
  {
    title: "Diseños Estructurales",
    description: "Diseños personalizados y detallados según las necesidades de cada proyecto.",
    image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
  },
  {
    title: "Recibo de Zonas Comunes PH",
    description: "Gestión y control de la entrega de zonas comunes bajo propiedad horizontal.",
    image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
  },
  {
    title: "Informes Técnicos",
    description: "Elaboración de informes detallados para garantizar transparencia en tus proyectos.",
    image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
  },
];

// Componente principal
export default function ServicesCard() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      style={{ padding: "30px" }}
    >
      {services.map((service, index) => (
        <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Card sx={{ width: 345, height: 350, display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="200"
              image={service.image}
              alt={service.title}
              sx={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
            />
            <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography variant="h6" component="div" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
