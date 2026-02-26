import React, { useState } from "react";
import VoterHero from "../../assets/Servicesimg/Panhero.png"; // change image if needed

/* =====================================
   VOTER ID SERVICE FUNCTION
===================================== */
function VoterID() {

  const [activeTab, setActiveTab] = useState("new");

  const [files, setFiles] = useState({
    aadhaar: null,
    photo: null,
    addressProof: null,
    ageProof: null,
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFiles((prev) => ({
        ...prev,
        [field]: { file, url: fileURL },
      }));
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

      {/* Hero Section */}
      <section className="relative w-full h-[550px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={VoterHero}
            alt="Voter ID Hero"
            className="w-full h-full object-cover object-[20%_center]"
          />
        </div>

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <h1 className="text-5xl font-bold">
              Voter ID Card Services
            </h1>

            <p className="text-xl text-gray-200">
              Apply for new Voter ID or correction easily and quickly.
            </p>

            <a href="#voter-form">
              <button className="bg-[#f07e1b] text-black px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>


      {/* Document Required Section */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-green-700 rounded-3xl p-8 md:p-12 shadow-xl">

            <h2 className="text-3xl font-bold text-green-600 text-center mb-2">
              मतदान ओळखपत्रासाठी लागणारी कागदपत्रे
            </h2>

            <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-600 pb-4">
              Documents Required for Voter ID Card
            </h3>

            <div className="space-y-4 text-lg">

              <DocItem marathi="आधारकार्ड" english="Aadhaar Card" />
              <DocItem marathi="पत्त्याचा पुरावा" english="Address Proof" />
              <DocItem marathi="वयाचा पुरावा" english="Age Proof (Birth Certificate / School Leaving)" />
              <DocItem marathi="२ पासपोर्ट साईज फोटो" english="2 Passport Size Photographs" />

            </div>
          </div>
        </div>
      </section>


      {/* Form Section */}
      <section id="voter-form" className="py-10 px-4 md:px-8 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12 mb-20">

          <h2 className="text-3xl font-bold mb-6">
            Voter ID Card Application Form
          </h2>

          {/* Toggle Button */}
          <div className="flex mb-8 bg-gray-200 rounded-xl p-1 w-fit">
            <button
              onClick={() => setActiveTab("new")}
              className={`px-6 py-2 rounded-xl font-semibold transition-all ${
                activeTab === "new"
                  ? "bg-[#f07e1b] text-white"
                  : "text-gray-700"
              }`}
            >
              New Voter ID
            </button>

            <button
              onClick={() => setActiveTab("correction")}
              className={`px-6 py-2 rounded-xl font-semibold transition-all ${
                activeTab === "correction"
                  ? "bg-[#f07e1b] text-white"
                  : "text-gray-700"
              }`}
            >
              Correction
            </button>
          </div>

          <form className="space-y-8 shadow-2xl">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

              <InputField label="Full Name (पूर्ण नाव)" />
              <InputField label="Mobile Number (मोबाईल क्रमांक)" />
              <InputField label="Email ID (ई-मेल आय.डी.)" />
              <InputField label="Address (पत्ता)" />

              <UploadBox
                label="Aadhaar Card (आधारकार्ड)"
                fileData={files.aadhaar}
                onChange={(e) => handleFileChange(e, "aadhaar")}
              />

              <UploadBox
                label="Address Proof (पत्त्याचा पुरावा)"
                fileData={files.addressProof}
                onChange={(e) => handleFileChange(e, "addressProof")}
              />

              <UploadBox
                label="Age Proof (वयाचा पुरावा)"
                fileData={files.ageProof}
                onChange={(e) => handleFileChange(e, "ageProof")}
              />

              <UploadBox
                label="Passport Photo (पासपोर्ट साईज फोटो)"
                fileData={files.photo}
                onChange={(e) => handleFileChange(e, "photo")}
              />

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

export default VoterID;


/* Reusable Components */

function DocItem({ marathi, english }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-green-600 font-bold text-xl">✱</span>
      <div>
        <p className="text-gray-800 font-semibold">{marathi}</p>
        <p className="text-gray-600 text-base">{english}</p>
      </div>
    </div>
  );
}

function InputField({ label }) {
  return (
    <div className="h-[88px]">
      <label className="block font-bold mb-2">{label}</label>
      <input
        type="text"
        className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
      />
    </div>
  );
}

function UploadBox({ label, fileData, onChange }) {
  return (
    <div className="bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 h-[88px]">
      <div className="flex justify-between items-center">
        <span className="font-semibold">{label}</span>
        <label className="bg-[#f07e1b] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#d4ac5b] transition-all">
          Upload
          <input
            type="file"
            accept="image/*,.pdf"
            className="hidden"
            onChange={onChange}
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