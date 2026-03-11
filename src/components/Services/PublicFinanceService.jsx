import React, { useState } from "react";
import PanHero from "../../assets/Servicesimg/Panhero.png";
import { useNavigate } from "react-router-dom";

function PublicFinancialServices() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
  });

  const [files, setFiles] = useState({
    aadhaarCard: null,
    panCard: null,
    addressProof: null,
    incomeProof: null,
    bankPassbook: null,
    photo: null,
  });

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prev) => ({
        ...prev,
        [fieldName]: { file, url: URL.createObjectURL(file) },
      }));
    }
  };

  const documents = [
    ["आधार कार्ड", "Aadhaar Card"],
    ["पॅन कार्ड", "PAN Card"],
    ["राहण्याचा पुरावा", "Address Proof"],
    ["उत्पन्नाचा पुरावा", "Income Proof"],
    ["बँक पासबुक", "Bank Passbook Copy"],
    ["पासपोर्ट साईज फोटो", "Passport Size Photo"],
  ];

  /* PAYMENT FLOW (same as Senior.jsx) */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.mobile) {
      alert("Please fill all required fields");
      return;
    }

    const amount = 400;

    navigate("/payment", {
      state: {
        serviceName: "Public Financial Services",
        applicantName: formData.fullName,
        mobile: formData.mobile,
        Amount: amount,
        type: "PFS",
        formData,
        documents: {
          aadhaarCard: files.aadhaarCard?.file,
          panCard: files.panCard?.file,
          addressProof: files.addressProof?.file,
          incomeProof: files.incomeProof?.file,
          bankPassbook: files.bankPassbook?.file,
          photo: files.photo?.file,
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f8faff] text-[#1e293b]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={PanHero}
            alt="Public Financial Services"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/85 to-transparent"></div>

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-20 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              सार्वजनिक आर्थिक सेवा <br />
              <span className="text-[#f07e1b]">Public Financial Services</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 mt-4 sm:mt-6">
              We provide assistance for various government financial schemes and
              public welfare services.
            </p>

            <a href="#pfs-form">
              <button
                className="bg-gradient-to-r from-yellow-500 to-orange-500 
hover:from-yellow-600 hover:to-orange-600 
text-black px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 
rounded-xl font-bold text-sm sm:text-base md:text-lg 
shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {" "}
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ================= DOCUMENT SECTION ================= */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-green-700 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-600 text-center mb-3 sm:mb-4">
              आवश्यक कागदपत्रे
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold text-green-600 text-center mb-6 sm:mb-8 border-b-4 border-green-700 pb-3 sm:pb-4">
              Required Documents for Public Financial Services
            </h3>

            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✱</span>
                  <div>
                    <p className="font-semibold">{doc[0]}</p>
                    <p className="text-gray-600 text-base">{doc[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section
        id="pfs-form"
        className="py-8 sm:py-10 px-4 sm:px-6 md:px-8 bg-[#f8faff]"
      >
        <div className="max-w-6xl mx-auto bg-white rounded-[20px] sm:rounded-[30px] md:rounded-[40px] shadow-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            PFS Application Form (सार्वजनिक आर्थिक सेवा अर्ज)
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <InputField
                label="Full Name (पूर्ण नाव)"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />

              <InputField
                label="Mobile Number (मोबाईल नंबर)"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />

              <UploadBox
                label="Aadhaar Card (आधार कार्ड)"
                fileData={files.aadhaarCard}
                onChange={(e) => handleFileChange(e, "aadhaarCard")}
              />
              <UploadBox
                label="PAN Card (पॅन कार्ड)"
                fileData={files.panCard}
                onChange={(e) => handleFileChange(e, "panCard")}
              />
              <UploadBox
                label="Address Proof (राहण्याचा पुरावा)"
                fileData={files.addressProof}
                onChange={(e) => handleFileChange(e, "addressProof")}
              />
              <UploadBox
                label="Income Proof (उत्पन्नाचा पुरावा)"
                fileData={files.incomeProof}
                onChange={(e) => handleFileChange(e, "incomeProof")}
              />
              <UploadBox
                label="Bank Passbook (बँक पासबुक)"
                fileData={files.bankPassbook}
                onChange={(e) => handleFileChange(e, "bankPassbook")}
              />
              <UploadBox
                label="Passport Size Photo (पासपोर्ट साईज फोटो)"
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

/* Reusable Input Field */
function InputField({ label, value, onChange }) {
  return (
    <div>
      <label className="block font-bold mb-2 text-sm sm:text-base">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}`}
        className="w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20 text-sm sm:text-base"
      />
    </div>
  );
}

/* Reusable File Upload */
function UploadBox({ label, fileData, onChange }) {
  return (
    <div>
      <label className="block font-bold mb-2 text-sm sm:text-base">
        {label}
      </label>
      <div className="bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200">
        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-sm sm:text-base">
            Upload Document
          </span>
          <label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg cursor-pointer hover:from-yellow-600 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm">
            {" "}
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

export default PublicFinancialServices;
