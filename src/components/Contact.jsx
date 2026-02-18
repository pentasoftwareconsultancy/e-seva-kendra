import React from "react";
import top from "../assets/Contact/top-img.png";
import bg from "../assets/Contact/body-bg.avif";


export default function Contact() {

    return (
<div
  className="min-h-screen bg-no-repeat bg-center bg-cover"
  style={{
    backgroundImage: `url(${bg})`,
  }}
>

          {/* HERO SECTION */}
<div
  className="relative w-full min-h-[420px] md:min-h-[520px] lg:min-h-[500px] bg-cover bg-center text-white flex items-center"
  style={{
    backgroundImage: `url(${top})`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    <div className="w-full md:w-1/2 space-y-6">

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Contact Us
      </h1>

      <p className="text-lg md:text-xl">
        Get in touch with us today! <br />
        For all your Government and Legal Needs.
      </p>

    </div>
  </div>
</div>

              
         

            {/* MAIN SECTION */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* LEFT SIDE */}
                <div className="space-y-6">

                    <h2 className="text-2xl font-semibold">
                        Get in Touch
                    </h2>

                    {/* CONTACT CARDS */}
                    <div className="space-y-4">

                        <ContactItem
                            text="+91 9084 156368"
                            icon={
                                <path d="M22 16.92V21a2 2 0 01-2.18 2A19.7 19.7 0 013 4.18 2 2 0 015 2h4.09a2 2 0 012 1.72l.7 4.09a2 2 0 01-.54 1.73L9.9 10.9a16 16 0 006.2 6.2l1.36-1.37a2 2 0 011.74-.54l4.09.7A2 2 0 0122 16.92z" />
                            }
                        />

                        <ContactItem
                            text="contact@esuvidha.com"
                            icon={<path d="M4 4h16v16H4zM22 6l-10 7L2 6" />}
                        />

                        <ContactItem
                            text="www.esuvidha.com"
                            icon={<circle cx="12" cy="12" r="10" />}
                        />

                        <ContactItem
                            text="Westend Mall, Janakpuri, New Delhi – 110058"
                            icon={<path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" />}
                        />

                    </div>

                    {/* WHATSAPP BUTTON */}
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-md transition">
                        Chat on WhatsApp
                    </button>

                </div>

                {/* RIGHT SIDE FORM */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">

                    <h2 className="text-2xl font-semibold mb-6">
                        Send Us a Message
                    </h2>

                    <div className="space-y-4">

                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <select className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
                            <option>Select Service</option>
                            <option>PAN Card</option>
                            <option>Aadhaar</option>
                            <option>Passport</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Mobile Number"
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <button className="w-full bg-slate-700 hover:bg-slate-800 text-white py-2 rounded-lg">
                            Send Message
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}

/* CONTACT ITEM COMPONENT */
function ContactItem({ icon, text }) {
    return (
        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <svg
                className="w-5 h-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                {icon}
            </svg>
            <p className="text-gray-700">{text}</p>
        </div>
    );
}
