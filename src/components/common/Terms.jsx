import React from "react";

export default function Terms() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="text-center py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
          Terms & Conditions
        </h1>
        <p className="mt-3 text-gray-500 text-sm">
          Please read these terms carefully before using our services.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 grid mb-25 md:grid-cols-2 gap-6">

        <PolicyCard
          icon="https://unpkg.com/lucide-static@latest/icons/shield.svg"
          title="Service Agreement"
          text="By using our platform, you agree to comply with government regulations."
        />

        <PolicyCard
          icon="https://unpkg.com/lucide-static@latest/icons/file-check.svg"
          title="Document Accuracy"
          text="All documents must be valid and genuine to avoid delays."
        />

        <PolicyCard
          icon="https://unpkg.com/lucide-static@latest/icons/credit-card.svg"
          title="Payments"
          text="Service and government fees must be paid before processing."
        />

        <PolicyCard
          icon="https://unpkg.com/lucide-static@latest/icons/gavel.svg"
          title="Legal Compliance"
          text="We operate under applicable Indian government regulations."
        />

        <PolicyCard
          icon="https://unpkg.com/lucide-static@latest/icons/refresh-cw.svg"
          title="Policy Updates"
          text="Terms may be updated anytime without prior notice."
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