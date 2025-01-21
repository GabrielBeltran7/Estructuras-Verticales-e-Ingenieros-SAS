"use client";
import React, { useRef } from "react";
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
    description: "En nuestra empresa ofrecemos servicios de Interventoría de Obras para garantizar la ejecución adecuada de proyectos de construcción. Nos encargamos de supervisar y controlar todas las fases del proceso constructivo, asegurando el cumplimiento de los plazos, presupuestos y calidad especificada. Con nuestra experiencia, brindamos confianza a nuestros clientes, minimizando riesgos y maximizando la eficiencia en cada obra.",
    image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
  },
  {
    title: "Supervisión de Obras",
    description: "Brindamos servicios de Supervisión de Obras para asegurar el correcto desarrollo de cada proyecto. Nos encargamos de supervisar todas las etapas de la construcción, desde el inicio hasta la entrega final, asegurando que se cumplan los estándares de calidad y los plazos establecidos. Con un enfoque integral y profesional, velamos por la eficiencia, minimizando imprevistos y garantizando resultados óptimos para nuestros clientes.",
    image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
  },
  {
    title: "Elaboración de Pliegos de Condiciones",
    description: "Ofrecemos servicios de Elaboración de Pliegos de Condiciones para asegurar proyectos bien estructurados. Redactamos pliegos que especifican los requisitos técnicos, legales y financieros necesarios. Nos enfocamos en cumplir con la normativa vigente para un proceso claro y eficiente. Nuestra experiencia garantiza que cada pliego sea preciso y funcional. Aseguramos la transparencia y el éxito en la ejecución de cada proyecto.",
    image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
  },
  {
    title: "Diseño y Fabricación de Montajes Estructurales",
    description: "En nuestra empresa ofrecemos servicios de Diseño y Fabricación de Montajes Estructurales de alta calidad. Desarrollamos soluciones personalizadas para cada proyecto, asegurando precisión y resistencia. Utilizamos materiales de primera y tecnología avanzada en cada etapa del proceso. Nuestro equipo de expertos garantiza la ejecución eficiente y segura de los montajes. Brindamos confianza a nuestros clientes al entregar estructuras duraderas y de alto rendimiento.",
    image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
  },
  {
    title: "Diseños Estructurales",
    description: "Nos especializamos en Diseños Estructurales personalizados para cada tipo de proyecto. Creamos soluciones innovadoras y eficientes que aseguran la estabilidad y seguridad de las construcciones. Utilizamos tecnología avanzada y un equipo de expertos para desarrollar diseños precisos. Nos comprometemos a cumplir con los estándares de calidad y normativas vigentes. Garantizamos un trabajo integral que respalde la durabilidad y rendimiento de cada estructura.",
    image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
  },
  {
    title: "Recibo de Zonas Comunes PH",
    description: "Ofrecemos servicios de Recibo de Zonas Comunes PH para garantizar la correcta entrega de áreas comunes. Realizamos inspecciones detalladas para verificar el cumplimiento de normas y calidad. Nuestro equipo asegura que todas las instalaciones estén en condiciones óptimas. Gestionamos la documentación necesaria para formalizar la recepción. Brindamos confianza y respaldo en cada proceso, garantizando un resultado exitoso.",
    image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
  },
  {
    title: "Informes Técnicos",
    description: "Ofrecemos la elaboración de Informes Técnicos precisos y detallados para cada proyecto. Nuestro equipo se encarga de recopilar y analizar toda la información relevante. Redactamos informes claros que facilitan la toma de decisiones informadas. Aseguramos que cada informe cumpla con los estándares de calidad y normativa. Brindamos soporte a nuestros clientes con documentación técnica confiable y profesional.",
    image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
  },
];

