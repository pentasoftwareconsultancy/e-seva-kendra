import React from "react";
import panImg from "../../assets/services/pan-img.jpg";
import aadhaarImg from "../../assets/services/adhar_img.jpg";
import bannerImg from "../../assets/servicepage_imgs/services-banner.png";

export default function ServicePage() {
  const services = [
    {
      title: "PAN Card",
      desc: "New PAN application, corrections & reprint services",
      img: panImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "Aadhaar Card",
      desc: "Aadhaar enrollment, updates & mobile linking",
      img: aadhaarImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "Voter ID",
      desc: "New voter registration & correction services",
      img: panImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "Driving License",
      desc: "DL application, renewal & address change",
      img: aadhaarImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "Passport",
      desc: "New passport & renewal assistance",
      img: panImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "Ration Card",
      desc: "Apply for new ration card & modifications",
      img: aadhaarImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "Income Certificate",
      desc: "Get income certificate for various purposes",
      img: panImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "Birth Certificate",
      desc: "Birth certificate registration & corrections",
      img: aadhaarImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "Cowin certificate",
      desc: "New PAN application, corrections & reprint services",
      img: panImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "Shop Act",
      desc: "Aadhaar enrollment, updates & mobile linking",
      img: aadhaarImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "Udyam Registration",
      desc: "New voter registration & correction services",
      img: panImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "GST Registration",
      desc: "DL application, renewal & address change",
      img: aadhaarImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "Food Registration",
      desc: "New passport & renewal assistance",
      img: panImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "Notary Agreement",
      desc: "Apply for new ration card & modifications",
      img: aadhaarImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "Gap Certificate",
      desc: "Get income certificate for various purposes",
      img: panImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
    {
      title: "7/12 Download",
      desc: "Birth certificate registration & corrections",
      img: aadhaarImg,
      btnColor: "bg-slate-700 hover:bg-slate-800",
    },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-16 py-6">
      <div className="relative w-full h-[200px] md:h-[260px] lg:h-[400px] rounded-xl overflow-hidden mb-10">
        <img
          src={bannerImg}
          alt="Our Services"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="text-white max-w-xl px-6 md:px-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Our Services
            </h1>
            <p className="text-sm md:text-base leading-relaxed">
              Fast, Reliable & Affordable Document Solutions for All Your
              Government and Legal Needs
            </p>
          </div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-15 mt-20">
        {services.map((service) => (
          <div
            key={service.title}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300"
          >
            <div className="h-40 w-full overflow-hidden bg-slate-100">
              <img
                src={service.img}
                alt={service.title}
                className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-5 flex flex-col">
              <h3 className="font-bold text-lg text-slate-800 mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-slate-600 mb-4 flex-grow leading-relaxed">
                {service.desc}
              </p>

              <button
                className={`w-full ${service.btnColor} text-white text-sm font-semibold py-2.5 rounded-lg`}
              >
                Apply Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
