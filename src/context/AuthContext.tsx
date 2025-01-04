import React, { createContext, useContext, useState } from "react";

import { getFromLocalStorage, setToLocalStorage } from "../utils/localStorage";

interface AuthContextType {
  login: (email: string, password: string) => Promise<boolean>;
  signup: (
    email: string,
    password: string,
    first_name: string,
    last_name: string
  ) => Promise<void>;
  logout: () => void;
  loggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(
    getFromLocalStorage("accessToken") ? true : false
  );
  const login = async (email: string, password: string): Promise<boolean> => {
    const res = await fetch(
      "https://read-write-backend.vercel.app/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const { data } = await res.json();

    setToLocalStorage("accessToken", data.accessToken);
    setLoggedIn(true);
    return true;
  };

  const signup = async (
    email: string,
    password: string,
    first_name: string,
    last_name: string
  ) => {
    const res = await fetch(
      "https://read-write-backend.vercel.app/api/v1/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, first_name, last_name }),
      }
    );
    const data = await res.json();
    return data;
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ login, signup, logout, loggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
