import React, { useState } from "react";
import PanHero from "../../assets/Servicesimg/Panhero.png";

function VehicleInsuranceForm() {

    const [vehicleType, setVehicleType] = useState("two");

    const [files, setFiles] = useState({
        rc: null,
        license: null,
        aadhaar: null,
        photo: null,
        previousPolicy: null,
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
        ["वाहन नोंदणी प्रमाणपत्र (RC बुक)", "Vehicle Registration Certificate (RC Book)"],
        ["ड्रायव्हिंग लायसन्स", "Driving License"],
        ["आधार कार्ड", "Aadhaar Card"],
        ["पासपोर्ट साइज फोटो", "Passport Size Photo"],
        ["जुनी विमा पॉलिसी (असल्यास)", "Previous Insurance Policy (If Available)"],
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
                        <h1 className="text-5xl font-bold"> 2-Wheeler & 4-Wheeler Insurance
                        </h1>
            
                        <p className="text-xl text-gray-200">
                           Motor Insurance Service
                        </p>
            
                       
            
                    </div>
                </div>
            </section>

            {/* Main Card */}
            <section className="py-12 px-4 md:px-8">
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">

                    {/* Toggle */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-gray-200 rounded-full p-1 flex">
                            <button
                                onClick={() => setVehicleType("two")}
                                className={`px-6 py-2 rounded-full font-semibold transition ${
                                    vehicleType === "two"
                                        ? "bg-[#f07e1b] text-white"
                                        : "text-gray-700"
                                }`}
                            >
                                2-Wheeler
                            </button>
                            <button
                                onClick={() => setVehicleType("four")}
                                className={`px-6 py-2 rounded-full font-semibold transition ${
                                    vehicleType === "four"
                                        ? "bg-[#f07e1b] text-white"
                                        : "text-gray-700"
                                }`}
                            >
                                4-Wheeler
                            </button>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-center mb-6">
                        {vehicleType === "two"
                            ? "2-Wheeler Insurance Form"
                            : "4-Wheeler Insurance Form"}
                    </h2>

                    {/* Documents Section */}
                    <div className="border-4 border-green-600 rounded-2xl p-6 mb-8">
                        <h3 className="text-2xl font-bold text-green-600 text-center mb-6">
                            आवश्यक कागदपत्रे / Required Documents
                        </h3>

                        <div className="space-y-3">
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

                    {/* Form */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 shadow-2xl">

                        <InputField label="Full Name (पूर्ण नाव)" />
                        <InputField label="Mobile Number (मोबाईल नंबर)" />
                        <InputField label="Vehicle Number (वाहन क्रमांक)" />
                        <InputField label="Vehicle Model (वाहन मॉडेल)" />

                        <UploadBox
                            label="वाहन नोंदणी प्रमाणपत्र (RC बुक) / Vehicle Registration Certificate"
                            fileData={files.rc}
                            onChange={(e) => handleFileChange(e, "rc")}
                        />

                        <UploadBox
                            label="ड्रायव्हिंग लायसन्स / Driving License"
                            fileData={files.license}
                            onChange={(e) => handleFileChange(e, "license")}
                        />

                        <UploadBox
                            label="आधार कार्ड / Aadhaar Card"
                            fileData={files.aadhaar}
                            onChange={(e) => handleFileChange(e, "aadhaar")}
                        />

                        <UploadBox
                            label="पासपोर्ट साइज फोटो / Passport Size Photo"
                            fileData={files.photo}
                            onChange={(e) => handleFileChange(e, "photo")}
                        />

                        <UploadBox
                            label="जुनी विमा पॉलिसी (असल्यास) / Previous Insurance Policy"
                            fileData={files.previousPolicy}
                            onChange={(e) => handleFileChange(e, "previousPolicy")}
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

/* Input */
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

/* Upload */
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

export default VehicleInsuranceForm;