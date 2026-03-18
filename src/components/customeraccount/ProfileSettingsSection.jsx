import { useState, useEffect } from "react";

export default function ProfileSettingsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const userEmail = sessionStorage.getItem("userEmail");
    const userName = sessionStorage.getItem("userName");
    
    if (userEmail) {
      setFormData({
        name: userName || "",
        email: userEmail || "",
        currentPassword: "",
        newPassword: "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://e-seva-kendra-b.onrender.com/api/users/update-by-email`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.text();
      
      if (data === "Profile Updated Successfully" || data.includes("Success")) {
        setSuccessMessage(data);
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setErrorMessage(data);
        setTimeout(() => setErrorMessage(""), 3000);
      }

      setFormData({
        ...formData,
        currentPassword: "",
        newPassword: "",
      });

    } catch (error) {
      console.error("Error updating profile:", error);
      setErrorMessage("Something went wrong! Please try again.");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 md:p-6">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
        Profile Settings
      </h2>

      <form onSubmit={handleUpdate} className="space-y-4 sm:space-y-6">

        {/* Name */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1.5 sm:mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1.5 sm:mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Change Password Section */}
        <div className="border-t pt-4 sm:pt-6">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">
            Change Password
          </h3>

          <div className="space-y-3 sm:space-y-4">

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1.5 sm:mb-2">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-1.5 sm:mb-2">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

          </div>
        </div>

        {/* Update Button */}
        <div className="pt-3 sm:pt-4">
          {successMessage && (
            <div className="mb-3 p-3 bg-green-50 border border-green-300 rounded-lg text-green-700 text-sm">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="mb-3 p-3 bg-red-50 border border-red-300 rounded-lg text-red-700 text-sm">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition"
          >
            Update Profile
          </button>
        </div>

      </form>
    </div>
  );
}