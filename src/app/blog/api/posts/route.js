import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((fileName) => {
    const fileContent = fs.readFileSync(path.join(postsDirectory, fileName), "utf-8");
    const { data } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      slug: fileName.replace(".mdx", ""),
      image: data.image || "/placeholder.jpg",
    };
  });

  return Response.json(posts);
}
