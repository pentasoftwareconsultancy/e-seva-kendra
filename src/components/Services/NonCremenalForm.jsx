import React, { useState } from "react";
import NonCremenalHero from "../../assets/Servicesimg/Panhero.png"; // change image if needed

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

function NonCremenalForm() {
    const [files, setFiles] = useState({
        aadhaarUser: null,
        aadhaarFather: null,
        schoolUser: null,
        schoolFather: null,
        casteUser: null,
        casteFather: null,
        rationCard: null,
        incomeCertificate: null,
        form16_IT: null,
        casteNamuna1967: null,
        lightBill: null,
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

    return (
        <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

            {/* ================= HERO SECTION ================= */}
            <section className="relative w-full h-[550px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={NonCremenalHero}
                        alt="Non Cremenal Certificate"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="w-full md:w-1/2 space-y-6 text-white">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Non-Cremenal Certificate Services
                        </h1>

                        <p className="text-lg md:text-xl text-gray-200">
                            Apply for Non-Cremenal Certificate with all required documents.
                        </p>

                        <a href="#noncremenal-form">
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
                            नॉन-क्रिमिनल सर्टिफिकेटसाठी लागणारी कागदपत्रे
                        </h2>

                        <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-700 pb-4">
                            Documents Required for Non-Cremenal Certificate
                        </h3>

                        <div className="space-y-4 text-lg">

                            {[
                                ["आधार कार्ड (वापरकर्ता)", "Aadhaar Card (User)"],
                                ["आधार कार्ड (वडील)", "Aadhaar Card (Father)"],
                                ["शाळा सोडल्याचा दाखला (वापरकर्ता)", "School Leaving Certificate (User)"],
                                ["शाळा सोडल्याचा दाखला (वडील)", "School Leaving Certificate (Father)"],
                                ["जात प्रमाणपत्र (वापरकर्ता)", "Caste Certificate (User)"],
                                ["जात प्रमाणपत्र (वडील)", "Caste Certificate (Father)"],
                                ["रेशन कार्ड", "Ration Card"],
                                ["उत्पन्न दाखला", "Income Certificate"],
                                ["Form 16 / IT Return (3 वर्षे)", "Form 16 / IT Return (Last 3 Years)"],
                                ["१९६७ जात नमुना", "1967 Caste Namuna"],
                                ["लाईट बिल", "Electricity Bill"]
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
                id="noncremenal-form"
                className="py-16 px-4 md:px-8 bg-[#f8faff]"
            >
                <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12">

                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Non-Cremenal Certificate Application Form
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

                            {/* File Uploads */}
                            <UploadBox
                                label="Aadhaar Card (User) (आधार कार्ड वापरकर्ता)"
                                field="aadhaarUser"
                                fileData={files.aadhaarUser}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Aadhaar Card (Father) (आधार कार्ड वडील)"
                                field="aadhaarFather"
                                fileData={files.aadhaarFather}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="School Leaving Certificate (User) (शाळा सोडल्याचा दाखला वापरकर्ता)"
                                field="schoolUser"
                                fileData={files.schoolUser}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="School Leaving Certificate (Father) (शाळा सोडल्याचा दाखला वडील)"
                                field="schoolFather"
                                fileData={files.schoolFather}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Caste Certificate (User) (जात प्रमाणपत्र वापरकर्ता)"
                                field="casteUser"
                                fileData={files.casteUser}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Caste Certificate (Father) (जात प्रमाणपत्र वडील)"
                                field="casteFather"
                                fileData={files.casteFather}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Ration Card (रेशन कार्ड)"
                                field="rationCard"
                                fileData={files.rationCard}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Income Certificate (उत्पन्न दाखला)"
                                field="incomeCertificate"
                                fileData={files.incomeCertificate}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Form 16 / IT Return (Last 3 Years) (Form 16 / IT Return 3 वर्षे)"
                                field="form16_IT"
                                fileData={files.form16_IT}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="1967 Caste Namuna (१९६७ जात नमुना)"
                                field="casteNamuna1967"
                                fileData={files.casteNamuna1967}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Light Bill (लाईट बिल)"
                                field="lightBill"
                                fileData={files.lightBill}
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

export default NonCremenalForm;