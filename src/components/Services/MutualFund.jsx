import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PanHero from "../../assets/Servicesimg/Panhero.png";

function MutualFund() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    investmentAmount: "",
    investmentType: "",
  });

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

  /* SUBMIT HANDLER */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.mobile) {
      alert("Please fill required fields");
      return;
    }

    const missingDocs = Object.values(files).some((f) => !f);
    if (missingDocs) {
      alert("Please upload all required documents");
      return;
    }

    const amount = 600;

    navigate("/payment", {
      state: {
        serviceName: "Mutual Fund",
        applicantName: formData.fullName,
        mobile: formData.mobile,
        Amount: amount,
        type: "Mutual Fund",
        formData: formData,
        documents: {
          pan: files.pan?.file,
          aadhaar: files.aadhaar?.file,
          bankProof: files.bankProof?.file,
          photo: files.photo?.file,
          addressProof: files.addressProof?.file,
          incomeProof: files.incomeProof?.file,
        },
      },
    });
  };
  const formFields = [
    { marathi: "पूर्ण नाव", english: "Full Name" },
    { marathi: "मोबाईल क्रमांक", english: "Mobile Number" },
    { marathi: "गुंतवणूक रक्कम", english: "Investment Amount" },
    {
      marathi: "आवडती गुंतवणूक प्रकार (SIP / Lumpsum)",
      english: "Preferred Investment Type (SIP / Lumpsum)",
    },
  ];

  const documentFields = [
    { marathi: "पॅन कार्ड", english: "PAN Card", field: "pan" },
    { marathi: "आधार कार्ड", english: "Aadhaar Card", field: "aadhaar" },
    {
      marathi: "बँक पुरावा",
      english: "Cancelled Cheque / Bank Passbook",
      field: "bankProof",
    },
    {
      marathi: "पासपोर्ट फोटो",
      english: "Passport Size Photo",
      field: "photo",
    },
    {
      marathi: "पत्ता पुरावा",
      english: "Address Proof",
      field: "addressProof",
    },
    {
      marathi: "उत्पन्न पुरावा (ऐच्छिक)",
      english: "Income Proof (Optional)",
      field: "incomeProof",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={PanHero}
            alt="Mutual Fund Hero"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Mutual Fund Investment Services
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200">
              Start your investment journey with safe and diversified Mutual
              Fund options.
            </p>

            <a href="#mutualfund-form">
              <button
                className="bg-gradient-to-r from-yellow-500 to-orange-500 
hover:from-yellow-600 hover:to-orange-600 
text-black px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 
rounded-xl font-bold text-sm sm:text-base md:text-lg 
shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {" "}
                Invest Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Document Requirements */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-green-700 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-600 text-center mb-2">
              म्युच्युअल फंड गुंतवणुकीसाठी लागणारी कागदपत्रे
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold text-green-600 text-center mb-6 sm:mb-8 border-b-4 border-green-700 pb-3 sm:pb-4">
              Documents Required for Mutual Fund Investment
            </h3>

            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg">
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
      <section
        id="mutualfund-form"
        className="py-8 sm:py-10 px-4 sm:px-6 md:px-8 bg-[#f8faff]"
      >
        <div className="max-w-7xl mx-auto bg-white rounded-[20px] sm:rounded-[30px] md:rounded-[40px] shadow-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Mutual Fund Investment Application Form
          </h2>

          <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {formFields.map((field, i) => {
                const fieldKeys = [
                  "fullName",
                  "mobile",
                  "investmentAmount",
                  "investmentType",
                ];

                return (
                  <InputField
                    key={i}
                    marathi={field.marathi}
                    english={field.english}
                    value={formData[fieldKeys[i]]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [fieldKeys[i]]: e.target.value,
                      })
                    }
                  />
                );
              })}

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

            <div className="pt-4 sm:pt-6 flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-orange-700 transition-all duration-300 hover:-translate-y-0.5"
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
function InputField({ marathi, english, value, onChange }) {
  return (
    <div>
      <label className="block font-bold mb-2 text-sm sm:text-base">
        {marathi} / {english}
      </label>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={`Enter ${english}`}
        className="w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20 text-sm sm:text-base"
      />
    </div>
  );
}

/* Upload Component */
function UploadBox({ marathi, english, fileData, onChange }) {
  return (
    <div>
      <label className="block font-bold mb-2 text-sm sm:text-base">
        {marathi} / {english}
      </label>
      <div className="bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200">
        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-sm sm:text-base">
            Upload Document
          </span>

          <label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg cursor-pointer hover:from-yellow-600 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm">
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
            className="text-blue-600 text-xs sm:text-sm mt-2 cursor-pointer hover:text-blue-800 break-all"
            onClick={() => window.open(fileData.url, "_blank")}
          >
            {fileData.file.name}
          </p>
        )}
      </div>
    </div>
  );
}

export default MutualFund;
