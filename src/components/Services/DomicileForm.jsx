import React, { useState } from "react";
import DomicileHero from "../../assets/Servicesimg/Panhero.png"; // change image if needed

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

function DomicileForm() {

    const [files, setFiles] = useState({
        rationCard: null,
        oldLightBill: null,
        currentLightBill: null,
        idProof: null,
        passportPhoto: null,
        schoolLeavingCert: null,
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
                        src={DomicileHero}
                        alt="Domicile Certificate"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="w-full md:w-1/2 space-y-6 text-white">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Domicile Certificate Services
                        </h1>

                        <p className="text-lg md:text-xl text-gray-200">
                            Apply for Domicile Certificate easily and securely.
                        </p>

                        <a href="#domicile-form">
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
                            निवासी दाखल्यासाठी लागणारी कागदपत्रे
                        </h2>

                        <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-700 pb-4">
                            Documents Required for Domicile Certificate
                        </h3>

                        <div className="space-y-4 text-lg">

                            {[
                                ["रेशन कार्ड", "Ration Card"],
                                ["१० वर्षापूर्वीचा लाईट बिल", "Light Bill (10 Years Old)"],
                                ["चालू लाईट बिल", "Current Light Bill"],
                                ["आधार कार्ड / पॅन कार्ड / मतदान कार्ड", "Aadhaar / PAN / Voter ID"],
                                ["१ पासपोर्ट साईज फोटो", "1 Passport Size Photograph"],
                                ["शाळा सोडल्याचा दाखला (अर्जदार व पालक)", "School Leaving Certificate (Applicant & Parents)"]
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
                id="domicile-form"
                className="py-16 px-4 md:px-8 bg-[#f8faff]"
            >
                <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12">

                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Domicile Certificate Application Form
                    </h2>

                    <form className="space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label className="block font-bold mb-2">
                                    Full Name (पूर्ण नाव)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Full Name "
                                    className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
                                />
                            </div>

                            {/* Mobile */}
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

                            {/* Uploads */}
                            <UploadBox
                                label="Ration Card (रेशन कार्ड)"
                                field="rationCard"
                                fileData={files.rationCard}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Old Light Bill (१० वर्षापूर्वीचा लाईट बिल)"
                                field="oldLightBill"
                                fileData={files.oldLightBill}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Current Light Bill (चालू लाईट बिल)"
                                field="currentLightBill"
                                fileData={files.currentLightBill}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Aadhaar / PAN / Voter ID (आधार / पॅन / मतदान कार्ड)"
                                field="idProof"
                                fileData={files.idProof}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="1 Passport Photo (१ पासपोर्ट फोटो)"
                                field="passportPhoto"
                                fileData={files.passportPhoto}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="School Leaving Certificate (शाळा सोडल्याचा दाखला)"
                                field="schoolLeavingCert"
                                fileData={files.schoolLeavingCert}
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

export default DomicileForm;