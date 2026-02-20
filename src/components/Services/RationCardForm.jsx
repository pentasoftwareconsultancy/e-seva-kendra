import React, { useState } from "react";
import Panhero from "../../assets/Servicesimg/Panhero.png";

/* ================= REUSABLE UPLOAD COMPONENT ================= */
function UploadBox({ label, field, fileData, onFileChange }) {
  return (
    <div className="bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-sm">{label}</span>
        <label className="bg-[#f07e1b] text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-[#d4ac5b] transition-all">
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

function RationCardForm() {

  const [files, setFiles] = useState({
    nameRemoval: null,
    familyAadhaar: null,
    pan: null,
    bank: null,
    photos: null,
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

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[550px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={Panhero}
            alt="Ration Card Hero"
            className="w-full h-full object-cover object-[20%_center]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Ration Card Services
            </h1>

            <p className="text-lg md:text-xl text-gray-200">
              Apply for new ration card or update family member details easily and securely.
            </p>

            <a href="#ration-form">
              <button className="bg-[#f07e1b] text-black px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>


      {/* ================= DOCUMENT REQUIREMENTS SECTION ================= */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-green-700 rounded-3xl p-8 md:p-12 shadow-xl">

            <h2 className="text-3xl font-bold text-green-600 text-center mb-2">
              रेशनकार्डसाठी लागणारी कागदपत्रे
            </h2>

            <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-700 pb-4">
              Documents Required for Ration Card
            </h3>

            <div className="space-y-4 text-lg">

              {/* Name & Mobile */}
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">अर्जदाराचे नाव व मोबाईल नंबर</p>
                  <p className="text-gray-600 text-base">
                    Applicant Name & Mobile Number
                  </p>
                </div>
              </div>

              {/* Old Ration Removal Certificate */}
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">
                    पहिल्या रेशनकार्ड नाव कमी केल्याचा दाखला
                  </p>
                  <p className="text-gray-600 text-base">
                    Previous Ration Card Name Deletion Certificate (if applicable)
                  </p>
                </div>
              </div>

              {/* Aadhaar */}
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">
                    सर्व कुटुंब सदस्यांचे आधारकार्ड
                  </p>
                  <p className="text-gray-600 text-base">
                    Aadhaar Card of All Family Members
                  </p>
                </div>
              </div>

              {/* PAN */}
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">
                    कुटुंबातील कोणत्याही एका सदस्याचे पॅनकार्ड
                  </p>
                  <p className="text-gray-600 text-base">
                    PAN Card of Any One Family Member
                  </p>
                </div>
              </div>

              {/* Bank Passbook */}
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">
                    कोणत्याही एका सदस्याचे बँक पासबुक
                  </p>
                  <p className="text-gray-600 text-base">
                    Bank Passbook of Any One Family Member
                  </p>
                </div>
              </div>

              {/* Elder Photos */}
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">
                    ज्येष्ठ सदस्यांचे ३ पासपोर्ट साईज फोटो
                  </p>
                  <p className="text-gray-600 text-base">
                    3 Passport Size Photos of Elder Family Member
                  </p>
                </div>
              </div>

              {/* Light Bill */}
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">
                    चालू लाईटबील
                  </p>
                  <p className="text-gray-600 text-base">
                    Latest Electricity Bill
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section
        id="ration-form"
        className="py-16 px-4 md:px-8 bg-[#f8faff]"
      >
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Ration Card Application Form
          </h2>

          <form className="space-y-8">

            {/* Name & Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block font-bold mb-2">
                  Full Name (पूर्ण नाव)
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name "
                  className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">
                  Mobile Number (मोबाईल क्रमांक)
                </label>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                />
              </div>

              <UploadBox
                label="1st Ration Card Name Removal Certificate (1ले रेशन कार्ड नाव कमी केलेला दाखला)"
                field="nameRemoval"
                fileData={files.nameRemoval}
                onFileChange={handleFileChange}
              />

              <UploadBox
                label="Aadhaar Cards of All Family Members (सर्व कुटुंब सदस्यांचे आधार कार्ड)"
                field="familyAadhaar"
                fileData={files.familyAadhaar}
                onFileChange={handleFileChange}
              />

              <UploadBox
                label="PAN Card of Any One Family Member (कोणत्याही 1 सदस्याचे पॅन कार्ड)"
                field="pan"
                fileData={files.pan}
                onFileChange={handleFileChange}
              />

              <UploadBox
                label="Bank Account Proof of Any One Member (कोणत्याही 1 सदस्याचे बँक खाते पुरावा)"
                field="bank"
                fileData={files.bank}
                onFileChange={handleFileChange}
              />

              <UploadBox
                label="3 Passport Size Photos of Elder Member (ज्येष्ठ सदस्यांचे 3 पासपोर्ट फोटो)"
                field="photos"
                fileData={files.photos}
                onFileChange={handleFileChange}
              />

              <UploadBox
                label="Light Bill (लाईट बिल)"
                field="lightBill"
                fileData={files.lightBill}
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

export default RationCardForm;