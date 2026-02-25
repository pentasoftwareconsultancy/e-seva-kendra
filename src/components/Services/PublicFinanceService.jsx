import React from "react";
import PanHero from "../../assets/Servicesimg/PanHero.png";

function PublicFinancialServices() {

    const documents = [
        ["आधार कार्ड", "Aadhaar Card"],
        ["पॅन कार्ड", "PAN Card"],
        ["राहण्याचा पुरावा", "Address Proof"],
        ["उत्पन्नाचा पुरावा", "Income Proof"],
        ["बँक पासबुक", "Bank Passbook Copy"],
        ["पासपोर्ट साईज फोटो", "Passport Size Photo"]
    ];

    return (
        <div className="min-h-screen bg-[#f8faff] text-[#1e293b]">

            {/* ================= HERO SECTION ================= */}
            <section className="relative w-full h-[550px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={PanHero}
                        alt="Public Financial Services"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/85 to-transparent"></div>

                {/* LEFT SIDE CONTENT */}
                <div className="relative z-10 w-full px-10 md:px-20 text-white">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold leading-tight">
                            सार्वजनिक आर्थिक सेवा <br />
                            <span className="text-[#f07e1b]">Public Financial Services</span>
                        </h1>

                        <p className="text-lg text-gray-200 mt-6">
                            We provide assistance for various government financial schemes and public welfare services.
                        </p>

                        <a href="#pfs-form">
                            <button className="mt-8 bg-[#f07e1b] text-black px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
                                Apply Now
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= DOCUMENT SECTION ================= */}
            <section className="bg-white py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="border-4 border-green-700 rounded-3xl p-8 md:p-12 shadow-xl">

                        <h2 className="text-3xl font-bold text-green-600 text-center mb-4">
                            आवश्यक कागदपत्रे
                        </h2>

                        <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-700 pb-4">
                            Required Documents for Public Financial Services
                        </h3>

                        <div className="space-y-4 text-lg">
                            {documents.map((doc, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="text-green-600 font-bold text-xl">✱</span>
                                    <div>
                                        <p className="font-semibold">{doc[0]}</p>
                                        <p className="text-gray-600 text-base">{doc[1]}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= FORM SECTION ================= */}
            <section id="pfs-form" className="py-10 px-4 md:px-8 bg-[#f8faff]">
                <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12 mb-20">

                    <h2 className="text-3xl font-bold mb-6">
                        PFS Application Form (सार्वजनिक आर्थिक सेवा अर्ज)
                    </h2>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <InputField label="Full Name (पूर्ण नाव)" />
                        <InputField label="Mobile Number (मोबाईल नंबर)" />
                        <InputField label="Aadhaar Number (आधार क्रमांक)" />
                        <InputField label="PAN Number (पॅन क्रमांक)" />
                        <InputField label="Address (पत्ता)" />
                        <InputField label="Income Details (उत्पन्न तपशील)" />

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

/* Reusable Input Field */
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

export default PublicFinancialServices;