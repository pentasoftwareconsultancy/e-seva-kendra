import React, { useState } from "react";
import PanHero from "../../assets/Servicesimg/PanHero.png";

function LoanServiceForm() {

    const [selectedLoan, setSelectedLoan] = useState("personal");

    const loanTypes = [
        { 
            id: "personal", 
            title: "वैयक्तिक कर्ज", 
            subtitle: "Personal Loan",
            desc: "For personal expenses & emergencies"
        },
        { 
            id: "business", 
            title: "व्यवसाय कर्ज", 
            subtitle: "Business Loan",
            desc: "For business growth & working capital"
        },
        { 
            id: "home", 
            title: "गृहकर्ज", 
            subtitle: "Home Loan",
            desc: "For purchasing or constructing house"
        },
    ];

    const documents = {
        personal: [
            ["आधार कार्ड", "Aadhaar Card"],
            ["पॅन कार्ड", "PAN Card"],
            ["बँक स्टेटमेंट (6 महिने)", "Bank Statement (6 Months)"],
            ["सॅलरी स्लिप", "Salary Slip"]
        ],
        business: [
            ["आधार कार्ड", "Aadhaar Card"],
            ["पॅन कार्ड", "PAN Card"],
            ["GST प्रमाणपत्र", "GST Certificate"],
            ["बँक स्टेटमेंट (12 महिने)", "Bank Statement (12 Months)"]
        ],
        home: [
            ["आधार कार्ड", "Aadhaar Card"],
            ["पॅन कार्ड", "PAN Card"],
            ["उत्पन्न पुरावा", "Income Proof"],
            ["प्रॉपर्टी कागदपत्रे", "Property Documents"]
        ]
    };

    return (
        <div className="min-h-screen bg-[#f8faff] text-[#1e293b]">
{/* Hero Section */}
<section className="relative w-full h-[550px] flex items-center">
    <div className="absolute inset-0">
        <img
            src={PanHero}
            alt="Loan Services"
            className="w-full h-full object-cover"
        />
    </div>

    <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/85 to-transparent"></div>

    {/* LEFT ALIGNED CONTENT */}
    <div className="relative z-10 w-full px-10 md:px-20 text-white">
        <div className="max-w-2xl">
            
            <h1 className="text-5xl font-bold leading-tight">
                Loan Services <br />
            </h1>

            <p className="text-lg text-gray-200 mt-6">
                Apply for Personal Loan, Business Loan, or Home Loan easily and securely with minimal documentation.
            </p>
             <a href="#loan-form">
                            <button className="bg-[#f07e1b] text-black px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
                                Apply Now
                            </button>
                        </a>
        </div>
    </div>
</section>
            {/* Loan Selection Cards */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

                    {loanTypes.map((loan) => (
                        <div
                            key={loan.id}
                            onClick={() => setSelectedLoan(loan.id)}
                            className={`cursor-pointer p-6 rounded-2xl shadow-lg transition-all border-2 ${
                                selectedLoan === loan.id
                                    ? "border-[#f07e1b] bg-white"
                                    : "border-gray-200 bg-white hover:shadow-xl"
                            }`}
                        >
                            <h3 className="text-xl font-bold">{loan.title}</h3>
                            <p className="text-[#f07e1b] font-semibold">{loan.subtitle}</p>
                            <p className="text-gray-600 mt-2 text-sm">{loan.desc}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* Documents + Form Section */}
            <section className="py-10 px-4">
                <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12 mb-20">

                    <h2 className="text-3xl font-bold mb-6 capitalize">
                        {loanTypes.find(l => l.id === selectedLoan)?.title} Application Form
                    </h2>

                    {/* Documents */}
                    <div className="border-4 border-green-700 rounded-2xl p-6 mb-8">
                        <h3 className="text-2xl font-bold text-green-600 text-center mb-6">
                            आवश्यक कागदपत्रे / Required Documents
                        </h3>

                        <div className="space-y-3">
                            {documents[selectedLoan].map((doc, index) => (
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
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <InputField label="Full Name (पूर्ण नाव)" />
                        <InputField label="Mobile Number (मोबाईल नंबर)" />
                        <InputField label="PAN Card Number (पॅन क्रमांक)" />
                        <InputField label="Monthly Income (मासिक उत्पन्न)" />

                        <div className="md:col-span-2 flex justify-end pt-6">
                            <button
                                type="submit"
                                className="bg-[#f07e1b] text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#d4ac5b] transition-all"
                            >
                                Apply Now
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

export default LoanServiceForm;