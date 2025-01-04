import React, { useEffect, useState } from "react";
import { BlogCard } from "../components/blog/BlogCard";
import { Post } from "../types";
import { getFromLocalStorage } from "../utils/localStorage";
import { Sidebar } from "../components/dashboard/Sidebar";

const MyPosts = () => {
  const [myPosts, setMyPosts] = useState([]);
  useEffect(() => {
    fetch("https://read-write-backend.vercel.app/api/v1/blog/my-blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: getFromLocalStorage("accessToken") || "",
      },
    })
      .then((res) => res.json())
      .then((data) => setMyPosts(data.data));
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 py-6">
          <Sidebar />
          <main className="flex-1 mt-10 px-10">
            <div className="space-y-6">
              {myPosts.map((post: Post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
