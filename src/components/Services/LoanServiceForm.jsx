import React, { useState } from "react";
import PanHero from "../../assets/Servicesimg/Panhero.png";
import { useNavigate } from "react-router-dom";

const loanTypes = [
  { id: "personal", title: "वैयक्तिक कर्ज", subtitle: "Personal Loan", desc: "For personal expenses & emergencies" },
  { id: "business", title: "व्यवसाय कर्ज", subtitle: "Business Loan", desc: "For business growth & working capital" },
  { id: "home", title: "गृहकर्ज", subtitle: "Home Loan", desc: "For purchasing or constructing house" },
  { id: "gold", title: "गोल्ड लोन", subtitle: "Gold Loan", desc: "For quick and easy gold loan facilities" },
  { id: "commercial", title: "व्यावसायिक कर्ज", subtitle: "Commercial Loan", desc: "For business expansion and commercial needs" },
  { id: "property", title: "मालमत्तेवर कर्ज", subtitle: "Loan Against Property", desc: "Get easy loan at low interest by pledging your property." },
  { id: "credit", title: "कॅश क्रेडिट", subtitle: "Cash Credit", desc: "Flexible loan facility for working capital requirements." },
  { id: "overdraft", title: "ओव्हरड्राफ्ट", subtitle: "Overdraft", desc: "Withdraw more than available balance in your bank account." },
];

const documents = {
  personal: [
    ["आधार कार्ड", "Aadhaar Card"],
    ["पॅन कार्ड", "PAN Card"],
    ["बँक स्टेटमेंट (6 महिने)", "Bank Statement (6 Months)"],
    ["सॅलरी स्लिप", "Salary Slip"],
    ["कंपनी आयडी किंवा ऑफर लेटर", "Company ID or Offer Letter"],
  ],
  business: [
    ["आधार कार्ड", "Aadhaar Card"],
    ["पॅन कार्ड", "PAN Card"],
    ["GST प्रमाणपत्र", "GST Certificate"],
    ["बँक स्टेटमेंट (12 महिने)", "Bank Statement (12 Months)"],
    ["३ वर्षांच्या आयटीआरची प्रत", "Copy of 3 Years IT Returns"],
    ["दुकान कायदा", "Shop Act License (if applicable)"],
  ],
  home: [
    ["आधार कार्ड", "Aadhaar Card"],
    ["पॅन कार्ड", "PAN Card"],
    ["उत्पन्न पुरावा", "Income Proof"],
    ["प्रॉपर्टी कागदपत्रे", "Property Documents"],
    ["बँक स्टेटमेंट (12 महिने)", "Bank Statement (12 Months)"],
    ["सॅलरी स्लिप", "Salary Slip (if salaried)"],
    ["passport साईज फोटो", "Passport Size Photo"],
    ["फॉर्म 16","form 16 "],
    ["ऑफर लेटर किंवा कंपनी आयडी","Offer Letter or Company ID (if salaried)"],
  ],
  gold: [
    ["आधार कार्ड", "Aadhaar Card"],
    ["पॅन कार्ड", "PAN Card"],
    ["पत्ता पुरावा", "Address Proof"],
    ["पासपोर्ट साईज फोटो", "Passport Size Photo"],
    ["सोने दागिने", "Gold Jewellery for Pledge"],
  ],
  commercial: [
    ["आधार कार्ड", "Aadhaar Card"],
    ["पॅन कार्ड", "PAN Card"],
    ["उत्पन्न पुरावा", "Income Proof"],
    ["बँक स्टेटमेंट (12 महिने)", "Bank Statement (12 Months)"],
    ["GST प्रमाणपत्र", "GST Certificate"],
    ["व्यवसाय नोंदणी प्रमाणपत्र", "Business Registration Certificate"],
  
  ],
  property: [
    ["आधार कार्ड", "Aadhaar Card"],
    ["पॅन कार्ड", "PAN Card"],
    ["उत्पन्न पुरावा", "Income Proof"],
    ["प्रॉपर्टी कागदपत्रे", "Property Documents"],
    ["ITR प्रत", "Copy of ITR"],
    ["दुकान कायदा","Shop Act License"],
    ["gst प्रमाणपत्र","GST Certificate"],
    ["उद्यम नोंदणी प्रमाणपत्र","Udyam Registration Certificate"],
  ],
  credit: [
    ["आधार कार्ड", "Aadhaar Card"],
    ["पॅन कार्ड", "PAN Card"],
    ["बँक स्टेटमेंट (12 महिने)", "Bank Statement (12 Months)"],
    ["दुकान कायदा","Shop Act License"],
     ["उद्यम नोंदणी प्रमाणपत्र","Udyam Registration Certificate"],
      ["3 वर्षांच्या ITR प्रत", "3 year Copy of ITR"],
      ["gst प्रमाणपत्र","GST Certificate"],
  ],
  overdraft: [
    ["आधार कार्ड", "Aadhaar Card"],
    ["पॅन कार्ड", "PAN Card"],
    ["बँक स्टेटमेंट (6 महिने)", "Bank Statement (6 Months)"],
     ["दुकान कायदा","Shop Act License"],
     ["उद्यम नोंदणी प्रमाणपत्र","Udyam Registration Certificate"],
      ["3 वर्षांच्या ITR प्रत", "3 year Copy of ITR"],
      ["gst प्रमाणपत्र","GST Certificate"],
  ],
};

