import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PanHero from "../../assets/Servicesimg/Panhero.png";

function Insurance() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("health");
  const [formData, setFormData] = useState({ fullName: "", mobile: "" });
  const [errors, setErrors] = useState({ fullName: "", mobile: "" });
  const [files, setFiles] = useState({
    aadhaar: null, pan: null, addressProof: null, photo: null,
    medicalReport: null, incomeProof: null, schoolLeavingCert: null,
    casteCertificate: null, rationCard: null, lightBill: null,
    tahasildarCertificate: null, eshramCard: null, ayushmanCard: null,
    vehicleInsurance: null, dMartAccount: null, loanDoc: null, form16_ITR: null,
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) setFiles((prev) => ({ ...prev, [field]: { file, url: URL.createObjectURL(file) } }));
  };

  useEffect(() => {
    return () => { Object.values(files).forEach((f) => f && URL.revokeObjectURL(f.url)); };
  }, [files]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) newErrors.fullName = "Name must be at least 3 characters";
    if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be exactly 10 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    navigate("/payment", {
      state: {
        serviceName: activeTab === "health" ? "Health Insurance" : "Life Insurance",
        applicantName: formData.fullName, mobile: formData.mobile,
        Amount: activeTab === "health" ? 300 : 400,
        type: "insurance", formData,
        documents: {
          aadhaar: files.aadhaar?.file, pan: files.pan?.file, addressProof: files.addressProof?.file,
          photo: files.photo?.file, medicalReport: files.medicalReport?.file, incomeProof: files.incomeProof?.file,
          schoolLeavingCert: files.schoolLeavingCert?.file, casteCertificate: files.casteCertificate?.file,
          rationCard: files.rationCard?.file, lightBill: files.lightBill?.file,
          tahasildarCertificate: files.tahasildarCertificate?.file, eshramCard: files.eshramCard?.file,
          ayushmanCard: files.ayushmanCard?.file, vehicleInsurance: files.vehicleInsurance?.file,
          dMartAccount: files.dMartAccount?.file, loanDoc: files.loanDoc?.file, form16_ITR: files.form16_ITR?.file,
        },
      },
    });
  };

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
    { label: "Income Proof (Salary Slip / ITR / Form 16)", field: "incomeProof" },
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
      <section className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] flex items-center">
        <div className="absolute inset-0"><img src={PanHero} alt="Insurance Hero" className="w-full h-full object-cover object-center" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-3 sm:space-y-6 text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">Insurance Services</h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-200">Get Health Insurance & Life Insurance with easy documentation and fast processing.</p>
            <a href="#insurance-form"><button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-5 sm:px-8 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Apply Now</button></a>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-12 px-3 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-white border-4 border-green-700 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl">
          <div className="flex justify-center mb-4 sm:mb-6">
            <button onClick={() => setActiveTab("health")} className={`px-4 sm:px-6 py-2 sm:py-3 font-bold rounded-l-xl text-xs sm:text-base ${activeTab === "health" ? "bg-green-600 text-white" : "bg-gray-200"}`}>Health Insurance</button>
            <button onClick={() => setActiveTab("life")} className={`px-4 sm:px-6 py-2 sm:py-3 font-bold rounded-r-xl text-xs sm:text-base ${activeTab === "life" ? "bg-green-600 text-white" : "bg-gray-200"}`}>Life Insurance</button>
          </div>
          <h2 className="text-base sm:text-2xl font-bold text-center text-green-600 mb-3 sm:mb-6">
            {activeTab === "health" ? "Health Insurance Required Documents" : "Life Insurance Required Documents"}
          </h2>
          <div className="space-y-3 text-sm sm:text-lg">
            {documents.map((doc, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg sm:text-xl flex-shrink-0">✱</span>
                <p className="font-semibold text-xs sm:text-base">{doc.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="insurance-form" className="py-8 sm:py-12 px-3 sm:px-6 md:px-8 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-10 sm:mb-20">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-4 sm:px-10 py-5 sm:py-8">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white text-center">
              {activeTab === "health" ? "Health Insurance Application Form" : "Life Insurance Application Form"}
            </h2>
            <p className="text-blue-200 text-center text-xs sm:text-sm mt-1">Fill in your details to get started</p>
          </div>
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-10 space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
                <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0">1</span>
                Personal Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                <div>
                  <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">Full Name (पूर्ण नाव) <span className="text-red-500">*</span></label>
                  <input type="text" required minLength={3} value={formData.fullName} onChange={(e) => { const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); setFormData({ ...formData, fullName: value }); setErrors({ ...errors, fullName: "" }); }} placeholder="Enter Full Name" className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors.fullName ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">Mobile Number (मोबाईल क्रमांक) <span className="text-red-500">*</span></label>
                  <input type="tel" required pattern="[0-9]{10}" maxLength={10} value={formData.mobile} onChange={(e) => { const value = e.target.value.replace(/[^0-9]/g, ""); setFormData({ ...formData, mobile: value }); setErrors({ ...errors, mobile: "" }); }} placeholder="Enter 10-digit Mobile Number" className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors.mobile ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
                <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0">2</span>
                Upload Documents
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {documents.map((doc, i) => (
                  <UploadBox key={i} label={doc.label} field={doc.field} fileData={files[doc.field]} onFileChange={handleFileChange} />
                ))}
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-6 sm:px-10 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">Submit Application →</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function UploadBox({ label, field, fileData, onFileChange }) {
  return (
    <div>
      <label className="block font-bold mb-1.5 text-xs sm:text-sm">{label}</label>
      <div className="bg-gray-50 p-2.5 sm:p-3 rounded-xl border border-gray-200">
        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-xs text-gray-600">Upload Document</span>
          <label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 sm:px-4 py-1.5 rounded-lg cursor-pointer hover:from-yellow-600 hover:to-orange-600 shadow-sm transition-all text-xs">
            Upload
            <input type="file" accept="image/*,.pdf" className="hidden" onChange={(e) => onFileChange(e, field)} />
          </label>
        </div>
        {fileData && <p className="text-blue-600 text-xs mt-1.5 cursor-pointer hover:text-blue-800 break-all" onClick={() => window.open(fileData.url, "_blank")}>{fileData.file.name}</p>}
      </div>
    </div>
  );
}

export default Insurance;