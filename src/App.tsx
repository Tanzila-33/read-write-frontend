import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Header } from "./components/layout/Header";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Editor } from "./pages/Editor";
import ProfilePage from "./pages/Profile";
import MyPosts from "./pages/MyPosts";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/profile" element={<ProfilePage />} />
            <Route path="/dashboard/my-posts" element={<MyPosts />} />
            <Route path="/new-story" element={<Editor />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
