import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import PanHero from "../../assets/Servicesimg/Panhero.png";

function Trademark() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ fullName: "", mobile: "" });
    const [errors, setErrors] = useState({ fullName: "", mobile: "" });

    const [files, setFiles] = useState({
        pan: null,
        aadhaar: null,
        logo: null,
        msme: null,
        businessProof: null,
        addressProof: null,
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

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim() || formData.fullName.trim().length < 3) newErrors.fullName = "Name must be at least 3 characters";
        if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be exactly 10 digits";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        navigate("/payment", {
            state: {
                serviceName: "Trademark Registration",
                applicantName: formData.fullName,
                mobile: formData.mobile,
                Amount: 5000,
            },
        });
    };

    return (
        <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

            {/* Hero Section */}
            <section className="relative w-full h-[550px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={PanHero}
                        alt="Trademark Hero"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="w-full md:w-1/2 space-y-6 text-white">
                        <h1 className="text-5xl font-bold">Trademark Registration Services</h1>
                        <p className="text-xl text-gray-200">
                            Protect your brand name and logo legally with our professional Trademark Registration services.
                        </p>
                        <a href="#trademark-form">
                            <button className="bg-[#f07e1b] text-black px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
                                Apply Now
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= DOCUMENT REQUIREMENTS ================= */}
            <section className="bg-white py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border-4 border-green-700 rounded-3xl p-8 md:p-12 shadow-xl">

                        <h2 className="text-3xl font-bold text-green-600 text-center mb-2">
                            ट्रेडमार्क नोंदणीसाठी लागणारी कागदपत्रे
                        </h2>

                        <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-700 pb-4">
                            Documents Required for Trademark Registration
                        </h3>

                        <div className="space-y-4 text-lg">

                            {[
                                ["पॅन कार्ड", "PAN Card (Applicant)"],
                                ["आधार कार्ड", "Aadhaar Card"],
                                ["लोगो", "Logo (If Available)"],
                                ["MSME प्रमाणपत्र", "MSME / Udyam Certificate (If Applicable)"],
                                ["व्यवसाय नोंदणी पुरावा", "Business Registration Proof (Shop Act / GST Certificate)"],
                                ["पत्ता पुरावा", "Address Proof"],
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

            {/* Form Section */}
            <section id="trademark-form" className="py-10 px-4 md:px-8 bg-[#f8faff]">
                <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-12 mb-20">

                    <h2 className="text-3xl font-bold mb-6">
                        Trademark Registration Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <label className="block font-bold mb-2">पूर्ण नाव(Applicant Name) <span className="text-red-500">*</span></label>
                                <input type="text" required minLength={3} value={formData.fullName} onChange={(e) => { setFormData({...formData, fullName: e.target.value}); setErrors({...errors, fullName: ""}); }} placeholder="Enter Name" className={`w-full bg-[#f8faff] p-4 rounded-xl ring-1 ${errors.fullName ? 'ring-red-500' : 'ring-gray-200'} focus:ring-2 focus:ring-[#1e40af]/20`} />
                                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                            </div>

                            <div>
                                <label className="block font-bold mb-2">मोबाईल नंबर(Mobile Number) <span className="text-red-500">*</span></label>
                                <input type="tel" required pattern="[0-9]{10}" maxLength={10} value={formData.mobile} onChange={(e) => { const value = e.target.value.replace(/[^0-9]/g, ''); setFormData({...formData, mobile: value}); setErrors({...errors, mobile: ""}); }} placeholder="Enter Mobile Number" className={`w-full bg-[#f8faff] p-4 rounded-xl ring-1 ${errors.mobile ? 'ring-red-500' : 'ring-gray-200'} focus:ring-2 focus:ring-[#1e40af]/20`} />
                                {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                            </div>
<UploadBox 
    label="पॅन कार्ड (PAN Card - Applicant)" 
    fileData={files.pan} 
    onChange={(e) => handleFileChange(e, "pan")} 
/>

<UploadBox 
    label="आधार कार्ड (Aadhaar Card)" 
    fileData={files.aadhaar} 
    onChange={(e) => handleFileChange(e, "aadhaar")} 
/>

<UploadBox 
    label="लोगो (Logo - If Available)" 
    fileData={files.logo} 
    onChange={(e) => handleFileChange(e, "logo")} 
/>

<UploadBox 
    label="MSME / उद्यम प्रमाणपत्र (MSME / Udyam Certificate - If Applicable)" 
    fileData={files.msme} 
    onChange={(e) => handleFileChange(e, "msme")} 
/>

<UploadBox 
    label="व्यवसाय नोंदणी पुरावा (Business Registration Proof - Shop Act / GST Certificate)" 
    fileData={files.businessProof} 
    onChange={(e) => handleFileChange(e, "businessProof")} 
/>

<UploadBox 
    label="पत्ता पुरावा (Address Proof)" 
    fileData={files.addressProof} 
    onChange={(e) => handleFileChange(e, "addressProof")} 
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

/* Reusable Upload Component */
function UploadBox({ label, fileData, onChange }) {
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

export default Trademark;