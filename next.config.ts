const withMDX = require("@next/mdx")();

const nextConfig = withMDX({
  experimental: { mdxRs: true }, // Activa MDX en Next.js 15
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
    formats: ["image/avif", "image/webp"], // Usa formatos más eficientes
    minimumCacheTTL: 31536000, // Cachea imágenes en la CDN por 1 año
    deviceSizes: [320, 420, 768, 1024, 1200], // Tamaños optimizados para dispositivos
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Mejora la entrega según tamaños de imagen
    unoptimized: false, // Asegura que Next.js haga la optimización
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable", // Mejora la cache de imágenes
        },
      ],
    },
  ],
});

module.exports = nextConfig;
