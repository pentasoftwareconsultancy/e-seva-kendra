import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Panhero from "../../assets/Servicesimg/Panhero.webp";

function Pan() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("new");
  const [formData, setFormData] = useState({ fullName: "", mobile: "" });
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState({ aadhaar: null, photos: null, marriageCert: null, oldPan: null, signature: null });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prev) => ({ ...prev, [field]: { file, url: URL.createObjectURL(file) } }));
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) newErrors.fullName = "Name must be at least 3 characters";
    if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be exactly 10 digits";
    if (!files.aadhaar) newErrors.aadhaar = "Required";
    if (!files.photos) newErrors.photos = "Required";
    if (!files.signature) newErrors.signature = "Required";
    if (activeTab === "update") {
      if (!files.marriageCert) newErrors.marriageCert = "Required";
      if (!files.oldPan) newErrors.oldPan = "Required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    navigate("/payment", {
      state: {
        serviceName: "PAN Card", applicantName: formData.fullName, mobile: formData.mobile, Amount: 350, type: activeTab,
        documents: { aadhaar: files.aadhaar?.file, photo: files.photos?.file, marriageCert: files.marriageCert?.file, oldPan: files.oldPan?.file, signature: files.signature?.file }
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">
      <section className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] flex items-center">
        <div className="absolute inset-0"><img src={Panhero} alt="PAN Hero" className="w-full h-full object-cover object-[20%_center]" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-3 sm:space-y-6 text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">PAN Card Services</h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-200">Fast and reliable assistance for PAN card application and updates.</p>
            <button onClick={() => document.getElementById("pan-form").scrollIntoView({ behavior: "smooth" })} className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-5 sm:px-8 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Apply Now</button>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-12 px-3 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-green-700 rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl">
            <h2 className="text-xl sm:text-3xl font-bold text-green-600 text-center mb-2">पॅनकार्डसाठी लागणारी कागदपत्रे</h2>
            <h3 className="text-base sm:text-2xl font-bold text-green-600 text-center mb-4 sm:mb-8 border-b-4 border-green-600 pb-3">Documents Required for PAN Card</h3>
            <div className="space-y-3 text-sm sm:text-lg">
              {[["आधारकार्ड", "Aadhaar Card"], ["३ पासपोर्ट साईज फोटो", "3 Passport Size Photographs"], ["स्वाक्षरी", "Signature"]].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg sm:text-xl flex-shrink-0">✱</span>
                  <div><p className="text-gray-800 font-semibold text-xs sm:text-base">{item[0]}</p><p className="text-gray-600 text-xs sm:text-base">{item[1]}</p></div>
                </div>
              ))}
              <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-3 sm:p-4 mt-2">
                <h4 className="text-sm sm:text-lg font-bold text-pink-600 mb-2">नावात बदल पॅनकार्डसाठी / Name Change PAN Card</h4>
                {[["लग्नपत्रिका", "Marriage Certificate"], ["आधीच्या नावाचे जुने पॅनकार्ड", "Old PAN Card with Previous Name"]].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 mt-2">
                    <span className="text-green-600 font-bold text-lg sm:text-xl flex-shrink-0">✱</span>
                    <div><p className="text-gray-800 font-semibold text-xs sm:text-base">{item[0]}</p><p className="text-gray-600 text-xs sm:text-base">{item[1]}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pan-form" className="py-8 sm:py-12 px-3 sm:px-6 md:px-8 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-10 sm:mb-20">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-4 sm:px-10 py-5 sm:py-8">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white text-center">PAN Card Application Form</h2>
            <p className="text-blue-200 text-center text-xs sm:text-sm mt-1">Fill in your details to get started</p>
          </div>
          <div className="p-4 sm:p-6 md:p-10">
            <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8">
              <button type="button" onClick={() => setActiveTab("new")} className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base ${activeTab === "new" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>New PAN Card</button>
              <button type="button" onClick={() => setActiveTab("update")} className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base ${activeTab === "update" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>Update/Correction</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-sm sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0">1</span>
                  Personal Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  <div>
                    <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">Full Name / पूर्ण नाव <span className="text-red-500">*</span></label>
                    <input type="text" required minLength={3} value={formData.fullName} onChange={(e) => { const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); setFormData({ ...formData, fullName: value }); setErrors({ ...errors, fullName: "" }); }} placeholder="Enter Full Name" className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors.fullName ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">Mobile Number / मोबाईल नंबर <span className="text-red-500">*</span></label>
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
                  <UploadBox label="Aadhaar Card / आधार कार्ड" fileData={files.aadhaar} onChange={(e) => handleFileChange(e, "aadhaar")} error={errors.aadhaar} />
                  <UploadBox label="Passport Photos / पासपोर्ट फोटो" fileData={files.photos} onChange={(e) => handleFileChange(e, "photos")} error={errors.photos} />
                  <UploadBox label="Signature / स्वाक्षरी" fileData={files.signature} onChange={(e) => handleFileChange(e, "signature")} error={errors.signature} />
                  {activeTab === "update" && (
                    <>
                      <UploadBox label="Marriage Certificate / विवाह प्रमाणपत्र" fileData={files.marriageCert} onChange={(e) => handleFileChange(e, "marriageCert")} error={errors.marriageCert} />
                      <UploadBox label="Old PAN Card / जुने पॅन कार्ड" fileData={files.oldPan} onChange={(e) => handleFileChange(e, "oldPan")} error={errors.oldPan} />
                    </>
                  )}
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-6 sm:px-10 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">Submit Application →</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function UploadBox({ label, fileData, onChange, error }) {
  return (
    <div>
      <label className="block font-bold mb-1.5 text-xs sm:text-sm">{label} <span className="text-red-500">*</span></label>
      <div className={`bg-gray-50 p-2.5 sm:p-3 rounded-xl border ${error ? "border-red-500" : "border-gray-200"}`}>
        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-xs text-gray-600">Upload Document</span>
          <label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 sm:px-4 py-1.5 rounded-lg cursor-pointer hover:from-yellow-600 hover:to-orange-600 shadow-sm transition-all text-xs">
            Upload
            <input type="file" accept="image/*,.pdf" className="hidden" onChange={onChange} />
          </label>
        </div>
        {fileData && <p className="text-blue-600 text-xs mt-1.5 cursor-pointer hover:text-blue-800 break-all" onClick={() => window.open(fileData.url, "_blank")}>{fileData.file.name}</p>}
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    </div>
  );
}

export default Pan;
