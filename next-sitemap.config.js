const fs = require('fs');
const path = require('path');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.estructurasverticales.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 10000,
  sitemapBaseFileName: 'sitemap-new', // Nombre del archivo generado

  additionalPaths: async () => {
    try {
      const blogDir = path.join(process.cwd(), 'src/app/blog/posts'); // Ruta donde están los MDX

      if (!fs.existsSync(blogDir)) {
        console.warn('❗ Advertencia: La carpeta de posts no existe.');
        return [];
      }

      const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.mdx'));

      return files.map(file => ({
        loc: `/blog/posts/${file.replace('.mdx', '')}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      }));
    } catch (error) {
      console.error('🚨 Error al leer archivos MDX:', error);
      return [];
    }
  },
};