// Componente principal
export default function ServicesCard() {
  const swiperRef = useRef(null);

  return (
    <Swiper
      ref={swiperRef}
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
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      style={{ padding: "1px", margin: "0px" }}
    >
      {services.map((service, index) => (
        <SwiperSlide
          key={index}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()} // Pausar autoplay
          onMouseLeave={() => swiperRef.current.swiper.autoplay.start()} // Reanudar autoplay
        >
          <Card
            sx={{
              width: 345,
              height: 490,
              display: "flex",
              flexDirection: "column",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={service.image}
              alt={service.title}
              sx={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
            />
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                textAlign: "justify",
                justifyContent: "space-between",
              }}
            >
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



// "use client";
// import React from "react";
// import { Card, CardContent, CardMedia, Typography } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// // Datos de los servicios
// const services = [
//   {
//     title: "Interventoría de Obras",
//     description: "En nuestra empresa ofrecemos servicios de Interventoría de Obras para garantizar la ejecución adecuada de proyectos de construcción. Nos encargamos de supervisar y controlar todas las fases del proceso constructivo, asegurando el cumplimiento de los plazos, presupuestos y calidad especificada. Con nuestra experiencia, brindamos confianza a nuestros clientes, minimizando riesgos y maximizando la eficiencia en cada obra.",
//     image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
//   },
//   {
//     title: "Supervisión de Obras",
//     description: "Brindamos servicios de Supervisión de Obras para asegurar el correcto desarrollo de cada proyecto. Nos encargamos de supervisar todas las etapas de la construcción, desde el inicio hasta la entrega final, asegurando que se cumplan los estándares de calidad y los plazos establecidos. Con un enfoque integral y profesional, velamos por la eficiencia, minimizando imprevistos y garantizando resultados óptimos para nuestros clientes.",
//     image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
//   },
//   {
//     title: "Elaboración de Pliegos de Condiciones",
//     description: "Ofrecemos servicios de Elaboración de Pliegos de Condiciones para asegurar proyectos bien estructurados. Redactamos pliegos que especifican los requisitos técnicos, legales y financieros necesarios. Nos enfocamos en cumplir con la normativa vigente para un proceso claro y eficiente. Nuestra experiencia garantiza que cada pliego sea preciso y funcional. Aseguramos la transparencia y el éxito en la ejecución de cada proyecto.",
//     image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
//   },
//   {
//     title: "Diseño y Fabricación de Montajes Estructurales",
//     description: "En nuestra empresa ofrecemos servicios de Diseño y Fabricación de Montajes Estructurales de alta calidad. Desarrollamos soluciones personalizadas para cada proyecto, asegurando precisión y resistencia. Utilizamos materiales de primera y tecnología avanzada en cada etapa del proceso. Nuestro equipo de expertos garantiza la ejecución eficiente y segura de los montajes. Brindamos confianza a nuestros clientes al entregar estructuras duraderas y de alto rendimiento.",
//     image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
//   },
//   {
//     title: "Diseños Estructurales",
//     description: "Nos especializamos en Diseños Estructurales personalizados para cada tipo de proyecto. Creamos soluciones innovadoras y eficientes que aseguran la estabilidad y seguridad de las construcciones. Utilizamos tecnología avanzada y un equipo de expertos para desarrollar diseños precisos. Nos comprometemos a cumplir con los estándares de calidad y normativas vigentes. Garantizamos un trabajo integral que respalde la durabilidad y rendimiento de cada estructura.",
//     image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
//   },
//   {
//     title: "Recibo de Zonas Comunes PH",
//     description: "Ofrecemos servicios de Recibo de Zonas Comunes PH para garantizar la correcta entrega de áreas comunes. Realizamos inspecciones detalladas para verificar el cumplimiento de normas y calidad. Nuestro equipo asegura que todas las instalaciones estén en condiciones óptimas. Gestionamos la documentación necesaria para formalizar la recepción. Brindamos confianza y respaldo en cada proceso, garantizando un resultado exitoso.",
//     image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
//   },
//   {
//     title: "Informes Técnicos",
//     description: "Ofrecemos la elaboración de Informes Técnicos precisos y detallados para cada proyecto. Nuestro equipo se encarga de recopilar y analizar toda la información relevante. Redactamos informes claros que facilitan la toma de decisiones informadas. Aseguramos que cada informe cumpla con los estándares de calidad y normativa. Brindamos soporte a nuestros clientes con documentación técnica confiable y profesional.",
//     image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
//   },
// ];

// // Componente principal
// export default function ServicesCard() {
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
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 6000, disableOnInteraction: false }}
//       loop={true}
//       style={{ padding: "1px", margin:"0px" }}
//     >
//       {services.map((service, index) => (
//         <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//           <Card sx={{ width: 345, height: 490, display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
//             <CardMedia
//               component="img"
//               height="200"
//               image={service.image}
//               alt={service.title}
//               sx={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
//             />
//             <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", textalign: "justify", justifyContent: "space-between" }}>
//               <Typography variant="h6" component="div" sx={{ fontWeight: "bold", marginBottom: 1 }}>
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
// "use client";
// import React from "react";
// import { Card, CardContent, CardMedia, Typography } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// // Datos de los servicios
// const services = [
//   {
//     title: "Interventoría de Obras",
//     description: "En nuestra empresa ofrecemos servicios de Interventoría de Obras para garantizar la ejecución adecuada de proyectos de construcción. Nos encargamos de supervisar y controlar todas las fases del proceso constructivo, asegurando el cumplimiento de los plazos, presupuestos y calidad especificada. Con nuestra experiencia, brindamos confianza a nuestros clientes, minimizando riesgos y maximizando la eficiencia en cada obra.",
//     image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
//   },
//   {
//     title: "Supervisión de Obras",
//     description: "Brindamos servicios de Supervisión de Obras para asegurar el correcto desarrollo de cada proyecto. Nos encargamos de supervisar todas las etapas de la construcción, desde el inicio hasta la entrega final, asegurando que se cumplan los estándares de calidad y los plazos establecidos. Con un enfoque integral y profesional, velamos por la eficiencia, minimizando imprevistos y garantizando resultados óptimos para nuestros clientes.",
//     image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
//   },
//   {
//     title: "Elaboración de Pliegos de Condiciones",
//     description: "Ofrecemos servicios de Elaboración de Pliegos de Condiciones para asegurar proyectos bien estructurados. Redactamos pliegos que especifican los requisitos técnicos, legales y financieros necesarios. Nos enfocamos en cumplir con la normativa vigente para un proceso claro y eficiente. Nuestra experiencia garantiza que cada pliego sea preciso y funcional. Aseguramos la transparencia y el éxito en la ejecución de cada proyecto.",
//     image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
//   },
//   {
//     title: "Diseño y Fabricación de Montajes Estructurales",
//     description: "En nuestra empresa ofrecemos servicios de Diseño y Fabricación de Montajes Estructurales de alta calidad. Desarrollamos soluciones personalizadas para cada proyecto, asegurando precisión y resistencia. Utilizamos materiales de primera y tecnología avanzada en cada etapa del proceso. Nuestro equipo de expertos garantiza la ejecución eficiente y segura de los montajes. Brindamos confianza a nuestros clientes al entregar estructuras duraderas y de alto rendimiento.",
//     image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
//   },
//   {
//     title: "Diseños Estructurales",
//     description: "Nos especializamos en Diseños Estructurales personalizados para cada tipo de proyecto. Creamos soluciones innovadoras y eficientes que aseguran la estabilidad y seguridad de las construcciones. Utilizamos tecnología avanzada y un equipo de expertos para desarrollar diseños precisos. Nos comprometemos a cumplir con los estándares de calidad y normativas vigentes. Garantizamos un trabajo integral que respalde la durabilidad y rendimiento de cada estructura.",
//     image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
//   },
//   {
//     title: "Recibo de Zonas Comunes PH",
//     description: "Ofrecemos servicios de Recibo de Zonas Comunes PH para garantizar la correcta entrega de áreas comunes. Realizamos inspecciones detalladas para verificar el cumplimiento de normas y calidad. Nuestro equipo asegura que todas las instalaciones estén en condiciones óptimas. Gestionamos la documentación necesaria para formalizar la recepción. Brindamos confianza y respaldo en cada proceso, garantizando un resultado exitoso.",
//     image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
//   },
//   {
//     title: "Informes Técnicos",
//     description: "Ofrecemos la elaboración de Informes Técnicos precisos y detallados para cada proyecto. Nuestro equipo se encarga de recopilar y analizar toda la información relevante. Redactamos informes claros que facilitan la toma de decisiones informadas. Aseguramos que cada informe cumpla con los estándares de calidad y normativa. Brindamos soporte a nuestros clientes con documentación técnica confiable y profesional.",
//     image: "https://static.wixstatic.com/media/d64f8c_d26562a6895344cc8c9266f2e987b526~mv2.jpg",
//   },
// ];

// // Componente principal
// export default function ServicesCard() {
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
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 6000, disableOnInteraction: false }}
//       loop={true}
//       style={{ padding: "1px", margin:"0px" }}
//     >
//       {services.map((service, index) => (
//         <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//           <Card sx={{ width: 345, height: 490, display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
//             <CardMedia
//               component="img"
//               height="200"
//               image={service.image}
//               alt={service.title}
//               sx={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
//             />
//             <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", textalign: "justify", justifyContent: "space-between" }}>
//               <Typography variant="h6" component="div" sx={{ fontWeight: "bold", marginBottom: 1 }}>
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
