import React, { useState } from "react";

import Panhero from "../../assets/Servicesimg/Panhero.png";
import Pan1 from "../../assets/Servicesimg/Pan1.png";
import Pan2 from "../../assets/Servicesimg/Pan2.png";
import Pan3 from "../../assets/Servicesimg/Pan3.png";


// ✅ MOVE UploadBox OUTSIDE main component
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

  const [files, setFiles] = useState({
    aadhaar: null,
    pan: null,
    photo: null,
    marriageCard: null,
    stampPaper: null,
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
            <a href="#gazette-form">
              <button className="bg-[#f07e1b] text-black px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>


      {/* FORM SECTION */}
      <section
        id="gajet-form"
        className="py-10 px-4 md:px-8 bg-[#f8faff]"
      >
<div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12 mb-20">          
          <h2 className="text-3xl font-bold mb-6">
            Gazette Application Form
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
              <UploadBox 
                label="aadhaar card (आधार कार्ड)"
                field="aadhaar"
                fileData={files.aadhaar}
                onFileChange={handleFileChange}
              />

              <UploadBox 
                label="pan card (पॅन कार्ड)"
                field="pan"
                fileData={files.pan}
                onFileChange={handleFileChange}
              />

              <UploadBox 
                label="passport photo (पासपोर्ट फोटो)"
                field="photo"
                fileData={files.photo}
                onFileChange={handleFileChange}
              />

              <UploadBox 
                label="marriage certificate (विवाह पत्रिका)"
                field="marriageCard"
                fileData={files.marriageCard}
                onFileChange={handleFileChange}
              />

              <UploadBox 
                label="Stamp Paper ( स्टॅम्प पेपर पत्र)"
                field="stampPaper"
                fileData={files.stampPaper}
                onFileChange={handleFileChange}
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

export default GazetteForm;