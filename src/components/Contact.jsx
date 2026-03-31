import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import top from "../assets/Contact/top-img.webp";
import bg from "../assets/Contact/body-bg.avif";

export default function Contact() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    mobile: "",
    message: "",
  });

  const services = [
    "PAN Card (पॅन कार्ड)",
    "Systematic Investment Plan (SIP) (सिस्टेमॅटिक इन्व्हेस्टमेंट प्लान)",
    "Voter ID (मतदार ओळखपत्र)",
    "Passport (पासपोर्ट)",
    "Ration Card (रेशन कार्ड)",
    "Gazette Certificate (गॅझेट प्रमाणपत्र)",
    "Shop Act (दुकान नोंदणी)",
    "Udyam Aadhaar (उद्यम आधार)",
    "FSSAI Food License (फूड लायसन्स)",
    "Income Tax Return (ITR) (उत्पन्न कर विवरण)",
    "Import Export Code (IEC) (आयात निर्यात कोड)",
    "Goods and Services Tax (GST) (वस्तू व सेवा कर)",
    "Insurance (विमा)",
    "Mutual Fund (म्युच्युअल फंड)",
    "Rent Agreement (भाडे करार)",
    "Vehicle Insurance (वाहन विमा)",
    "Demat Account (डीमॅट खाते)",
    "Loan Services (कर्ज सेवा)",
    "Company Registration (कंपनी नोंदणी)",
    "Government Bonds (सरकारी रोखे)",
    "Driving License (वाहन चालक परवाना)",
    "Aadhaar Card (आधार कार्ड)",
  ];

  const filteredServices = services.filter((service) =>
    service.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    
    if (!isLoggedIn) {
      setErrorMessage("Please login first to send a message");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }

    try {
      const response = await fetch("https://e-seva-kendra-b.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);

        setFormData({
          name:"",
          email:"",
          service:"",
          mobile:"",
          message:""
        });

        setSearchTerm("");
      } else {
        setErrorMessage("Failed to send message. Please try again.");
        setTimeout(() => setErrorMessage(""), 3000);
      }

    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to send message. Please try again.");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* HERO SECTION */}
      <div
        className="relative w-full min-h-[350px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[500px] bg-cover bg-center text-white flex items-center"
        style={{
          backgroundImage: `url(${top})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Contact Us
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
             Need Help with PAN Card, Passport, or GST?<br/> Contact Shree Om Sai Multiservices for fast and reliable service. <br />
              For all your Government and Legal Needs.
            </p>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {/* LEFT SIDE */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Get in Touch</h2>

          {/* CONTACT CARDS */}
          <div className="space-y-3 sm:space-y-4">
            <a
              href="tel:+918668266879"
              className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition">
                <svg
                  className="w-5 h-5 text-blue-700 group-hover:text-white transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92V21a2 2 0 01-2.18 2A19.7 19.7 0 013 4.18 2 2 0 015 2h4.09a2 2 0 012 1.72l.7 4.09a2 2 0 01-.54 1.73L9.9 10.9a16 16 0 006.2 6.2l1.36-1.37a2 2 0 011.74-.54l4.09.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">
                +91 8668266879
              </p>
            </a>

            <a
              href="mailto:omsaimultiservices411041@gmail.com"
              className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition">
                <svg
                  className="w-5 h-5 text-blue-700 group-hover:text-white transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16v16H4zM22 6l-10 7L2 6" />
                </svg>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">
                omsaimultiservices411041@gmail.com
              </p>
            </a>

            <a
              href="https://maps.google.com/?q=Shop+No+6+Dagade+Patil+Complex+Karle+Chowk+Nanded+City+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition">
                <svg
                  className="w-5 h-5 text-blue-700 group-hover:text-white transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" />
                </svg>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">
                Shop No 6, Dagade Patil Complex, Karle Chowk, Nanded City, Pune
              </p>
            </a>
          </div>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/918668266879"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 rounded-lg font-semibold shadow-md transition text-sm sm:text-base flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-lg sm:text-xl"></i>
            Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
            Send Us a Message
          </h2>

         <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-2.5 sm:p-3 border rounded-md"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-2.5 sm:p-3 border rounded-md"
            />

            <div className="relative">
              <input
                type="text"
                placeholder="Select Service"
                value={searchTerm}
                required
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsSelected(false);
                }}
                onFocus={() => {
                  setSearchTerm("");
                  setIsOpen(true);
                  setIsSelected(false);
                }}
                className="w-full p-2.5 sm:p-3 pr-10 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base cursor-pointer"
              />
              <svg
                onClick={() => setIsOpen(!isOpen)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 cursor-pointer transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSearchTerm(service);
                          setFormData({ ...formData, service: service });
                          setIsOpen(false);
                          setIsSelected(true);
                        }}
                        className="p-2.5 sm:p-3 hover:bg-blue-50 cursor-pointer text-sm sm:text-base"
                      >
                        {service}
                      </div>
                    ))
                  ) : (
                    <div className="p-2.5 sm:p-3 text-gray-500 text-sm sm:text-base">
                      No service found
                    </div>
                  )}
                </div>
              )}
            </div>

            <input
              type="tel"
              placeholder="Mobile Number"
              required
              pattern="[0-9]{10}"
              maxLength="10"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              className="w-full p-2.5 sm:p-3 border rounded-md"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-2.5 sm:p-3 border rounded-md"
            />

            {successMessage && (
              <div className="p-3 bg-green-50 border border-green-300 rounded-lg text-green-700 text-sm">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-300 rounded-lg text-red-700 text-sm">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-slate-700 hover:bg-slate-800 text-white py-2 sm:py-2.5 rounded-lg text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* CONTACT ITEM COMPONENT */
function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition">
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        {icon}
      </svg>
      <p className="text-gray-700 text-xs sm:text-sm md:text-base">{text}</p>
    </div>
  );
}
