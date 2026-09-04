import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Lee los posts directamente del filesystem (server-side).
// Antes hacía un fetch HTTP a /blog/api/posts, lo que dependía de
// NEXT_PUBLIC_BASE_URL y fallaba en producción si no estaba definida.
export async function getPosts() {
  try {
    const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");
    const files = fs
      .readdirSync(postsDirectory)
      .filter((fileName) => fileName.endsWith(".mdx"));

    const posts = files.map((fileName) => {
      const fileContent = fs.readFileSync(
        path.join(postsDirectory, fileName),
        "utf-8"
      );
      const { data } = matter(fileContent);

      return {
        title: data.title,
        date: data.date,
        slug: fileName.replace(".mdx", ""),
        image: data.image || "/placeholder.jpg",
      };
    });

    // Más recientes primero. Fechas inválidas o faltantes van al final,
    // en vez de romper el orden.
    return posts.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      const safeA = Number.isFinite(dateA) ? dateA : -Infinity;
      const safeB = Number.isFinite(dateB) ? dateB : -Infinity;
      return safeB - safeA;
    });
  } catch (error) {
    console.error("Error cargando posts:", error);
    return [];
  }
}
