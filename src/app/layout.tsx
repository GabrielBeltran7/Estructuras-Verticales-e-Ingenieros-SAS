import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // ⚠️ Verificar que esta fuente existe en Google Fonts
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expertos en Interventoría, Supervisión de Obras y Diseño Estructural en Colombia.",
  description: "Brindamos interventoría de obras, supervisión y diseño estructural con enfoque en calidad y cumplimiento de las normativas de construcción en Colombia.",
  keywords: "interventoría de obras, supervisión de obras, diseño estructural, montajes estructurales, normativas NSR-10, propiedad horizontal, informes técnicos, diseño estructural en Bogotá, supervisión de obras civiles en Colombia",
  openGraph: {
    title: "Expertos en Interventoría, Supervisión de Obras y Diseño Estructural en Colombia.",
    description: "Brindamos interventoría, supervisión de obras y diseño estructural con un enfoque en calidad y cumplimiento de las normativas NSR-10 en Colombia.",
    url: "https://www.estructurasverticales.com",
    siteName: "Estructuras Verticales e Ingenieros SAS",
    images: [
      {
        url: "https://res.cloudinary.com/dby8lelja/image/upload/v1737553290/Estructuras%20Verticales%20e%20Ingenieros%20SAS/interventor%C3%ADa_de_obras_supervisi%C3%B3n_de_obras_dise%C3%B1o_estructural_montajes_estructurales_oru8yv.png",
        width: 1200,
        height: 630,
        alt: "Interventoría y Supervisión de Obras en Colombia con Estructuras Verticales e Ingenieros SAS",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-961248864"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-961248864');
            `,
          }}
        />

        {/* Datos estructurados de Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Estructuras Verticales e Ingenieros SAS",
              "url": "https://www.estructurasverticales.com/",
              "logo": "https://www.estructurasverticales.com/favicon.ico",
              "description": "Somos una empresa dedicada a la  interventoría, supervisión de obras y diseño estructural con un enfoque en calidad y cumplimiento de las normativas NSR-10 en Colombia.",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Servico de Interventoria, Supervisión de Obras y Diseño Estructural en Colombia.",
              "url": "https://www.estructurasverticales.com/",
              "description": "Brindamos interventoría, supervisión de obras y diseño estructural con un enfoque en calidad y cumplimiento de las normativas NSR-10 en Colombia.",
             
            }),
          }}
        />

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Expertos en Interventoría, Supervisión de Obras, Diseño y Montaje Estructural en Colombia",
      "url": "https://www.estructurasverticales.com/",
      "description": "Ofrecemos servicios especializados en interventoría de obras, supervisión de obras civiles, diseño estructural, montajes estructurales, cumplimiento de las normativas NSR-10, propiedad horizontal, informes técnicos de obras y supervisión de obras civiles en Colombia. Soluciones integrales en diseño estructural en Bogotá y todo el país.",
      "keywords": "interventoría de obras, supervisión de obras, diseño estructural, montajes estructurales, propiedad horizontal, informes técnicos de obras, diseño estructural en Bogotá, supervisión de obras civiles en Colombia",
      "service": [
        {
          "@type": "Service",
          "name": "Interventoría de Obras",
          "url": "https://www.estructurasverticales.com/",
          "description": "En nuestra empresa ofrecemos servicios de Interventoría de Obras para garantizar la ejecución adecuada de proyectos de construcción. Nos encargamos de supervisar y controlar todas las fases del proceso constructivo, asegurando el cumplimiento de los plazos, presupuestos y calidad especificada. Con nuestra experiencia, brindamos confianza a nuestros clientes, minimizando riesgos y maximizando la eficiencia en cada obra.",
        },
        {
          "@type": "Service",
          "name": "Supervisión de Obras",
          "url": "https://www.estructurasverticales.com/",
          "description": "Brindamos servicios de Supervisión de Obras para asegurar el correcto desarrollo de cada proyecto. Nos encargamos de supervisar todas las etapas de la construcción, desde el inicio hasta la entrega final, asegurando que se cumplan los estándares de calidad y los plazos establecidos. Con un enfoque integral y profesional, velamos por la eficiencia, minimizando imprevistos y garantizando resultados óptimos para nuestros clientes.",
        },
        {
          "@type": "Service",
          "name": "Diseño Estructural",
          "url": "https://www.estructurasverticales.com/",
          "description": "Nos especializamos en Diseños Estructurales personalizados para cada tipo de proyecto. Creamos soluciones innovadoras y eficientes que aseguran la estabilidad y seguridad de las construcciones. Utilizamos tecnología avanzada y un equipo de expertos para desarrollar diseños precisos. Nos comprometemos a cumplir con los estándares de calidad y normativas vigentes. Garantizamos un trabajo integral que respalde la durabilidad y rendimiento de cada estructura.",
        },


        {
          "@type": "Service",
          "name": "Diseño y Fabricación de Montajes Estructurales",
          "url": "https://www.estructurasverticales.com/",
          "description": "En nuestra empresa ofrecemos servicios de Diseño y Fabricación de Montajes Estructurales de alta calidad. Desarrollamos soluciones personalizadas para cada proyecto, asegurando precisión y resistencia. Utilizamos materiales de primera y tecnología avanzada en cada etapa del proceso. Nuestro equipo de expertos garantiza la ejecución eficiente y segura de los montajes. Brindamos confianza a nuestros clientes al entregar estructuras duraderas y de alto rendimiento.",
        },
        {
          "@type": "Service",
          "name": "Impermeabilizacion",
          "url": "https://www.estructurasverticales.com/",
          "description": "Ofrecemos soluciones profesionales de impermeabilización para proteger tus estructuras de filtraciones y humedad. Utilizamos materiales de alta calidad como membranas asfálticas, acrílicas y poliuretánicas según cada necesidad. Nuestro equipo experto garantiza un trabajo eficiente y duradero en techos, terrazas, muros y cimentaciones. Prevenimos filtraciones, moho y deterioro estructural con técnicas avanzadas. Confía en nosotros para mantener tus espacios seguros y en perfectas condiciones.",
        },
        {
          "@type": "Service",
          "name": "Recibo de Zonas Comunes, Propiedad Horizontal",
          "url": "https://www.estructurasverticales.com/",
          "description": "Ofrecemos servicios de Recibo de Zonas Comunes PH para garantizar la correcta entrega de áreas comunes. Realizamos inspecciones detalladas para verificar el cumplimiento de normas y calidad. Nuestro equipo asegura que todas las instalaciones estén en condiciones óptimas. Gestionamos la documentación necesaria para formalizar la recepción. Brindamos confianza y respaldo en cada proceso, garantizando un resultado exitoso.",
        },
        {
          "@type": "Service",
          "name": "Informes Técnicos de Obras",
          "url": "https://www.estructurasverticales.com/",
          "description": "Ofrecemos la elaboración de Informes Técnicos precisos y detallados para cada proyecto. Nuestro equipo se encarga de recopilar y analizar toda la información relevante. Redactamos informes claros que facilitan la toma de decisiones informadas. Aseguramos que cada informe cumpla con los estándares de calidad y normativa. Brindamos soporte a nuestros clientes con documentación técnica confiable y profesional.",
        },
        {
          "@type": "Service",
          "name": "Elaboración de Pliegos de Condiciones",
          "url": "https://www.estructurasverticales.com/",
          "description": "Ofrecemos servicios de Elaboración de Pliegos de Condiciones para asegurar proyectos bien estructurados. Redactamos pliegos que especifican los requisitos técnicos, legales y financieros necesarios. Nos enfocamos en cumplir con la normativa vigente para un proceso claro y eficiente. Nuestra experiencia garantiza que cada pliego sea preciso y funcional. Aseguramos la transparencia y el éxito en la ejecución de cada proyecto.",
        }
      ]
    }),
  }}
/>


        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://www.estructurasverticales.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Servicios",
                  "item": "https://www.estructurasverticales.com/#servicios"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Preguntas",
                  "item": "https://www.estructurasverticales.com/#preguntas"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Contacto",
                  "item": "https://www.estructurasverticales.com/#contacto"
                }
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
// export const metadata: Metadata = {
//   title: "Expertos en Interventoria, Supervisión de Obras y Diseño Estructural en Colombia.",
//   description: "Brindamos interventoría de obras, supervisión y diseño estructural con enfoque en calidad y cumplimiento de las normativas de construcción en Colombia.",
//   keywords: "interventoría de obras, supervisión de obras, diseño estructural, montajes estructurales, normativas NSR-10, propiedad horizontal, informes técnicos,  , diseño estructural en Bogotá, supervisión de obras civiles en Colombia",
//   openGraph: {
//     title: "Expertos en Interventoria, Supervisión de Obras y Diseño Estructural en Colombia.",
//     description: "Brindamos interventoría, supervisión de obras y diseño estructural con un enfoque en calidad y cumplimiento de las normativas NSR-10 en Colombia.",
//     url: "https://estructuras-verticales-e-ingenieros-sas-five.vercel.app",
//     siteName: "Estructuras Verticales e Ingenieros SAS",
//     images: [
//       {
//         url: "https://res.cloudinary.com/dby8lelja/image/upload/v1737553290/Estructuras%20Verticales%20e%20Ingenieros%20SAS/interventor%C3%ADa_de_obras_supervisi%C3%B3n_de_obras_dise%C3%B1o_estructural_montajes_estructurales_oru8yv.png",
//         width: 1200,
//         height: 630,
//         alt: "Interventoría y Supervisión de Obras en Colombia con Estructuras Verticales e Ingenieros SAS",
//       },
//     ],
//     type: "website",
//   },
//   robots: "index, follow",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="es">
//       <head>
//         {/* Favicon */}
//         <link rel="icon" href="/favicon.ico" sizes="any" />
       

//         {/* Google Tag Manager */}
//         <script async src="https://www.googletagmanager.com/gtag/js?id=AW-961248864"></script>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'AW-961248864');
//             `,
//           }}
//         />










//         {/* Datos estructurados de Schema.org para el logo */}
        
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               "name": "Estructuras Verticales e Ingenieros SAS",
//               "url": "https://www.estructurasverticales.com/",
//               "logo": "https://www.estructurasverticales.com/favicon.ico",
//             }),
//           }}
//         />



//       </head>
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }

