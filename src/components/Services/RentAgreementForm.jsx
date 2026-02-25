import React, { useState } from "react";

import PanHero from "../../assets/Servicesimg/PanHero.png";

function RentAgreementForm() {

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

    return (
        <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

            {/* Hero Section */}
            <section className="relative w-full h-[500px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={PanHero}
                        alt="Rent Agreement"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="w-full md:w-1/2 space-y-6 text-white">
                        <h1 className="text-5xl font-bold">Rent Agreement Services</h1>
                        <p className="text-xl text-gray-200">
                            Fast and legal Rent Agreement drafting and registration services.
                        </p>
                        <a href="#rent-form">
                            <button className="bg-[#f07e1b] text-black px-10 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
                                Apply Now
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Documents Section */}
            <section className="bg-white py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white border-4 border-green-700 rounded-3xl p-8 shadow-xl">

                    <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
                        भाडे करारासाठी लागणारी कागदपत्रे / Documents Required for Rent Agreement
                    </h2>

                    <div className="space-y-4 text-lg">

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
            <section id="rent-form" className="py-10 px-4 md:px-8 bg-[#f8faff]">
                <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-12 mb-20">

                    <h2 className="text-3xl font-bold mb-6">
                        Rent Agreement Application Form
                    </h2>

                    <form className="space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <InputField label="Owner Full Name (मालक पूर्ण नाव)" />
                            <InputField label="Tenant Full Name (भाडेकरू पूर्ण नाव)" />
                            <InputField label="Property Address (मालमत्तेचा पत्ता)" />
                            <InputField label="Monthly Rent Amount (मासिक भाडे)" />
                            <InputField label="Agreement Duration (करार कालावधी)" />

                            <UploadBox label="Owner Aadhaar Card (मालक आधार कार्ड)" fileData={files.ownerAadhaar} onChange={(e) => handleFileChange(e, "ownerAadhaar")} />
                            <UploadBox label="Tenant Aadhaar Card (भाडेकरू आधार कार्ड)" fileData={files.tenantAadhaar} onChange={(e) => handleFileChange(e, "tenantAadhaar")} />
                            <UploadBox label="Owner PAN Card (मालक पॅन कार्ड)" fileData={files.ownerPan} onChange={(e) => handleFileChange(e, "ownerPan")} />
                            <UploadBox label="Tenant PAN Card (भाडेकरू पॅन कार्ड)" fileData={files.tenantPan} onChange={(e) => handleFileChange(e, "tenantPan")} />
                            <UploadBox label="Owner Photo (मालक फोटो)" fileData={files.ownerPhoto} onChange={(e) => handleFileChange(e, "ownerPhoto")} />
                            <UploadBox label="Tenant Photo (भाडेकरू फोटो)" fileData={files.tenantPhoto} onChange={(e) => handleFileChange(e, "tenantPhoto")} />
                            <UploadBox label="Light Bill (लाईट बिल)" fileData={files.lightBill} onChange={(e) => handleFileChange(e, "lightBill")} />
                            <UploadBox label="Property Proof (मालमत्ता पुरावा)" fileData={files.propertyProof} onChange={(e) => handleFileChange(e, "propertyProof")} />

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

/* Input Field */
function InputField({ label }) {
    return (
        <div>
            <label className="block font-bold mb-2">{label}</label>
            <input
                type="text"
                placeholder={`Enter ${label}`}
                className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
            />
        </div>
    );
}

/* Upload Component */
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

export default RentAgreementForm;