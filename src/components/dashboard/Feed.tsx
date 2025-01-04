import { Post } from "../../types";
import { BlogCard } from "../blog/BlogCard";
import { useEffect, useState } from "react";

export function Feed() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://read-write-backend.vercel.app/api/v1/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data));
  }, []);
  return (
    <main className="flex-1">
      <div className="space-y-6">
        {blogs.map((post: Post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </main>
  );
}
