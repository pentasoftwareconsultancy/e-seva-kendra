import React from "react";
import img1 from "../assets/About/about-img1.png";
import img2 from "../assets/About/about-img2.png";
import img3 from "../assets/About/about-img3.png";
import img4 from "../assets/About/about-img4.png";
import top from "../assets/About/top-img.png";


export default function Aboutus() {
  return (
    <div>

   {/* HERO SECTION */}
<div
  className="relative w-full min-h-[420px] md:min-h-[520px] lg:min-h-[500px] bg-cover bg-center text-white flex items-center"
  style={{
    backgroundImage: `url(${top})`,
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>

  

  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    <div className="w-full md:w-1/2 space-y-6 text-white">
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        About Us
      </h1>

      <p className="text-lg md:text-xl">
      At Shree Om Sai Multiservices, we provide fast, reliable, affordable
              documentation solutions for all government and
              legal needs.
      </p>

    </div>
  </div>
</div>


      {/* ABOUT SECTION */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-5">
              About Shree Om Sai Multiservices
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
                     Your Trusted Partner for Government & Legal Services. At Shree Om Sai Multiservices, we are committed to providing fast, reliable, and hassle-free digital services to our customers.

            </p>
          </div>

          <img
            src={img1}
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
          <FeatureCard title="Trusted Service" desc="Reliable & Secure Solutions" img={img2} />
          <FeatureCard title="Fast Processing" desc="Quick & Hassle-Free Procedures" img={img1} />
          <FeatureCard title="Affordable Charges" desc="Transparent & Reasonable Fees" img={img3} />
          <FeatureCard title="WhatsApp Support" desc="Easy Communication & Quick Response" img={img4} />
        </div>
      </div>


    </div>
  );
}

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
