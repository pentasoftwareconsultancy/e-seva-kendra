import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PanHero from "../../assets/Servicesimg/Panhero.png";

function AyushmanCardForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        aadhaarNumber: "",
        mobile: "",
        familyMembers: "",
        village: "",
        district: "",
    });

    const [errors, setErrors] = useState({ fullName: "", mobile: "" });

    const [files, setFiles] = useState({
        aadhaar: null,
        rationCard: null,
        photo: null,
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
        if (!formData.fullName.trim() || formData.fullName.trim().length < 3) newErrors.fullName = "Name must be at least 3 characters";
        if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be exactly 10 digits";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        if (!files.aadhaar || !files.rationCard || !files.photo) {
            alert("Please upload all required documents");
            return;
        }

        navigate("/payment", {
            state: {
                serviceName: "Ayushman Card",
                applicantName: formData.fullName,
                mobile: formData.mobile,
                Amount: 350,
            },
        });
    };

    return (
        <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

            {/* Hero Section */}
            <section className="relative w-full h-[500px] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={PanHero}
                        alt="Ayushman Card"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="w-full md:w-1/2 space-y-6 text-white">
                        <h1 className="text-5xl font-bold">Ayushman Card Registration</h1>
                        <p className="text-xl text-gray-200">
                            Get health insurance benefits up to ₹5 lakh per family under PMJAY scheme.
                        </p>
                        <a href="#ayushman-form">
                            <button className="bg-[#f07e1b] text-black px-10 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
                                Apply Now
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Documents Section */}
            <section className="bg-white py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto border-4 border-green-700 rounded-3xl p-8 shadow-xl">

                    <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
                        आयुष्मान कार्ड साठी लागणारी कागदपत्रे / Documents Required
                    </h2>

                    <div className="space-y-4 text-lg">

                        {[
                            ["आधार कार्ड", "Aadhaar Card"],
                            ["रेशन कार्ड", "Ration Card"],
                            ["मोबाईल नंबर", "Mobile Number"],
                            ["फॅमिली आयडी / PMJAY आयडी", "Family ID / PMJAY ID (If Available)"],
                            ["पासपोर्ट साईज फोटो", "Passport Size Photo"],
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-green-600 font-bold text-xl">✱</span>
                                <div>
                                    <p className="font-semibold">{item[0]}</p>
                                    <p className="text-gray-600">{item[1]}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section id="ayushman-form" className="py-10 px-4 md:px-8 bg-[#f8faff]">
                <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-12 mb-20">

                    <h2 className="text-3xl font-bold mb-6">
                        Ayushman Card Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <InputField label="Full Name (पूर्ण नाव)" value={formData.fullName} onChange={(e) => { setFormData({...formData, fullName: e.target.value}); setErrors({...errors, fullName: ""}); }} required minLength={3} error={errors.fullName} />
                            <InputField label="Aadhaar Number (आधार क्रमांक)" value={formData.aadhaarNumber} onChange={(e) => setFormData({...formData, aadhaarNumber: e.target.value})} required />
                            <InputField label="Mobile Number (मोबाईल नंबर)" type="tel" value={formData.mobile} onChange={(e) => { const value = e.target.value.replace(/[^0-9]/g, ''); setFormData({...formData, mobile: value}); setErrors({...errors, mobile: ""}); }} required maxLength={10} pattern="[0-9]{10}" error={errors.mobile} />
                            <InputField label="Family Members Count (कुटुंब सदस्य संख्या)" value={formData.familyMembers} onChange={(e) => setFormData({...formData, familyMembers: e.target.value})} required />
                            <InputField label="Village / City (गाव / शहर)" value={formData.village} onChange={(e) => setFormData({...formData, village: e.target.value})} required />
                            <InputField label="District (जिल्हा)" value={formData.district} onChange={(e) => setFormData({...formData, district: e.target.value})} required />

                            <UploadBox
                                label="Aadhaar Card (आधार कार्ड)"
                                fileData={files.aadhaar}
                                onChange={(e) => handleFileChange(e, "aadhaar")}
                            />

                            <UploadBox
                                label="Ration Card (रेशन कार्ड)"
                                fileData={files.rationCard}
                                onChange={(e) => handleFileChange(e, "rationCard")}
                            />

                            <UploadBox
                                label="Photo (फोटो)"
                                fileData={files.photo}
                                onChange={(e) => handleFileChange(e, "photo")}
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

/* Input Component */
function InputField({ label, type = "text", value, onChange, required, minLength, maxLength, pattern, error }) {
    return (
        <div>
            <label className="block font-bold mb-2">{label} {required && <span className="text-red-500">*</span>}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                minLength={minLength}
                maxLength={maxLength}
                pattern={pattern}
                placeholder={`Enter ${label}`}
                className={`w-full bg-[#f8faff] p-4 rounded-xl ring-1 ${error ? 'ring-red-500 focus:ring-red-500' : 'ring-gray-200 focus:ring-[#1e40af]/20'} focus:ring-2`}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}

/* Upload Component */
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

export default AyushmanCardForm;