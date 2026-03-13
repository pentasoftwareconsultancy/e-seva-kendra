import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PanHero from "../../assets/Servicesimg/Panhero.png";

function RentAgreementForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        ownerName: "",
        // tenantName: "",
        // propertyAddress: "",
        // rentAmount: "",
        // agreementDuration: "",
    });

    const [files, setFiles] = useState({
        ownerAadhaar: null,
        tenantAadhaar: null,
        ownerPan: null,
        tenantPan: null,
        ownerPhoto: null,
        tenantPhoto: null,
        lightBill: null,
        propertyProof: null,
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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.ownerName ||
            !formData.tenantName ||
            !formData.propertyAddress
        ) {
            alert("Please fill all required fields");
            return;
        }

        const missingDocs = Object.values(files).some((f) => !f);

        if (missingDocs) {
            alert("Please upload all required documents");
            return;
        }

    const amount = 700;

navigate("/payment", {
    state: {
        serviceName: "Rent Agreement",
        applicantName: formData.ownerName,
        mobile: formData.tenantName, 
        Amount: amount,
        type: "Rent Agreement",
        formData: formData,
        documents: {
            ownerAadhaar: files.ownerAadhaar?.file,
            tenantAadhaar: files.tenantAadhaar?.file,
            ownerPan: files.ownerPan?.file,
            tenantPan: files.tenantPan?.file,
            ownerPhoto: files.ownerPhoto?.file,
            tenantPhoto: files.tenantPhoto?.file,
            lightBill: files.lightBill?.file,
            propertyProof: files.propertyProof?.file,
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
                        src={PanHero}
                        alt="Rent Agreement"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
                    <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Rent Agreement Services</h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-200">
                            Fast and legal Rent Agreement drafting and registration services.
                        </p>
                        <a href="#rent-form">
                            <button 
 className="bg-gradient-to-r from-yellow-500 to-orange-500 
hover:from-yellow-600 hover:to-orange-600 
text-black px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 
rounded-xl font-bold text-sm sm:text-base md:text-lg 
shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >                                Apply Now
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Documents Section */}
            <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
                <div className="max-w-4xl mx-auto bg-white border-4 border-green-700 rounded-3xl p-6 sm:p-8 shadow-xl">

                    <h2 className="text-2xl sm:text-3xl font-bold text-green-600 text-center mb-4 sm:mb-6">
                        भाडे करारासाठी लागणारी कागदपत्रे / Documents Required for Rent Agreement
                    </h2>

                    <div className="space-y-3 sm:space-y-4 text-base sm:text-lg">

                        {[
                            ["मालक आधार कार्ड", "Owner Aadhaar Card"],
                            ["भाडेकरू आधार कार्ड", "Tenant Aadhaar Card"],
                            ["मालक पॅन कार्ड", "Owner PAN Card"],
                            ["भाडेकरू पॅन कार्ड", "Tenant PAN Card"],
                            ["मालक फोटो", "Owner Passport Size Photo"],
                            ["भाडेकरू फोटो", "Tenant Passport Size Photo"],
                            ["लाईट बिल", "Property Light Bill"],
                            ["मालमत्ता पुरावा (7/12 / टॅक्स पावती)", "Property Ownership Proof"],
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-green-600 font-bold text-xl">✱</span>
                                <div>
                                    <p className="font-semibold">{item[0]}</p>
                                    <p className="text-gray-600">{item[1]}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section id="rent-form" className="py-8 sm:py-10 px-4 sm:px-6 md:px-8 bg-[#f8faff]">
                <div className="max-w-7xl mx-auto bg-white rounded-[20px] sm:rounded-[30px] md:rounded-[40px] shadow-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 md:mb-20">

                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                        Rent Agreement Application Form
                    </h2>

                    <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                            <InputField
  label="Owner Full Name (मालक पूर्ण नाव)"
  value={formData.ownerName}
  onChange={(e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData({ ...formData, ownerName: value });
  }}
/>

                            {/* <InputField
                                label="Tenant Full Name (भाडेकरू पूर्ण नाव)"
                                value={formData.tenantName}
                                onChange={(e) =>
                                    setFormData({ ...formData, tenantName: e.target.value })
                                }
                            />

                            <InputField
                                label="Property Address (मालमत्तेचा पत्ता)"
                                value={formData.propertyAddress}
                                onChange={(e) =>
                                    setFormData({ ...formData, propertyAddress: e.target.value })
                                }
                            /> */}

                            {/* <InputField
                                label="Monthly Rent Amount (मासिक भाडे)"
                                value={formData.rentAmount}
                                onChange={(e) =>
                                    setFormData({ ...formData, rentAmount: e.target.value })
                                }
                            />

                            <InputField
                                label="Agreement Duration (करार कालावधी)"
                                value={formData.agreementDuration}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        agreementDuration: e.target.value,
                                    })
                                }
                            /> */}

                            <UploadBox label="Owner Aadhaar Card (मालक आधार कार्ड)" fileData={files.ownerAadhaar} onChange={(e) => handleFileChange(e, "ownerAadhaar")} />
                            <UploadBox label="Tenant Aadhaar Card (भाडेकरू आधार कार्ड)" fileData={files.tenantAadhaar} onChange={(e) => handleFileChange(e, "tenantAadhaar")} />
                            <UploadBox label="Owner PAN Card (मालक पॅन कार्ड)" fileData={files.ownerPan} onChange={(e) => handleFileChange(e, "ownerPan")} />
                            <UploadBox label="Tenant PAN Card (भाडेकरू पॅन कार्ड)" fileData={files.tenantPan} onChange={(e) => handleFileChange(e, "tenantPan")} />
                            <UploadBox label="Owner Photo (मालक फोटो)" fileData={files.ownerPhoto} onChange={(e) => handleFileChange(e, "ownerPhoto")} />
                            <UploadBox label="Tenant Photo (भाडेकरू फोटो)" fileData={files.tenantPhoto} onChange={(e) => handleFileChange(e, "tenantPhoto")} />
                            <UploadBox label="Light Bill (लाईट बिल)" fileData={files.lightBill} onChange={(e) => handleFileChange(e, "lightBill")} />
                            <UploadBox label="Property Proof (मालमत्ता पुरावा)" fileData={files.propertyProof} onChange={(e) => handleFileChange(e, "propertyProof")} />

                        </div>

                        <div className="pt-4 sm:pt-6 flex justify-end">
                            <button
                                type="submit"
className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-orange-700 transition-all duration-300 hover:-translate-y-0.5">
                            
                                Submit Application
                            </button>
                        </div>

                    </form>
                </div>
            </section>

        </div>
    );
}

/* Input Field */
function InputField({ label, value, onChange }) {
    return (
        <div>
            <label className="block font-bold mb-2 text-sm sm:text-base">{label}</label>
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

/* Upload Component */
function UploadBox({ label, fileData, onChange }) {
    return (
        <div>
            <label className="block font-bold mb-2 text-sm sm:text-base">{label}</label>
            <div className="bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200">
                <div className="flex justify-between items-center gap-2">
                    <span className="font-semibold text-sm sm:text-base">Upload Document</span>
<label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg cursor-pointer hover:from-yellow-600 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm">                        Upload
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

export default RentAgreementForm;