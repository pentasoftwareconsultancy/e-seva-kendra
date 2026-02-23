import React, { useState } from "react";


import Panhero from "../../assets/Servicesimg/Panhero.png";


/* =====================================
   PAN SERVICE FUNCTION (YOUR FULL UI)
===================================== */
function PANCardServices() {
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
      <section className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] flex items-center">
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


        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              PAN Card Services
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
              We provide fast and reliable assistance for PAN card <br/>
              application and updates<br/>
             
            </p>
            <h6 className="text-sm sm:text-base"> Get your PAN card in a hassle-free manner.</h6>

           <a href="#pan-form">
  <button className="bg-[#f07e1b] text-black px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
    Apply Now
  </button>
</a>

          </div>
        </div>
      </section>

      {/* Document Requirements Section */}
      <section className="bg-white py-12 sm:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-green-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 text-center mb-2">
              पॅनकार्डसाठी लागणारी कागदपत्रे
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 text-center mb-6 sm:mb-8 border-b-4 border-green-600 pb-3 sm:pb-4">
              Documents Required for PAN Card
            </h3>
            
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
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
                  <p className="text-gray-800 font-semibold">३ पासपोर्ट साईज फोटो</p>
                  <p className="text-gray-600 text-base">3 Passport Size Photographs</p>
                </div>
              </div>
              
              <div className="bg-pink-100 p-4 rounded-xl">
                <h4 className="text-xl font-bold text-pink-600 mb-3">नावात बदल पनकार्डसाठी लागणारी कागदपत्रे</h4>
                <h5 className="text-lg font-bold text-pink-600 mb-4">Documents Required for Name Change PAN Card</h5>
                
                <div className="space-y-3">
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
                      <p className="text-gray-800 font-semibold">३ पासपोर्ट साईज फोटो</p>
                      <p className="text-gray-600 text-base">3 Passport Size Photographs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✱</span>
                    <div>
                      <p className="text-gray-800 font-semibold">लग्नपत्रिका</p>
                      <p className="text-gray-600 text-base">Marriage Certificate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✱</span>
                    <div>
                      <p className="text-gray-800 font-semibold">आधीच्या नावाचे जुने पॅनकार्ड</p>
                      <p className="text-gray-600 text-base">Old PAN Card with Previous Name</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    {/* Form Section */}
<section id="pan-form" className="py-8 sm:py-10 px-4 md:px-8 bg-[#f8faff]">
  <div className="max-w-7xl mx-auto bg-white rounded-3xl sm:rounded-[40px] shadow p-6 sm:p-8 md:p-12 mb-12 sm:mb-20">

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">PAN Card Application Form</h2>

    {/* Tab Buttons */}
    <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8">
      <button
        type="button"
        onClick={() => setActiveTab('new')}
        className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl font-semibold transition-all text-xs sm:text-sm md:text-base ${
          activeTab === 'new'
            ? 'bg-[#1e40af] text-white shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        New PAN Card
      </button>
      <button
        type="button"
        onClick={() => setActiveTab('update')}
        className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl font-semibold transition-all text-xs sm:text-sm md:text-base ${
          activeTab === 'update'
            ? 'bg-[#1e40af] text-white shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Update/Correction
      </button>
    </div>

    <form className="space-y-6 sm:space-y-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

        {/* Name */}
        <div>
          <label className="block font-bold mb-2 text-sm sm:text-base">Full Name (पूर्ण नाव)</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20 text-sm sm:text-base"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block font-bold mb-2 text-sm sm:text-base">Mobile Number  (मोबाईल क्रमांक)</label>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20 text-sm sm:text-base"
          />
        </div>

        {/* Aadhaar Card */}
        <UploadBox
          label="Aadhaar Card (आधार कार्ड)"
          fileData={files.aadhaar}
          onChange={(e) => handleFileChange(e, "aadhaar")}
        />

        {/* Passport Photos */}
        <UploadBox
          label="2 Passport Photos (२ पासपोर्ट फोटो)"
          fileData={files.photos}
          onChange={(e) => handleFileChange(e, "photos")}
        />

        {/* Marriage Certificate - Only for Update */}
        {activeTab === 'update' && (
          <UploadBox
            label="Marriage Certificate (विवाह प्रमाणपत्र)"
            fileData={files.marriageCert}
            onChange={(e) => handleFileChange(e, "marriageCert")}
          />
        )}

        {/* Old PAN Card - Only for Update */}
        {activeTab === 'update' && (
          <UploadBox
            label="Old PAN Card (जुने पॅन कार्ड)"
            fileData={files.oldPan}
            onChange={(e) => handleFileChange(e, "oldPan")}
          />
        )}

      </div>

      <div className="pt-4 sm:pt-6 flex justify-end">
        <button
          type="submit"
          className="bg-[#f07e1b] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-[#d4ac5b] transition-all"
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

export default PANCardServices;


/* Reusable Upload Component */
function UploadBox({ label, fileData, onChange }) {
  return (
    <div className="bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200">
      <div className="flex justify-between items-center gap-2">
        <span className="font-semibold text-xs sm:text-sm md:text-base">{label}</span>
        <label className="bg-[#f07e1b] text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg cursor-pointer hover:bg-[#d4ac5b] transition-all text-xs sm:text-sm">
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
