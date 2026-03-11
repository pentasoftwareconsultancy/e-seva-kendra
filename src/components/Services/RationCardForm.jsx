import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Panhero from "../../assets/Servicesimg/Panhero.png";

/* ================= REUSABLE UPLOAD COMPONENT ================= */
function UploadBox({ label, field, fileData, onFileChange }) {
  return (
    <div>
      <label className="block font-bold mb-2 text-sm sm:text-base">
        {label}
      </label>
      <div className="bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200">
        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-xs sm:text-sm">
            Upload Document
          </span>
          <label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg cursor-pointer hover:from-yellow-600 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm">
            {" "}
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

function RationCardForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({ fullName: "", mobile: "" });

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
        [field]: { file, url: fileURL },
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3)
      newErrors.fullName = "Name must be at least 3 characters";
    if (!/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!formData.fullName.trim()) {
      alert("Please enter Full Name");
      return;
    }

    if (!formData.mobile.trim()) {
      alert("Please enter Mobile Number");
      return;
    }

    if (!files.nameRemoval) {
      alert("Please upload Name Removal Certificate");
      return;
    }

    if (!files.familyAadhaar) {
      alert("Please upload Family Aadhaar Cards");
      return;
    }

    if (!files.pan) {
      alert("Please upload PAN Card");
      return;
    }

    if (!files.bank) {
      alert("Please upload Bank Proof");
      return;
    }

    if (!files.photos) {
      alert("Please upload Passport Photos");
      return;
    }

    if (!files.lightBill) {
      alert("Please upload Light Bill");
      return;
    }

    const amount = 4000; // 🔥 Ration Card Service Amount

    navigate("/payment", {
      state: {
        serviceName: "Ration Card Service",
        applicantName: formData.fullName,
        mobile: formData.mobile,
        Amount: amount,
        formData,
        documents: {
          nameRemoval: files.nameRemoval?.file,
          familyAadhaar: files.familyAadhaar?.file,
          pan: files.pan?.file,
          bank: files.bank?.file,
          photos: files.photos?.file,
          lightBill: files.lightBill?.file,
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">
      {/* ================= HERO SECTION (UNCHANGED) ================= */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={Panhero}
            alt="Ration Card Hero"
            className="w-full h-full object-cover object-[20%_center]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Ration Card Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200">
              Apply for new ration card or update family member details easily
              and securely.
            </p>
            <a href="#ration-form">
              <button
                className="bg-gradient-to-r from-yellow-500 to-orange-500 
hover:from-yellow-600 hover:to-orange-600 
text-black px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 
rounded-xl font-bold text-sm sm:text-base md:text-lg 
shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">
        {/* ================= DOCUMENT REQUIREMENTS SECTION ================= */}
        <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-4 border-green-700 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-600 text-center mb-2">
                रेशनकार्डसाठी लागणारी कागदपत्रे
              </h2>

              <h3 className="text-xl sm:text-2xl font-bold text-green-600 text-center mb-6 sm:mb-8 border-b-4 border-green-700 pb-3 sm:pb-4">
                Documents Required for Ration Card
              </h3>

              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✱</span>
                  <div>
                    <p className="text-gray-800 font-semibold">
                      अर्जदाराचे नाव व मोबाईल नंबर
                    </p>
                    <p className="text-gray-600 text-base">
                      Applicant Name & Mobile Number
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✱</span>
                  <div>
                    <p className="text-gray-800 font-semibold">
                      पहिल्या रेशनकार्ड नाव कमी केल्याचा दाखला
                    </p>
                    <p className="text-gray-600 text-base">
                      Previous Ration Card Name Deletion Certificate (if
                      applicable)
                    </p>
                  </div>
                </div>

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

                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✱</span>
                  <div>
                    <p className="text-gray-800 font-semibold">चालू लाईटबील</p>
                    <p className="text-gray-600 text-base">
                      Latest Electricity Bill
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      );
      {/* ================= FORM SECTION ================= */}
      <section
        id="ration-form"
        className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-[#f8faff]"
      >
        <div className="max-w-7xl mx-auto bg-white rounded-[20px] sm:rounded-[30px] md:rounded-[40px] shadow-2xl p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
            Ration Card Application Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
  <label className="block font-bold mb-2 text-sm sm:text-base">
    Full Name (पूर्ण नाव) <span className="text-red-500">*</span>
  </label>

  <input
    type="text"
    required
    minLength={3}
    value={formData.fullName}
    onChange={(e) => {
      const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
      setFormData({ ...formData, fullName: value });
      setErrors({ ...errors, fullName: "" });
    }}
    placeholder="Enter Full Name"
    className={`w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ${
      errors.fullName
        ? "ring-red-500 focus:ring-red-500"
        : "ring-gray-200 focus:ring-[#1e40af]/20"
    } focus:ring-2 text-sm sm:text-base`}
  />

  {errors.fullName && (
    <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
  )}
</div>

              <div>
                <label className="block font-bold mb-2 text-sm sm:text-base">
                  Mobile Number (मोबाईल क्रमांक){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={formData.mobile}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setFormData({ ...formData, mobile: value });
                    setErrors({ ...errors, mobile: "" });
                  }}
                  placeholder="Enter 10-digit Mobile Number"
                  className={`w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ${errors.mobile ? "ring-red-500" : "ring-gray-200"} text-sm sm:text-base`}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                )}
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

export default RationCardForm;
