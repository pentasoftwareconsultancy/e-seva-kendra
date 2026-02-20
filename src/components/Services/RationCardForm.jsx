import React, { useState } from "react";

/* Upload Component (MUST be outside main component) */
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
    <section className="py-10 px-3 md:px-6 bg-[#f8faff]">
      <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12">

        <h2 className="text-3xl font-bold mb-3">
          Ration Card Application Form
        </h2>

        <p className="text-gray-600 mb-8">
          Fill out the form below and upload the required documents.
        </p>

        <form className="space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="block font-bold mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block font-bold mb-2">Mobile Number</label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200"
              />
            </div>

            <UploadBox
              label="1st Ration Card नाव कमी केलेला दाखला"
              field="nameRemoval"
              fileData={files.nameRemoval}
              onFileChange={handleFileChange}
            />

            <UploadBox
              label="सर्व कुटुंब सदस्यांचे आधार कार्ड"
              field="familyAadhaar"
              fileData={files.familyAadhaar}
              onFileChange={handleFileChange}
            />

            <UploadBox
              label="कोणत्याही 1 सदस्याचे पॅन कार्ड"
              field="pan"
              fileData={files.pan}
              onFileChange={handleFileChange}
            />

            <UploadBox
              label="कोणत्याही 1 सदस्याचे बँक खाते पुरावा"
              field="bank"
              fileData={files.bank}
              onFileChange={handleFileChange}
            />

            <UploadBox
              label="ज्येष्ठ सदस्यांचे 3 पासपोर्ट फोटो"
              field="photos"
              fileData={files.photos}
              onFileChange={handleFileChange}
            />

            <UploadBox
              label="लाईट बिल"
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
  );
}

export default RationCardForm;