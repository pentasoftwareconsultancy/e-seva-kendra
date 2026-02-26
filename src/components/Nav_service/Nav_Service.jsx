import React from "react";
import { useNavigate } from "react-router-dom";
import panImg from "../../assets/services/pan-img.jpg";
import bannerImg from "../../assets/services/services-banner.png";
import voterImg from "../../assets/services/voter-id.png";
import passImg from "../../assets/services/pass.png";
import rationImg from "../../assets/services/ration.png";
import gazetteImg from "../../assets/services/gazette.png";
import shopImg from "../../assets/services/shop.png";
import udyamImg from "../../assets/services/udyam.png";
import foodImg from "../../assets/services/food.png";
import Incomtax from "../../assets/services/Incomtax.jpg";
import loan from "../../assets/services/loan.png";
import Demat from "../../assets/services/Demat.png";
import Finance from "../../assets/services/Finance.png";
import Insurance from "../../assets/services/Insurance.png";
import Eshram from "../../assets/services/Eshram.png";
import Mutualfunds from "../../assets/services/Mutualfunds.jpg";
import Scitizen from "../../assets/services/Scitizen.jpg";
import Agriment from "../../assets/services/Agriment.png";
import Trademark from "../../assets/services/Trademark.jpg";
import Gst from "../../assets/services/gst.png";
import Vinsurance from "../../assets/services/Vinsurance.png";
import Ayushman from "../../assets/services/Ayushman.png";
import SIPImg from "../../assets/services/SIP.png";
import IECImg from "../../assets/services/IEC.png";


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
      title: "Systematic Investment Plan (SIP)(सिस्टेमॅटिक इन्व्हेस्टमेंट प्लान)",
      desc: "Register or correct SIP details.",
      img: SIPImg,
      slug: "voter",
    },

    {
      title: "Voter ID (मतदार ओळखपत्र)",
      desc: "Register or correct Voter ID details.",
      img: voterImg,
      slug: "voter",
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
      title: "Food License (फूड लायसन्स)",
      desc: "Get your FSSAI license to run a food business legally.",
      img: foodImg,
      slug: "food",
    },
    {
      title: "Senior Certificate(ज्येष्ठ नागरिक दाखला)",
      desc: "Get your senior citizen certificate for government benefits.",
      img: Scitizen,
      slug: "senior",
    },
    {
      title: "Income tax Return (ITR)(उत्पन्न कर विवरण)",
      desc: "File your Income Tax Return easily.",
      img: Incomtax,
      slug: "ITR",
    },
    {
      title: "Import export card (IEC) (आयात निर्यात कोड)",
      desc: "File your Import Export Code (IEC) application.",
      img: IECImg,
      slug: "iec",
    },
    {
      title: "Goods and Services Tax (GST) (वस्तू व सेवा कर)",
      desc: "File your GST registration or update details.",
      img: Gst,
      slug: "gst",
    },
    {
      title: "Trademark (वैयक्तिक किंवा कंपनीचा नांव व चिन्हाची नोंदणी)",
      desc: "File your trademark registration or update details.",
      img: Trademark,
      slug: "trademark",
    },
    {
      title: "Insurance (विमा)",
      desc: "File your insurance application or update details.",
      img: Insurance,
      slug: "insurance",
    },
    {
      title: "mutual fund(म्युच्युअल फंड)",
      desc: "File your mutual fund application or update details.",
      img: Mutualfunds,
      slug: "mutual-fund",
    },
    {
      title: "rent agreement (भाडे करार)",
      desc: "File your rent agreement application or update details.",
      img: Agriment,
      slug: "rent-agreement",
    },
    {
      title: "e-shram card(ई-श्रम कार्ड)",
      desc: "File your e-shram card application or update details.",
      img: Eshram,
      slug: "e-shram-card",
    },
    {
      title: "Ayushman card (आयुष्मान कार्ड)",
      desc: "File your Ayushman card application or update details.",
      img: Ayushman,
      slug: "ayushman-card",
    },
    {
      title: "vehicle insurance (वाहन विमा)",
      desc: "File your vehicle insurance application or update details.",
      img: Vinsurance,
      slug: "vehicle-insurance",
    },
    {
      title: "Demat Account (डीमॅट खाते)",
      desc: "File your D-mart account application or update details.",
      img: Demat,
      slug: "demat-account",
    },
    {
      title: "Loan Services (कर्ज सेवा)",
      desc: "File your loan application or update details.",
      img: loan,
      slug: "loan",
    },
    {
      title: "Public Financial Services (सार्वजनिक आर्थिक सेवा)",
      desc: "Apply for public financial services.",
      img: Finance,
      slug: "public-financial-services",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-10 mb-16 mt-12 sm:mt-20 items-stretch">        {services.map((service) => (
          <div
            key={service.title}
            className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-500 cursor-pointer transform hover:-translate-y-2 active:scale-95 flex flex-col h-full"          >
            <div className="h-32 sm:h-40 w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 relative">
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <img
                src={service.img}
                alt={service.title}
                className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-4 sm:p-5 flex flex-col flex-grow">
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
                className="mt-auto w-full bg-blue-900 hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300">
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