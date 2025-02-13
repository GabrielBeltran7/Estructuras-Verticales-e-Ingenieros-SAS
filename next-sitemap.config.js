const fs = require('fs');
const path = require('path');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.estructurasverticales.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 10000,

  // Agregar manualmente las rutas de los archivos MDX
  additionalPaths: async (config) => {
    const blogDir = path.join(process.cwd(), 'src/app/blog/posts'); // Ruta de los MDX
    const files = fs.readdirSync(blogDir);

    return files
      .filter(file => file.endsWith('.mdx')) // Filtra solo archivos MDX
      .map(file => ({
        loc: `/blog/posts/${file.replace('.mdx', '')}`, // URL de cada post
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      }));
  },
};

