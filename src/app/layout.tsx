import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Expertos en Interventoria, Supervisión de Obras y Diseño Estructural en Colombia.",
  description: "Brindamos interventoría de obras, supervisión y diseño estructural con enfoque en calidad y cumplimiento de las normativas de construcción en Colombia.",
  keywords: "interventoría de obras, supervisión de obras, diseño estructural, montajes estructurales, normativas NSR-10, propiedad horizontal, informes técnicos,  , diseño estructural en Bogotá, supervisión de obras civiles en Colombia",
  openGraph: {
    title: "Expertos en Interventoria, Supervisión de Obras y Diseño Estructural en Colombia.",
    description: "Brindamos interventoría, supervisión de obras y diseño estructural con un enfoque en calidad y cumplimiento de las normativas NSR-10 en Colombia.",
    url: "https://estructuras-verticales-e-ingenieros-sas-five.vercel.app",
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
