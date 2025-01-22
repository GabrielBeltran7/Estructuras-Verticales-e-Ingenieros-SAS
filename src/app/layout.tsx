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
  title: "Estructuras Verticales e Ingenieros SAS - Interventoria y Diseño Estructural",
  description: "Interventoría de obras, supervisión y diseño estructural en Colombia. Cumplimos con normativas de construcción y garantizamos calidad en cada proyecto.",
  keywords: "interventoría de obras, supervisión de obras, diseño estructural, montajes estructurales, normativas NSR-10, propiedad horizontal, informes técnicos",
  openGraph: {
    title: "Estructuras Verticales e Ingenieros SAS - Interventoría y Diseño Estructural",
    description: "Expertos en interventoría, supervisión de obras y diseño estructural en Colombia. Cumplimos con normativas NSR-10 y garantizamos calidad.",
    url: "https://www.estructurasverticaleseingenieros.com/",
    siteName: "Estructuras Verticales e Ingenieros SAS",
    images: [
      {
        url: "https://res.cloudinary.com/dby8lelja/image/upload/v1737553290/Estructuras%20Verticales%20e%20Ingenieros%20SAS/interventor%C3%ADa_de_obras_supervisi%C3%B3n_de_obras_dise%C3%B1o_estructural_montajes_estructurales_oru8yv.png",
        width: 1200,
        height: 630,
        alt: "Interventoría y Supervisión de Obras en Colombia",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