// fields per loan type: key → label
const uploadFields = {
  personal: [
    { key: "aadhaar", label: "Aadhaar Card / आधार कार्ड" },
    { key: "panCard", label: "PAN Card / पॅन कार्ड" },
    { key: "bankStatement", label: "Bank Statement / बँक स्टेटमेंट" },
    { key: "salarySlip", label: "Salary Slip / सॅलरी स्लिप" },
    { key: "companyId", label: "Company ID or Offer Letter / कंपनी आयडी किंवा ऑफर लेटर" },
  ],
  business: [
    { key: "aadhaar", label: "Aadhaar Card / आधार कार्ड" },
    { key: "panCard", label: "PAN Card / पॅन कार्ड" },
    { key: "gstCertificate", label: "GST Certificate / GST प्रमाणपत्र" },
    { key: "bankStatement", label: "Bank Statement / बँक स्टेटमेंट" },
    { key: "itrCopy", label: "Copy of 3 Years IT Returns / ३ वर्षांच्या आयटीआरची प्रत" },
    { key: "shopLicense", label: "Shop Act License  / दुकान कायदा" },
  ],
  home: [
    { key: "aadhaar", label: "Aadhaar Card / आधार कार्ड" },
    { key: "panCard", label: "PAN Card / पॅन कार्ड" },
    { key: "incomeProof", label: "Income Proof / उत्पन्न पुरावा" },
    { key: "propertyDocs", label: "Property Documents / प्रॉपर्टी कागदपत्रे" },
    { key: "bankStatement", label: "Bank Statement / बँक स्टेटमेंट" },
    { key: "salarySlip", label: "Salary Slip / सॅलरी स्लिप" },
    { key: "photo", label: "Passport Size Photo / पासपोर्ट साईज फोटो" },
    { key: "form16", label: "Form 16 / फॉर्म 16" },
    { key: "offerLetter", label: "Offer Letter or Company ID / ऑफर लेटर किंवा कंपनी आयडी" },
  ],
  gold: [
    { key: "aadhaar", label: "Aadhaar Card / आधार कार्ड" },
    { key: "panCard", label: "PAN Card / पॅन कार्ड" },
    { key: "addressProof", label: "Address Proof / पत्ता पुरावा" },
    { key: "photo", label: "Passport Size Photo / पासपोर्ट साईज फोटो" },
    { key: "goldJewelry", label: "Gold Jewellery for Pledge / सोने दागिने" },
  ],
  commercial: [
    { key: "aadhaar", label: "Aadhaar Card / आधार कार्ड" },
    { key: "panCard", label: "PAN Card / पॅन कार्ड" },
    { key: "incomeProof", label: "Income Proof / उत्पन्न पुरावा" },
    { key: "gstCertificate", label: "GST Certificate / GST प्रमाणपत्र" },
    { key: "bankStatement", label: "Bank Statement / बँक स्टेटमेंट" },
    { key: "businessReg", label: "Business Registration Certificate / व्यवसाय नोंदणी प्रमाणपत्र" },

  ],
  property: [
    { key: "aadhaar", label: "Aadhaar Card / आधार कार्ड" },
    { key: "panCard", label: "PAN Card / पॅन कार्ड" },
    { key: "incomeProof", label: "Income Proof / उत्पन्न पुरावा" },
    { key: "propertyDocs", label: "Property Documents / प्रॉपर्टी कागदपत्रे" },
      { key: "itrCopy", label: "Copy of ITR / ITR प्रत" },
    { key: "shopLicense", label: "Shop Act License / दुकान कायदा" },
    { key: "gstCertificate", label: "GST Certificate / GST प्रमाणपत्र" },
    { key: "udyamCertificate", label: "Udyam Registration Certificate / उद्यम नोंदणी प्रमाणपत्र" },
  ],
  credit: [
    { key: "aadhaar", label: "Aadhaar Card / आधार कार्ड" },
    { key: "panCard", label: "PAN Card / पॅन कार्ड" },
    { key: "bankStatement", label: "Bank Statement / बँक स्टेटमेंट" },
    { key: "shopLicense", label: "Shop Act License / दुकान कायदा" },
    { key: "udyamCertificate", label: "Udyam Registration Certificate / उद्यम नोंदणी प्रमाणपत्र" },
    { key: "itrCopy", label: "Copy of ITR / ITR प्रत" },
    { key: "gstCertificate", label: "GST Certificate / GST प्रमाणपत्र" },
  ],
  overdraft: [
    { key: "aadhaar", label: "Aadhaar Card / आधार कार्ड" },
    { key: "panCard", label: "PAN Card / पॅन कार्ड" },
    { key: "bankStatement", label: "Bank Statement / बँक स्टेटमेंट" },
    { key: "shopLicense", label: "Shop Act License / दुकान कायदा" },
    { key: "udyamCertificate", label: "Udyam Registration Certificate / उद्यम नोंदणी प्रमाणपत्र" },  
    { key: "itrCopy", label: "Copy of ITR / ITR प्रत" },
    { key: "gstCertificate", label: "GST Certificate / GST प्रमाणपत्र" },

  ],
};

