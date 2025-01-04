import { useState } from "react";
import { Home, PenSquare, User, BookOpen, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: BookOpen, label: "My Posts", path: "/dashboard/my-posts" },
    { icon: User, label: "Profile", path: "/dashboard/profile" },
  ];

  const handleNewPost = () => {
    navigate("/new-story");
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" p-2 bg-white rounded-md shadow-md"
        >
          <Menu className="w-6 h-6" />
        </button>
        {isOpen && (
          <div className="fixed right-0 inset-0 z-10 bg-white p-4 overflow-y-auto mt-10">
            <div className="max-w-sm mx-auto">
              <div className="flex justify-end items-center mb-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-black hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <button
                onClick={handleNewPost}
                className="w-full mb-6 flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                <PenSquare className="w-4 h-4" />
                New Post
              </button>
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-50 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="w-64 shrink-0 hidden md:block sticky">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <button
            className="w-full mb-6 flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
            onClick={handleNewPost}
          >
            <PenSquare className="w-4 h-4" />
            New Post
          </button>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-50 hover:text-primary transition-colors"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
