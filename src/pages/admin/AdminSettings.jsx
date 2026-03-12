import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/common/AdminLayout";
import { Settings as SettingsIcon, Save } from 'lucide-react';

const AdminSettings = () => {

  const [settings, setSettings] = useState({
    email: "",
  });

  useEffect(() => {
    const adminEmail = sessionStorage.getItem("adminEmail");
    const isAdmin = sessionStorage.getItem("adminAuth");
    
    if (adminEmail && isAdmin === "true") {
      setSettings({
        email: adminEmail,
      });
    }
  }, []);

  const [password, setPassword] = useState({
    current: "",
    new: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({
      ...settings,
      [name]: value
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({
      ...password,
      [name]: value
    });
  };

  // CHANGE PASSWORD API
  const handleSave = async () => {

    if (!password.current || !password.new) {
      alert("Please fill all password fields");
      return;
    }

    try {

      const response = await fetch("http://localhost:8080/api/users/update-by-email", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: settings.email,
          currentPassword: password.current,
          newPassword: password.new
        })
      });

      const result = await response.text();
      alert(result);

      if (result === "Profile Updated Successfully" || result.includes("Success")) {
        setPassword({ current: "", new: "" });
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <AdminLayout>

      <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
        <SettingsIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />
        <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-[#1f2a44]">Settings</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6">

        {/* CHANGE PASSWORD SECTION */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 max-w-2xl">

          <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
            General Settings
          </h2>

          <div className="space-y-3 sm:space-y-4 md:space-y-5">

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">
                Admin Email
              </label>

              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5BA45E] outline-none text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">
                Current Password
              </label>

              <input
                type="password"
                name="current"
                value={password.current}
                onChange={handlePasswordChange}
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5BA45E] outline-none text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">
                New Password
              </label>

              <input
                type="password"
                name="new"
                value={password.new}
                onChange={handlePasswordChange}
                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5BA45E] outline-none text-xs sm:text-sm"
              />
            </div>

          </div>

          <div className="mt-6 sm:mt-7 md:mt-8 text-center">
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition text-xs sm:text-sm"
            >
              <Save size={16} className="sm:w-[18px] sm:h-[18px]" />
              Save Changes
            </button>
          </div>

        </div>

      </div>

    </AdminLayout>
  );
};

export default AdminSettings;