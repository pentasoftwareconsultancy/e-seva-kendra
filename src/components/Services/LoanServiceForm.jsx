import React, { useState } from "react";
import PanHero from "../../assets/Servicesimg/Panhero.png";
import { useNavigate } from "react-router-dom";

function LoanServiceForm() {

    const navigate = useNavigate();

    const [selectedLoan, setSelectedLoan] = useState("personal");

    const [formData, setFormData] = useState({
        fullName: "",
        mobile: ""
    });

    const [files, setFiles] = useState({
        aadhaar: null,
        panCard: null,
        bankStatement: null,
        salarySlip: null,
        gstCertificate: null,
        incomeProof: null,
        propertyDocs: null
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

    // Reset form when loan type changes
    const handleLoanTypeChange = (loanType) => {
        setSelectedLoan(loanType);
        setFormData({
            fullName: "",
            mobile: ""
        });
        setFiles({
            aadhaar: null,
            panCard: null,
            bankStatement: null,
            salarySlip: null,
            gstCertificate: null,
            incomeProof: null,
            propertyDocs: null
        });
    };

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

    /* PAYMENT FLOW */
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.mobile) {
            alert("Please fill all required fields");
            return;
        }

        const amount = 500;

        navigate("/payment", {
            state: {
                serviceName: "Loan Service",
                applicantName: formData.fullName,
                mobile: formData.mobile,
                Amount: amount,
                type: selectedLoan,
                formData,
                documents: {
                    aadhaar: files.aadhaar?.file,
                    panCard: files.panCard?.file,
                    bankStatement: files.bankStatement?.file,
                    salarySlip: files.salarySlip?.file,
                    gstCertificate: files.gstCertificate?.file,
                    incomeProof: files.incomeProof?.file,
                    propertyDocs: files.propertyDocs?.file,
                },
            },
        });
    };

    return (
        <div className="min-h-screen bg-[#f8faff] text-[#1e293b]">
            {/* Hero Section */}
            <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={PanHero}
                        alt="Loan Services"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/85 to-transparent"></div>

                <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-20 text-white">
                    <div className="max-w-2xl">

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Loan Services <br />
                        </h1>

                        <p className="text-base sm:text-lg text-gray-200 mt-4 sm:mt-6">
                            Apply for Personal Loan, Business Loan, or Home Loan easily and securely with minimal documentation.
                        </p>

                        <a href="#loan-form">
                            <button 
 className="bg-gradient-to-r from-yellow-500 to-orange-500 
hover:from-yellow-600 hover:to-orange-600 
text-black px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 
rounded-xl font-bold text-sm sm:text-base md:text-lg 
shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >                                Apply Now
                            </button>
                        </a>

                    </div>
                </div>
            </section>

            {/* Loan Selection Cards */}
            <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Select Loan Type</h2>
                    <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                        {loanTypes.map((loan) => (
                            <div
                                key={loan.id}
                                onClick={() => handleLoanTypeChange(loan.id)}
                                className={`cursor-pointer p-4 sm:p-6 rounded-2xl shadow-lg transition-all border-2 ${
                                    selectedLoan === loan.id
                                        ? "border-[#f07e1b] bg-orange-50"
                                        : "border-gray-200 bg-white hover:shadow-xl"
                                }`}
                            >
                                <h3 className="text-lg sm:text-xl font-bold">{loan.title}</h3>
                                <p className="text-[#f07e1b] font-semibold text-sm sm:text-base">{loan.subtitle}</p>
                                <p className="text-gray-600 mt-2 text-xs sm:text-sm">{loan.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documents Section */}
            <section key={selectedLoan} className="bg-[#f8faff] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="border-4 border-green-700 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl bg-white">
                        <h2 className="text-2xl sm:text-3xl font-bold text-green-600 text-center mb-3 sm:mb-4">
                            आवश्यक कागदपत्रे
                        </h2>
                        <h3 className="text-xl sm:text-2xl font-bold text-green-600 text-center mb-6 sm:mb-8 border-b-4 border-green-700 pb-3 sm:pb-4">
                            Required Documents for {loanTypes.find(l => l.id === selectedLoan)?.subtitle}
                        </h3>
                        <div className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                            {documents[selectedLoan].map((doc, index) => (
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

            {/* Form Section */}
            <section key={`form-${selectedLoan}`} id="loan-form" className="py-8 sm:py-10 px-4 sm:px-6 md:px-8 bg-[#f8faff]">
                <div className="max-w-6xl mx-auto bg-white rounded-[20px] sm:rounded-[30px] md:rounded-[40px] shadow-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                        {loanTypes.find(l => l.id === selectedLoan)?.title} Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                        <InputField
  label=" Full Name ( पूर्ण नाव)"
  value={formData.ownerName}
  onChange={(e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData({ ...formData, ownerName: value });
  }}
/>

                        <InputField
  label="Mobile Number (मोबाईल नंबर)"
  value={formData.mobile}
  onChange={(e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setFormData({ ...formData, mobile: value });
  }}
/>

                        {/* Personal Loan Upload Fields */}
                        {selectedLoan === "personal" && (
                            <>
                                <UploadBox label="Aadhaar Card (आधार कार्ड)" fileData={files.aadhaar} onChange={(e)=>handleFileChange(e, "aadhaar")} />
                                <UploadBox label="PAN Card (पॅन कार्ड)" fileData={files.panCard} onChange={(e)=>handleFileChange(e, "panCard")} />
                                <UploadBox label="Bank Statement (बँक स्टेटमेंट)" fileData={files.bankStatement} onChange={(e)=>handleFileChange(e, "bankStatement")} />
                                <UploadBox label="Salary Slip (सॅलरी स्लिप)" fileData={files.salarySlip} onChange={(e)=>handleFileChange(e, "salarySlip")} />
                            </>
                        )}

                        {/* Business Loan Upload Fields */}
                        {selectedLoan === "business" && (
                            <>
                                <UploadBox label="Aadhaar Card (आधार कार्ड)" fileData={files.aadhaar} onChange={(e)=>handleFileChange(e, "aadhaar")} />
                                <UploadBox label="PAN Card (पॅन कार्ड)" fileData={files.panCard} onChange={(e)=>handleFileChange(e, "panCard")} />
                                <UploadBox label="GST Certificate (GST प्रमाणपत्र)" fileData={files.gstCertificate} onChange={(e)=>handleFileChange(e, "gstCertificate")} />
                                <UploadBox label="Bank Statement (बँक स्टेटमेंट)" fileData={files.bankStatement} onChange={(e)=>handleFileChange(e, "bankStatement")} />
                            </>
                        )}

                        {/* Home Loan Upload Fields */}
                        {selectedLoan === "home" && (
                            <>
                                <UploadBox label="Aadhaar Card (आधार कार्ड)" fileData={files.aadhaar} onChange={(e)=>handleFileChange(e, "aadhaar")} />
                                <UploadBox label="PAN Card (पॅन कार्ड)" fileData={files.panCard} onChange={(e)=>handleFileChange(e, "panCard")} />
                                <UploadBox label="Income Proof (उत्पन्न पुरावा)" fileData={files.incomeProof} onChange={(e)=>handleFileChange(e, "incomeProof")} />
                                <UploadBox label="Property Documents (प्रॉपर्टी कागदपत्रे)" fileData={files.propertyDocs} onChange={(e)=>handleFileChange(e, "propertyDocs")} />
                            </>
                        )}

                        <div className="md:col-span-2 flex justify-end pt-4 sm:pt-6">
                            <button
                                type="submit"
className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-orange-700 transition-all duration-300 hover:-translate-y-0.5">
                            
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
function InputField({ label, value, onChange }) {
    return (
        <div>
            <label className="block font-bold mb-2 text-sm sm:text-base">{label}</label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={`Enter ${label}`}
                className="w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20 text-sm sm:text-base"
            />
        </div>
    );
}

/* Upload Component */
function UploadBox({ label, fileData, onChange }) {
    return (
        <div>
            <label className="block font-bold mb-2 text-sm sm:text-base">{label}</label>
            <div className="bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200">
                <div className="flex justify-between items-center gap-2">
                    <span className="font-semibold text-sm sm:text-base">Upload Document</span>
<label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg cursor-pointer hover:from-yellow-600 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm">                        Upload
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
                        className="text-blue-600 text-xs sm:text-sm mt-2 cursor-pointer hover:text-blue-800 break-all"
                        onClick={() => window.open(fileData.url, "_blank")}
                    >
                        {fileData.file.name}
                    </p>
                )}
            </div>
        </div>
    );
}

export default LoanServiceForm;