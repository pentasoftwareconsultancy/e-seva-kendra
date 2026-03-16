import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Panhero from "../../assets/Servicesimg/Panhero.png";

function UdyogAadhaar() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ fullName: "", mobile: "" });
  const [errors, setErrors] = useState({ fullName: "", mobile: "" });
  const [files, setFiles] = useState({ pan: null, aadhaar: null, bankPassbook: null, lightBill: null, photo: null });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) setFiles((prev) => ({ ...prev, [field]: { file, url: URL.createObjectURL(file) } }));
  };

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
    if (!files.pan || !files.aadhaar || !files.bankPassbook || !files.lightBill || !files.photo) { alert("Please upload all required documents"); return; }
    navigate("/payment", { state: { serviceName: "Udyam Registration", applicantName: formData.fullName, mobile: formData.mobile, Amount: 500, formData, documents: { pan: files.pan?.file, aadhaar: files.aadhaar?.file, bankPassbook: files.bankPassbook?.file, lightBill: files.lightBill?.file, photo: files.photo?.file } } });
  };

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">
      <section className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] flex items-center">
        <div className="absolute inset-0"><img src={Panhero} alt="Udyog Aadhaar" className="w-full h-full object-cover object-[20%_center]" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-3 sm:space-y-6 text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">Udyog Aadhaar Registration Services</h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-200">We provide fast and reliable assistance for Udyog Aadhaar registration for MSME businesses.</p>
            <a href="#udyog-form"><button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-5 sm:px-8 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Apply Now</button></a>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-12 px-3 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-green-700 rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl">
            <h2 className="text-xl sm:text-3xl font-bold text-green-600 text-center mb-2">उद्योगआधार काढण्यासाठी लागणारी कागदपत्रे</h2>
            <h3 className="text-base sm:text-2xl font-bold text-green-600 text-center mb-4 sm:mb-8 border-b-4 border-green-600 pb-3">Documents Required for Udyog Aadhaar Registration</h3>
            <div className="space-y-3 text-sm sm:text-lg">
              {[["पॅनकार्ड", "PAN Card"], ["आधारकार्ड", "Aadhaar Card"], ["बँक पासबुक", "Bank Passbook"], ["ई-मेल आय.डी. / मोबाईल नंबर", "Email ID / Mobile Number"], ["लाईटबिल", "Light Bill"], ["१ पासपोर्ट साईज फोटो", "1 Passport Size Photograph"]].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg sm:text-xl flex-shrink-0">✱</span>
                  <div><p className="text-gray-800 font-semibold text-xs sm:text-base">{item[0]}</p><p className="text-gray-600 text-xs sm:text-base">{item[1]}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="udyog-form" className="py-8 sm:py-12 px-3 sm:px-6 md:px-8 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-10 sm:mb-20">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-4 sm:px-10 py-5 sm:py-8">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white text-center">Udyog Aadhaar Registration Form</h2>
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
                <UploadBox label="PAN Card (पॅनकार्ड)" fileData={files.pan} onChange={(e) => handleFileChange(e, "pan")} />
                <UploadBox label="Aadhaar Card (आधारकार्ड)" fileData={files.aadhaar} onChange={(e) => handleFileChange(e, "aadhaar")} />
                <UploadBox label="Bank Passbook (बँक पासबुक)" fileData={files.bankPassbook} onChange={(e) => handleFileChange(e, "bankPassbook")} />
                <UploadBox label="Light Bill (लाईटबिल)" fileData={files.lightBill} onChange={(e) => handleFileChange(e, "lightBill")} />
                <UploadBox label="Passport Photo (पासपोर्ट फोटो)" fileData={files.photo} onChange={(e) => handleFileChange(e, "photo")} />
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

function UploadBox({ label, fileData, onChange }) {
  return (
    <div>
      <label className="block font-bold mb-1.5 text-xs sm:text-sm">{label}</label>
      <div className="bg-gray-50 p-2.5 sm:p-3 rounded-xl border border-gray-200">
        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-xs text-gray-600">Upload Document</span>
          <label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 sm:px-4 py-1.5 rounded-lg cursor-pointer hover:from-yellow-600 hover:to-orange-600 shadow-sm transition-all text-xs">
            Upload
            <input type="file" accept="image/*,.pdf" className="hidden" onChange={onChange} />
          </label>
        </div>
        {fileData && <p className="text-blue-600 text-xs mt-1.5 cursor-pointer hover:text-blue-800 break-all" onClick={() => window.open(fileData.url, "_blank")}>{fileData.file.name}</p>}
      </div>
    </div>
  );
}

export default UdyogAadhaar;
