import React, { useState } from "react";
import AdminLayout from "../../components/common/AdminLayout";
import { Settings as SettingsIcon, Save } from 'lucide-react';
const AdminSettings = () => {
  const [settings, setSettings] = useState({
    email: "admin@rautenterprises.in",
    notifications: true,
    darkMode: false,
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handlePasswordSave = () => {
    if (password.new !== password.confirm) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
    setPassword({ current: "", new: "", confirm: "" });
  };

  return (
    <AdminLayout>
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <SettingsIcon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
        <h1 className="text-xl md:text-3xl font-bold text-[#1f2a44]">Settings
          <span></span>
        </h1>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 max-w-3xl">
        {/* General Settings */}
        <h2 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">
          General Settings
        </h2>

        <div className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-600 mb-1">
              Admin Email
            </label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5BA45E] outline-none text-sm"
            />
          </div>
          
          {/* Current Password */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-600 mb-1">
              Current Password
            </label>
            <input
              type="password"
              name="current"
              value={password.current}
              onChange={handlePasswordChange}
              className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5BA45E] outline-none text-sm"
            />
          </div>
          
          {/* New Password */}
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-600 mb-1">
              New Password
            </label>
            <input
              type="password"
              name="new"
              value={password.new}
              onChange={handlePasswordChange}
              className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5BA45E] outline-none text-sm"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 md:mt-8 text-center">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-5 md:px-6 py-2 bg-[#5BA45E] text-white font-semibold rounded-lg shadow hover:bg-[#4e9151] transition text-sm md:text-base"
          >
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
