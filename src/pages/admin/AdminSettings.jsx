import React, { useState } from "react";
import AdminLayout from "../../components/common/AdminLayout";
import { Settings as SettingsIcon, Save } from 'lucide-react';

const AdminSettings = () => {

  const [settings, setSettings] = useState({
    email: "admin@eseva.com",
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
  });

  const [newAdmin, setNewAdmin] = useState({
    email: "",
    password: ""
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

  const handleNewAdminChange = (e) => {
    const { name, value } = e.target;
    setNewAdmin({
      ...newAdmin,
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

      const response = await fetch("http://localhost:8080/api/admin/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: settings.email,
          oldPassword: password.current,
          newPassword: password.new
        })
      });

      const result = await response.text();
      alert(result);

      if (result === "Password Updated Successfully") {
        setPassword({ current: "", new: "" });
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  // ADD ADMIN API
  const handleAddAdmin = async () => {

    if (!newAdmin.email || !newAdmin.password) {
      alert("Please fill email and password");
      return;
    }

    try {

      const response = await fetch("http://localhost:8080/api/admin/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: newAdmin.email,
          password: newAdmin.password
        })
      });

      const result = await response.text();
      alert(result);

      if (result === "Admin Created Successfully") {
        setNewAdmin({
          email: "",
          password: ""
        });
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <AdminLayout>

      <div className="flex items-center gap-2 mb-6">
        <SettingsIcon className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-[#1f2a44]">Settings</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* CHANGE PASSWORD SECTION */}
        <div className="bg-white rounded-2xl shadow-xl p-6">

          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            General Settings
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Admin Email
              </label>

              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5BA45E] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Current Password
              </label>

              <input
                type="password"
                name="current"
                value={password.current}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5BA45E] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                New Password
              </label>

              <input
                type="password"
                name="new"
                value={password.new}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5BA45E] outline-none"
              />
            </div>

          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-6 py-2 bg-[#5BA45E] text-white font-semibold rounded-lg shadow hover:bg-[#4e9151] transition"
            >
              <Save size={18} />
              Save Changes
            </button>
          </div>

        </div>


        {/* ADD ADMIN EMAIL SECTION */}
        <div className="bg-white rounded-2xl shadow-xl p-6">

          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Add Admin Email
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                New Admin Email
              </label>

              <input
                type="email"
                name="email"
                value={newAdmin.email}
                onChange={handleNewAdminChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5BA45E] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Temporary Password
              </label>

              <input
                type="password"
                name="password"
                value={newAdmin.password}
                onChange={handleNewAdminChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5BA45E] outline-none"
              />
            </div>

          </div>

          <div className="mt-8 text-center">

            <button
              onClick={handleAddAdmin}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              Add Admin
            </button>

          </div>

        </div>

      </div>

    </AdminLayout>
  );
};

export default AdminSettings;