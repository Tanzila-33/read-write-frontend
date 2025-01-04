import React, { useState } from "react";
import { PenLine, Waves } from "lucide-react";
import { Button } from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthModal } from "../auth/AuthModal";
import { useAuth } from "../../context/AuthContext";

export function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState<"login" | "signup">(
    "login"
  );
  const navigate = useNavigate();
  const { loggedIn, logout } = useAuth();
  const openAuthModal = (type: "login" | "signup") => {
    setAuthModalType(type);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center text-[#87CEEB]">
                <PenLine className="w-6 h-6" />
                <Waves className="w-6 h-6" />
              </div>
              <span className="font-serif text-xl font-medium">
                Read & Write
              </span>
            </Link>
            {loggedIn && (
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm" onClick={logout}>
                  Log Out
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </Button>
              </div>
            )}
            {!loggedIn && (
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => openAuthModal("login")}
                >
                  Sign In
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openAuthModal("signup")}
                >
                  Get Started
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        type={authModalType}
      />
    </>
  );
}
