import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VoterHero from "../../assets/Servicesimg/Panhero.png";

/* ================= REUSABLE UPLOAD COMPONENT ================= */
function UploadBox({ label, field, fileData, onFileChange }) {
    return (
        <div>
            <label className="block font-bold mb-2 text-sm sm:text-base">{label}</label>
            <div className="bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200">
                <div className="flex justify-between items-center gap-2">
                    <span className="font-semibold text-xs sm:text-sm">Upload Document</span>
<label className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg cursor-pointer hover:from-yellow-600 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm">
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

function VoterID() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        dob: "",
        address: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        mobile: "",
    });

    const [files, setFiles] = useState({
        aadhaarCard: null,
        addressProof: null,
        passportPhoto: null,
        ageProof: null,
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

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        } else if (formData.fullName.trim().length < 3) {
            newErrors.fullName = "Name must be at least 3 characters";
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
        } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Mobile number must be exactly 10 digits";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        if (!files.aadhaarCard) {
            alert("Please upload Aadhaar Card");
            return;
        }

        if (!files.addressProof) {
            alert("Please upload Address Proof");
            return;
        }

        if (!files.ageProof) {
            alert("Please upload Age Proof");
            return;
        }

        if (!files.passportPhoto) {
            alert("Please upload Passport Photo");
            return;
        }

        navigate("/payment", {
            state: {
                serviceName: "Voter ID Card",
                applicantName: formData.fullName,
                mobile: formData.mobile,
                Amount: 300,
                formData,
                documents: {
                    aadhaarCard: files.aadhaarCard?.file,
                    addressProof: files.addressProof?.file,
                    passportPhoto: files.passportPhoto?.file,
                    ageProof: files.ageProof?.file,
                },
            },
        });
    };

    return (
        <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

            {/* ================= HERO SECTION ================= */}
            <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={VoterHero}
                        alt="Voter ID Service"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
                    <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            Voter ID Card Services
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-gray-200">
                            Apply for new Voter ID card quickly and securely.
                        </p>

                        <a href="#voter-form">
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

            {/* ================= DOCUMENT REQUIREMENTS ================= */}
            <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border-4 border-green-700 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">

                        <h2 className="text-2xl sm:text-3xl font-bold text-green-600 text-center mb-2">
                            मतदार ओळखपत्रासाठी लागणारी कागदपत्रे
                        </h2>

                        <h3 className="text-xl sm:text-2xl font-bold text-green-600 text-center mb-6 sm:mb-8 border-b-4 border-green-700 pb-3 sm:pb-4">
                            Documents Required for Voter ID Card
                        </h3>

                        <div className="space-y-3 sm:space-y-4 text-base sm:text-lg">

                            {[
                                ["आधार कार्ड", "Aadhaar Card"],
                                ["पत्त्याचा पुरावा", "Address Proof (Light Bill / Rent Agreement / Bank Passbook)"],
                                ["जन्मतारीख पुरावा", "Age Proof (Birth Certificate / School Leaving Certificate)"],
                                ["१ पासपोर्ट साईज फोटो", "1 Passport Size Photograph"],
                                ["मोबाईल नंबर", "Mobile Number"]
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
                id="voter-form"
                className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-[#f8faff]"
            >
                <div className="max-w-7xl mx-auto bg-white rounded-[20px] sm:rounded-[30px] md:rounded-[40px] shadow-2xl p-6 sm:p-8 md:p-12">

                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
                        Voter ID Card Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                            <div>
                                <label className="block font-bold mb-2 text-sm sm:text-base">
                                    Full Name (पूर्ण नाव) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    minLength={3}
                                    value={formData.fullName}
                                    onChange={(e) => {
                                        setFormData({ ...formData, fullName: e.target.value });
                                        setErrors({ ...errors, fullName: "" });
                                    }}
                                    placeholder="Enter Full Name"
                                    className={`w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ${errors.fullName ? 'ring-red-500 focus:ring-red-500' : 'ring-gray-200 focus:ring-[#1e40af]/20'} focus:ring-2 text-sm sm:text-base`}
                                />
                                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                            </div>

                            <div>
                                <label className="block font-bold mb-2 text-sm sm:text-base">
                                    Mobile Number (मोबाईल क्रमांक) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    required
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                    value={formData.mobile}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/[^0-9]/g, '');
                                        setFormData({ ...formData, mobile: value });
                                        setErrors({ ...errors, mobile: "" });
                                    }}
                                    placeholder="Enter 10-digit Mobile Number"
                                    className={`w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ${errors.mobile ? 'ring-red-500 focus:ring-red-500' : 'ring-gray-200 focus:ring-[#1e40af]/20'} focus:ring-2 text-sm sm:text-base`}
                                />
                                {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                            </div>

                            <div>
                                <label className="block font-bold mb-2 text-sm sm:text-base">
                                    Date of Birth (जन्मतारीख)
                                </label>
                                <input
                                    type="date"
                                    required
                                    value={formData.dob}
                                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                                    className="w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20 text-sm sm:text-base"
                                />
                            </div>

                            <div>
                                <label className="block font-bold mb-2 text-sm sm:text-base">
                                    Address (पत्ता)
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    placeholder="Enter Address"
                                    className="w-full bg-[#f8faff] p-3 sm:p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20 text-sm sm:text-base"
                                />
                            </div>

                            <UploadBox
                                label="Aadhaar Card (आधार कार्ड)"
                                field="aadhaarCard"
                                fileData={files.aadhaarCard}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Address Proof (पत्त्याचा पुरावा)"
                                field="addressProof"
                                fileData={files.addressProof}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Age Proof (जन्मतारीख पुरावा)"
                                field="ageProof"
                                fileData={files.ageProof}
                                onFileChange={handleFileChange}
                            />

                            <UploadBox
                                label="Passport Photo (पासपोर्ट फोटो)"
                                field="passportPhoto"
                                fileData={files.passportPhoto}
                                onFileChange={handleFileChange}
                            />

                        </div>

                        <div className="pt-4 sm:pt-6 flex justify-end">
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

export default VoterID;