import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Driving() {
  const navigate = useNavigate();
  const [vehicleType, setVehicleType] = useState("2wheeler");
  const [formData, setFormData] = useState({ fullName: "", mobile: "" });
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState({ aadhaar: null, photo: null, signature: null, rentAgreement: null, lightBill: null, birthCertificate: null });
  const [fileErrors, setFileErrors] = useState({ aadhaar: false, photo: false, signature: false, rentAgreement: false, lightBill: false, birthCertificate: false });

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
    const missingFiles = { aadhaar: !files.aadhaar, photo: !files.photo, signature: !files.signature, rentAgreement: !files.rentAgreement, lightBill: !files.lightBill, birthCertificate: !files.birthCertificate };
    setFileErrors(missingFiles);
    if (Object.values(missingFiles).some(Boolean)) return;
    navigate("/payment", {
      state: {
        serviceName: `Driving License (${vehicleType === "2wheeler" ? "2 Wheeler" : "4 Wheeler"})`,
        applicantName: formData.fullName,
        mobile: formData.mobile,
        Amount: vehicleType === "2wheeler" ? 2500: 4500,
        formData,
        documents: {
          aadhaar: files.aadhaar?.file,
          photo: files.photo?.file,
          signature: files.signature?.file,
          rentAgreement: files.rentAgreement?.file,
          lightBill: files.lightBill?.file,
          birthCertificate: files.birthCertificate?.file,
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

      {/* HERO section  */}
      <section className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] flex items-center bg-gradient-to-r from-[#0b2c6d] to-[#1e40af]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-4 text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">Driving License Services</h1>
            <p className="text-sm sm:text-lg text-gray-200">Apply for 2 Wheeler or 4 Wheeler Driving License quickly and easily.</p>
            <button
              onClick={() => document.getElementById("dl-form").scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-6 py-2.5 rounded-xl font-bold text-sm sm:text-base shadow-lg transition-all duration-300 hover:scale-105"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section className="bg-white py-8 sm:py-12 px-3 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
         <div className="bg-white border-4 border-green-700 rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl">
            <h2 className="text-xl sm:text-3xl font-bold text-green-600 text-center mb-2">आवश्यक कागदपत्रे</h2>
            <h3 className="text-base sm:text-2xl font-bold text-green-600 text-center mb-4 sm:mb-8 border-b-4 border-green-700 pb-3">Documents Required for Driving License</h3>
            <div className="space-y-3 text-sm sm:text-lg">
              {[
                ["आधारकार्ड", "Aadhaar Card"],
                ["पासपोर्ट साईज फोटो", "Passport Size Photograph"],
                ["सही (स्वाक्षरी)", "Signature"],
                ["जन्म दाखला / शाळा सोडल्याचा दाखला", "Birth Certificate / School Leaving Certificate"],
                ["भाडे करार", "Rent Agreement"],
                ["वीज बिल (२ महिन्यांपेक्षा जुने नाही)", "Light Bill (not older than 2 months)"],
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg sm:text-xl flex-shrink-0">✱</span>
                  <div>
                    <p className="text-gray-800 font-semibold text-xs sm:text-base">{item[0]}</p>
                    <p className="text-gray-600 text-xs sm:text-base">{item[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="dl-form" className="py-8 sm:py-12 px-3 sm:px-6 md:px-8 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-10 sm:mb-20">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-4 sm:px-10 py-5 sm:py-8">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white text-center">Driving License Application Form</h2>
            <p className="text-blue-200 text-center text-xs sm:text-sm mt-1">Fill in your details to get started</p>
          </div>

          <div className="p-4 sm:p-6 md:p-10">

            {/* VEHICLE TYPE TOGGLE */}
            <div className="flex gap-3 mb-8">
              <button
                type="button"
                onClick={() => setVehicleType("2wheeler")}
                className={`flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base ${vehicleType === "2wheeler" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                2 Wheeler
              </button>
              <button
                type="button"
                onClick={() => setVehicleType("4wheeler")}
                className={`flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base ${vehicleType === "4wheeler" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                4 Wheeler
              </button>
            </div>

           

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

              {/* PERSONAL DETAILS */}
              <div>
                <h3 className="text-sm sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0">1</span>
                  Personal Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  <div>
                    <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">Full Name (पूर्ण नाव) <span className="text-red-500">*</span></label>
                    <input
                      type="text" required
                      value={formData.fullName}
                      onChange={(e) => { const v = e.target.value.replace(/[^a-zA-Z\s]/g, ""); setFormData({ ...formData, fullName: v }); setErrors({ ...errors, fullName: "" }); }}
                      placeholder="Enter Full Name"
                      className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors.fullName ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">Mobile Number (मोबाईल क्रमांक) <span className="text-red-500">*</span></label>
                    <input
                      type="tel" required maxLength={10}
                      value={formData.mobile}
                      onChange={(e) => { const v = e.target.value.replace(/[^0-9]/g, ""); setFormData({ ...formData, mobile: v }); setErrors({ ...errors, mobile: "" }); }}
                      placeholder="Enter 10-digit Mobile Number"
                      className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors.mobile ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                  </div>
                </div>
              </div>

              {/* UPLOAD DOCUMENTS */}
              <div>
                <h3 className="text-sm sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0">2</span>
                  Upload Documents
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  <UploadBox label="Aadhaar Card (आधार कार्ड)" fileData={files.aadhaar} hasError={fileErrors.aadhaar} onChange={(e) => { handleFileChange(e, "aadhaar"); setFileErrors((p) => ({ ...p, aadhaar: false })); }} />
                  <UploadBox label="Passport Photo (पासपोर्ट फोटो)" fileData={files.photo} hasError={fileErrors.photo} onChange={(e) => { handleFileChange(e, "photo"); setFileErrors((p) => ({ ...p, photo: false })); }} />
                  <UploadBox label="Signature (स्वाक्षरी)" fileData={files.signature} hasError={fileErrors.signature} onChange={(e) => { handleFileChange(e, "signature"); setFileErrors((p) => ({ ...p, signature: false })); }} />
                  <UploadBox label="Rent Agreement (भाडे करार)" fileData={files.rentAgreement} hasError={fileErrors.rentAgreement} onChange={(e) => { handleFileChange(e, "rentAgreement"); setFileErrors((p) => ({ ...p, rentAgreement: false })); }} />
                  <UploadBox label="Light Bill (वीज बिल)" fileData={files.lightBill} hasError={fileErrors.lightBill} onChange={(e) => { handleFileChange(e, "lightBill"); setFileErrors((p) => ({ ...p, lightBill: false })); }} />
                  <UploadBox label="Birth Certificate/School Leaving(जन्म/शाळा दाखला)" fileData={files.birthCertificate} hasError={fileErrors.birthCertificate} onChange={(e) => { handleFileChange(e, "birthCertificate"); setFileErrors((p) => ({ ...p, birthCertificate: false })); }} />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-6 sm:px-10 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  Submit Application →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function UploadBox({ label, fileData, onChange, hasError }) {
  return (
    <div>
      <label className="block font-bold mb-1.5 text-xs sm:text-sm">{label} <span className="text-red-500">*</span></label>
      <div className={`bg-gray-50 p-2.5 sm:p-3 rounded-xl border ${hasError ? "border-red-500" : "border-gray-200"}`}>
        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-xs text-gray-600">Upload Document</span>
          <label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 sm:px-4 py-1.5 rounded-lg cursor-pointer hover:from-yellow-600 hover:to-orange-600 shadow-sm transition-all text-xs">
            Upload
            <input type="file" accept="image/*,.pdf" className="hidden" onChange={onChange} />
          </label>
        </div>
        {fileData && <p className="text-blue-600 text-xs mt-1.5 cursor-pointer hover:text-blue-800 break-all" onClick={() => window.open(fileData.url, "_blank")}>{fileData.file.name}</p>}
        {hasError && <p className="text-red-500 text-xs mt-1">This field is required</p>}
      </div>
    </div>
  );
}

export default Driving;
