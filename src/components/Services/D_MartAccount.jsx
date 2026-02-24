import React, { useState } from "react";
import PanHero from "../../assets/Servicesimg/PanHero.png";

function DMartAccountForm() {

    const [files, setFiles] = useState({
        aadhaar: null,
        addressProof: null,
        photo: null,
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

    const documents = [
        ["आधार कार्ड", "Aadhaar Card"],
        ["मोबाईल नंबर", "Mobile Number"],
        ["ईमेल आयडी", "Email ID"],
        ["पत्ता पुरावा (लाईट बिल / भाडे करार)", "Address Proof (Light Bill / Rent Agreement)"],
        ["पासपोर्ट साइज फोटो", "Passport Size Photo"],
    ];

    return (
        <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

           {/* Hero Section */}
<section className="relative w-full h-[550px] flex items-center">
    {/* Background Image */}
    <div className="absolute inset-0">
        <img
            src={PanHero}
            alt="DMart Account"
            className="w-full h-full object-cover object-[20%_center]"
        />
    </div>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/85 to-transparent"></div>

    {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="w-full md:w-1/2 space-y-6 text-white">
                        <h1 className="text-5xl font-bold">DMart Account Registration
            </h1>

                        <p className="text-xl text-gray-200">
                Register your DMart account easily and enjoy smooth shopping,
                exclusive offers and faster billing services.
            </p>

           

        </div>
    </div>
</section>
            {/* Documents Section */}
            <section className="py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto border-4 border-green-600 rounded-3xl p-8 shadow-lg bg-white">

                    <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
                        आवश्यक कागदपत्रे / Required Documents
                    </h2>

                    <div className="space-y-4">
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
            </section>

            {/* Form Section */}
            <section className="py-10 px-4 md:px-8">
                <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12 mb-20">

                    <h2 className="text-3xl font-bold mb-8">
                        DMart Account Application Form
                    </h2>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <InputField label="Full Name (पूर्ण नाव)" />
                        <InputField label="Mobile Number (मोबाईल नंबर)" />
                        <InputField label="Email ID (ईमेल आयडी)" />
                        <InputField label="Address (पत्ता)" />

                        <UploadBox
                            label="आधार कार्ड / Aadhaar Card"
                            fileData={files.aadhaar}
                            onChange={(e) => handleFileChange(e, "aadhaar")}
                        />

                        <UploadBox
                            label="पत्ता पुरावा / Address Proof"
                            fileData={files.addressProof}
                            onChange={(e) => handleFileChange(e, "addressProof")}
                        />

                        <UploadBox
                            label="पासपोर्ट साइज फोटो / Passport Size Photo"
                            fileData={files.photo}
                            onChange={(e) => handleFileChange(e, "photo")}
                        />

                        <div className="md:col-span-2 flex justify-end pt-6">
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

/* Input Component */
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
                <span className="font-semibold text-sm">{label}</span>
                <label className="bg-[#f07e1b] text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-[#d4ac5b] transition-all">
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

export default DMartAccountForm;