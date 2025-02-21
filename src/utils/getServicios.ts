
import servicesData from "@/app/data/services.json";

type Servicio = {
  id: string;
  title: string;
  description: string;
  imagenprincipal: string;
  parrafo1: string;
  parrafo2: string;
  parrafo3: string;
  parrafo4: string;
  services: { title: string; description: string }[];
  benefits: string[];
  testimonials: { client: string; project: string; feedback: string; image: string }[];
  faqs: { question: string; answer: string }[];
  metadata: { title: string; slug: string; description: string; keywords: string; image: string }[];
  Proyectosrealizados: { title: string; description: string; image: string }[];
  case_studies: { title: string; description: string; image: string }[];
  statistics: { years_of_experience: number; completed_projects: number; satisfied_clients: number; cost_reduction_average: string };
  blog: { title: string; excerpt: string; image: string; url: string }[];
  contact: { phone: string; email: string; address: string; map_location: string };
  chat: { whatsapp: string; live_chat: boolean };
};

// ✅ Obtener todos los servicios
export async function getAllServicios(): Promise<Servicio[]> {
  return servicesData;
}

// ✅ Obtener un servicio por ID
export async function getServicioById(id: string): Promise<Servicio | null> {
  return (
    servicesData.find((s) => s.id.toLowerCase() === decodeURIComponent(id).toLowerCase()) || null
  );
}

// ✅ Generar metadatos SEO optimizados
export function getMetadata(servicio: Servicio) {
  const metadata = servicio.metadata?.[0] ?? {
    title: servicio.title,
    description: servicio.description,
    keywords: "",
    image: "/default-image.jpg",
  };

  const organization = {
    "@type": "Organization",
    name: "Estructuras Verticales e Ingenieros SAS",
    url: "https://www.estructurasverticales.com/",
    logo: "https://www.estructurasverticales.com/favicon.ico",
    address: {
      "@type": "PostalAddress",
      streetAddress: "KR 7 B BIS # 126 - 36",
      addressLocality: "Bogotá",
      addressRegion: "Cundinamarca",
      addressCountry: "CO",
      postalCode: "110111",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57 3132581599",
      contactType: "customer service",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: metadata.title,
    description: metadata.description,

    provider: organization, // La empresa provee el servicio
    url: `https://www.estructurasverticales.com/servicios/${servicio.id}`,
    serviceType: metadata.title,
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    offers: {
      "@type": "Offer",
      price: "A convenir",
      priceCurrency: "COP",
    },
    image: metadata.image,
  };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords || "servicio, empresa, solución, calidad",
    alternates: {
      canonical: `https://www.estructurasverticales.com/servicios/${servicio.id}`,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://www.estructurasverticales.com/servicios/${servicio.id}`,
      type: "article",
      siteName: "Estructuras Verticales e Ingenieros SAS",
      images: [{ url: metadata.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      image: metadata.image,
    },
    jsonLd: serviceSchema, // Retornamos el JSON-LD corregido
  };
}

