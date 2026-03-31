import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SIPHero from "../../assets/Servicesimg/Panhero.webp";

function UploadBox({ label, field, fileData, onFileChange, error }) {
  return (
    <div>
      <label className="block font-bold mb-2 text-sm sm:text-base">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className={`bg-[#f8faff] p-2 sm:p-2.5 rounded-xl ring-1 ${error ? "ring-red-500" : "ring-gray-200"}`}>
        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-xs sm:text-sm">Upload Document</span>
          <label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg cursor-pointer hover:from-yellow-600 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm">
            Upload
            <input type="file" accept="image/*,.pdf" className="hidden" onChange={(e) => onFileChange(e, field)} />
          </label>
        </div>
        {fileData && (
          <p className="text-blue-600 text-xs sm:text-sm mt-2 cursor-pointer hover:text-blue-800 break-all" onClick={() => window.open(fileData.url, "_blank")}>
            {fileData.file.name}
          </p>
        )}
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    </div>
  );
}

function SIPForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ fullName: "", mobile: "" });
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState({
    panCard: null, aadhaarCard: null, bankProof: null,
    passportPhoto: null, addressProof: null, cancelledCheque: null,
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prev) => ({ ...prev, [field]: { file, url: URL.createObjectURL(file) } }));
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3)
      newErrors.fullName = "Name must be at least 3 characters";
    if (!/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    if (!files.panCard) newErrors.panCard = "Required";
    if (!files.aadhaarCard) newErrors.aadhaarCard = "Required";
    if (!files.bankProof) newErrors.bankProof = "Required";
    if (!files.passportPhoto) newErrors.passportPhoto = "Required";
    if (!files.addressProof) newErrors.addressProof = "Required";
    if (!files.cancelledCheque) newErrors.cancelledCheque = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    navigate("/payment", {
      state: {
        serviceName: "SIP Investment",
        applicantName: formData.fullName,
        mobile: formData.mobile,
        Amount: 2000,
        formData,
        documents: {
          panCard: files.panCard?.file,
          aadhaarCard: files.aadhaarCard?.file,
          bankProof: files.bankProof?.file,
          passportPhoto: files.passportPhoto?.file,
          addressProof: files.addressProof?.file,
          cancelledCheque: files.cancelledCheque?.file,
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">
      {/* HERO */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={SIPHero} alt="SIP Investment" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">SIP (Systematic Investment Plan) Services</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200">Start your SIP investment easily and securely.</p>
            <a href="#sip-form">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* REQUIRED DOCUMENTS */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-green-700 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-600 text-center mb-2">SIP साठी लागणारी कागदपत्रे</h2>
            <h3 className="text-xl sm:text-2xl font-bold text-green-600 text-center mb-6 sm:mb-8 border-b-4 border-green-700 pb-3 sm:pb-4">
              Documents Required for SIP
            </h3>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg">
              {[
                ["पॅन कार्ड", "PAN Card"],
                ["आधार कार्ड", "Aadhaar Card"],
                ["बँक पासबुक / बँक स्टेटमेंट", "Bank Passbook / Bank Statement"],
                ["रद्द केलेला चेक", "Cancelled Cheque"],
                ["१ पासपोर्ट साईज फोटो", "1 Passport Size Photograph"],
                ["पत्त्याचा पुरावा", "Address Proof"],
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✱</span>
                  <div>
                    <p className="text-gray-800 font-semibold">{item[0]}</p>
                    <p className="text-gray-600 text-base">{item[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="sip-form" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-10 sm:mb-20">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-6 sm:px-10 py-6 sm:py-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">SIP Application Form</h2>
            <p className="text-blue-200 text-center text-sm mt-1">Fill in your details to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-10 space-y-6 sm:space-y-8">
            {/* Personal Details */}
            <div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
                <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm">1</span>
                Personal Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                <div>
                  <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">
                    Full Name / पूर्ण नाव <span className="text-red-500">*</span>
                  </label>
                  <input type="text" required minLength={3} value={formData.fullName}
                    onChange={(e) => { const v = e.target.value.replace(/[^a-zA-Z\s]/g, ""); setFormData({ ...formData, fullName: v }); setErrors({ ...errors, fullName: "" }); }}
                    className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors.fullName ? "border-red-500" : "border-gray-200"}`} />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">
                    Mobile Number / मोबाईल नंबर <span className="text-red-500">*</span>
                  </label>
                  <input type="tel" required maxLength={10} value={formData.mobile}
                    onChange={(e) => { const v = e.target.value.replace(/[^0-9]/g, ""); setFormData({ ...formData, mobile: v }); setErrors({ ...errors, mobile: "" }); }}
                    className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors.mobile ? "border-red-500" : "border-gray-200"}`} />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>
              </div>
            </div>

            {/* Upload Documents */}
            <div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
                <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm">2</span>
                Upload Documents
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <UploadBox label="PAN Card / पॅन कार्ड" field="panCard" fileData={files.panCard} onFileChange={handleFileChange} error={errors.panCard} />
                <UploadBox label="Aadhaar Card / आधार कार्ड" field="aadhaarCard" fileData={files.aadhaarCard} onFileChange={handleFileChange} error={errors.aadhaarCard} />
                <UploadBox label="Bank Passbook / बँक पासबुक" field="bankProof" fileData={files.bankProof} onFileChange={handleFileChange} error={errors.bankProof} />
                <UploadBox label="Cancelled Cheque / रद्द केलेला चेक" field="cancelledCheque" fileData={files.cancelledCheque} onFileChange={handleFileChange} error={errors.cancelledCheque} />
                <UploadBox label="Passport Photo / पासपोर्ट फोटो" field="passportPhoto" fileData={files.passportPhoto} onFileChange={handleFileChange} error={errors.passportPhoto} />
                <UploadBox label="Address Proof / पत्त्याचा पुरावा" field="addressProof" fileData={files.addressProof} onFileChange={handleFileChange} error={errors.addressProof} />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 sm:px-10 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Submit Application →
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SIPForm;
