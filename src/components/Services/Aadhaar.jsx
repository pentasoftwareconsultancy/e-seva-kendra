import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PanHero from "../../assets/Servicesimg/Panhero.webp";

function Aadhaar() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ fullName: "", mobile: "" });
  const [errors, setErrors] = useState({ fullName: "", mobile: "" });

  const [files, setFiles] = useState({
    aadhaar: null,
    identityProof: null,
    addressProof: null,
    dobProof: null,
    photo: null,
  });
  const [fileErrors, setFileErrors] = useState({ aadhaar: false, identityProof: false, addressProof: false, dobProof: false, photo: false });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prev) => ({
        ...prev,
        [field]: { file, url: URL.createObjectURL(file) },
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const missingFiles = { aadhaar: !files.aadhaar, identityProof: !files.identityProof, addressProof: !files.addressProof, dobProof: !files.dobProof, photo: !files.photo };
    setFileErrors(missingFiles);
    if (Object.values(missingFiles).some(Boolean)) return;

    navigate("/payment", {
      state: {
        serviceName: "Aadhaar Card",
        applicantName: formData.fullName,
        mobile: formData.mobile,
        Amount: 1000,
        formData,
        documents: {
          aadhaar: files.aadhaar?.file,
          identityProof: files.identityProof?.file,
          addressProof: files.addressProof?.file,
          dobProof: files.dobProof?.file,
          photo: files.photo?.file,
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

      {/* HERO SECTION */}
      <section className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={PanHero}
            alt="Aadhaar Card"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-3 sm:space-y-6 text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
              Aadhaar Address Update
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-gray-200">
              Apply for new Aadhaar card or update your existing Aadhaar details easily and securely.
            </p>

            <a href="#aadhaar-form">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-5 sm:px-8 md:px-10 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* DOCUMENTS SECTION */}
      <section className="bg-white py-8 sm:py-12 px-3 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-green-700 rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl">
            <h2 className="text-xl sm:text-3xl font-bold text-green-600 text-center mb-2">
              आवश्यक कागदपत्रे
            </h2>

            <h3 className="text-base sm:text-2xl font-bold text-green-600 text-center mb-4 sm:mb-8 border-b-4 border-green-700 pb-3">
              Documents Required for Aadhaar Card
            </h3>

            <div className="space-y-3 text-sm sm:text-lg">
              {[
                ["आधार कार्ड / एनरोलमेंट आयडी", "Aadhaar Card / Enrollment ID"],
                ["ओळख पुरावा", "Proof of Identity (PAN / Voter ID / Passport)"],
                ["पत्ता पुरावा", "Proof of Address (Electricity Bill / Ration Card / Bank Passbook)"],
                ["जन्म तारीख पुरावा", "Date of Birth Proof (Birth Certificate / SSC Certificate)"],
                ["मोबाईल नंबर", "Mobile Number"],
                ["पासपोर्ट साइज फोटो", "Passport Size Photo"],
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg sm:text-xl flex-shrink-0">
                    ✱
                  </span>
                  <div>
                    <p className="text-gray-800 font-semibold text-xs sm:text-base">
                      {item[0]}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-base">
                      {item[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="aadhaar-form" className="py-8 sm:py-12 px-3 sm:px-6 md:px-8 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-10 sm:mb-20">

          <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-4 sm:px-10 py-5 sm:py-8">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white text-center">
              Aadhaar Card Application Form
            </h2>
            <p className="text-blue-200 text-center text-xs sm:text-sm mt-1">
              Fill in your details to get started
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-10 space-y-6 sm:space-y-8">

            <div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
                <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm">
                  1
                </span>
                Personal Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">

                {/* FULL NAME */}
                <div>
                  <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">
                    Full Name (पूर्ण नाव) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                      setFormData({ ...formData, fullName: value });
                      setErrors({ ...errors, fullName: "" });
                    }}
                    placeholder="Enter Full Name"
                    className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors.fullName ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* MOBILE     */}
                <div>
                  <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">
                    Mobile Number (मोबाईल नंबर) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setFormData({ ...formData, mobile: value });
                      setErrors({ ...errors, mobile: "" });
                    }}
                    placeholder="Enter Mobile Number"
                    className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors.mobile ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                  )}
                </div>

              </div>
            </div>

            {/* DOCUMENT UPLOAD */}
            <div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
                <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm">
                  2
                </span>
                Upload Documents
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

                <UploadBox label="Aadhaar Card / Enrollment ID (आधार कार्ड / एनरोलमेंट आयडी)" fileData={files.aadhaar} hasError={fileErrors.aadhaar} onChange={(e) => { handleFileChange(e, "aadhaar"); setFileErrors((p) => ({ ...p, aadhaar: false })); }} />
                <UploadBox label="Identity Proof (ओळख पुरावा)" fileData={files.identityProof} hasError={fileErrors.identityProof} onChange={(e) => { handleFileChange(e, "identityProof"); setFileErrors((p) => ({ ...p, identityProof: false })); }} />
                <UploadBox label="Address Proof (पत्ता पुरावा)" fileData={files.addressProof} hasError={fileErrors.addressProof} onChange={(e) => { handleFileChange(e, "addressProof"); setFileErrors((p) => ({ ...p, addressProof: false })); }} />
                <UploadBox label="Date of Birth Proof (जन्म तारीख पुरावा)" fileData={files.dobProof} hasError={fileErrors.dobProof} onChange={(e) => { handleFileChange(e, "dobProof"); setFileErrors((p) => ({ ...p, dobProof: false })); }} />
                <UploadBox label="Photo (पासपोर्ट साइज फोटो)" fileData={files.photo} hasError={fileErrors.photo} onChange={(e) => { handleFileChange(e, "photo"); setFileErrors((p) => ({ ...p, photo: false })); }} />

              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-6 sm:px-10 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Submit Application →
              </button>
            </div>

          </form>
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
ment      </div>
    </div>
  );
}

export default Aadhaar;