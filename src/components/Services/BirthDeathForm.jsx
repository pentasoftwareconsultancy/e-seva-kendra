import React, { useState } from "react";
import Panhero from "../../assets/Servicesimg/Panhero.png";

/* ================= REUSABLE UPLOAD COMPONENT ================= */
function UploadBox({ label, field, fileData, onFileChange }) {
  return (
    <div className="bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-sm">{label}</span>
        <label className="bg-[#f07e1b] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#d4ac5b] transition-all">
          Upload
          <input
            type="file"
            accept="image/*,.pdf"
            className="hidden"
            onChange={(e) => onFileChange(e, field)}
          />
        </label>
      </div>

      {fileData && (
        <p
          className="text-blue-600 text-sm mt-2 cursor-pointer hover:text-blue-800"
          onClick={() => window.open(fileData.url, "_blank")}
        >
          {fileData.file.name}
        </p>
      )}
    </div>
  );
}

function BirthDeathForm() {
  const [activeTab, setActiveTab] = useState("birth");

  const [files, setFiles] = useState({
    hospitalCard: null,
    parentsAadhaar: null,
    deathPass: null,
    deceasedAadhaar: null,
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFiles((prev) => ({
        ...prev,
        [field]: { file: file, url: fileURL },
      }));
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[550px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={Panhero}
            alt="Birth Death Hero"
            className="w-full h-full object-cover object-[20%_center]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <h1 className="text-5xl font-bold">
              Birth & Death Certificate Services
            </h1>
            <p className="text-xl text-gray-200">
              Apply for Birth or Death Certificate easily and securely.
            </p>
            <a href="#certificate-form">
              <button className="bg-[#f07e1b] text-black px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ================= TOGGLE BUTTON ================= */}
      <section className="py-10 flex justify-center">
        <div className="bg-white rounded-xl shadow-md flex overflow-hidden">
          <button
            onClick={() => setActiveTab("birth")}
            className={`px-8 py-3 font-semibold ${
              activeTab === "birth"
                ? "bg-[#143f8f] text-white"
                : "bg-gray-100"
            }`}
          >
            Birth Certificate (जन्म प्रमाणपत्र)
          </button>

          <button
            onClick={() => setActiveTab("death")}
            className={`px-8 py-3 font-semibold ${
              activeTab === "death"
                ? "bg-[#143f8f] text-white"
                : "bg-gray-100"
            }`}
          >
            Death Certificate (मृत्यू प्रमाणपत्र)
          </button>
        </div>
      </section>

    {/* ================= DOCUMENT REQUIREMENTS ================= */}
<section className="bg-white py-16 px-4 md:px-8">
  <div className="max-w-4xl mx-auto">
    <div className="bg-white border-4 border-green-700 rounded-3xl p-8 md:p-12 shadow-xl">

      <h2 className="text-3xl font-bold text-green-600 text-center mb-2">
        {activeTab === "birth"
          ? "Birth Certificate Documents (जन्म प्रमाणपत्रासाठी लागणारी कागदपत्रे)"
          : "Death Certificate Documents (मृत्यू प्रमाणपत्रासाठी लागणारी कागदपत्रे)"}
      </h2>

      <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-700 pb-4">
        Documents Required
      </h3>

      <div className="space-y-4 text-lg">
        {activeTab === "birth" &&
          [
            ["Hospital Discharge Card", "रुग्णालय डिस्चार्ज कार्ड"],
            ["Mother & Father Aadhaar Card", "आई-वडिलांचा आधारकार्ड"],
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✱</span>
              <div>
                <p className="text-gray-800 font-semibold">{item[1]}</p>
                <p className="text-gray-600 text-base">{item[0]}</p>
              </div>
            </div>
          ))}

        {activeTab === "death" &&
          [
            ["Death Pass", "मृत्यू पास"],
            ["Aadhaar Card of Deceased", "मृत व्यक्तीचा आधारकार्ड"],
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✱</span>
              <div>
                <p className="text-gray-800 font-semibold">{item[1]}</p>
                <p className="text-gray-600 text-base">{item[0]}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
</section>

      {/* ================= FORM SECTION ================= */}
      <section
        id="certificate-form"
        className="py-16 px-4 md:px-8 bg-[#f8faff]"
      >
        <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12">

          <h2 className="text-3xl font-bold mb-8 text-center">
            {activeTab === "birth"
              ? "Birth Certificate Application( जन्म प्रमाणपत्र अर्ज फॉर्म ) "
              : " Death Certificate Application( मृत्यू प्रमाणपत्र अर्ज फॉर्म )"}
          </h2>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block font-bold mb-2">
                  Name (नाव) 
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block font-bold mb-2">
                   Mobile Number (मोबाईल नंबर)
                </label>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                />
              </div>

              {/* Documents */}
              {activeTab === "birth" && (
                <>
                  <UploadBox
                    label="Hospital Discharge Card ( रुग्णालय डिस्चार्ज कार्ड ) "
                    field="hospitalCard"
                    fileData={files.hospitalCard}
                    onFileChange={handleFileChange}
                  />
                  <UploadBox
                    label="Mother & Father Aadhaar Card ( आई-वडिलांचा आधारकार्ड ) "
                    field="parentsAadhaar"
                    fileData={files.parentsAadhaar}
                    onFileChange={handleFileChange}
                  />
                </>
              )}

              {activeTab === "death" && (
                <>
                  <UploadBox
                    label="Death Pass ( मृत्यू पास )"
                    field="deathPass"
                    fileData={files.deathPass}
                    onFileChange={handleFileChange}
                  />
                  <UploadBox
                    label="Aadhaar Card of Deceased ( मृत व्यक्तीचा आधारकार्ड )"
                    field="deceasedAadhaar"
                    fileData={files.deceasedAadhaar}
                    onFileChange={handleFileChange}
                  />
                </>
              )}

            </div>

            <div className="pt-6 flex justify-end">
              <button
                type="submit"
                className="bg-[#f07e1b] text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#d4ac5b] transition-all"
              >
                Submit Application
              </button>
            </div>
          </form>

        </div>
      </section>
    </div>
  );
}

export default BirthDeathForm;