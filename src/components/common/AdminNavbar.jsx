import React, { useState, useEffect } from "react";
import { Bell, Mail, Menu, Moon, Sun, LogOut, User } from "lucide-react";

const AdminNavbar = ({ onMenuClick, isDark, setIsDark }) => {
  const [newOrdersCount, setNewOrdersCount] = useState(0);

  const fetchNewOrdersCount = () => {
    fetch("https://e-seva-kendra-b.onrender.com/api/orders")
      .then(res => res.json())
      .then(data => {
        const pendingOrders = data.filter(order => order.status === "Pending");
        setNewOrdersCount(pendingOrders.length);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchNewOrdersCount();
    
    // Auto-refresh every 1 second
    const interval = setInterval(fetchNewOrdersCount, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`h-14 md:h-16 px-2 md:px-4 m-2 md:m-4 rounded-3xl flex items-center justify-between shadow-sm ${isDark ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-[#2D3A5F] to-[#223054]'}`}>
      {/* Left */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-1.5 md:p-2 bg-[#2D3A5F] hover:bg-[#223054] rounded-lg"
        >
          <Menu className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
        <span className={`text-base md:text-2xl font-bold ${isDark ? 'text-white' : 'text-white'}`}>Dashboard</span>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-3 md:space-x-6">
        {/* Notification Bell */}
        <button 
          onClick={() => window.location.href = '/admin/orders'}
          className="relative p-1.5 md:p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Bell className="w-4 h-4 md:w-5 md:h-5 text-white" />
          {newOrdersCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
              {newOrdersCount}
            </span>
          )}
        </button>

        <button
          onClick={() => {
            localStorage.removeItem('adminAuth');
            window.location.href = '/admin';
          }}
          className="flex items-center gap-1 md:gap-2 px-2 py-1.5 md:px-3 md:py-2 bg-blue-500 hover:bg-green-600 rounded-lg transition-colors duration-200"
        >
          <LogOut className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
          <span className="text-white text-sm font-medium hidden sm:block">Logout</span>
        </button>
        <div className="flex items-center space-x-2 md:space-x-3">
          <button 
            onClick={() => window.location.href = '/admin/settings'}
            className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-green-600 hover:bg-blue-600 flex items-center justify-center transition-colors cursor-pointer "
          >
            <User className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </button>
          
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
