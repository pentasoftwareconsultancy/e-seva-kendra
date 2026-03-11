import React, { useState } from "react";
import VoterHero from "../../assets/Servicesimg/Panhero.png";
import { useNavigate } from "react-router-dom";

function Senior() {
  const navigate = useNavigate();
  const [activeTab] = useState("new");

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    mobile: "",
  });

  const [files, setFiles] = useState({
    aadhaarCard: null,
    passportPhoto: null,
    addressProof: null,
    ageProof: null,
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.mobile) {
      alert("Please fill all required fields");
      return;
    }

    if (
<<<<<<< HEAD
      !files.aadhaarCard ||
      !files.addressProof ||
      !files.ageProof ||
      !files.passportPhoto
=======
      !files.aadhaar ||
      !files.addressProof ||
      !files.ageProof ||
      !files.photo
>>>>>>> 9fa079b4a58d4ab614a566528b60780e4073ef02
    ) {
      alert("Please upload all required documents");
      return;
    }

    const amount = 300;

    navigate("/payment", {
      state: {
        serviceName: "Senior Citizen Certificate Services",
        applicantName: formData.fullName,
        mobile: formData.mobile,
        Amount: amount,
        type: activeTab,
        formData,
        documents: {
          aadhaar: files.aadhaarCard?.file,
          photo: files.passportPhoto?.file,
          addressProof: files.addressProof?.file,
          ageProof: files.ageProof?.file,
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={VoterHero}
            alt="Voter ID Hero"
            className="w-full h-full object-cover object-[20%_center]"
          />
        </div>

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Senior Citizen Certificate Services
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200">
              Apply for Senior Citizen Certificate easily and quickly.
            </p>

            <a href="#voter-form">
              <button
                className="bg-gradient-to-r from-yellow-500 to-orange-500 
hover:from-yellow-600 hover:to-orange-600 
text-black px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 
rounded-xl font-bold text-sm sm:text-base md:text-lg 
shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {" "}
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Document Section */}
=======
      {/* Document Required Section */}
>>>>>>> 9fa079b4a58d4ab614a566528b60780e4073ef02
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-green-700 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-600 text-center mb-2">
              ज्येष्ठ नागरिक प्रमाणपत्रासाठी आवश्यक कागदपत्रे
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold text-green-600 text-center mb-6 sm:mb-8 border-b-4 border-green-600 pb-3 sm:pb-4">
              Documents Required for Senior Citizen Certificate
            </h3>

            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg">
<<<<<<< HEAD

              <DocItem marathi="वयाचा पुरावा (६० वर्षे किंवा त्याहून अधिक वय)" english="Proof of Age (60 years or above)" />
              <DocItem marathi="आधार कार्ड" english="Aadhaar Card" />
              <DocItem marathi="पॅन कार्ड" english="PAN Card" />
              <DocItem marathi="शाळा सोडल्याचा दाखला" english="School Leaving Certificate" />
              <DocItem marathi="मतदान ओळखपत्र" english="Voter ID Card" />
              <DocItem marathi="महामंडळाचे/बँकेचे ओळखपत्र (फोटोसह)" english="Corporation/Bank Identity Card (with Photo)" />
              <DocItem marathi="निवासाचा पुरावा" english="Proof of Address" />
              <DocItem marathi="रेशन कार्ड" english="Ration Card" />
              <DocItem marathi="लाईट बिल / टेलिफोन बिल" english="Electricity Bill / Telephone Bill" />
              <DocItem marathi="पासपोर्ट आकाराचे फोटो - २ प्रति" english="Passport Size Photographs - 2 Copies" />
              <DocItem marathi="रक्ताचा गट - माहितीसाठी" english="Blood Group - For Information" />
              <DocItem marathi="वैद्यकीय प्रमाणपत्र - जर गरज लागल्यास" english="Medical Certificate - If Required" />

=======
              <DocItem marathi="आधारकार्ड" english="Aadhaar Card" />
              <DocItem marathi="पत्त्याचा पुरावा" english="Address Proof" />
              <DocItem
                marathi="वयाचा पुरावा"
                english="Age Proof (Birth Certificate / School Leaving)"
              />
              <DocItem
                marathi="२ पासपोर्ट साईज फोटो"
                english="2 Passport Size Photographs"
              />
>>>>>>> 9fa079b4a58d4ab614a566528b60780e4073ef02
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* FORM */}
      <section id="voter-form" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-[#f8faff]">

        <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl p-6 sm:p-8 md:p-12">

          <h2 className="text-2xl sm:text-3xl font-bold mb-6 ">
            Senior Citizen Certificate Application Form
=======
      {/* Form Section */}
      <section
        id="voter-form"
        className="py-8 sm:py-10 px-4 sm:px-6 md:px-8 bg-[#f8faff]"
      >
        <div className="max-w-7xl mx-auto bg-white rounded-[20px] sm:rounded-[30px] md:rounded-[40px] shadow p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Voter ID Card Application Form
>>>>>>> 9fa079b4a58d4ab614a566528b60780e4073ef02
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<<<<<<< HEAD
              {/* FULL NAME */}
              <div>
                <label className="block font-bold mb-2">
                  Full Name (पूर्ण नाव) <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  required
                  minLength={3}
                  value={formData.fullName}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                    setFormData({ ...formData, fullName: value });
                    setErrors({ ...errors, fullName: "" });
                  }}
                  placeholder="Enter Full Name"
                  className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                />

                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* MOBILE */}
              <div>
                <label className="block font-bold mb-2">
                  Mobile Number (मोबाईल क्रमांक) <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={formData.mobile}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setFormData({ ...formData, mobile: value });
                    setErrors({ ...errors, mobile: "" });
                  }}
                  placeholder="Enter 10-digit Mobile Number"
                  className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                />

                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                )}
              </div>

              <UploadBox label="Aadhaar Card (आधार कार्ड)" field="aadhaarCard" fileData={files.aadhaarCard} onFileChange={handleFileChange} />
              <UploadBox label="Address Proof (पत्त्याचा पुरावा)" field="addressProof" fileData={files.addressProof} onFileChange={handleFileChange} />
              <UploadBox label="Age Proof (जन्मतारीख पुरावा)" field="ageProof" fileData={files.ageProof} onFileChange={handleFileChange} />
              <UploadBox label="Passport Photo (पासपोर्ट फोटो)" field="passportPhoto" fileData={files.passportPhoto} onFileChange={handleFileChange} />

