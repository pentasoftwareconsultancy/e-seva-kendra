import React, { useState } from "react";

import Panhero from "../../assets/Servicesimg/Panhero.png";
import Pan1 from "../../assets/Servicesimg/Pan1.png";
import Pan2 from "../../assets/Servicesimg/Pan2.png";
import Pan3 from "../../assets/Servicesimg/Pan3.png";

function PassportForm() {

  const [files, setFiles] = useState({
    pan: null,
    aadhaar: null,
    photo: null,
    lightBill: null,
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

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

      {/* Hero Section */}
      <section className="relative w-full h-[550px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={Panhero}
            alt="Hero"
            className="w-full h-full object-cover object-[20%_center]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <h1 className="text-5xl font-bold">Passport Services</h1>
            <p className="text-xl text-gray-200">
              We provide fast and reliable assistance for Passport application and renewal services.
            </p>
            <a href="#passport-form">
              <button className="bg-[#f07e1b] text-black px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-[#f8faff] py-20 px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Steps to Apply for Passport
          </h2>
          <h6 className="text-lg text-gray-500">
            Follow these simple steps to get your PAN card easily and quickly.
          </h6>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          <div className="bg-white rounded-[32px] shadow overflow-hidden">
            <div className="w-full h-44 flex items-center justify-center bg-gray-50">
              <img src={Pan1} alt="" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-1">1. Fill Application</h3>
              <p className="text-gray-500">Provide required details.</p>
            </div>
          </div>

          <div className="bg-white rounded-[32px] shadow overflow-hidden">
            <div className="w-full h-44 flex items-center justify-center bg-gray-50">
              <img src={Pan2} alt="" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-1">2. Submit Documents</h3>
              <p className="text-gray-500">Upload identity proof.</p>
            </div>
          </div>

          <div className="bg-white rounded-[32px] shadow overflow-hidden">
            <div className="w-full h-44 flex items-center justify-center bg-gray-50">
              <img src={Pan3} alt="" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-1">3. Receive Card</h3>
              <p className="text-gray-500">Delivered to your address.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Form Section */}
      <section id="passport-form" className="py-10 px-4 md:px-8 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12 mb-20">

          
          <h2 className="text-3xl font-bold mb-6">
            Passport Application Form
          </h2>

          <form className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block font-bold mb-2">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                />
              </div>

              {/* PAN Card */}
              <UploadBox
                label="पॅन कार्ड"
                fileData={files.pan}
                onChange={(e) => handleFileChange(e, "pan")}
              />

              {/* Aadhaar */}
              <UploadBox
                label="आधार कार्ड"
                fileData={files.aadhaar}
                onChange={(e) => handleFileChange(e, "aadhaar")}
              />

              {/* Passport Photo */}
              <UploadBox
                label="पासपोर्ट फोटो"
                fileData={files.photo}
                onChange={(e) => handleFileChange(e, "photo")}
              />

              {/* Light Bill */}
              <UploadBox
                label="लाइट बिल"
                fileData={files.lightBill}
                onChange={(e) => handleFileChange(e, "lightBill")}
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
}

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

export default PassportForm;