import React from "react";
import { Bell, Mail, Menu } from "lucide-react";

const AdminNavbar = ({ onMenuClick }) => {
  return (
    <header className="bg-white h-16 px-4 md:px-8 flex items-center justify-between shadow-sm">
      {/* Left */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 bg-[#2D3A5F] hover:bg-[#223054] rounded-lg"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
        <span className="text-lg md:text-2xl font-bold text-gray-800">Dashboard</span>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-3 md:space-x-6">
        <Bell className="text-gray-500 cursor-pointer w-5 h-5 md:w-6 md:h-6" />
        <Mail className="text-gray-500 cursor-pointer w-5 h-5 md:w-6 md:h-6" />

        <div className="flex items-center space-x-2 md:space-x-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="Admin"
            className="w-8 h-8 md:w-9 md:h-9 rounded-full"
          />
          <span className="font-semibold text-gray-700 hidden sm:block">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
