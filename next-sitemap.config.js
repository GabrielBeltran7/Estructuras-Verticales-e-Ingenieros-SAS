const fs = require('fs');
const path = require('path');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.estructurasverticales.com',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  sitemapSize: 10000,
  sitemapBaseFileName: 'sitemap', // Nombre del archivo generado

  additionalPaths: async () => {
    try {
      const blogDir = path.join(process.cwd(), 'src/app/blog/posts'); // Ruta donde están los MDX

      if (!fs.existsSync(blogDir)) {
        console.warn('❗ Advertencia: La carpeta de posts no existe.');
        return [
          { loc: '/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 },
          { loc: '/blog', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 0.9 },
        ];
      }

      const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.mdx'));

      return [
        { loc: '/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 }, // Página principal
        { loc: '/blog', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 0.9 }, // Página del blog
        ...files.map(file => ({
          loc: `/blog/${file.replace('.mdx', '')}`, // ✅ Eliminamos "/posts/"
          lastmod: new Date().toISOString(),
          changefreq: 'daily', // Cambié a 'daily' para todos los posts
          priority: 0.8,
        })),
      ];
    } catch (error) {
      console.error('🚨 Error al leer archivos MDX:', error);
      return [];
    }
  },
};


// const fs = require('fs');
// const path = require('path');

// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: 'https://www.estructurasverticales.com',
//   generateRobotsTxt: false,
//   generateIndexSitemap: false,
//   sitemapSize: 10000,
//   sitemapBaseFileName: 'sitemap', // Nombre del archivo generado

//   additionalPaths: async () => {
//     try {
//       const blogDir = path.join(process.cwd(), 'src/app/blog/posts'); // Ruta donde están los MDX

//       if (!fs.existsSync(blogDir)) {
//         console.warn('❗ Advertencia: La carpeta de posts no existe.');
//         return [
//           { loc: '/', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
//           { loc: '/blog', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
//         ];
//       }

//       const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.mdx'));

//       return [
//         { loc: '/', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 }, // Página principal
//         { loc: '/blog', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 }, // Página del blog
//         ...files.map(file => ({
//           loc: `/blog/${file.replace('.mdx', '')}`, // ✅ Eliminamos "/posts/"
//           lastmod: new Date().toISOString(),
//           changefreq: 'weekly',
//           priority: 0.8,
//         })),
//       ];
//     } catch (error) {
//       console.error('🚨 Error al leer archivos MDX:', error);
//       return [];
//     }
//   },
// };
