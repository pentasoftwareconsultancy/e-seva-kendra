import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Panhero from "../../assets/Servicesimg/Panhero.png";

function PassportForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
    });

    const [files, setFiles] = useState({
        pan: null,
        aadhaar: null,
        photo: null,
        lightBill: null,
    });

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setFiles((prev) => ({
                ...prev,
                [field]: { file, url: fileURL },
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullName.trim()) {
            alert("Please enter Full Name");
            return;
        }

        if (!formData.mobile.trim()) {
            alert("Please enter Mobile Number");
            return;
        }

        if (!files.pan) {
            alert("Please upload PAN Card");
            return;
        }

        if (!files.aadhaar) {
            alert("Please upload Aadhaar Card");
            return;
        }

        if (!files.photo) {
            alert("Please upload Passport Photo");
            return;
        }

        if (!files.lightBill) {
            alert("Please upload Light Bill");
            return;
        }

        const amount = 1500; // Passport Service Amount

        navigate("/payment", {
            state: {
                serviceName: "Passport Service",
                applicantName: formData.fullName,
                mobile: formData.mobile,
                Amount: amount,
            },
        });
    };

    return (
        <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

            {/* Hero Section */}
            <section className="relative w-full h-[550px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={Panhero}
                        alt="Hero"
                        className="w-full h-full object-cover object-[20%_center]"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="w-full md:w-1/2 space-y-6 text-white">
                        <h1 className="text-5xl font-bold">Passport Services</h1>
                        <p className="text-xl text-gray-200">
                            We provide fast and reliable assistance for Passport application and renewal services.
                        </p>
                        <a href="#passport-form">
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
                            पासपोर्ट साठी लागणारी कागदपत्रे
                        </h2>

                        <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-700 pb-4">
                            Documents Required for Passport
                        </h3>

                        <div className="space-y-4 text-lg">

                            {[
                                ["आधार कार्ड", "Aadhaar Card (Identity Proof)"],
                                ["पॅन कार्ड", "PAN Card (Mandatory for Application)"],
                                ["लाईट बिल", "Address Proof (Electricity Bill /)"],
                                ["पासपोर्ट साईज फोटो", "Recent Passport Size Photographs"],
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
            <section id="passport-form" className="py-10 px-4 md:px-8 bg-[#f8faff]">
                <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12 mb-20">

                    <h2 className="text-3xl font-bold mb-6">
                        Passport Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <label className="block font-bold mb-2">Full Name (पूर्ण नाव)</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.fullName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, fullName: e.target.value })
                                    }
                                    placeholder="Enter Full Name"
                                    className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200"
                                />
                            </div>

                            <div>
                                <label className="block font-bold mb-2">Mobile Number (मोबाईल क्रमांक)</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.mobile}
                                    onChange={(e) =>
                                        setFormData({ ...formData, mobile: e.target.value })
                                    }
                                    placeholder="Enter Mobile Number"
                                    className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200"
                                />
                            </div>

                            <UploadBox label="Pan Card (पॅन कार्ड)" fileData={files.pan} onChange={(e) => handleFileChange(e, "pan")} />
                            <UploadBox label="Aadhaar Card (आधार कार्ड)" fileData={files.aadhaar} onChange={(e) => handleFileChange(e, "aadhaar")} />
                            <UploadBox label="Passport Photo (पासपोर्ट फोटो)" fileData={files.photo} onChange={(e) => handleFileChange(e, "photo")} />
                            <UploadBox label="Light Bill (लाइट बिल)" fileData={files.lightBill} onChange={(e) => handleFileChange(e, "lightBill")} />

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

export default PassportForm;

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