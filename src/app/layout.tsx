import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Expertos en Interventoría, Supervisión de Obras y Diseño Estructural en Colombia.",
  description:
    "Brindamos interventoría de obras, supervisión y diseño estructural con enfoque en calidad y cumplimiento de las normativas de construcción en Colombia.",
  keywords:
    "interventoría de obras, supervisión de obras, diseño estructural, consultoria de obras, montajes estructurales, normativas NSR-10, recibo de zonas comunes propiedad horizontal, informes técnicos, diseño estructural en Bogotá, elaboracion de pliegos de condiciones, supervisión de obras civiles en Colombia",
  openGraph: {
    title:
      "Expertos en Interventoría, Supervisión de Obras y Diseño Estructural en Colombia.",
    description:
      "Brindamos interventoría, supervisión de obras y diseño estructural con un enfoque en calidad y cumplimiento de las normativas NSR-10 en Colombia.",
    url: "https://www.estructurasverticales.com",
    siteName: "Estructuras Verticales e Ingenieros SAS",
    images: [
      {
        url: "https://res.cloudinary.com/dby8lelja/image/upload/v1738035132/Estructuras%20Verticales%20e%20Ingenieros%20SAS/openGraph_xilvsc.webp",
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

        {/* Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-FX2Y088ME7`}
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FX2Y088ME7');
            `,
          }}
        />

        {/* Clarity tracking code */}
        <Script
          id="clarity-tracking"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/qa9vzct85t?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "qa9vzct85t");
            `,
          }}
        />

        {/* Adding structured data for services */}
        <Script
          id="structured-data-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Estructuras Verticales e Ingenieros SAS",
                  "url": "https://www.estructurasverticales.com/",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "KR 7 B BIS # 126 - 36",
                    "addressLocality": "Bogota",
                    "addressRegion": "Cundinamarca",
                    "addressCountry": "CO",
                    "postalCode": "110611"  
                  },
                  "telephone": "+57 3132581599"
                },
                  {
                  "@type": "Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Estructuras Verticales e Ingenieros SAS",
                    "url": "https://www.estructurasverticales.com/",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "KR 7 B BIS # 126 - 36",
                      "addressLocality": "Bogota",
                      "addressRegion": "Cundinamarca",
                      "addressCountry": "CO",
                      "postalCode": "110611" 
                    },
                    "telephone": "+57 3132581599"
                  },
                  "name": "Interventoría de Obras",
                  "description": "Supervisión y control de proyectos de construcción para garantizar cumplimiento de normativas, costos y tiempos.",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servicios Relacionados",
                    "itemListElement": [
                      {
                        "@type": "Service",
                        "name": "Supervisión de Obras",
                        "url": "https://www.estructurasverticales.com",
                        "image": "https://res.cloudinary.com/dby8lelja/image/upload/v1739641319/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Imagenes%20Blog/Estructuras_Verticales_e_Ingenieros_SAS_qmjon6.webp"

                      },
                      {
                        "@type": "Service",
                        "name": "Consultoría de Obras",
                        "url": "https://www.estructurasverticales.com",
                        "image": "https://res.cloudinary.com/dby8lelja/image/upload/v1739641319/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Imagenes%20Blog/Estructuras_Verticales_e_Ingenieros_SAS_qmjon6.webp"

                      }
                    ]
                  },
                  "url": "https://www.estructurasverticales.com"
                },

             {
                  "@type": "Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Estructuras Verticales e Ingenieros SAS",
                    "url": "https://www.estructurasverticales.com/",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "KR 7 B BIS # 126 - 36",
                      "addressLocality": "Bogota",
                      "addressRegion": "Cundinamarca",
                      "addressCountry": "CO",
                      "postalCode": "110611" 
                    },
                    "telephone": "+57 3132581599"
                  },
                  "name": "Consultoria de Obras",
                  "description": "Asesoría técnica especializada en planificación, ejecución y control de proyectos de construcción.",
                  "url": "https://www.estructurasverticales.com",
                  "image": "https://res.cloudinary.com/dby8lelja/image/upload/v1739641319/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Imagenes%20Blog/Estructuras_Verticales_e_Ingenieros_SAS_qmjon6.webp"

                },

                {
                  "@type": "Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Estructuras Verticales e Ingenieros SAS",
                    "url": "https://www.estructurasverticales.com/",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "KR 7 B BIS # 126 - 36",
                      "addressLocality": "Bogota",
                      "addressRegion": "Cundinamarca",
                      "addressCountry": "CO",
                      "postalCode": "110611" 
                    },
                    "telephone": "+57 3132581599"
                  },
                  "name": "Impermeabilización",
                  "description": "Protección de estructuras contra filtraciones y humedad con materiales de alta calidad.",
                  "url": "https://www.estructurasverticales.com",
                  "image": "https://res.cloudinary.com/dby8lelja/image/upload/v1739641319/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Imagenes%20Blog/Estructuras_Verticales_e_Ingenieros_SAS_qmjon6.webp"

                },


                {
                  "@type": "Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Estructuras Verticales e Ingenieros SAS",
                    "url": "https://www.estructurasverticales.com/",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "KR 7 B BIS # 126 - 36",
                      "addressLocality": "Bogota",
                      "addressRegion": "Cundinamarca",
                      "addressCountry": "CO",
                      "postalCode": "110611" 
                    },
                    "telephone": "+57 3132581599"
                  },
                  "name": "Supervisión de Obras",
                  "description": "Monitoreo integral de obras desde su inicio hasta su entrega, asegurando altos estándares de calidad.",
                  "url": "https://www.estructurasverticales.com",
                  "image": "https://res.cloudinary.com/dby8lelja/image/upload/v1739641319/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Imagenes%20Blog/Estructuras_Verticales_e_Ingenieros_SAS_qmjon6.webp"

                },


                {
                  "@type": "Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Estructuras Verticales e Ingenieros SAS",
                    "url": "https://www.estructurasverticales.com/",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "KR 7 B BIS # 126 - 36",
                      "addressLocality": "Bogota",
                      "addressRegion": "Cundinamarca",
                      "addressCountry": "CO",
                      "postalCode": "110611" 
                    },
                    "telephone": "+57 3132581599"
                  },
                  "name": "Elaboración de Pliegos de Condiciones",
                  "description": "Creación de documentos técnicos y financieros para la contratación y ejecución de proyectos de construcción.",
                  "url": "https://www.estructurasverticales.com",
                  "image": "https://res.cloudinary.com/dby8lelja/image/upload/v1739641319/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Imagenes%20Blog/Estructuras_Verticales_e_Ingenieros_SAS_qmjon6.webp"

                },
                {
                  "@type": "Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Estructuras Verticales e Ingenieros SAS",
                    "url": "https://www.estructurasverticales.com/",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "KR 7 B BIS # 126 - 36",
                      "addressLocality": "Bogota",
                      "addressRegion": "Cundinamarca",
                      "addressCountry": "CO",
                      "postalCode": "110611" 
                    },
                    "telephone": "+57 3132581599"
                  },
                  "name": "Montaje Estructural",
                  "description": "Diseño y fabricación de montajes estructurales personalizados con materiales de alta calidad.",
                  "url": "https://www.estructurasverticales.com",
                  "image": "https://res.cloudinary.com/dby8lelja/image/upload/v1739641319/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Imagenes%20Blog/Estructuras_Verticales_e_Ingenieros_SAS_qmjon6.webp"

                },
                {
                  "@type": "Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Estructuras Verticales e Ingenieros SAS",
                    "url": "https://www.estructurasverticales.com",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "KR 7 B BIS # 126 - 36",
                      "addressLocality": "Bogota",
                      "addressRegion": "Cundinamarca",
                      "addressCountry": "CO",
                      "postalCode": "110611" 
                    },
                    "telephone": "+57 3132581599"
                  },
                  "name": "Diseño Estructural",
                  "description": "Desarrollo de diseños estructurales eficientes y seguros, cumpliendo con la normativa NSR-10.",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servicios Relacionados",
                    "itemListElement": [
                      {
                        "@type": "Service",
                        "name": "Supervisión de Obras",
                        "url": "https://www.estructurasverticales.com",
                        "image": "https://res.cloudinary.com/dby8lelja/image/upload/v1739641319/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Imagenes%20Blog/Estructuras_Verticales_e_Ingenieros_SAS_qmjon6.webp"

                      },
                      {
                        "@type": "Service",
                        "name": "Consultoría de Obras",
                        "url": "https://www.estructurasverticales.com",
                        "image": "https://res.cloudinary.com/dby8lelja/image/upload/v1739641319/Estructuras%20Verticales%20e%20Ingenieros%20SAS/Imagenes%20Blog/Estructuras_Verticales_e_Ingenieros_SAS_qmjon6.webp"

                      }
                    ]
                  },
                  "url": "https://www.estructurasverticales.com"
                }
              ]
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

