import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PanHero from "../../assets/Servicesimg/Panhero.png";

function AyushmanCardForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    // aadhaarNumber: "",
    mobile: "",
    // familyMembers: "",
    // village: "",
    // district: "",
  });

  const [errors, setErrors] = useState({ fullName: "", mobile: "" });

  const [files, setFiles] = useState({
    aadhaar: null,
    rationCard: null,
    photo: null,
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];

    if (file) {
      const fileURL = URL.createObjectURL(file);

      setFiles((prev) => ({
        ...prev,
        [field]: {
          file: file,
          url: fileURL,
        },
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3)
      newErrors.fullName = "Name must be at least 3 characters";

    if (!/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be exactly 10 digits";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!files.aadhaar || !files.rationCard || !files.photo) {
      alert("Please upload all required documents");
      return;
    }

    navigate("/payment", {
      state: {
        serviceName: "Ayushman Card",
        applicantName: formData.fullName,
        mobile: formData.mobile,
        Amount: 350,
        formData: { ...formData },
        documents: {
          aadhaar: files.aadhaar?.file,
          rationCard: files.rationCard?.file,
          photo: files.photo?.file,
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

      {/* Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={PanHero}
            alt="Ayushman Card"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Ayushman Card Registration
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200">
              Get health insurance benefits up to ₹5 lakh per family under PMJAY scheme.
            </p>

            <a href="#ayushman-form">
              <button
                className="bg-gradient-to-r from-yellow-500 to-orange-500 
                hover:from-yellow-600 hover:to-orange-600 
                text-black px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 
                rounded-xl font-bold text-sm sm:text-base md:text-lg 
                shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>


      {/* Form Section */}
      <section
        id="ayushman-form"
        className="py-8 sm:py-10 px-4 md:px-8 bg-[#f8faff]"
      >
        <div className="max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-[40px] shadow-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-20">

          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Ayushman Card Application Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

              {/* Full Name */}
              <InputField
                label="Full Name (पूर्ण नाव)"
                value={formData.fullName}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                  setFormData({ ...formData, fullName: value });
                  setErrors({ ...errors, fullName: "" });
                }}
                required
                error={errors.fullName}
              />

              {/* Mobile Number */}
              <InputField
                label="Mobile Number (मोबाईल नंबर)"
                type="tel"
                value={formData.mobile}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setFormData({ ...formData, mobile: value });
                  setErrors({ ...errors, mobile: "" });
                }}
                required
                maxLength={10}
                error={errors.mobile}
              />

              {/* Commented Fields */}

              {/*
              <InputField
                label="Aadhaar Number (आधार क्रमांक)"
                value={formData.aadhaarNumber}
                onChange={(e) =>
                  setFormData({ ...formData, aadhaarNumber: e.target.value })
                }
                required
              />

              <InputField
                label="Family Members Count (कुटुंब सदस्य संख्या)"
                value={formData.familyMembers}
                onChange={(e) =>
                  setFormData({ ...formData, familyMembers: e.target.value })
                }
                required
              />

              <InputField
                label="Village / City (गाव / शहर)"
                value={formData.village}
                onChange={(e) =>
                  setFormData({ ...formData, village: e.target.value })
                }
                required
              />

              <InputField
                label="District (जिल्हा)"
                value={formData.district}
                onChange={(e) =>
                  setFormData({ ...formData, district: e.target.value })
                }
                required
              />
              */}

              {/* Upload Fields (UNCHANGED) */}

              <UploadBox
                label="Aadhaar Card (आधार कार्ड)"
                fileData={files.aadhaar}
                onChange={(e) => handleFileChange(e, "aadhaar")}
              />

              <UploadBox
                label="Ration Card (रेशन कार्ड)"
                fileData={files.rationCard}
                onChange={(e) => handleFileChange(e, "rationCard")}
              />

              <UploadBox
                label="Photo (फोटो)"
                fileData={files.photo}
                onChange={(e) => handleFileChange(e, "photo")}
              />
            </div>

            <div className="pt-4 sm:pt-6 flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-orange-700 transition-all duration-300 hover:-translate-y-0.5"
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


/* Input Component */
function InputField({
  label,
  type = "text",
  value,
  onChange,
  required,
  maxLength,
  error,
}) {
  return (
    <div>
      <label className="block font-bold mb-2 text-sm sm:text-base">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        placeholder={`Enter ${label}`}
        className={`w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 text-sm sm:text-base ${
          error ? "ring-red-500 focus:ring-red-500" : "ring-gray-200 focus:ring-[#1e40af]/20"
        } focus:ring-2`}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}


/* Upload Component */
function UploadBox({ label, fileData, onChange }) {
  return (
    <div>
      <label className="block font-bold mb-2 text-sm sm:text-base">
        {label}
      </label>

      <div className="bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200">

        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-xs sm:text-sm">
            Upload Document
          </span>

          <label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg cursor-pointer hover:from-yellow-600 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm">
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
            className="text-blue-600 text-xs sm:text-sm mt-2 cursor-pointer hover:text-blue-800 break-all"
            onClick={() => window.open(fileData.url, "_blank")}
          >
            {fileData.file.name}
          </p>
        )}
      </div>
    </div>
  );
}

export default AyushmanCardForm;