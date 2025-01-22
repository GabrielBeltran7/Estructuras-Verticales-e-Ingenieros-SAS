// middleware.js
export function middleware(request) {
    const url = request.url;
  
    // Verifica si la solicitud es HTTP y redirige a HTTPS
    if (url.startsWith("http://")) {
      return Response.redirect(url.replace("http://", "https://"), 301);
    }
  
    return Response.next();
  }
  