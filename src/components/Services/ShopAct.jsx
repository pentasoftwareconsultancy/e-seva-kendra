import React, { useState } from "react";


import Panhero from "../../assets/Servicesimg/Panhero.png";
import Pan1 from "../../assets/Servicesimg/Pan1.png";
import Pan2 from "../../assets/Servicesimg/Pan2.png";
import Pan3 from "../../assets/Servicesimg/Pan3.png";

/* =====================================
   PAN SERVICE FUNCTION (YOUR FULL UI)
===================================== */
function ShopAct() {
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
            <h1 className="text-5xl font-bold">  Shop Act License Services
            </h1>

            <p className="text-xl text-gray-200">
              We provide fast and reliable assistance for Shop Act License <br />
              application and registration<br />

            </p>
            <h6> Get your Shop Act License in a hassle-free manner.</h6>

            <a href="#shopact-form">
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
              दुकान नोंदणी लायसन्स काढण्यासाठी लागणारी कागदपत्रे
            </h2>
            <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-600 pb-4">
              Documents Required for Shop Act License
            </h3>

            <div className="space-y-4 text-lg">
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
                  <p className="text-gray-800 font-semibold">बँक पासबुक</p>
                  <p className="text-gray-600 text-base">Bank Passbook</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">ई-मेल आय.डी. / मोबाईल नंबर</p>
                  <p className="text-gray-600 text-base">Email ID / Mobile Number</p>
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
                  <p className="text-gray-800 font-semibold">१ पासपोर्ट साईज फोटो</p>
                  <p className="text-gray-600 text-base">1 Passport Size Photograph</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Form Section */}
      <section id="shopact-form" className="py-10 px-4 md:px-8 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12 mb-20">

          <h2 className="text-3xl font-bold mb-6">Shop Act License Application Form</h2>

          <form className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block font-bold mb-2">Full Name (पूर्ण नाव)</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block font-bold mb-2">Mobile Number (मोबाईल क्रमांक)</label>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-bold mb-2">Email ID (ई-मेल आय.डी.)</label>
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                />
              </div>

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

              {/* Bank Passbook */}
              <UploadBox
                label="Bank Passbook (बँक पासबुक)"
                fileData={files.bankPassbook}
                onChange={(e) => handleFileChange(e, "bankPassbook")}
              />

              {/* Light Bill */}
              <UploadBox
                label="Light Bill (लाईटबिल)"
                fileData={files.lightBill}
                onChange={(e) => handleFileChange(e, "lightBill")}
              />

              {/* Passport Photo */}
              <UploadBox
                label="1 Passport Size Photograph (१ पासपोर्ट साईज फोटो)"
                fileData={files.photo}
                onChange={(e) => handleFileChange(e, "photo")}
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

export default ShopAct;


/* Reusable Upload Component */
function UploadBox({ label, fileData, onChange }) {
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
