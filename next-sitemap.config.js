const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

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

      // Servicios generados desde la única fuente de verdad: services.json
      // (evita rutas obsoletas o servicios faltantes en el sitemap).
      const servicios = require('./src/app/data/services.json');
      const servicioPaths = servicios.map((servicio) => ({
        loc: `/servicios/${servicio.id}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      }));

      const staticPaths = [
        ...servicioPaths,
        { loc: '/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 }, // Página principal
        { loc: '/blog', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 0.9 }, // Página del blog
      ];

      if (!fs.existsSync(blogDir)) {
        console.warn('❗ Advertencia: La carpeta de posts no existe.');
        return staticPaths;
      }

      const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.mdx'));

      // lastmod = fecha real del frontmatter del post, no la fecha del build.
      // Así Google no recibe la señal falsa de que los 65+ posts cambiaron hoy.
      const blogPaths = files.map(file => {
        const filePath = path.join(blogDir, file);
        const { data } = matter(fs.readFileSync(filePath, 'utf-8'));
        const parsedDate = data.date ? new Date(data.date) : null;
        const lastmod =
          parsedDate && !isNaN(parsedDate.getTime())
            ? parsedDate.toISOString()
            : new Date().toISOString();

        return {
          loc: `/blog/${file.replace('.mdx', '')}`, // ✅ Eliminamos "/posts/"
          lastmod,
          changefreq: 'monthly',
          priority: 0.8,
        };
      });

      return [...staticPaths, ...blogPaths];
    } catch (error) {
      console.error('🚨 Error al leer archivos MDX:', error);
      return [];
    }
  },
};
