import React, { useState } from "react";
import PanHero from "../../assets/Servicesimg/Panhero.png";
import { useNavigate } from "react-router-dom";

function IECForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        mobile: "",
    });

    const [files, setFiles] = useState({
        pan: null,
        aadhaar: null,
        addressProof: null,
        bankProof: null,
        photo: null,
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

    /* ================= FORM SUBMIT ================= */

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.mobile) {
            alert("Please fill all required fields");
            return;
        }

        if (!files.pan || !files.aadhaar || !files.addressProof || !files.bankProof || !files.photo) {
            alert("Please upload all required documents");
            return;
        }

        const amount = 500;

        navigate("/payment", {
            state: {
                serviceName: "Import Export Code (IEC)",
                applicantName: formData.fullName,
                mobile: formData.mobile,
                Amount: amount,
                type: "iec",
                formData,
                documents: {
                    pan: files.pan?.file,
                    aadhaar: files.aadhaar?.file,
                    addressProof: files.addressProof?.file,
                    bankProof: files.bankProof?.file,
                    photo: files.photo?.file,
                },
            },
        });
    };

    return (
        <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

            {/* Hero Section */}
            <section className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={PanHero}
                        alt="IEC Hero"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
                    <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Import Export Code (IEC) Services</h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-200">
                            Get your Import Export Code (IEC) registration quickly and start your international trade business legally.
                        </p>
                        <a href="#iec-form">
                            <button className="bg-[#f07e1b] text-black px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
                                Apply Now
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Documents Section */}
            <section className="bg-white py-12 sm:py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border-4 border-green-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">

                        <h2 className="text-2xl sm:text-3xl font-bold text-green-600 text-center mb-2">
                            आयात निर्यात कोड (IEC) साठी लागणारी कागदपत्रे
                        </h2>

                        <h3 className="text-xl sm:text-2xl font-bold text-green-600 text-center mb-6 sm:mb-8 border-b-4 border-green-700 pb-3 sm:pb-4">
                            Documents Required for Import Export Code (IEC)
                        </h3>

                        <div className="space-y-3 sm:space-y-4 text-base sm:text-lg">

                            {[
                                ["पॅन कार्ड", "PAN Card (Individual / Business)"],
                                ["आधार कार्ड", "Aadhaar Card"],
                                ["पत्ता पुरावा", "Business Address Proof (Light Bill / Rent Agreement)"],
                                ["बँक पुरावा", "Bank Certificate / Cancelled Cheque"],
                                ["पासपोर्ट फोटो", "Passport Size Photograph"],
                                ["ईमेल व मोबाईल", "Valid Email ID & Mobile Number (OTP Verification)"],
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="text-green-600 font-bold text-xl">✱</span>
                                    <div>
                                        <p className="text-gray-800 font-semibold">{item[0]}</p>
                                        <p className="text-gray-600 text-base">{item[1]}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>

            {/* FORM */}
            <section id="iec-form" className="py-8 sm:py-10 px-4 md:px-8 bg-[#f8faff]">
                <div className="max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-[40px] shadow-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-20">

                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                        Import Export Code (IEC) Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                            {/* Full Name */}
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

                            {/* Mobile */}
                            <div>
                                <label className="block font-bold mb-2 text-sm sm:text-base">
                                    Mobile Number (मोबाईल क्रमांक) <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="tel"
                                    required
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                    value={formData.mobile}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/[^0-9]/g, '');
                                        setFormData({ ...formData, mobile: value });
                                        setErrors({ ...errors, mobile: "" });
                                    }}
                                    placeholder="Enter 10-digit Mobile Number"
                                    className={`w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ${
                                        errors.mobile
                                            ? 'ring-red-500 focus:ring-red-500'
                                            : 'ring-gray-200 focus:ring-[#1e40af]/20'
                                    } focus:ring-2 text-sm sm:text-base`}
                                />

                                {errors.mobile && (
                                    <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                                )}
                            </div>

                            <UploadBox label="पॅन कार्ड (PAN Card - Individual / Business)" fileData={files.pan} onChange={(e) => handleFileChange(e, "pan")} />
                            <UploadBox label="आधार कार्ड (Aadhaar Card)" fileData={files.aadhaar} onChange={(e) => handleFileChange(e, "aadhaar")} />
                            <UploadBox label="व्यवसाय पत्ता पुरावा (Business Address Proof)" fileData={files.addressProof} onChange={(e) => handleFileChange(e, "addressProof")} />
                            <UploadBox label="बँक पुरावा (Bank Certificate / Cancelled Cheque)" fileData={files.bankProof} onChange={(e) => handleFileChange(e, "bankProof")} />
                            <UploadBox label="पासपोर्ट साईज फोटो (Passport Size Photograph)" fileData={files.photo} onChange={(e) => handleFileChange(e, "photo")} />

                        </div>

                        <div className="pt-4 sm:pt-6 flex justify-end">
                            <button
                                type="submit"
                                className="bg-[#f07e1b] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#d4ac5b] transition-all w-full sm:w-auto"
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

/* Upload Component */

function UploadBox({ label, fileData, onChange }) {
    return (
        <div>
            <label className="block font-bold mb-2 text-sm sm:text-base">{label}</label>
            <div className="bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200">
                <div className="flex justify-between items-center gap-2">
                    <span className="font-semibold text-xs sm:text-sm">Upload Document</span>
                    <label className="bg-[#f07e1b] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg cursor-pointer hover:bg-[#d4ac5b] transition-all text-xs sm:text-sm">
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

export default IECForm;