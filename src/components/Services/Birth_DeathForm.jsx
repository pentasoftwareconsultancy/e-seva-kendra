import React, { useState } from "react";

/* ================= REUSABLE UPLOAD COMPONENT ================= */
function UploadBox({ label }) {
  return (
    <div className="bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-sm">{label}</span>
        <label className="bg-[#f07e1b] text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-[#d4ac5b] transition-all">
          Upload
          <input
            type="file"
            accept="image/*,.pdf"
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}

function Birth_DeathForm() {
  const [activeTab, setActiveTab] = useState("birth");

  return (
    <div className="min-h-screen bg-[#f8faff] p-6">

      {/* ================= TOGGLE BUTTON ================= */}
      <div className="flex justify-center mb-10">
        <div className="bg-white shadow-md rounded-full p-2 flex gap-2">
          <button
            onClick={() => setActiveTab("birth")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === "birth"
                ? "bg-[#0b2c6d] text-white"
                : "text-gray-700"
            }`}
          >
            Birth Certificate
          </button>

          <button
            onClick={() => setActiveTab("death")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === "death"
                ? "bg-[#0b2c6d] text-white"
                : "text-gray-700"
            }`}
          >
            Death Certificate
          </button>
        </div>
      </div>

      {/* ================= BIRTH CERTIFICATE SECTION ================= */}
      {activeTab === "birth" && (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow p-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Birth Certificate Application
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <UploadBox label="Hospital Discharge Card (हॉस्पिटल डिस्चार्ज कार्ड)" />
            <UploadBox label="Mother Aadhaar Card (आईचे आधार कार्ड)" />
            <UploadBox label="Father Aadhaar Card (वडिलांचे आधार कार्ड)" />

          </div>

          <div className="flex justify-end mt-8">
            <button className="bg-[#f07e1b] text-white px-10 py-3 rounded-xl font-bold hover:bg-[#d4ac5b] transition-all">
              Submit Application
            </button>
          </div>
        </div>
      )}

      {/* ================= DEATH CERTIFICATE SECTION ================= */}
      {activeTab === "death" && (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow p-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Death Certificate Application
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <UploadBox label="Death Pass / Death Report (मृत्यू दाखला / मृत्यू रिपोर्ट)" />
            <UploadBox label="Aadhaar Card (आधार कार्ड)" />

          </div>

          <div className="flex justify-end mt-8">
            <button className="bg-[#f07e1b] text-white px-10 py-3 rounded-xl font-bold hover:bg-[#d4ac5b] transition-all">
              Submit Application
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Birth_DeathForm;