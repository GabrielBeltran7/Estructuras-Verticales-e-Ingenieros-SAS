import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const protocol = request.headers.get("x-forwarded-proto");
  const isNotHttps = protocol !== "https";
  const isNotWww = nextUrl.hostname === "estructurasverticales.com"; // Solo afecta el dominio raíz

  // Si la URL ya está correcta (HTTPS y con "www."), continuar normalmente
  if (!isNotHttps && !isNotWww) {
    return NextResponse.next();
  }

  // Construir la URL corregida
  const redirectUrl = new URL(nextUrl.toString());

  // Forzar HTTPS si es necesario
  if (isNotHttps) {
    redirectUrl.protocol = "https:";
  }

  // Asegurar que tiene "www." solo en el dominio raíz
  if (isNotWww) {
    redirectUrl.hostname = "www.estructurasverticales.com"; // Establecer directamente el dominio correcto
  }

  // Realizar la redirección 301 (permanente)
  return NextResponse.redirect(redirectUrl, 301);
}

// Aplicar a todas las rutas de páginas, excluyendo assets internos de Next,
// archivos estáticos y metadatos (favicon, robots, sitemap, etc.).
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|sitemap-0.xml|.*\\.(?:xml|txt|png|jpg|jpeg|webp|avif|gif|svg|ico|pdf|woff2?|ttf|otf|html)$).*)",
  ],
};
