const fs = require('fs');
const path = require('path');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.estructurasverticales.com',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  sitemapSize: 10000,
  sitemapBaseFileName: 'sitemap', // Nombre del archivo generado

  additionalPaths: async (config) => {
    try {
      const blogDir = path.join(process.cwd(), 'src/app/blog/posts'); // Ruta donde están los MDX

      const staticPaths = [
        { loc: '/servicios/interventoria-de-obras', lastmod: new Date().toISOString() },
        { loc: '/servicios/consultoria-de-obras', lastmod: new Date().toISOString() },
        { loc: '/servicios/impermeabilizacion', lastmod: new Date().toISOString() },
        { loc: '/servicios/diseno-estructural', lastmod: new Date().toISOString() },
        { loc: '/servicios/montaje-estructural', lastmod: new Date().toISOString() },
        { loc: '/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 }, // Página principal
        { loc: '/blog', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 0.9 }, // Página del blog
      ];

      if (!fs.existsSync(blogDir)) {
        console.warn('❗ Advertencia: La carpeta de posts no existe.');
        return staticPaths;
      }

      const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.mdx'));

      const blogPaths = files.map(file => ({
        loc: `/blog/${file.replace('.mdx', '')}`, // ✅ Eliminamos "/posts/"
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 0.8,
      }));

      return [...staticPaths, ...blogPaths];
    } catch (error) {
      console.error('🚨 Error al leer archivos MDX:', error);
      return [];
    }
  },
};
