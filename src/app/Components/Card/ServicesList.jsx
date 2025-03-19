import ServicesCard from "./ServicesCard.jsx"

const services = [
  {
    title: "Consultoría de Obras",
    description: "Ofrecemos servicios de Consultoría de Obras para optimizar la planificación y ejecución de proyectos de construcción. Nuestro equipo de expertos asesora en cada fase del proceso, garantizando eficiencia, cumplimiento normativo y control de costos. Implementamos estrategias innovadoras para maximizar la rentabilidad y minimizar riesgos, asegurando el éxito de cada obra.",
    image: "https://res.cloudinary.com/dby8lelja/image/upload/v1739811559/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Imagenes%20Blog/consultoria_de_obras_ueeydw.webp",
    link: "https://www.estructurasverticales.com/servicios/consultoria-de-obras"
  },
  
  {
    title: "Alquiler de Maquinaria Pesada",
    description: "Ofrecemos soluciones especializadas en el alquiler de maquinaria pesada, con un enfoque en bulldozers para construcción e ingeniería civil. Nuestro servicio garantiza equipos modernos, mantenimiento preventivo y asesoramiento técnico para maximizar la eficiencia en cada proyecto. Ideal para excavación, nivelación de terrenos y movimientos de tierra, brindamos soluciones confiables y rentables para la industria.",
    image: "https://res.cloudinary.com/dby8lelja/image/upload/v1742400774/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Imagenes%20Blog/empresa_alquiler_de_maquinaria_pesada_ghqj9z.webp",
 link: "https://www.estructurasverticales.com/servicios/alquiler-de-maquinaria-pesada"
  },


    {
      title: "Interventoria de Obras",
      description: "En nuestra empresa ofrecemos servicios de Interventoría de Obras para garantizar la ejecución adecuada de proyectos de construcción. Nos encargamos de supervisar y controlar todas las fases del proceso constructivo, asegurando el cumplimiento de los plazos, presupuestos y calidad especificada. Con nuestra experiencia, brindamos confianza a nuestros clientes, minimizando riesgos y maximizando la eficiencia en cada obra.",
      image: "https://res.cloudinary.com/dby8lelja/image/upload/v1737490968/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Interventoria_de_Obras_xaegll.webp",
     link: "https://www.estructurasverticales.com/servicios/interventoria-de-obras"
    },
  
    {
      title: "Supervisión de Obras",
      description: "Brindamos servicios de Supervisión de Obras para asegurar el correcto desarrollo de cada proyecto. Nos encargamos de supervisar todas las etapas de la construcción, desde el inicio hasta la entrega final, asegurando que se cumplan los estándares de calidad y los plazos establecidos. Con un enfoque integral y profesional, velamos por la eficiencia, minimizando imprevistos y garantizando resultados óptimos para nuestros clientes.",
      image: "https://res.cloudinary.com/dby8lelja/image/upload/v1737490967/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Supervisi%C3%B3n_de_Obras_s463d0.webp",
     link: "https://www.estructurasverticales.com/servicios/supervision-de-obra"
    },
    {
      title: "Elaboración de Pliegos de Condiciones",
      description: "Ofrecemos servicios de Elaboración de Pliegos de Condiciones para asegurar proyectos bien estructurados. Redactamos pliegos que especifican los requisitos técnicos, legales y financieros necesarios. Nos enfocamos en cumplir con la normativa vigente para un proceso claro y eficiente. Nuestra experiencia garantiza que cada pliego sea preciso y funcional. Aseguramos la transparencia y el éxito en la ejecución de cada proyecto.",
      image: "https://res.cloudinary.com/dby8lelja/image/upload/v1737490967/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Elaboraci%C3%B3n_de_Pliegos_de_Condiciones_m0paon.webp",
     link: "https://www.estructurasverticales.com/servicios/elaboracion-de-pliegos-de-condiciones"
    },
    {
      title: "Montaje Estructural",
      description: "En nuestra empresa ofrecemos servicios de Montajes Estructurales de alta calidad. Ejecutamos soluciones personalizadas para cada proyecto, asegurando precisión y resistencia. Utilizamos materiales de primera y tecnología avanzada en cada etapa del proceso. Nuestro equipo de expertos garantiza la instalación eficiente y segura de las estructuras. Brindamos confianza a nuestros clientes al entregar montajes duraderos y de alto rendimiento.",
      image: "https://res.cloudinary.com/dby8lelja/image/upload/v1737490967/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Dise%C3%B1o_y_Fabricaci%C3%B3n_de_Montajes_Estructurales_wvnte9.webp",
      link: "https://www.estructurasverticales.com/servicios/montaje-estructural"
    },
    
    {
      title: "Diseño Estructura de Obras",
      description: "Nos especializamos en Diseños Estructurales personalizados para cada tipo de proyecto. Creamos soluciones innovadoras y eficientes que aseguran la estabilidad y seguridad de las construcciones. Utilizamos tecnología avanzada y un equipo de expertos para desarrollar diseños precisos. Nos comprometemos a cumplir con los estándares de calidad y normativas vigentes. Garantizamos un trabajo integral que respalde la durabilidad y rendimiento de cada estructura.",
      image: "https://res.cloudinary.com/dby8lelja/image/upload/v1737490967/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Dise%C3%B1os_Estructurales_qwi7ih.webp",
     link: "https://www.estructurasverticales.com/servicios/diseno-estructural"
    },
    {
      title: "Recibo de Zonas Comunes PH",
      description: "Ofrecemos servicios de Recibo de Zonas Comunes PH para garantizar la correcta entrega de áreas comunes. Realizamos inspecciones detalladas para verificar el cumplimiento de normas y calidad. Nuestro equipo asegura que todas las instalaciones estén en condiciones óptimas. Gestionamos la documentación necesaria para formalizar la recepción. Brindamos confianza y respaldo en cada proceso, garantizando un resultado exitoso.",
      image: "https://res.cloudinary.com/dby8lelja/image/upload/v1737490967/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Recibo_de_Zonas_Comunes_PH_dutlzr.webp",
     link: "https://www.estructurasverticales.com/servicios/recibo-de-zonas-comunes-en-propiedad-horizontal-ph"
    },
    {
      title: "Informes Técnicos de Obras",
      description: "Ofrecemos la elaboración de Informes Técnicos precisos y detallados para cada proyecto. Nuestro equipo se encarga de recopilar y analizar toda la información relevante. Redactamos informes claros que facilitan la toma de decisiones informadas. Aseguramos que cada informe cumpla con los estándares de calidad y normativa. Brindamos soporte a nuestros clientes con documentación técnica confiable y profesional.",
      image: "https://res.cloudinary.com/dby8lelja/image/upload/v1737490967/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Informes_T%C3%A9cnicos_wevtom.webp",
     link: "https://www.estructurasverticales.com/servicios/informes-tecnicos-de-obras"
    },
  ];

export default function ServicesList() {
  return <ServicesCard services={services} />;
}
