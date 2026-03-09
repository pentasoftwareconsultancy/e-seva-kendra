import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Panhero from "../../assets/Servicesimg/Panhero.png";

// ✅ UploadBox (UI untouched)
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
          className="text-blue-600 text-sm mt-2 cursor-pointer hover:text-blue-800"
          onClick={() => window.open(fileData.url, "_blank")}
        >
          {fileData.file.name}
        </p>
      )}
    </div>
  );
}

function GazetteForm() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({ fullName: "", mobile: "" });

  const [files, setFiles] = useState({
    aadhaar: null,
    pan: null,
    photo: null,
    marriageCard: null,
    stampPaper: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'fullName' || name === 'mobile') {
      setErrors({ ...errors, [name]: "" });
    }
  };

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
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) newErrors.fullName = "Name must be at least 3 characters";
    if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be exactly 10 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!formData.fullName || !formData.mobile) {
      alert("Please fill all fields");
      return;
    }

    for (let key in files) {
      if (!files[key]) {
        alert("Please upload all required documents");
        return;
      }
    }

    navigate("/payment", {
      state: {
        serviceName: "Gazette Service",
        applicantName: formData.fullName,
         mobile: formData.mobile,
        Amount: 2000,
        formData,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

      {/* Hero Section */}
      <section className="relative w-full h-[550px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={Panhero}
            alt="Gajet Hero"
            className="w-full h-full object-cover object-[20%_center]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <h1 className="text-5xl font-bold">Gazette Document Services</h1>
            <p className="text-xl text-gray-200">
              Apply for official Gazette documentation easily.
            </p>
            <a href="#gajet-form">
              <button className="bg-[#f07e1b] text-black px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>
 {/* ================= DOCUMENT REQUIREMENTS ================= */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-green-700 rounded-3xl p-8 md:p-12 shadow-xl">

            <h2 className="text-3xl font-bold text-green-600 text-center mb-2">
              गॅझेट साठी लागणारी कागदपत्रे
            </h2>

            <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-700 pb-4">
              Documents Required for Gazette Certificate
            </h3>

            <div className="space-y-4 text-lg">

              {[
                ["आधार कार्ड", "Aadhaar Card (Identity Proof)"],
                ["पॅन कार्ड", "PAN Card"],
                ["1 पासपोर्ट साईज फोटो", "Recent 1 Passport Size Photographs"],
                ["विवाह पत्रिका / विवाह प्रमाणपत्र (लागू असल्यास)", "Marriage Card / Marriage Certificate (If Applicable)"],
                ["१०० रुपयांचा स्टॅम्प पेपर प्रतिज्ञापत्र", "Affidavit on ₹100 Stamp Paper"],
                ["लाईट बिल", "Electricity Bill"],
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


      {/* FORM SECTION */}
      <section
        id="gajet-form"
        className="py-10 px-4 md:px-8 bg-[#f8faff]"
      >
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Gazette Application Form
          </h2>

          <form className="space-y-8" onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block font-bold mb-2">
                  Full Name (पूर्ण नाव) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  minLength={3}
                  placeholder="Enter Full Name"
                  className={`w-full bg-[#f8faff] p-4 rounded-xl ring-1 ${errors.fullName ? 'ring-red-500' : 'ring-gray-200'} focus:ring-2 focus:ring-[#1e40af]/20`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block font-bold mb-2">
                  Mobile Number (मोबाईल क्रमांक) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    setFormData({ ...formData, mobile: value });
                    setErrors({ ...errors, mobile: "" });
                  }}
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="Enter 10-digit Mobile Number"
                  className={`w-full bg-[#f8faff] p-4 rounded-xl ring-1 ${errors.mobile ? 'ring-red-500' : 'ring-gray-200'} focus:ring-2 focus:ring-[#1e40af]/20`}
                />
                {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
              </div>

              {/* Uploads */}
              <UploadBox label="aadhaar card (आधार कार्ड)" field="aadhaar" fileData={files.aadhaar} onFileChange={handleFileChange} />
              <UploadBox label="pan card (पॅन कार्ड)" field="pan" fileData={files.pan} onFileChange={handleFileChange} />
              <UploadBox label="passport photo (पासपोर्ट फोटो)" field="photo" fileData={files.photo} onFileChange={handleFileChange} />
              <UploadBox label="marriage certificate (विवाह पत्रिका)" field="marriageCard" fileData={files.marriageCard} onFileChange={handleFileChange} />
              <UploadBox label="Stamp Paper ( स्टॅम्प पेपर पत्र)" field="stampPaper" fileData={files.stampPaper} onFileChange={handleFileChange} />

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

export default GazetteForm;