=======
          <form
            onSubmit={handleSubmit}
            className="space-y-6 sm:space-y-8 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
              <InputField
                label="Full Name (पूर्ण नाव)"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
              <InputField
                label="Mobile Number (मोबाईल क्रमांक)"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
              <InputField
                label="Email ID (ई-मेल आय.डी.)"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <InputField
                label="Address (पत्ता)"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />

              <UploadBox
                label="Aadhaar Card (आधारकार्ड)"
                fileData={files.aadhaar}
                onChange={(e) => handleFileChange(e, "aadhaar")}
              />
              <UploadBox
                label="Address Proof (पत्त्याचा पुरावा)"
                fileData={files.addressProof}
                onChange={(e) => handleFileChange(e, "addressProof")}
              />
              <UploadBox
                label="Age Proof (वयाचा पुरावा)"
                fileData={files.ageProof}
                onChange={(e) => handleFileChange(e, "ageProof")}
              />
              <UploadBox
                label="Passport Photo (पासपोर्ट साईज फोटो)"
                fileData={files.photo}
                onChange={(e) => handleFileChange(e, "photo")}
              />
>>>>>>> 9fa079b4a58d4ab614a566528b60780e4073ef02
            </div>

            <div className="pt-6 flex justify-end">
              <button
                type="submit"
<<<<<<< HEAD
                className="bg-[#f07e1b] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#d4ac5b]"
=======
                className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-orange-700 transition-all duration-300 hover:-translate-y-0.5"
>>>>>>> 9fa079b4a58d4ab614a566528b60780e4073ef02
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

export default Senior;

<<<<<<< HEAD

/* COMPONENTS */
=======
/* Components */
>>>>>>> 9fa079b4a58d4ab614a566528b60780e4073ef02

function DocItem({ marathi, english }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-green-600 font-bold text-xl">✱</span>
      <div>
        <p className="text-gray-800 font-semibold">{marathi}</p>
        <p className="text-gray-600">{english}</p>
      </div>
    </div>
  );
}

function UploadBox({ label, field, fileData, onFileChange }) {
  return (
    <div>
<<<<<<< HEAD
      <label className="block font-bold mb-2">{label}</label>

      <div className="bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200">

        <div className="flex justify-between items-center">
          <span className="font-semibold">Upload Document</span>

          <label className="bg-[#f07e1b] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#d4ac5b]">
=======
      <label className="block font-bold mb-2 text-sm sm:text-base">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20 text-sm sm:text-base"
      />
    </div>
  );
}

function UploadBox({ label, fileData, onChange }) {
  return (
    <div>
      <label className="block font-bold mb-2 text-sm sm:text-base">
        {label}
      </label>
      <div className="bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200">
        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-sm sm:text-base">
            Upload Document
          </span>
          <label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg cursor-pointer hover:from-yellow-600 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm">
            {" "}
>>>>>>> 9fa079b4a58d4ab614a566528b60780e4073ef02
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
            className="text-blue-600 text-sm mt-2 cursor-pointer hover:text-blue-800 break-all"
            onClick={() => window.open(fileData.url, "_blank")}
          >
            {fileData.file.name}
          </p>
        )}

      </div>
    </div>
  );
}
