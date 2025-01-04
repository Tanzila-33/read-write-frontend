import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Image, Link as LinkIcon } from "lucide-react";
import { getFromLocalStorage } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

export function Editor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const token = getFromLocalStorage("accessToken");
  // if (!user) return null;
  const navigate = useNavigate();
  const handlePublish = async () => {
    // TODO: Implement publishing logic
    const res = await fetch(
      "https://read-write-backend.vercel.app/api/v1/blog",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: token || "",
        },
        body: JSON.stringify({ title, content, coverImage, likes: 0 }),
      }
    );
    const data = await res.json();
    if (data.success) {
      alert("Blog Published");
      navigate("/dashboard");
    }
  };
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-4xl font-serif font-bold border-none outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="mb-6 flex gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => {
              const url = window.prompt("Enter image URL");
              if (url) setCoverImage(url);
            }}
          >
            <Image className="w-4 h-4" />
            Add Cover
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => {
              const url = window.prompt("Enter link URL");
              if (url) {
                setContent((prev) => prev + ` [${url}](${url})`);
              }
            }}
          >
            <LinkIcon className="w-4 h-4" />
            Add Link
          </Button>
        </div>

        {coverImage && (
          <div className="mb-8 relative">
            <img
              src={coverImage}
              alt="Cover"
              className="w-full h-64 object-cover rounded-lg"
            />
            <button
              onClick={() => setCoverImage("")}
              className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
            >
              ×
            </button>
          </div>
        )}

        <textarea
          placeholder="Tell your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full min-h-[400px] text-lg border-none outline-none resize-none placeholder:text-gray-400"
        />

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="max-w-4xl mx-auto flex justify-end">
            <Button onClick={handlePublish}>Publish</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
