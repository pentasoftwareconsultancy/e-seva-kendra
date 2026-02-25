import React, { useState } from "react";
import PanHero from "../../assets/Servicesimg/PanHero.png";

function MutualFund() {
  const [files, setFiles] = useState({
    pan: null,
    aadhaar: null,
    bankProof: null,
    photo: null,
    addressProof: null,
    incomeProof: null,
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFiles((prev) => ({
        ...prev,
        [field]: { file: file, url: fileURL },
      }));
    }
  };

  const formFields = [
    { marathi: "पूर्ण नाव", english: "Full Name" },
    { marathi: "मोबाईल क्रमांक", english: "Mobile Number" },
    { marathi: "गुंतवणूक रक्कम", english: "Investment Amount" },
    { marathi: "आवडती गुंतवणूक प्रकार (SIP / Lumpsum)", english: "Preferred Investment Type (SIP / Lumpsum)" },
  ];

  const documentFields = [
    { marathi: "पॅन कार्ड", english: "PAN Card", field: "pan" },
    { marathi: "आधार कार्ड", english: "Aadhaar Card", field: "aadhaar" },
    { marathi: "बँक पुरावा", english: "Cancelled Cheque / Bank Passbook", field: "bankProof" },
    { marathi: "पासपोर्ट फोटो", english: "Passport Size Photo", field: "photo" },
    { marathi: "पत्ता पुरावा", english: "Address Proof", field: "addressProof" },
    { marathi: "उत्पन्न पुरावा (ऐच्छिक)", english: "Income Proof (Optional)", field: "incomeProof" },
  ];

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

      {/* Hero Section */}
      <section className="relative w-full h-[550px] flex items-center">
        <div className="absolute inset-0">
          <img src={PanHero} alt="Mutual Fund Hero" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <h1 className="text-5xl font-bold">Mutual Fund Investment Services</h1>
            <p className="text-xl text-gray-200">
              Start your investment journey with safe and diversified Mutual Fund options.
            </p>
            <a href="#mutualfund-form">
              <button className="bg-[#f07e1b] text-black px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
                Invest Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Document Requirements */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-green-700 rounded-3xl p-8 md:p-12 shadow-xl">

            <h2 className="text-3xl font-bold text-green-600 text-center mb-2">
              म्युच्युअल फंड गुंतवणुकीसाठी लागणारी कागदपत्रे
            </h2>

            <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-700 pb-4">
              Documents Required for Mutual Fund Investment
            </h3>

            <div className="space-y-4 text-lg">
              {documentFields.map((doc, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✱</span>
                  <div>
                    <p className="text-gray-800 font-semibold">{doc.marathi}</p>
                    <p className="text-gray-600 text-base">{doc.english}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="mutualfund-form" className="py-10 px-4 md:px-8 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-12 mb-20">

          <h2 className="text-3xl font-bold mb-6">
            Mutual Fund Investment Application Form
          </h2>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {formFields.map((field, i) => (
                <InputField key={i} marathi={field.marathi} english={field.english} />
              ))}

              {documentFields.map((doc, i) => (
                <UploadBox
                  key={i}
                  marathi={doc.marathi}
                  english={doc.english}
                  fileData={files[doc.field]}
                  onChange={(e) => handleFileChange(e, doc.field)}
                />
              ))}

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

/* Input Component */
function InputField({ marathi, english }) {
  return (
    <div>
      <label className="block font-bold mb-2">{marathi} / {english}</label>
      <input
        type="text"
        placeholder={`Enter ${english}`}
        className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
      />
    </div>
  );
}

/* Upload Component */
function UploadBox({ marathi, english, fileData, onChange }) {
  return (
    <div className="bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200">
      <div className="flex justify-between items-center">
        <span className="font-semibold">{marathi} / {english}</span>
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

export default MutualFund;