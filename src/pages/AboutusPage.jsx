import React from "react";

export default function AboutusPage() {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: "url('/aboutpage_img/body-bg.avif')",
      }}
    >
      <div className="bg-gray-100 min-h-screen">

        {/* HERO SECTION */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-14 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                About Us
              </h1>

              <p className="text-lg md:text-xl">
                Your Trusted Partner for Government &
                <br /> Legal Services
              </p>
            </div>

            <img
              src="/aboutpage_img/top-img.png"
              alt="about"
              className="w-72 md:w-96"
            />
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              About E-Seva
            </h2>

            <p className="text-gray-600 leading-relaxed">
              At E-Seva, we provide fast, reliable, affordable
              documentation solutions for all government and
              legal needs. Our mission is to simplify processes
              and help individuals and businesses access
              important services easily and efficiently.
            </p>
          </div>

          <img
            src="/aboutpage_img/about-img1.png"
            alt="office"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-white py-12">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Why Choose Us?
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
            <FeatureCard
              title="Trusted Service"
              desc="Reliable & Secure Solutions"
              img="/aboutpage_img/about-img2.png"
            />

            <FeatureCard
              title="Fast Processing"
              desc="Quick & Hassle-Free Procedures"
              img="/aboutpage_img/about-img1.png"
            />

            <FeatureCard
              title="Affordable Charges"
              desc="Transparent & Reasonable Fees"
              img="/aboutpage_img/about-img3.png"
            />

            <FeatureCard
              title="WhatsApp Support"
              desc="Easy Communication & Quick Response"
              img="/aboutpage_img/about-img4.png"
            />
          </div>
        </div>

        {/* GET IN TOUCH */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border rounded-md"
            />

            <select className="p-3 border rounded-md">
              <option>Select Service</option>
              <option>PAN Card</option>
              <option>Aadhaar</option>
              <option>Passport</option>
            </select>

            <button className="bg-blue-700 text-white rounded-md font-semibold">
              Submit
            </button>
          </div>

          <div className="mt-6 text-gray-600 space-y-1">
            <p>📞 +91 9084 156368</p>
            <p>📧 contact@eseva.com</p>
            <p>🌐 www.eseva.com</p>
          </div>
        </div>

        {/* WHATSAPP FLOAT */}
        <a
          href="#"
          className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg"
        >
          <img
            src="/about_img/whatsapp.png"
            alt="whatsapp"
            className="w-6 h-6"
          />
        </a>

      </div>
    </div>
  );
}

/* FEATURE CARD */
function FeatureCard({ img, title, desc }) {
  return (
    <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
      <img src={img} alt={title} className="w-12 h-12" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
