import React from "react";
import { useNavigate } from "react-router-dom";
import panImg from "../../assets/services/pan-img.jpg";
import aadhaarImg from "../../assets/services/adhar_img.jpg";
import bannerImg from "../../assets/services/services-banner.png";
import voterImg from "../../assets/services/voter-id.png";
import Rahivashi from "../../assets/services/rahivashi.jpg";
import passImg from "../../assets/services/pass.png";
import rationImg from "../../assets/services/ration.png";
import incomeImg from "../../assets/services/income.png";
import birthImg from "../../assets/services/birth-cer.png"; 
import gazetteImg from "../../assets/services/gazette.png";
import shopImg from "../../assets/services/shop.png";
import udyamImg from "../../assets/services/udyam.png";
import gstImg from "../../assets/services/gst.png";
import foodImg from "../../assets/services/food.png";
import notaryImg from "../../assets/services/notary.png";
import downloadImg from "../../assets/services/download.png"; 

export default function Nav_Service() {
  const navigate = useNavigate();
const services = [
  {
    title: "PAN Card(पॅन कार्ड)",
    desc: "Apply, update, or reprint your PAN card easily.",
    img: panImg,
    slug: "pan",
  },
  {
    title: "Aadhaar Card",
    desc: "New enrollment, updates.",
    img: aadhaarImg,
    slug: "aadhaar",
  },
  {
    title: "Voter ID",
    desc: "Register or correct voter details.",
    img: voterImg,
    slug: "voter",
  },
  {
    title: "Residence Certificate (रहिवासी दाखला)",
    desc: "Apply for a domicile/residence certificate ",
    img: Rahivashi,
    slug: "residence",
  },
  {
    title: "Passport",
    desc: "Apply for a new passport, renew an existing one, or update personal details quickly.",
    img: passImg,
    slug: "passport",
  },
  {
    title: "Ration Card",
    desc: "Apply or update your ration card details.",
    img: rationImg,
    slug: "ration-card",
  },
  {
    title: "Income Certificate",
    desc: "Get income certificate for official purposes.",
    img: incomeImg,
    slug: "income-certificate",
  },
  {
    title: "Birth Certificate",
    desc: "Register or correct birth certificate details.",
    img: birthImg,
    slug: "birth-certificate",
  },
  {
    title: "Gazette Certificate",
    desc: "Apply for Gazette publication for name change, correction record updates.",
    img: gazetteImg,
    slug: "gazette",
  },
  {
    title: "Shop Act",
    desc: "Register your business under Shop Act.",
    img: shopImg,
    slug: "shop-act",
  },
  {
    title: "Udyam Registration",
    desc: "Register your MSME for benefits.",
    img: udyamImg,
    slug: "udyam",
  },
  {
    title: "GST Registration",
    desc: "Apply and manage GST registration.",
    img: gstImg,
    slug: "gst",
  },
  {
    title: "Food Registration",
    desc: "Apply for FSSAI food license.",
    img: foodImg,
    slug: "food",
  },
  {
    title: "Notary Agreement",
    desc: "Create and notarize legal agreements.",
    img: notaryImg,
    slug: "notary",
  },
  {
    title: "Gap Certificate",
    desc: "Get gap certificate for education or job.",
    img: voterImg,
    slug: "gap-certificate",
  },
  {
    title: "7/12 Download",
    desc: "Download your 7/12 land record online.",
    img: downloadImg,
    slug: "7-12",
  },
];


return (
  <div>

    {/* BANNER */}
    <div className="relative w-full h-[200px] md:h-[260px] lg:h-[500px] overflow-hidden">
      <img
        src={bannerImg}
        alt="Our Services"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>  
<div className="absolute inset-0 flex items-center">
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    
    <div className="w-full md:w-1/2 space-y-6 text-white">
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Our Services
      </h1>

      <p className="text-lg md:text-xl">
        Fast, Reliable & Affordable Document Solutions for All Your
        Government and Legal Needs
      </p>

    </div>

  </div>
</div>

    </div>

    {/* SERVICES GRID */}
    <div className="px-4 md:px-10 lg:px-16 py-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16 mt-20">
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
                {service.title === "PAN Card(पॅन कार्ड)" ? (
                  <>
                    PAN Card<br />(पॅन कार्ड)
                  </>
                ) : (
                  service.title
                )}
              </h3>

              <p className="text-sm text-slate-600 mb-4 flex-grow leading-relaxed">
                {service.desc}
              </p>


<button
  onClick={() => navigate(`/apply/${service.slug}`)}
  className="w-full bg-slate-700 hover:bg-slate-800 text-white py-2 rounded-lg"
>
  Apply Now →
</button>


            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
);
}