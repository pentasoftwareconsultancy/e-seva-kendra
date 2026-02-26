import React, { useState, useEffect } from "react";
import PanHero from "../../assets/Servicesimg/Panhero.png";

function Insurance() {
  const [activeTab, setActiveTab] = useState("health");

  const [files, setFiles] = useState({
    aadhaar: null,
    pan: null,
    addressProof: null,
    photo: null,
    medicalReport: null,
    incomeProof: null,
    schoolLeavingCert: null,
    casteCertificate: null,
    rationCard: null,
    lightBill: null,
    tahasildarCertificate: null,
    eshramCard: null,
    ayushmanCard: null,
    vehicleInsurance: null,
    dMartAccount: null,
    loanDoc: null,
    form16_ITR: null,
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

  useEffect(() => {
    return () => {
      Object.values(files).forEach((f) => f && URL.revokeObjectURL(f.url));
    };
  }, [files]);

  // Document lists
  const healthDocuments = [
    { label: "Aadhaar Card (आधार कार्ड)", field: "aadhaar" },
    { label: "PAN Card (पॅन कार्ड)", field: "pan" },
    { label: "Address Proof (पत्ता पुरावा)", field: "addressProof" },
    { label: "Passport Photo (पासपोर्ट फोटो)", field: "photo" },
    { label: "Medical Report (मेडिकल रिपोर्ट)", field: "medicalReport" },
    { label: "Ration Card (रेशन कार्ड)", field: "rationCard" },
    { label: "Light Bill (लाईट बिल)", field: "lightBill" },
    { label: "Tahasildar Income Certificate (तहसीलदार उत्पन्न दाखला)", field: "tahasildarCertificate" },
    { label: "E-Shram Card (ई-श्रम कार्ड)", field: "eshramCard" },
    { label: "Ayushman Card (आयुष्मान कार्ड)", field: "ayushmanCard" },
  ];

  const lifeDocuments = [
    { label: "Aadhaar Card (आधार कार्ड)", field: "aadhaar" },
    { label: "PAN Card (पॅन कार्ड)", field: "pan" },
    { label: "Address Proof (पत्ता पुरावा)", field: "addressProof" },
    { label: "Passport Photo (पासपोर्ट फोटो)", field: "photo" },
    { label: "Income Proof (Salary Slip / ITR / Form 16) (उत्पन्न पुरावा)", field: "incomeProof" },
    { label: "School Leaving Certificate (शाळा सोडण्याचा प्रमाणपत्र)", field: "schoolLeavingCert" },
    { label: "Caste Certificate (जाति प्रमाणपत्र)", field: "casteCertificate" },
    { label: "Ration Card (रेशन कार्ड)", field: "rationCard" },
    { label: "Light Bill (लाईट बिल)", field: "lightBill" },
    { label: "Vehicle Insurance Document (वाहन विमा प्रमाणपत्र)", field: "vehicleInsurance" },
    { label: "D-Mart Account Document (डी-मार्ट अकाउंट)", field: "dMartAccount" },
    { label: "Loan Documents (कर्ज दस्तऐवज)", field: "loanDoc" },
    { label: "E-Shram Card (ई-श्रम कार्ड)", field: "eshramCard" },
    { label: "Ayushman Card (आयुष्मान कार्ड)", field: "ayushmanCard" },
  ];

  const documents = activeTab === "health" ? healthDocuments : lifeDocuments;

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={PanHero} alt="Insurance Hero" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <h1 className="text-5xl font-bold">Insurance Services</h1>
            <p className="text-xl text-gray-200">
              Get Health Insurance & Life Insurance with easy documentation and fast processing.
            </p>
            <a href="#insurance-form">
              <button className="bg-[#f07e1b] text-black px-10 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Toggle Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto bg-white border-4 border-green-700 rounded-3xl p-8 shadow-xl">
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setActiveTab("health")}
              className={`px-6 py-3 font-bold rounded-l-xl ${
                activeTab === "health" ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
            >
              Health Insurance
            </button>
            <button
              onClick={() => setActiveTab("life")}
              className={`px-6 py-3 font-bold rounded-r-xl ${
                activeTab === "life" ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
            >
              Life Insurance
            </button>
          </div>

          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
            {activeTab === "health"
              ? "Health Insurance Required Documents"
              : "Life Insurance Required Documents"}
          </h2>

          <div className="space-y-4 text-lg">
            {documents.map((doc, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="font-semibold">{doc.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="insurance-form" className="py-10 px-4 md:px-8 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-6">
            {activeTab === "health"
              ? "आरोग्य विमा अर्ज फॉर्म / Health Insurance Application Form"
              : "जीवन विमा अर्ज फॉर्म / Life Insurance Application Form"}
          </h2>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block font-bold mb-2">Full Name (पूर्ण नाव)</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block font-bold mb-2">Mobile Number (मोबाईल क्रमांक)</label>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                />
              </div>

              {/* Upload Fields */}
              {documents.map((doc, i) => (
                <UploadBox
                  key={i}
                  label={doc.label}
                  field={doc.field}
                  fileData={files[doc.field]}
                  onFileChange={handleFileChange}
                />
              ))}
            </div>

            {/* Submit Button */}
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

/* Upload Component */
function UploadBox({ label, field, fileData, onFileChange }) {
  return (
    <div className="bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200">
      <div className="flex justify-between items-center">
        <span className="font-semibold">{label}</span>
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
          className="text-blue-600 text-sm mt-2 cursor-pointer"
          onClick={() => window.open(fileData.url, "_blank")}
        >
          {fileData.file.name}
        </p>
      )}
    </div>
  );
}

export default Insurance;