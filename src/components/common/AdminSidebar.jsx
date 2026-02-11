import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  CreditCard,
  BarChart2,
  Briefcase,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
  { icon: ShoppingCart, label: "Orders", path: "/admin/orders"},
  { icon: Users, label: "Users", path: "/admin/users" },
  { icon: CreditCard, label: "Payments", path: "/admin/payments" },
  { icon: BarChart2, label: "Reports", path: "/admin/reports" },
  {icon: Briefcase, label: "Messages", path: "/admin/messages" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

const AdminSidebar = ({ isOpen, setIsOpen, isDark }) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64  min-h-screen ${isDark ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-[#2D3A5F] to-[#223054]'} text-white flex flex-col transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
      {/* Logo */}
      <div className="px-6 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-green-500 px-2.5 py-1.5 rounded-lg font-bold text-xs">
            RE
          </div>
          <span className="text-lg font-bold">Raut Enterprises</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden p-1 ml-2 bg-red-500 hover:bg-red-600 rounded">
          <X size={20} />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 space-y-1.5 mt-3">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={`flex items-center justify-between px-4 py-2.5 rounded-xl cursor-pointer transition text-sm ${
              location.pathname === item.path
                ? "bg-green-500 shadow-lg"
                : "hover:bg-white/10 text-gray-300"
            }`}
          >
            <div className="flex items-center space-x-3">
              <item.icon size={18} />
              <span className="font-medium">{item.label}</span>
            </div>

            {item.dot && (
              <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
            )}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-4 py-4">
        <button 
          onClick={() => {
            localStorage.removeItem('adminAuth');
            window.location.href = '/admin';
          }}
          className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm"
        >
          <LogOut size={18} />
          <span className="font-semibold">Logout</span>
        </button>
      </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
