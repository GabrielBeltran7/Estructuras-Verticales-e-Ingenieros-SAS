# Estructuras Verticales e Ingenieros SAS

Sitio web corporativo de **Estructuras Verticales e Ingenieros SAS**: interventoría,
consultoría, supervisión de obras, diseño estructural y servicios relacionados de
propiedad horizontal en Colombia.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19
- TypeScript
- Estilos: CSS Modules + MUI (carrusel de servicios) + Tailwind CSS v4 (tablas en el blog)
- Blog en MDX (`next-mdx-remote`)
- SEO: metadata + JSON-LD + `next-sitemap`
- Imágenes servidas desde Cloudinary
- Analítica: Google Tag Manager, Google Analytics 4, Microsoft Clarity
- Despliegue: Vercel

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script          | Descripción                                        |
| --------------- | -------------------------------------------------- |
| `npm run dev`   | Servidor de desarrollo                             |
| `npm run build` | Build de producción (genera el sitemap en `postbuild`) |
| `npm start`     | Sirve el build de producción                       |
| `npm run lint`  | ESLint (`next lint`)                               |

## Estructura

```
src/app/
  page.tsx              # Home
  layout.tsx            # Metadata global + scripts de analítica + JSON-LD
  servicios/[id]/       # Página de detalle por servicio (datos en data/services.json)
  blog/                 # Índice del blog + [slug] (posts en blog/posts/*.mdx)
  Components/            # Componentes de UI
  data/services.json    # Única fuente de verdad de los servicios
```

## Contenido

- **Servicios**: editar `src/app/data/services.json`. El menú, las páginas de detalle
  (`/servicios/<id>`) y el sitemap se generan a partir de ese archivo.
- **Blog**: agregar un `.mdx` en `src/app/blog/posts/` con frontmatter
  (`title`, `date`, `description`, `keywords`, `slug`, `image`, ...).
