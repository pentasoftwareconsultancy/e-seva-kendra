import React from "react";

export default function Refund() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="text-center py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
          Refund Policy
        </h1>
        <p className="mt-3 text-gray-500 text-sm">
          Please read our refund policy carefully before making payment.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 grid mb-25 md:grid-cols-2 gap-6">

        <PolicyCard
          icon="https://unpkg.com/lucide-static@latest/icons/credit-card.svg"
          title="Service Charges"
          text="Service charges are non-refundable once the processing has started."
        />

        <PolicyCard
          icon="https://unpkg.com/lucide-static@latest/icons/alert-circle.svg"
          title="Government Fees"
          text="Government fees are strictly non-refundable under any circumstances."
        />

        <PolicyCard
          icon="https://unpkg.com/lucide-static@latest/icons/x-circle.svg"
          title="Cancellation Policy"
          text="Partial refund may be considered only before service processing begins."
        />

        <PolicyCard
          icon="https://unpkg.com/lucide-static@latest/icons/help-circle.svg"
          title="Refund Support"
          text="For refund-related queries, please contact our support team."
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