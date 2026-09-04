import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
    formats: ["image/avif", "image/webp"] as any,
    minimumCacheTTL: 31536000,
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false,
  },
  headers: async () => [
    {
      // Assets con hash de Next: nunca cambian, se pueden cachear para siempre.
      source: "/_next/static/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      // Imágenes optimizadas por next/image.
      source: "/_next/image/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      // Archivos estáticos en /public (imágenes, fuentes, pdf, íconos).
      source:
        "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|pdf|woff|woff2|ttf|otf)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    // El HTML de las páginas ya no se cachea de forma "immutable":
    // así las actualizaciones de contenido se ven de inmediato.
  ],
  // Servicios retirados (siguen guardados en services.json con active:false
  // por si se reactivan o se llevan a otra web): se redirigen al home en
  // vez de dar 404, para no perder el posicionamiento ni romper enlaces.
  redirects: async () => [
    {
      source: "/servicios/montaje-estructural",
      destination: "/",
      permanent: true,
    },
    {
      source: "/servicios/alquiler-de-maquinaria-pesada",
      destination: "/",
      permanent: true,
    },
  ],
};

export default nextConfig;
