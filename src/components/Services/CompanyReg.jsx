import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PanHero from "../../assets/Servicesimg/Panhero.webp";

function CompanyReg() {
const navigate = useNavigate();
const [selectedCompany, setSelectedCompany] = useState("private");
const [formData, setFormData] = useState({ fullName: "", mobile: "", companyName1: "", companyName2: "", companyName3: "", companyName4: "", directorsCount: "", authorizedCapital: "", paidCapital: "", sharingRatio: "" });
const [errors, setErrors] = useState({});
const [directorFiles, setDirectorFiles] = useState([]);
const [officeBill, setOfficeBill] = useState(null);
const [extraDoc, setExtraDoc] = useState(null);

const count = Math.max(2, parseInt(formData.directorsCount) || 2);
const label = selectedCompany === "llp" ? "Partner" : "Director";

const handleCompanyTypeChange = (type) => {
setSelectedCompany(type);
setFormData({ fullName: "", mobile: "", companyName1: "", companyName2: "", companyName3: "", companyName4: "", directorsCount: "", authorizedCapital: "", paidCapital: "", sharingRatio: "" });
setErrors({});
setDirectorFiles([]);
setOfficeBill(null);
setExtraDoc(null);
};

const handleDirectorCountChange = (e) => {
const val = e.target.value.replace(/[^0-9]/g, "");
setFormData({ ...formData, directorsCount: val });
const n = Math.max(2, parseInt(val) || 2);
setDirectorFiles(prev => {
const updated = [...prev];
while (updated.length < n) updated.push({ panCard: null, aadhaar: null, photo: null, idProof: null, addressProof: null, name: "", mobile: "", email: "" });
return updated.slice(0, n);
});
};

const handleDirectorFile = (e, index, field) => {
const file = e.target.files[0];
if (!file) return;
setDirectorFiles(prev => {
const updated = [...prev];
updated[index] = { ...updated[index], [field]: { file, url: URL.createObjectURL(file) } };
return updated;
});
};

const handleOfficeBill = (e) => {
const file = e.target.files[0];
if (file) setOfficeBill({ file, url: URL.createObjectURL(file) });
};

const handleExtraDoc = (e) => {
const file = e.target.files[0];
if (file) setExtraDoc({ file, url: URL.createObjectURL(file) });
};

const validateForm = () => {
const newErrors = {};
if (!formData.fullName.trim() || formData.fullName.trim().length < 3)
newErrors.fullName = "Name must be at least 3 characters";
if (!/^[0-9]{10}$/.test(formData.mobile))
newErrors.mobile = "Mobile number must be exactly 10 digits";

const n = Math.max(2, parseInt(formData.directorsCount) || 2);
for (let i = 0; i < n; i++) {
  const d = directorFiles[i] || {};
  if (!d.panCard) newErrors[`panCard_${i}`] = "Required";
  if (!d.aadhaar) newErrors[`aadhaar_${i}`] = "Required";
  if (!d.photo) newErrors[`photo_${i}`] = "Required";
  if (!d.idProof) newErrors[`idProof_${i}`] = "Required";
  if (!d.addressProof) newErrors[`addressProof_${i}`] = "Required";
  if (!d.name || d.name.trim().length < 3) newErrors[`name_${i}`] = "Name must be at least 3 characters";
  if (!d.mobile || !/^[0-9]{10}$/.test(d.mobile)) newErrors[`mobile_${i}`] = "Valid 10-digit mobile required";
  if (!d.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) newErrors[`email_${i}`] = "Valid email required";
}
if (!officeBill) newErrors.officeBill = "Office Electricity Bill is required";
if (selectedCompany === "public" && !extraDoc) newErrors.extraDoc = "Company Documents required";
if (selectedCompany === "llp" && !extraDoc) newErrors.extraDoc = "Partnership Deed required";

setErrors(newErrors);
return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
e.preventDefault();
if (!validateForm()) return;

const docs = { officeBill: officeBill?.file };
if (extraDoc) docs.extraDoc = extraDoc.file;
directorFiles.forEach((d, i) => {
  docs[`panCard_${i + 1}`] = d.panCard?.file;
  docs[`aadhaar_${i + 1}`] = d.aadhaar?.file;
  docs[`photo_${i + 1}`] = d.photo?.file;
  docs[`idProof_${i + 1}`] = d.idProof?.file;
  docs[`addressProof_${i + 1}`] = d.addressProof?.file;
});

const directorInfo = directorFiles.map((d, i) => ({
  [`director_${i+1}_name`]: d.name,
  [`director_${i+1}_mobile`]: d.mobile,
  [`director_${i+1}_email`]: d.email,
})).reduce((acc, obj) => ({ ...acc, ...obj }), {});

navigate("/payment", {
  state: {
    serviceName: companyTypes.find((l) => l.id === selectedCompany)?.title,
    applicantName: formData.fullName,
    mobile: formData.mobile,
    Amount: 20000,
    type: selectedCompany,
    formData: { ...formData, ...directorInfo },
    documents: docs,
  },
});
};

const companyTypes = [
{ id: "private", title: "Private Limited Company Registration", subtitle: "Private Limited Company Registration", desc: "For startups & growing businesses" },
{ id: "public", title: "Public Limited Company Registration", subtitle: "Public Limited Company Registration", desc: "For large scale businesses" },
{ id: "llp", title: "LLP Company Registration", subtitle: "LLP Company Registration", desc: "For partnership businesses" },
];

const documents = {
private: [
["२ ते ४ सुचवलेली कंपनी नावे (नाव मंजुरीसाठी)", "2 to 4 Suggested Company Names for Approval"],
["संचालकांची संख्या", "Number of Directors in the Company"],
["पॅन कार्ड, आधार कार्ड, एक पासपोर्ट साईज फोटो, मोबाईल नंबर व ईमेल आयडी (सर्व संचालकांचे)", "PAN Card, Aadhaar Card, One Passport Size Photo, Mobile No. & Email ID of all Directors"],
["ओळखपत्र (प्रत्येक संचालकाचे एक) - निवडणूक कार्ड / ड्रायव्हिंग लायसन्स / पासपोर्ट", "Any one document for each Director — Election Card / Driving Licence / Passport"],
["पत्ता पुरावा (प्रत्येक संचालकाचे एक) - बँक स्टेटमेंट (पहिले पान + अलीकडील १ महिन्याचे व्यवहार) / वीज बिल (२ महिन्यांपेक्षा जुने नाही, संचालकाच्या नावावर)", "Any one document for each Director — Bank Statement (first page + recent 1 month transactions) / Electricity Bill (not older than 2 months, in Director's name)"],
["कंपनीच्या नोंदणीकृत कार्यालयाचे वीज बिल (२ महिन्यांपेक्षा जुने नाही)", "Electricity Bill of Registered Office of the Company (not older than 2 months)"],
["अधिकृत भांडवल व भरणा भांडवलाची रक्कम आणि संचालकांमधील शेअर वाटप प्रमाण", "Amount of Authorized Capital & Paid-up Capital and Sharing Ratio between Directors"],
],
public: [
["२ ते ४ सुचवलेली कंपनी नावे (नाव मंजुरीसाठी)", "2 to 4 Suggested Company Names for Approval"],
["संचालकांची संख्या", "Number of Directors in the Company"],
["पॅन कार्ड, आधार कार्ड, एक पासपोर्ट साईज फोटो, मोबाईल नंबर व ईमेल आयडी (सर्व संचालकांचे)", "PAN Card, Aadhaar Card, One Passport Size Photo, Mobile No. & Email ID of all Directors"],
["ओळखपत्र (प्रत्येक संचालकाचे एक) - निवडणूक कार्ड / ड्रायव्हिंग लायसन्स / पासपोर्ट", "Any one ID Proof per Director: Election Card / Driving Licence / Passport"],
["पत्ता पुरावा (प्रत्येक संचालकाचे एक) - बँक स्टेटमेंट (पहिले पान + अलीकडील १ महिन्याचे व्यवहार) / वीज बिल (२ महिन्यांपेक्षा जुने नाही)", "Any one Address Proof per Director: Bank Statement (first page + recent 1 month transactions) / Electricity Bill (not older than 2 months)"],
["कंपनीच्या नोंदणीकृत कार्यालयाचे वीज बिल (२ महिन्यांपेक्षा जुने नाही)", "Electricity Bill of Registered Office of the Company (not older than 2 months)"],
["अधिकृत भांडवल व भरणा भांडवलाची रक्कम आणि सदस्यांमधील शेअर वाटप प्रमाण", "Amount of Authorized Capital & Paid-up Capital and Sharing Ratio between Members"],
["कंपनीची कागदपत्रे (लागू असल्यास)", "Company Documents (if applicable)"],
],
llp: [
["२ ते ४ सुचवलेली LLP नावे (नाव मंजुरीसाठी)", "2 to 4 Suggested LLP Names for Approval"],
["भागीदारांची संख्या", "Number of Partners"],
["पॅन कार्ड, आधार कार्ड, एक पासपोर्ट साईज फोटो, मोबाईल नंबर व ईमेल आयडी (सर्व भागीदारांचे)", "PAN Card, Aadhaar Card, One Passport Size Photo, Mobile No. & Email ID of all Partners"],
["ओळखपत्र (प्रत्येक भागीदाराचे एक) - निवडणूक कार्ड / ड्रायव्हिंग लायसन्स / पासपोर्ट", "Any one ID Proof per Partner: Election Card / Driving Licence / Passport"],
["पत्ता पुरावा (प्रत्येक भागीदाराचे एक) - बँक स्टेटमेंट (पहिले पान + अलीकडील १ महिन्याचे व्यवहार) / वीज बिल (२ महिन्यांपेक्षा जुने नाही)", "Any one Address Proof per Partner: Bank Statement (first page + recent 1 month transactions) / Electricity Bill (not older than 2 months)"],
["नोंदणीकृत कार्यालयाचे वीज बिल (२ महिन्यांपेक्षा जुने नाही)", "Electricity Bill of Registered Office (not older than 2 months)"],
["अधिकृत भांडवल व भरणा भांडवलाची रक्कम आणि भागीदारांमधील नफा वाटप प्रमाण", "Amount of Authorized Capital & Paid-up Capital and Profit Sharing Ratio between Partners"],
["भागीदारी करार", "Partnership Deed"],
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
        <p className="text-sm sm:text-lg md:text-xl text-gray-200">Register your company easily with minimal documentation.</p>
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
      <h2 className="text-xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Select Company Type</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
        {companyTypes.map((item) => (
          <div key={item.id} onClick={() => handleCompanyTypeChange(item.id)}
            className={`cursor-pointer p-4 sm:p-6 rounded-2xl shadow-lg transition-all border-2 ${selectedCompany === item.id ? "border-orange-400 bg-orange-50" : "border-gray-200 bg-white hover:shadow-xl"}`}>
            <h3 className="text-sm sm:text-xl font-bold">{item.title}</h3>
            <p className="text-orange-500 font-semibold text-xs sm:text-base">{item.subtitle}</p>
            <p className="text-gray-600 mt-1 text-xs sm:text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* REQUIRED DOCUMENTS */}
  <section key={selectedCompany} className="bg-[#f8faff] py-8 sm:py-12 px-3 sm:px-6 md:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="border-4 border-green-700 rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl bg-white">
        <h2 className="text-xl sm:text-3xl font-bold text-green-600 text-center mb-2">आवश्यक कागदपत्रे</h2>
        <h3 className="text-base sm:text-2xl font-bold text-green-600 text-center mb-4 sm:mb-8 border-b-4 border-green-700 pb-3">Required Documents</h3>
        <div className="space-y-3 text-sm sm:text-lg">
          {documents[selectedCompany].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="min-w-[20px] text-green-600 font-bold text-base">✱</span>
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
  <section key={`form-${selectedCompany}`} id="company-form" className="py-8 sm:py-12 px-3 sm:px-6 md:px-8 bg-[#f8faff]">
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-10 sm:mb-20">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-4 sm:px-10 py-5 sm:py-8">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white text-center">
          {companyTypes.find((l) => l.id === selectedCompany)?.subtitle} Application Form
        </h2>
        <p className="text-blue-200 text-center text-xs sm:text-sm mt-1">Fill in your details to get started</p>
      </div>

      <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-10 space-y-6 sm:space-y-8">

        {/* PERSONAL DETAILS */}
        <div>
          <h3 className="text-sm sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
            <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm">1</span>
            Personal Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            <div>
              <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">Full Name / पूर्ण नाव <span className="text-red-500">*</span></label>
              <input type="text" required minLength={3} value={formData.fullName}
                onChange={(e) => { const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); setFormData({ ...formData, fullName: value }); setErrors({ ...errors, fullName: "" }); }}
                className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors.fullName ? "border-red-500" : "border-gray-200"}`} />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">Mobile Number / मोबाईल नंबर <span className="text-red-500">*</span></label>
              <input type="tel" required maxLength={10} value={formData.mobile}
                onChange={(e) => { const value = e.target.value.replace(/[^0-9]/g, ""); setFormData({ ...formData, mobile: value }); setErrors({ ...errors, mobile: "" }); }}
                className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors.mobile ? "border-red-500" : "border-gray-200"}`} />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>
          </div>
        </div>

        {/* COMPANY DETAILS */}
        <div>
          <h3 className="text-sm sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
            <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm">2</span>
            Company Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {[1, 2, 3, 4].map(n => (
              <div key={n}>
                <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">
                  Suggested Company Name {n} / सुचवलेले कंपनी नाव {n} {n <= 2 && <span className="text-red-500">*</span>}
                </label>
                <input type="text" required={n <= 2} value={formData[`companyName${n}`]}
                  onChange={(e) => setFormData({ ...formData, [`companyName${n}`]: e.target.value })}
                  placeholder={`Company Name Option ${n}`}
                  className="w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border border-gray-200 text-xs sm:text-sm" />
              </div>
            ))}
            <div>
              <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">
                {selectedCompany === "llp" ? "Number of Partners / भागीदारांची संख्या" : "Number of Directors / संचालकांची संख्या"} <span className="text-red-500">*</span>
              </label>
              <input type="number" required min={2} value={formData.directorsCount}
                onChange={handleDirectorCountChange}
                placeholder="e.g. 2"
                className="w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border border-gray-200 text-xs sm:text-sm" />
            </div>
            <div>
              <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">
                {selectedCompany === "llp" ? "Sharing Ratio between Partners / भागीदारांमधील वाटप प्रमाण" : "Sharing Ratio between Directors / संचालकांमधील शेअर वाटप प्रमाण"} <span className="text-red-500">*</span>
              </label>
              <input type="text" required value={formData.sharingRatio}
                onChange={(e) => setFormData({ ...formData, sharingRatio: e.target.value })}
                placeholder="e.g. 50:50"
                className="w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border border-gray-200 text-xs sm:text-sm" />
            </div>
            <div>
              <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">Authorized Capital (₹) / अधिकृत भांडवल <span className="text-red-500">*</span></label>
              <input type="text" required value={formData.authorizedCapital}
                onChange={(e) => setFormData({ ...formData, authorizedCapital: e.target.value })}
                placeholder="e.g. 1,00,000"
                className="w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border border-gray-200 text-xs sm:text-sm" />
            </div>
            <div>
              <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">Paid-up Capital (₹) / भरणा भांडवल <span className="text-red-500">*</span></label>
              <input type="text" required value={formData.paidCapital}
                onChange={(e) => setFormData({ ...formData, paidCapital: e.target.value })}
                placeholder="e.g. 1,00,000"
                className="w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border border-gray-200 text-xs sm:text-sm" />
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <UploadBox label="Office Electricity Bill / कार्यालय वीज बिल" fileData={officeBill} onChange={handleOfficeBill} error={errors.officeBill} />
            </div>
            {(selectedCompany === "public" || selectedCompany === "llp") && (
              <div className="sm:col-span-2 lg:col-span-1">
                <UploadBox
                  label={selectedCompany === "llp" ? "Partnership Deed / भागीदारी करार" : "Company Documents / कंपनी कागदपत्रे"}
                  fileData={extraDoc}
                  onChange={handleExtraDoc}
                  error={errors.extraDoc}
                />
              </div>
            )}
          </div>
        </div>

        {/* UPLOAD DOCS — per director/partner */}
        <div>
          <h3 className="text-sm sm:text-lg font-bold text-gray-700 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-100 flex items-center gap-2">
            <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm">3</span>
            Upload Documents
          </h3>

          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="mb-6 border border-blue-100 rounded-xl p-4 bg-blue-50/30">
              <p className="text-sm font-bold text-blue-800 mb-3">{label} {i + 1} — Documents / कागदपत्रे</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3">
                <div className="sm:col-span-2">
                  <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">Full Name / पूर्ण नाव <span className="text-red-500">*</span></label>
                  <input type="text" value={directorFiles[i]?.name || ""}
                    onChange={(e) => { const v = e.target.value.replace(/[^a-zA-Z\s]/g, ""); setDirectorFiles(prev => { const u = [...prev]; u[i] = { ...u[i], name: v }; return u; }); setErrors({ ...errors, [`name_${i}`]: "" }); }}
                    className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors[`name_${i}`] ? "border-red-500" : "border-gray-200"}`} />
                  {errors[`name_${i}`] && <p className="text-red-500 text-xs mt-1">{errors[`name_${i}`]}</p>}
                </div>
                <div>
                  <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">Mobile No. / मोबाईल नंबर <span className="text-red-500">*</span></label>
                  <input type="tel" maxLength={10} value={directorFiles[i]?.mobile || ""}
                    onChange={(e) => { const v = e.target.value.replace(/[^0-9]/g, ""); setDirectorFiles(prev => { const u = [...prev]; u[i] = { ...u[i], mobile: v }; return u; }); setErrors({ ...errors, [`mobile_${i}`]: "" }); }}
                    className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors[`mobile_${i}`] ? "border-red-500" : "border-gray-200"}`} />
                  {errors[`mobile_${i}`] && <p className="text-red-500 text-xs mt-1">{errors[`mobile_${i}`]}</p>}
                </div>
                <div>
                  <label className="block font-semibold mb-1.5 text-xs sm:text-sm text-gray-600">Email ID / ईमेल आयडी <span className="text-red-500">*</span></label>
                  <input type="email" value={directorFiles[i]?.email || ""}
                    onChange={(e) => { setDirectorFiles(prev => { const u = [...prev]; u[i] = { ...u[i], email: e.target.value }; return u; }); setErrors({ ...errors, [`email_${i}`]: "" }); }}
                    className={`w-full bg-gray-50 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm ${errors[`email_${i}`] ? "border-red-500" : "border-gray-200"}`} />
                  {errors[`email_${i}`] && <p className="text-red-500 text-xs mt-1">{errors[`email_${i}`]}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <UploadBox label="PAN Card / पॅन कार्ड" fileData={directorFiles[i]?.panCard} onChange={(e) => handleDirectorFile(e, i, "panCard")} error={errors[`panCard_${i}`]} />
                <UploadBox label="Aadhaar Card / आधार कार्ड" fileData={directorFiles[i]?.aadhaar} onChange={(e) => handleDirectorFile(e, i, "aadhaar")} error={errors[`aadhaar_${i}`]} />
                <UploadBox label="Passport Size Photo / पासपोर्ट साईज फोटो" fileData={directorFiles[i]?.photo} onChange={(e) => handleDirectorFile(e, i, "photo")} error={errors[`photo_${i}`]} />
                <UploadBox label="ID Proof (Election Card / DL / Passport) / ओळखपत्र" fileData={directorFiles[i]?.idProof} onChange={(e) => handleDirectorFile(e, i, "idProof")} error={errors[`idProof_${i}`]} />
                <UploadBox label="Address Proof (Bank Statement / Electricity Bill) / पत्ता पुरावा" fileData={directorFiles[i]?.addressProof} onChange={(e) => handleDirectorFile(e, i, "addressProof")} error={errors[`addressProof_${i}`]} />
              </div>
            </div>
          ))}

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
<input type="file" className="hidden" onChange={onChange} />
</label>
</div>
{fileData && (
<p className="text-blue-600 text-xs mt-1.5 cursor-pointer" onClick={() => window.open(fileData.url, "_blank")}>
{fileData.file.name}
</p>
)}
{error && <p className="text-red-500 text-xs mt-1">{error}</p>}
</div>
</div>
);
}

export default CompanyReg;
