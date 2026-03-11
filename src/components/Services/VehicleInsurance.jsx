import React, { useState } from "react";
import PanHero from "../../assets/Servicesimg/Panhero.png";
import { useNavigate } from "react-router-dom";

function VehicleInsurance() {
  const navigate = useNavigate();

  const [vehicleType, setVehicleType] = useState("two");

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    vehicleNumber: "",
    vehicleModel: "",
  });

  const [files, setFiles] = useState({
    rc: null,
    license: null,
    aadhaar: null,
    photo: null,
    previousPolicy: null,
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

  /* PAYMENT FLOW SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.mobile) {
      alert("Please fill all required fields");
      return;
    }

    if (!files.rc || !files.license || !files.aadhaar || !files.photo) {
      alert("Please upload all required documents");
      return;
    }

    const amount = vehicleType === "two" ? 800 : 1200;

    navigate("/payment", {
      state: {
        serviceName: "Vehicle Insurance",
        applicantName: formData.fullName,
        mobile: formData.mobile,
        Amount: amount,
        type: vehicleType,
        formData,
        documents: {
          rc: files.rc?.file,
          license: files.license?.file,
          aadhaar: files.aadhaar?.file,
          photo: files.photo?.file,
          previousPolicy: files.previousPolicy?.file,
        },
      },
    });
  };

  const documents = [
    [
      "वाहन नोंदणी प्रमाणपत्र (RC बुक)",
      "Vehicle Registration Certificate (RC Book)",
    ],
    ["ड्रायव्हिंग लायसन्स", "Driving License"],
    ["आधार कार्ड", "Aadhaar Card"],
    ["पासपोर्ट साइज फोटो", "Passport Size Photo"],
    ["जुनी विमा पॉलिसी (असल्यास)", "Previous Insurance Policy (If Available)"],
  ];

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={PanHero}
            alt="Vehicle Insurance"
            className="w-full h-full object-cover object-[20%_center]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/85 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              2-Wheeler & 4-Wheeler Insurance
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200">
              Motor Insurance Service
            </p>
          </div>
        </div>
      </section>

      {/* Main Card */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-[20px] sm:rounded-[30px] shadow-xl p-6 sm:p-8 md:p-12">
          {/* Toggle */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="bg-gray-200 rounded-full p-1 flex w-full sm:w-auto">
              <button
                onClick={() => setVehicleType("two")}
                className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition text-sm sm:text-base flex-1 sm:flex-none ${
                  vehicleType === "two"
                    ? "bg-[#f07e1b] text-white"
                    : "text-gray-700"
                }`}
              >
                2-Wheeler
              </button>

              <button
                onClick={() => setVehicleType("four")}
                className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition text-sm sm:text-base flex-1 sm:flex-none ${
                  vehicleType === "four"
                    ? "bg-[#f07e1b] text-white"
                    : "text-gray-700"
                }`}
              >
                4-Wheeler
              </button>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
            {vehicleType === "two"
              ? "2-Wheeler Insurance Form"
              : "4-Wheeler Insurance Form"}
          </h2>

          {/* Documents */}
          <div className="border-4 border-green-600 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-green-600 text-center mb-4 sm:mb-6">
              आवश्यक कागदपत्रे / Required Documents
            </h3>

            <div className="space-y-3 text-sm sm:text-base">
              {documents.map((doc, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-green-600 font-bold">✱</span>
                  <div>
                    <p className="font-semibold">{doc[0]}</p>
                    <p className="text-gray-600 text-sm">{doc[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            <InputField
              label="Full Name (पूर्ण नाव)"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />

            <InputField
              label="Mobile Number (मोबाईल नंबर)"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />

            <InputField
              label="Vehicle Number (वाहन क्रमांक)"
              value={formData.vehicleNumber}
              onChange={(e) =>
                setFormData({ ...formData, vehicleNumber: e.target.value })
              }
            />

            <InputField
              label="Vehicle Model (वाहन मॉडेल)"
              value={formData.vehicleModel}
              onChange={(e) =>
                setFormData({ ...formData, vehicleModel: e.target.value })
              }
            />

            <UploadBox
              label="RC Book"
              fileData={files.rc}
              onChange={(e) => handleFileChange(e, "rc")}
            />
            <UploadBox
              label="Driving License"
              fileData={files.license}
              onChange={(e) => handleFileChange(e, "license")}
            />
            <UploadBox
              label="Aadhaar Card"
              fileData={files.aadhaar}
              onChange={(e) => handleFileChange(e, "aadhaar")}
            />
            <UploadBox
              label="Passport Photo"
              fileData={files.photo}
              onChange={(e) => handleFileChange(e, "photo")}
            />
            <UploadBox
              label="Previous Policy"
              fileData={files.previousPolicy}
              onChange={(e) => handleFileChange(e, "previousPolicy")}
            />

            <div className="md:col-span-2 flex justify-end pt-4 sm:pt-6">
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

/* INPUT */
function InputField({ label, value, onChange }) {
  return (
    <div>
      <label className="block font-bold mb-2 text-sm sm:text-base">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}`}
        className="w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20 text-sm sm:text-base"
      />
    </div>
  );
}

/* UPLOAD */
function UploadBox({ label, fileData, onChange }) {
  return (
    <div>
      <label className="block font-bold mb-2 text-xs sm:text-sm">{label}</label>
      <div className="bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200">
        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-xs sm:text-sm">
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

export default VehicleInsurance;
