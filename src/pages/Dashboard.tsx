import { Sidebar } from "../components/dashboard/Sidebar";
import { Feed } from "../components/dashboard/Feed";
import { TrendingSidebar } from "../components/dashboard/TrendingSidebar";

import { useProtectedRoute } from "../hooks/useProtectedRoute";

export function Dashboard() {
  const loggedIn = useProtectedRoute();
  if (!loggedIn) return null;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 py-6">
          <Sidebar />
          <Feed />
          <TrendingSidebar />
        </div>
      </div>
    </div>
  );
}
