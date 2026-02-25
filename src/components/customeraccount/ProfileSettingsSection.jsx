import { useState } from "react";

export default function ProfileSettingsSection() {
  const [formData, setFormData] = useState({
    name: "Snehal Kulkarni",
    email: "snehal@example.com",
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully!");
    // Later: send to backend
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Profile Settings
      </h2>

      <form onSubmit={handleUpdate} className="space-y-6">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            disabled
            className="w-full border bg-gray-100 rounded-lg px-4 py-2.5 text-sm text-gray-500 cursor-not-allowed"
          />
        </div>

        {/* Change Password Section */}
        <div className="border-t pt-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">
            Change Password
          </h3>

          <div className="space-y-4">

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

          </div>
        </div>

        {/* Update Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Update Profile
          </button>
        </div>

      </form>
    </div>
  );
}