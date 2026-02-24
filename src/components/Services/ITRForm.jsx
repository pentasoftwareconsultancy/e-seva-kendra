import React, { useState } from "react";

import PanHero from "../../assets/Servicesimg/Panhero.png";

function ITRForm() {

    const [files, setFiles] = useState({
        pan: null,
        aadhaar: null,
        form16: null,
        bankStatement: null,
        salarySlips: null,
        investmentProof: null,
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

            {/* Hero Section */}
            <section className="relative w-full h-[550px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={PanHero}
                        alt="ITR Hero"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="w-full md:w-1/2 space-y-6 text-white">
                        <h1 className="text-5xl font-bold">Income Tax Return (ITR) Services</h1>
                        <p className="text-xl text-gray-200">
                            We provide professional assistance for filing your Income Tax Return quickly and accurately.
                        </p>
                        <a href="#itr-form">
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
                            आयकर रिटर्न साठी लागणारी कागदपत्रे
                        </h2>

                        <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-700 pb-4">
                            Documents Required for Income Tax Return (ITR)
                        </h3>

                        <div className="space-y-4 text-lg">

                            {[
                                ["पॅन कार्ड", "PAN Card (Mandatory Document)"],
                                ["आधार कार्ड", "Aadhaar Card (Identity Proof)"],
                                ["फॉर्म 16", "Form 16 (For Salaried Employees)"],
                                ["बँक स्टेटमेंट", "Bank Statement (Last 6 Months)"],
                                ["सॅलरी स्लिप", "Salary Slips (Last 3 Months)"],
                                ["गुंतवणूक पुरावा", "Investment Proof (LIC / PPF / ELSS etc.)"],
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
            <section id="itr-form" className="py-10 px-4 md:px-8 bg-[#f8faff]">
                <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12 mb-20">

                    <h2 className="text-3xl font-bold mb-6">
                        Income Tax Return (ITR) Application Form
                    </h2>

                    <form className="space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <label className="block font-bold mb-2">पूर्ण नाव(Full Name)</label>
                                <input
                                    type="text"
                                    placeholder="Enter Full Name"
                                    className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                                />
                            </div>

                            <div>
                                <label className="block font-bold mb-2">Mobile Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter Mobile Number"
                                    className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                                />
                            </div>

                           <UploadBox 
    label="पॅन कार्ड (PAN Card)" 
    fileData={files.pan} 
    onChange={(e) => handleFileChange(e, "pan")} 
/>

<UploadBox 
    label="आधार कार्ड (Aadhaar Card)" 
    fileData={files.aadhaar} 
    onChange={(e) => handleFileChange(e, "aadhaar")} 
/>

<UploadBox 
    label="फॉर्म 16 (Form 16)" 
    fileData={files.form16} 
    onChange={(e) => handleFileChange(e, "form16")} 
/>

<UploadBox 
    label="बँक स्टेटमेंट (Bank Statement - 6 Months)" 
    fileData={files.bankStatement} 
    onChange={(e) => handleFileChange(e, "bankStatement")} 
/>

<UploadBox 
    label="सॅलरी स्लिप (Salary Slips - 3 Months)" 
    fileData={files.salarySlips} 
    onChange={(e) => handleFileChange(e, "salarySlips")} 
/>

<UploadBox 
    label="गुंतवणूक पुरावा (Investment Proof - LIC / PPF / ELSS)" 
    fileData={files.investmentProof} 
    onChange={(e) => handleFileChange(e, "investmentProof")} 
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

export default ITRForm;