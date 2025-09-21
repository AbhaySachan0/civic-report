import { useState } from "react";
import MonthlyTrends from "./components/MonthlyTrends";
import CategoryDistribution from "./components/CategoryDistribution";
import RecentComplaints from "./components/RecentComplaints";
import CityHeatmap from "./components/CityHeatmap";
import AdminHeader from "./components/AdminHeader";

interface AdminDashboardProps {
  adminEmail: string;
  onLogout: () => void;
}

export default function AdminDashboard({ adminEmail, onLogout }: AdminDashboardProps) {
  const [activeSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MonthlyTrends />
            <CategoryDistribution />
            <div className="lg:col-span-2">
              <RecentComplaints />
            </div>
            <div className="lg:col-span-2">
              <CityHeatmap />
            </div>
          </div>
        );
      case "complaints":
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              All Complaints
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Complaints management interface will go here.
            </p>
          </div>
        );
      case "analytics":
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Analytics
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Analytics and reports will go here.
            </p>
          </div>
        );
      case "leaderboard":
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Leaderboard
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Leaderboard section will go here.
            </p>
          </div>
        );
      case "settings":
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Settings
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Settings section will go here.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Admin Header with props */}
      <AdminHeader adminEmail={adminEmail} onLogout={onLogout} />

      {/* Removed Sidebar → now just main content */}
      <main className="p-6 max-w-7xl mx-auto">{renderContent()}</main>
    </div>
  );
}
