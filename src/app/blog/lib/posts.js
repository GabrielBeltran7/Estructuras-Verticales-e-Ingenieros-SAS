export async function getPosts() {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
      const response = await fetch(`${baseUrl}/blog/api/posts`, { cache: "no-store" });
      console.log("BASE URL:", process.env.NEXT_PUBLIC_BASE_URL);
  
      if (!response.ok) {
        throw new Error(`Error al cargar los posts: ${response.status} ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error cargando posts:", error);
      return [];
    }
  }
  
  