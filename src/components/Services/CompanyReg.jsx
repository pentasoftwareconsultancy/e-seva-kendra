import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PanHero from "../../assets/Servicesimg/Panhero.png";

function CompanyReg() {
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState("private");
  const [formData, setFormData] = useState({ fullName: "", mobile: "" });
  const [errors, setErrors] = useState({ fullName: "", mobile: "" });
  const [files, setFiles] = useState({ aadhaar: null, panCard: null, bankStatement: null, salarySlip: null, gstCertificate: null, incomeProof: null, propertyDocs: null });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) setFiles((prev) => ({ ...prev, [field]: { file, url: URL.createObjectURL(file) } }));
  };

  const handleCompanyTypeChange = (type) => {
    setSelectedCompany(type);
    setFormData({ fullName: "", mobile: "" });
    setErrors({ fullName: "", mobile: "" });
    setFiles({ aadhaar: null, panCard: null, bankStatement: null, salarySlip: null, gstCertificate: null, incomeProof: null, propertyDocs: null });
  };

  const validateForm = () => {
  const newErrors = {};

  if (!formData.fullName.trim() || formData.fullName.trim().length < 3)
    newErrors.fullName = "Name must be at least 3 characters";

  if (!/^[0-9]{10}$/.test(formData.mobile))
    newErrors.mobile = "Mobile number must be exactly 10 digits";

  // ✅ File validation based on company type
  if (selectedCompany === "private") {
    if (!files.aadhaar) newErrors.aadhaar = "Aadhaar is required";
    if (!files.panCard) newErrors.panCard = "PAN is required";
    if (!files.bankStatement) newErrors.bankStatement = "Director ID Proof is required";
    if (!files.salarySlip) newErrors.salarySlip = "Address Proof is required";
  }

  if (selectedCompany === "public") {
    if (!files.aadhaar) newErrors.aadhaar = "Aadhaar is required";
    if (!files.panCard) newErrors.panCard = "PAN is required";
    if (!files.gstCertificate) newErrors.gstCertificate = "Company Docs required";
    if (!files.bankStatement) newErrors.bankStatement = "Bank Statement required";
  }

  if (selectedCompany === "llp") {
    if (!files.aadhaar) newErrors.aadhaar = "Aadhaar is required";
    if (!files.panCard) newErrors.panCard = "PAN is required";
    if (!files.incomeProof) newErrors.incomeProof = "Partnership Deed required";
    if (!files.propertyDocs) newErrors.propertyDocs = "Address Proof required";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    navigate("/payment", {
      state: {
        serviceName: "Company Registration",
        applicantName: formData.fullName,
        mobile: formData.mobile,
        Amount: 500,
        type: selectedCompany,
        formData,
        documents: {
          aadhaar: files.aadhaar?.file,
          panCard: files.panCard?.file,
          bankStatement: files.bankStatement?.file,
          salarySlip: files.salarySlip?.file,
          gstCertificate: files.gstCertificate?.file,
          incomeProof: files.incomeProof?.file,
          propertyDocs: files.propertyDocs?.file,
        },
      },
    });
  };

  const companyTypes = [
    { id: "private", title: "Private Limited Company", subtitle: "Private Ltd.", desc: "For startups & growing businesses" },
    { id: "public", title: "Public Limited Company", subtitle: "Public Ltd.", desc: "For large scale businesses" },
    { id: "llp", title: "Limited Liability Partnership", subtitle: "LLP", desc: "For partnership businesses" },
  ];

  const documents = {
    private: [
      ["आधार कार्ड", "Aadhaar Card"],
      ["पॅन कार्ड", "PAN Card"],
      ["Director ID Proof", "Director ID Proof"],
      ["Address Proof", "Address Proof"],
    ],
    public: [
  
      ["पॅन कार्ड", "PAN Card"],
      ["Company Docs", "Company Incorporation Docs"],
      ["Bank Statement", "Bank Statement"],
    ],
    llp: [
      ["आधार कार्ड", "Aadhaar Card"],
    
      ["Partnership Deed", "Partnership Deed"],
      ["Address Proof", "Address Proof"],
    ],
  };


  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">
      
      {/* HERO */}
      <section className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={PanHero} alt="Company Registration" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/85 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-3 sm:space-y-6 text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">Company Registration</h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-200">
              Register your company easily with minimal documentation.
            </p>
            <a href="#company-form">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-5 sm:px-8 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* SELECT COMPANY TYPE */}
      <section className="bg-white py-8 sm:py-12 px-3 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">
            Select Company Type
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
            {companyTypes.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCompanyTypeChange(item.id)}
                className={`cursor-pointer p-4 sm:p-6 rounded-2xl shadow-lg transition-all border-2 ${
                  selectedCompany === item.id
                    ? "border-orange-400 bg-orange-50"
                    : "border-gray-200 bg-white hover:shadow-xl"
                }`}
              >
                <h3 className="text-sm sm:text-xl font-bold">{item.title}</h3>
                <p className="text-orange-500 font-semibold text-xs sm:text-base">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 mt-1 text-xs sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* REQUIRED DOCUMENTS */}
      <section key={selectedCompany} className="bg-[#f8faff] py-8 sm:py-12 px-3 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-green-700 rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl bg-white">
            <h2 className="text-xl sm:text-3xl font-bold text-green-600 text-center mb-2">
              आवश्यक कागदपत्रे
            </h2>
            <h3 className="text-base sm:text-2xl font-bold text-green-600 text-center mb-4 sm:mb-8 border-b-4 border-green-700 pb-3">
              Required Documents
            </h3>

            <div className="space-y-3 text-sm sm:text-lg">
              {documents[selectedCompany].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">✱</span>
                  <div>
                    <p className="text-gray-800 font-semibold">{item[0]}</p>
                    <p className="text-gray-600">{item[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section
        key={`form-${selectedCompany}`}
        id="company-form"
        className="py-8 sm:py-12 px-3 sm:px-6 md:px-8 bg-[#f8faff]"
      >
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-10 sm:mb-20">

          <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-4 sm:px-10 py-5 sm:py-8">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white text-center">
              {companyTypes.find((l) => l.id === selectedCompany)?.subtitle} Application Form
            </h2>
            <p className="text-blue-200 text-center text-xs sm:text-sm mt-1">
              Fill in your details to get started
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-10 space-y-6 sm:space-y-8">

            {/* PERSONAL DETAILS */}
            <div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
                <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm">
                  1
                </span>
                Personal Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                <div>
                  <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    required
                    minLength={3}
                    value={formData.fullName}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                      setFormData({ ...formData, fullName: value });
                      setErrors({ ...errors, fullName: "" });
                    }}
                    className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${
                      errors.fullName ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={formData.mobile}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      setFormData({ ...formData, mobile: value });
                      setErrors({ ...errors, mobile: "" });
                    }}
                    className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${
                      errors.mobile ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* UPLOAD DOCS (same UI) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

  {selectedCompany === "private" && (
    <>
      <UploadBox label="Aadhaar Card" fileData={files.aadhaar} onChange={(e) => handleFileChange(e, "aadhaar")} error={errors.aadhaar} />
      <UploadBox label="PAN Card" fileData={files.panCard} onChange={(e) => handleFileChange(e, "panCard")} error={errors.panCard} />
      <UploadBox label="Director ID Proof" fileData={files.bankStatement} onChange={(e) => handleFileChange(e, "bankStatement")} error={errors.bankStatement} />
      <UploadBox label="Address Proof" fileData={files.salarySlip} onChange={(e) => handleFileChange(e, "salarySlip")} error={errors.salarySlip} />
    </>
  )}

  {selectedCompany === "public" && (
    <>
      <UploadBox label="Aadhaar Card" fileData={files.aadhaar} onChange={(e) => handleFileChange(e, "aadhaar")} error={errors.aadhaar} />
      <UploadBox label="PAN Card" fileData={files.panCard} onChange={(e) => handleFileChange(e, "panCard")} error={errors.panCard} />
      <UploadBox label="Company Documents" fileData={files.gstCertificate} onChange={(e) => handleFileChange(e, "gstCertificate")} error={errors.gstCertificate} />
      <UploadBox label="Bank Statement" fileData={files.bankStatement} onChange={(e) => handleFileChange(e, "bankStatement")} error={errors.bankStatement} />
    </>
  )}

  {selectedCompany === "llp" && (
    <>
      <UploadBox label="Aadhaar Card" fileData={files.aadhaar} onChange={(e) => handleFileChange(e, "aadhaar")} error={errors.aadhaar} />
      <UploadBox label="PAN Card" fileData={files.panCard} onChange={(e) => handleFileChange(e, "panCard")} error={errors.panCard} />
      <UploadBox label="Partnership Deed" fileData={files.incomeProof} onChange={(e) => handleFileChange(e, "incomeProof")} error={errors.incomeProof} />
      <UploadBox label="Address Proof" fileData={files.propertyDocs} onChange={(e) => handleFileChange(e, "propertyDocs")} error={errors.propertyDocs} />
    </>
  )}

</div>

            <div className="flex justify-end pt-2">
              <button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 sm:px-10 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base">
                Submit Application →
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function UploadBox({ label, fileData, onChange, error }) {
  return (
    <div>
      <label className="block font-bold mb-1.5 text-xs sm:text-sm">
        {label} <span className="text-red-500">*</span>
      </label>

      <div className={`bg-gray-50 p-2.5 sm:p-3 rounded-xl border ${
        error ? "border-red-500" : "border-gray-200"
      }`}>
        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-xs text-gray-600">
            Upload Document
          </span>

          <label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1.5 rounded-lg cursor-pointer text-xs">
            Upload
            <input type="file" className="hidden" onChange={onChange} />
          </label>
        </div>

        {fileData && (
          <p
            className="text-blue-600 text-xs mt-1.5 cursor-pointer"
            onClick={() => window.open(fileData.url, "_blank")}
          >
            {fileData.file.name}
          </p>
        )}

        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    </div>
  );
}

export default CompanyReg;