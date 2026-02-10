import React from "react";

export default function AboutusPage() {
  return (
    <div>

      {/* HERO SECTION */}
      <div
        className="relative w-full min-h-[420px] md:min-h-[520px] lg:min-h-[500px] bg-cover bg-center text-white flex items-center px-6 md:px-12"
        style={{
          backgroundImage: "url('/aboutpage_img/top-img.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent"></div>

        <div className="relative max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>

          <p className="text-lg md:text-xl max-w-xl">
            Your Trusted Partner for Government &
            <br /> Legal Services
          </p>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-5">
              About E-Seva
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              At E-Seva, we provide fast, reliable, affordable
              documentation solutions for all government and
              legal needs.
            </p>
          </div>

          <img
            src="/aboutpage_img/about-img1.png"
            alt="office"
            className="w-full max-w-md mx-auto rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-white py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-6">
          <FeatureCard title="Trusted Service" desc="Reliable & Secure Solutions" img="/aboutpage_img/about-img2.png" />
          <FeatureCard title="Fast Processing" desc="Quick & Hassle-Free Procedures" img="/aboutpage_img/about-img1.png" />
          <FeatureCard title="Affordable Charges" desc="Transparent & Reasonable Fees" img="/aboutpage_img/about-img3.png" />
          <FeatureCard title="WhatsApp Support" desc="Easy Communication & Quick Response" img="/aboutpage_img/about-img4.png" />
        </div>
      </div>

      {/* GET IN TOUCH */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-semibold mb-8">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          <input type="text" placeholder="Name" className="p-3 border rounded-lg" />

          <select className="p-3 border rounded-lg">
            <option>Select Service</option>
            <option>PAN Card</option>
            <option>Aadhaar</option>
            <option>Passport</option>
          </select>

          <button className="bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800">
            Submit
          </button>
        </div>

        <div className="mt-6 text-gray-600 space-y-3 text-lg">

          <div className="flex items-center gap-3">
            <img src="https://raw.githubusercontent.com/tailwindlabs/heroicons/master/optimized/24/outline/phone.svg" className="w-6 h-6" />
            <span>+91 9084 156368</span>
          </div>

          <div className="flex items-center gap-3">
            <img src="https://raw.githubusercontent.com/tailwindlabs/heroicons/master/optimized/24/outline/envelope.svg" className="w-6 h-6" />
            <span>contact@eseva.com</span>
          </div>

          <div className="flex items-center gap-3">
            <img src="https://raw.githubusercontent.com/tailwindlabs/heroicons/master/optimized/24/outline/globe-alt.svg" className="w-6 h-6" />
            <span>www.eseva.com</span>
          </div>

        </div>
      </div>

     
    </div>
  );
}

/* FEATURE CARD */
function FeatureCard({ img, title, desc }) {
  return (
    <div className="flex items-center gap-5 p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition">
      <img src={img} alt={title} className="w-20 h-20 object-contain" />
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
