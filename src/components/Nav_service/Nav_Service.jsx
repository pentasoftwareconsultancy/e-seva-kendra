import React from "react";
import { useNavigate } from "react-router-dom";
import panImg from "../../assets/services/pan-img.jpg";
import Marriage from "../../assets/services/Marriage.jpg";
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
import domicileImg from "../../assets/services/domicile.png";
import foodImg from "../../assets/services/food.png";
import notaryImg from "../../assets/services/notary.png";
import downloadImg from "../../assets/services/download.png"; 
import noncremenalImg from "../../assets/services/noncremenal.png";

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
    title: "Marriage Certificate (लग्न प्रमाणपत्र)",
    desc: "Apply for an official marriage certificate.",
    img: Marriage,
    slug: "marriage",
  },
  // {
  //   title: "Voter ID",
  //   desc: "Register or correct voter details.",
  //   img: voterImg,
  //   slug: "voter",
  // },
  {
    title: "Residence Certificate (रहिवासी दाखला)",
    desc: "Apply for a domicile/residence certificate.",
    img: Rahivashi,
    slug: "residence",
  },
  {
    title: "Passport (पासपोर्ट)",
    desc: "Apply for a new passport, or update personal details quickly.",
    img: passImg,
    slug: "passport",
  },
  {
    title: "Ration Card (रेशन कार्ड)",
    desc: "Apply or update your ration card details.",
    img: rationImg,
    slug: "ration-card",
  },
  {
    title: "Income Certificate (उत्पन्न दाखला)",
    desc: "Get income certificate for various purposes",
    img: incomeImg,
    slug: "income-certificate",
  },
  {
    title: "Birth Certificate (जन्म प्रमाणपत्र)",
    desc: "Birth certificate registration & corrections.",
    img: birthImg,
    slug: "birth-certificate",
  },
  {
    title: "Gazette Certificate (गॅझेट प्रमाणपत्र)",
    desc: "Apply for Gazette publication for name change, record updates.",
    img: gazetteImg,
    slug: "gazette",
  },
  {
    title: "Shop Act(दुकान नोंदणी)",
    desc: "Register your business under Shop Act.",
    img: shopImg,
    slug: "shop-act",
  },
  {
    title: "Udyog Aadhaar(उद्योग आधार)",
    desc: "Register your Udyog Aadhaar MSME for benefits.",
    img: udyamImg,
    slug: "udyog-aadhaar",
  },
  {
    title: "Domicile Certificate (निवास प्रमाणपत्र)",
    desc: "Apply for a New Domicile Certificate.",
    img: domicileImg,
    slug: "domicile",
  },
  {
    title: "Food License (फूड लायसन्स)",
    desc: "Get your FSSAI license to run a food business legally.",
    img: foodImg,
    slug: "food",
  },
  {
    title: "Senior Certificate(ज्येष्ठ नागरिक दाखला)",
    desc: "Get your senior citizen certificate for government benefits.",
    img: notaryImg,
    slug: "senior",
  },
  {
    title: "Non-Cremenal Certificate",
    desc: "Get non-cremenal certificate for education or job.",
    img: noncremenalImg,
    slug: "Non-Cremenal",
  },
  {
    title: "EWS Certificate (ईडब्ल्यूएस प्रमाणपत्र)",
    desc: "Apply for and download your EWS certificate government schemes",
    img: downloadImg,
    slug: "ews-certificate",
  },
  {
    title: "Voter ID",
    desc: "Register or correct voter details.",
    img: voterImg,
    slug: "voter",
  },
];


return (
  <div>

    {/* BANNER */}
    <div className="relative w-full h-[180px] sm:h-[200px] md:h-[260px] lg:h-[500px] overflow-hidden">
      <img
        src={bannerImg}
        alt="Our Services"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>  
<div className="absolute inset-0 flex items-center">
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
    
    <div className="w-full md:w-1/2 space-y-3 sm:space-y-6 text-white">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
        Our Services
      </h1>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl">
        Fast, Reliable & Affordable Document Solutions for All Your
        Government and Legal Needs
      </p>

    </div>

  </div>
</div>

    </div>

    {/* SERVICES GRID */}
    <div className="px-4 md:px-10 lg:px-16 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-10 mb-16 mt-12 sm:mt-20">
        {services.map((service) => (
          <div
            key={service.title}
            className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-500 cursor-pointer transform hover:-translate-y-2 active:scale-95"
          >
            <div className="h-32 sm:h-40 w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 relative">
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <img
                src={service.img}
                alt={service.title}
                className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-4 sm:p-5 flex flex-col">
              <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-800 mb-2">
                {service.title.split('(').map((part, i) => 
                  i === 0 ? part : <><br />({part}</>  
                )}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 flex-grow leading-relaxed">
                {service.desc}
              </p>


<button
  onClick={() => navigate(`/apply/${service.slug}`)}
  className="w-full bg-blue-900 hover:bg-blue-700 text-white py-2 rounded-lg text-xs sm:text-sm hover:scale-105 active:scale-95 shadow-md hover:shadow-lg transition-all"
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