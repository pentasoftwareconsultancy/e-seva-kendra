import React, { useState } from "react";
import SIPHero from "../../assets/Servicesimg/Panhero.png"; // change image if needed

/* ================= REUSABLE UPLOAD COMPONENT ================= */
function UploadBox({ label, field, fileData, onFileChange }) {
    return (
        <div className="bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200">
            <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">{label}</span>
                <label className="bg-[#f07e1b] text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-[#d4ac5b] transition-all">
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
                    className="text-blue-600 text-sm mt-2 cursor-pointer hover:text-blue-800"
                    onClick={() => window.open(fileData.url, "_blank")}
                >
                    {fileData.file.name}
                </p>
            )}
        </div>
    );
}

function SIPForm() {

    const [files, setFiles] = useState({
        panCard: null,
        aadhaarCard: null,
        bankProof: null,
        passportPhoto: null,
        addressProof: null,
        cancelledCheque: null,
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

            {/* ================= HERO SECTION ================= */}
            <section className="relative w-full h-[550px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={SIPHero}
                        alt="SIP Investment"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="w-full md:w-1/2 space-y-6 text-white">
                        <h1 className="text-5xl font-bold"> SIP (Systematic Investment Plan) Services
                        </h1>

                        <p className="text-xl text-gray-200">
                            Start your SIP investment easily and securely.
                        </p>

                        <a href="#sip-form">
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
                            SIP साठी लागणारी कागदपत्रे
                        </h2>

                        <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-700 pb-4">
                            Documents Required for SIP
                        </h3>

                        <div className="space-y-4 text-lg">

                            {[
                                ["पॅन कार्ड", "PAN Card"],
                                ["आधार कार्ड", "Aadhaar Card"],
                                ["बँक पासबुक / बँक स्टेटमेंट", "Bank Passbook / Bank Statement"],
                                ["रद्द केलेला चेक", "Cancelled Cheque"],
                                ["१ पासपोर्ट साईज फोटो", "1 Passport Size Photograph"],
                                ["पत्त्याचा पुरावा", "Address Proof"]
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

            {/* ================= FORM SECTION ================= */}
            <section
                id="sip-form"
                className="py-16 px-4 md:px-8 bg-[#f8faff]"
            >
                <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12">

                    <h2 className="text-3xl font-bold mb-6 text-center">
                        SIP Application Form
                    </h2>

                    <form className="space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 shadow-2xl">

                            <div>
                                <label className="block font-bold mb-2">
                                    Full Name (पूर्ण नाव)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Full Name"
                                    className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                                />
                            </div>

                            <div>
                                <label className="block font-bold mb-2">
                                    Mobile Number (मोबाईल क्रमांक)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Mobile Number"
                                    className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                                />
                            </div>

                            <UploadBox
                                label="PAN Card (पॅन कार्ड)"
                                field="panCard"
                                fileData={files.panCard}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Aadhaar Card (आधार कार्ड)"
                                field="aadhaarCard"
                                fileData={files.aadhaarCard}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Bank Passbook / Statement"
                                field="bankProof"
                                fileData={files.bankProof}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Cancelled Cheque (रद्द केलेला चेक)"
                                field="cancelledCheque"
                                fileData={files.cancelledCheque}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Passport Photo (पासपोर्ट फोटो)"
                                field="passportPhoto"
                                fileData={files.passportPhoto}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Address Proof (पत्त्याचा पुरावा)"
                                field="addressProof"
                                fileData={files.addressProof}
                                onFileChange={handleFileChange}
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

export default SIPForm;