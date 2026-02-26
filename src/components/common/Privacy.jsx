import React from "react";

export default function Privacy() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="text-center py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="mt-3 text-gray-500 text-sm">
          Your privacy and data protection are important to us.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 grid mb-25 md:grid-cols-2 gap-6">

        <PolicyCard
          icon="https://unpkg.com/lucide-static@latest/icons/database.svg"
          title="Information Collection"
          text="We collect personal details only for processing your requested services."
        />

        <PolicyCard
          icon="https://unpkg.com/lucide-static@latest/icons/lock.svg"
          title="Data Security"
          text="We implement proper security measures to protect your personal information."
        />

        <PolicyCard
          icon="https://unpkg.com/lucide-static@latest/icons/eye-off.svg"
          title="No Data Sharing"
          text="We do not sell, trade, or share your personal data with third parties."
        />

        <PolicyCard
          icon="https://unpkg.com/lucide-static@latest/icons/mail.svg"
          title="Contact for Privacy"
          text="For privacy-related queries, contact us at our official email address."
        />

      </div>
    </div>
  );
}

function PolicyCard({ icon, title, text }) {
  return (
    <div className="bg-gray-100 border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300">
      <div className="flex items-start gap-3">
        <img
          src={icon}
          alt={title}
          className="w-6 h-6 mt-1 opacity-70"
        />
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-1">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}