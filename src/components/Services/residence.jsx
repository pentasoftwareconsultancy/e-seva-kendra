import React, { useState } from "react";


import Panhero from "../../assets/Servicesimg/Panhero.png";
import Pan1 from "../../assets/Servicesimg/Pan1.png";
import Pan2 from "../../assets/Servicesimg/Pan2.png";
import Pan3 from "../../assets/Servicesimg/Pan3.png";

/* =====================================
   PAN SERVICE FUNCTION (YOUR FULL UI)
===================================== */
function residence() {
  const [activeTab, setActiveTab] = useState('new');
  
  const [files, setFiles] = useState({
    rationCard: null,
    lightBill: null,
    consentLetter: null,
    idProof: null,
    photo: null,
    schoolCert: null,
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFiles((prev) => ({
        ...prev,
        [field]: { file, url: fileURL },
      }));
    }
  };
  
  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

      {/* Hero Section */}
      <section className="relative w-full h-[550px] flex items-center">
        <div className="absolute inset-0">
  <img 
    src={Panhero} 
    alt="PAN Hero" 
    className="w-full h-full object-cover object-[20%_center]"
  />
</div>

{/* Left Side Blue Gradient Overlay */}
<div className="absolute inset-0">
  <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>
  </div>


        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Residence Certificate Services
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              We provide fast and reliable assistance for Residence Certificate <br/>
              application and updates<br/>
             
            </p>
            <h6> Get your Residence Certificate in a hassle-free manner.</h6>

           <a href="#pan-form">
  <button className="bg-[#f07e1b] text-black px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
    Apply Now
  </button>
</a>

          </div>
        </div>
      </section>

      {/* Document Requirements Section */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-green-700 rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-green-600 text-center mb-2">
              रहिवाशी दाखल्यासाठी लागणारी कागदपत्रे
            </h2>
            <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-700 pb-4">
              Documents Required for Residence Certificate
            </h3>
            
            <div className="space-y-4 text-lg">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">रेशनकार्ड</p>
                  <p className="text-gray-600 text-base">Ration Card</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">१५ वर्षापूर्वीचे १ लाईट बिल व चालू वर्षाचे १ लाईट बिल</p>
                  <p className="text-gray-600 text-base">1 Light Bill older than 15 years and 1 Recent Light Bill</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">स्वतःचे लाईटबील नसल्यास घरमालकाचे लाईटबील व समंतीपत्र</p>
                  <p className="text-gray-600 text-base">If Light Bill not in your name: Owner's Light Bill and Consent Letter</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">आधारकार्ड / पॅनकार्ड / मतदान कार्ड</p>
                  <p className="text-gray-600 text-base">Aadhaar Card / PAN Card / Voter ID</p>
                  <p className="text-gray-600 text-sm">(आपको १ कागदपत्रे, वडील व अर्जदार) - (Any 1 document of Parents and Applicant)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">१ पासपोर्ट साईज फोटो</p>
                  <p className="text-gray-600 text-base">1 Passport Size Photograph</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">शाळा सोडल्याचा दाखला (वडिलांचा व स्वतःचा)</p>
                  <p className="text-gray-600 text-base">School Leaving Certificate (of Parents and Applicant)</p>
                </div>
              </div>
              
             
            </div>
            
           
          </div>
        </div>
      </section>


    {/* Form Section */}
<section id="pan-form" className="py-10 px-4 md:px-8 bg-[#f8faff] scroll-mt-24">
  <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12 mb-20">
    
    <h2 className="text-3xl font-bold mb-6">Residence Certificate Application Form</h2>

    <form className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div>
          <label className="block font-bold mb-2">Full Name (पूर्ण नाव)</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
          />
        </div>

        <div>
          <label className="block font-bold mb-2">Mobile Number (मोबाईल क्रमांक)</label>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
          />
        </div>

        <UploadBox label="Ration Card (रेशन कार्ड)" fileData={files.rationCard} onChange={(e) => handleFileChange(e, "rationCard")} />
        <UploadBox label="Light Bill (लाइट बिल)" fileData={files.lightBill} onChange={(e) => handleFileChange(e, "lightBill")} />
        <UploadBox label="Consent Letter (समंतीपत्र)" fileData={files.consentLetter} onChange={(e) => handleFileChange(e, "consentLetter")} />
        <UploadBox label="Aadhaar / PAN / Voter ID (आधार / पॅन / मतदान कार्ड)" fileData={files.idProof} onChange={(e) => handleFileChange(e, "idProof")} />
        <UploadBox label="Passport Size Photograph (पासपोर्ट फोटो)" fileData={files.photo} onChange={(e) => handleFileChange(e, "photo")} />
        <UploadBox label="School Leaving Certificate (शाळा सोडल्याचा दाखला)" fileData={files.schoolCert} onChange={(e) => handleFileChange(e, "schoolCert")} />

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
};

export default residence;

function UploadBox({ label, fileData, onChange }) {
  return (
    <div className="bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200">
      <div className="flex justify-between items-center">
        <span className="font-semibold">{label}</span>
        <label className="bg-[#f07e1b] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#d4ac5b] transition-all">
          Upload
          <input type="file" accept="image/*,.pdf" className="hidden" onChange={onChange} />
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