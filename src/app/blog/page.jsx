import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog() {
  const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((fileName) => {
    const fileContent = fs.readFileSync(path.join(postsDirectory, fileName), "utf-8");
    const { data } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      slug: fileName.replace(".mdx", ""),
    };
  });

  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title} - {post.date}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
