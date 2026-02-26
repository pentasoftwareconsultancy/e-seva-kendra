import React from "react";
import { Bell, Mail, Menu, Moon, Sun, LogOut } from "lucide-react";

const AdminNavbar = ({ onMenuClick, isDark, setIsDark }) => {
  return (
    <header className={`h-16 px-4 m-4 rounded-3xl md:px-8 flex items-center justify-between shadow-sm ${isDark ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-[#2D3A5F] to-[#223054]'}`}>
      {/* Left */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 bg-[#2D3A5F] hover:bg-[#223054] rounded-lg"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
        <span className={`text-lg md:text-2xl font-bold ${isDark ? 'text-white' : 'text-white'}`}>Dashboard</span>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-3 md:space-x-6">
        {/* Notification Bell */}
        <button 
          onClick={() => window.location.href = '/admin/orders'}
          className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Bell className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
            3
          </span>
        </button>

        <button
          onClick={() => {
            localStorage.removeItem('adminAuth');
            window.location.href = '/admin';
          }}
          className="flex items-center gap-2 px-3 py-2 bg-blue-500 hover:bg-green-600 rounded-lg transition-colors duration-200"
        >
          <LogOut className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium hidden sm:block">Logout</span>
        </button>
        <div className="flex items-center space-x-2 md:space-x-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="Admin"
            className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-green-300"
          />
          <span className={`font-semibold hidden sm:block ${isDark ? 'text-white' : 'text-white'}`}>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