function LoanServiceForm() {
  const navigate = useNavigate();
  const [selectedLoan, setSelectedLoan] = useState("personal");
  const [formData, setFormData] = useState({ fullName: "", mobile: "" });
  const [files, setFiles] = useState({});
  const [errors, setErrors] = useState({});

  const handleLoanTypeChange = (id) => {
    setSelectedLoan(id);
    setFormData({ fullName: "", mobile: "" });
    setFiles({});
    setErrors({});
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prev) => ({ ...prev, [field]: { file, url: URL.createObjectURL(file) } }));
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3)
      newErrors.fullName = "Name must be at least 3 characters";
    if (!/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    uploadFields[selectedLoan].forEach(({ key }) => {
      if (!files[key]) newErrors[key] = "Required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const docs = {};
    uploadFields[selectedLoan].forEach(({ key }) => { docs[key] = files[key]?.file; });
    navigate("/payment", {
      state: {
        serviceName: loanTypes.find((l) => l.id === selectedLoan)?.subtitle,
        applicantName: formData.fullName,
        mobile: formData.mobile,
        Amount: 500,
        type: selectedLoan,
        formData,
        documents: docs,
      },
    });
  };

  const currentLoan = loanTypes.find((l) => l.id === selectedLoan);

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

      {/* HERO */}
      <section className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={PanHero} alt="Loan Service" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/85 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-3 sm:space-y-6 text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">Loan Services</h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-200">Apply for any loan with minimal documentation.</p>
            <a href="#loan-form">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-5 sm:px-8 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* SELECT LOAN TYPE */}
      <section className="bg-white py-8 sm:py-12 px-3 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Select Loan Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {loanTypes.map((loan) => (
              <div key={loan.id} onClick={() => handleLoanTypeChange(loan.id)}
                className={`cursor-pointer p-4 sm:p-6 rounded-2xl shadow-lg transition-all border-2 ${selectedLoan === loan.id ? "border-orange-400 bg-orange-50" : "border-gray-200 bg-white hover:shadow-xl"}`}>
                <h3 className="text-sm sm:text-xl font-bold">{loan.title}</h3>
                <p className="text-orange-500 font-semibold text-xs sm:text-base">{loan.subtitle}</p>
                <p className="text-gray-600 mt-1 text-xs sm:text-sm">{loan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIRED DOCUMENTS */}
      <section key={selectedLoan} className="bg-[#f8faff] py-8 sm:py-12 px-3 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-green-700 rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl bg-white">
            <h2 className="text-xl sm:text-3xl font-bold text-green-600 text-center mb-2">आवश्यक कागदपत्रे</h2>
            <h3 className="text-base sm:text-2xl font-bold text-green-600 text-center mb-4 sm:mb-8 border-b-4 border-green-700 pb-3">
              Required Documents for {currentLoan?.subtitle}
            </h3>
            <div className="space-y-3 text-sm sm:text-lg">
              {documents[selectedLoan].map((doc, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="min-w-[20px] text-green-600 font-bold text-base">✱</span>
                  <div>
                    <p className="text-gray-800 font-semibold">{doc[0]}</p>
                    <p className="text-gray-600">{doc[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section key={`form-${selectedLoan}`} id="loan-form" className="py-8 sm:py-12 px-3 sm:px-6 md:px-8 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-10 sm:mb-20">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-4 sm:px-10 py-5 sm:py-8">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white text-center">
              {currentLoan?.subtitle} Application Form
            </h2>
            <p className="text-blue-200 text-center text-xs sm:text-sm mt-1">Fill in your details to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-10 space-y-6 sm:space-y-8">

            {/* STEP 1 — Personal Details */}
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
                  <input type="text" value={formData.fullName}
                    onChange={(e) => { const v = e.target.value.replace(/[^a-zA-Z\s]/g, ""); setFormData({ ...formData, fullName: v }); setErrors({ ...errors, fullName: "" }); }}
                    className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors.fullName ? "border-red-500" : "border-gray-200"}`} />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">
                    Mobile Number / मोबाईल नंबर <span className="text-red-500">*</span>
                  </label>
                  <input type="tel" maxLength={10} value={formData.mobile}
                    onChange={(e) => { const v = e.target.value.replace(/[^0-9]/g, ""); setFormData({ ...formData, mobile: v }); setErrors({ ...errors, mobile: "" }); }}
                    className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors.mobile ? "border-red-500" : "border-gray-200"}`} />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>
              </div>
            </div>

            {/* STEP 2 — Upload Documents */}
            <div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
                <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm">2</span>
                Upload Documents
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {uploadFields[selectedLoan].map(({ key, label }) => (
                  <UploadBox key={key} label={label} fileData={files[key]}
                    onChange={(e) => handleFileChange(e, key)} error={errors[key]} />
                ))}
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

function UploadBox({ label, fileData, onChange, error }) {
  return (
    <div>
      <label className="block font-bold mb-1.5 text-xs sm:text-sm">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className={`bg-gray-50 p-2.5 sm:p-3 rounded-xl border ${error ? "border-red-500" : "border-gray-200"}`}>
        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-xs text-gray-600">Upload Document</span>
          <label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1.5 rounded-lg cursor-pointer text-xs">
            Upload
            <input type="file" accept="image/*,.pdf" className="hidden" onChange={onChange} />
          </label>
        </div>
        {fileData && (
          <p className="text-blue-600 text-xs mt-1.5 cursor-pointer break-all" onClick={() => window.open(fileData.url, "_blank")}>
            {fileData.file.name}
          </p>
        )}
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    </div>
  );
}

export default LoanServiceForm;
