import React, { useState } from "react";


import Seniorhero from "../../assets/Servicesimg/panhero.png";

/* =====================================
   PAN SERVICE FUNCTION (YOUR FULL UI)
===================================== */
function Senior() {
  const [activeTab, setActiveTab] = useState('new');
  
  const [files, setFiles] = useState({
    aadhaar: null,
    photos: null,
    marriageCert: null,
    oldPan: null,
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
    src={Seniorhero} 
    alt="Senior Citizen Hero" 
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
              Senior Citizen Certificate Services
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              We provide fast and reliable assistance for Senior Citizen <br/>
              Certificate for citizens aged 60 years and above<br/>
             
            </p>
            <h6> Get your Senior Citizen Certificate in a hassle-free manner.</h6>

           <a href="#senior-form">
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
              ज्येष्ठ नागरिक दाखल्यासाठी लागणारी कागदपत्रे
            </h2>
            <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-600 pb-4">
              Documents Required for Senior Citizen Certificate
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
                  <p className="text-gray-800 font-semibold">पॅनकार्ड</p>
                  <p className="text-gray-600 text-base">PAN Card</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">आधारकार्ड</p>
                  <p className="text-gray-600 text-base">Aadhaar Card</p>
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
                  <p className="text-gray-800 font-semibold">लाईटबिल</p>
                  <p className="text-gray-600 text-base">Light Bill</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">शाळा सोडल्याचा दाखला</p>
                  <p className="text-gray-600 text-base">School Leaving Certificate</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">या योजनेसाठी अर्जदाराचे वय 60 वर्षे पूर्ण आवश्यक आहे.</p>
                  <p className="text-gray-600 text-base">The applicant must be 60 years of age or older for this scheme.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    {/* Form Section */}
<section id="senior-form" className="py-10 px-4 md:px-8 bg-[#f8faff]">
  <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12 mb-20">

    <h2 className="text-3xl font-bold mb-6">Senior Citizen Certificate Application Form</h2>

    <form className="space-y-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

        {/* Name */}
        <div className="h-[88px]">
          <label className="block font-bold mb-2">Full Name (पूर्ण नाव)</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
          />
        </div>

        {/* Mobile */}
        <div className="h-[88px]">
          <label className="block font-bold mb-2">Mobile Number (मोबाईल क्रमांक)</label>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
          />
        </div>

        {/* Email */}
        <div className="h-[88px]">
          <label className="block font-bold mb-2">Email ID (ई-मेल आय.डी.)</label>
          <input
            type="email"
            placeholder="Enter Email ID"
            className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
          />
        </div>

        {/* Ration Card */}
        <UploadBox
          label="Ration Card (रेशनकार्ड)"
          fileData={files.ration}
          onChange={(e) => handleFileChange(e, "ration")}
        />

        {/* PAN Card */}
        <UploadBox
          label="PAN Card (पॅनकार्ड)"
          fileData={files.pan}
          onChange={(e) => handleFileChange(e, "pan")}
        />

        {/* Aadhaar Card */}
        <UploadBox
          label="Aadhaar Card (आधारकार्ड)"
          fileData={files.aadhaar}
          onChange={(e) => handleFileChange(e, "aadhaar")}
        />

        {/* Passport Photo */}
        <UploadBox
          label="1 Passport Size Photograph (१ पासपोर्ट साईज फोटो)"
          fileData={files.photo}
          onChange={(e) => handleFileChange(e, "photo")}
        />

        {/* Light Bill */}
        <UploadBox
          label="Light Bill (लाईटबिल)"
          fileData={files.lightBill}
          onChange={(e) => handleFileChange(e, "lightBill")}
        />

        {/* School Leaving Certificate */}
        <UploadBox
          label="School Leaving Certificate (शाळा सोडल्याचा दाखला)"
          fileData={files.schoolLeaving}
          onChange={(e) => handleFileChange(e, "schoolLeaving")}
        />

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

export default Senior;


/* Reusable Upload Component */
function UploadBox({ label, fileData, onChange }) {
  return (
    <div className="bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 h-[88px]">
      <div className="flex justify-between items-center">
        <span className="font-semibold">{label}</span>
        <label className="bg-[#f07e1b] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#d4ac5b] transition-all">
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
          className="text-blue-600 text-sm mt-2 cursor-pointer hover:text-blue-800"
          onClick={() => window.open(fileData.url, "_blank")}
        >
          {fileData.file.name}
        </p>
      )}
    </div>
  );
}
