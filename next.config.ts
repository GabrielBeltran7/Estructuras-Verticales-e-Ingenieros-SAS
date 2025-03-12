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
  },
});

module.exports = nextConfig;


