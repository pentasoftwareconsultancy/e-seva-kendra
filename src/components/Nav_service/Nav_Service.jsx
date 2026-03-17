import React, { useState } from "react";
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
// import Finance from "../../assets/services/Finance.png";
import Insurance from "../../assets/services/Insurance.png";
// import Eshram from "../../assets/services/Eshram.png";
import Mutualfunds from "../../assets/services/Mutualfunds.jpg";
// import Scitizen from "../../assets/services/Scitizen.jpg";
import Agriment from "../../assets/services/Agriment.png";
// import Trademark from "../../assets/services/Trademark.jpg";
import Gst from "../../assets/services/gst.png";
import Vinsurance from "../../assets/services/Vinsurance.png";
// import Ayushman from "../../assets/services/Ayushman.png";
import SIPImg from "../../assets/services/SIP.png";
import IECImg from "../../assets/services/IEC.png";
import AadhaarImg from "../../assets/services/adhar_img.jpg";
import CompanyImg from "../../assets/services/company res.png";
import GovtBondsImg from "../../assets/services/Government Bonds.jpg";
import DrivingImg from "../../assets/services/driving-licence.png";


export default function Nav_Service() {
  const navigate = useNavigate();
  const [showLoginAlert, setShowLoginAlert] = useState(false);
const handleApplyClick = (slug) => {

  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  // if user not logged in
  if (isLoggedIn !== "true") {

    

    // store which service user wanted
    sessionStorage.setItem("redirectService", slug);

    navigate("/login");

    return;
  }

  // if logged in
  navigate(`/apply/${slug}`);
};


  const services = [
    {
      title: "Pan Card (पॅन कार्ड)",
      desc: "Apply, update, or reprint your PAN card easily.",
      img: panImg,
      slug: "pan",
    },
    {
      title: "Systematic Investment Plan (SIP) (सिस्टेमॅटिक इन्व्हेस्टमेंट प्लान)",
      desc: "Register or correct SIP details.",
      img: SIPImg,
      slug: "sip",
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
      title: "Shop Act (दुकान नोंदणी)",
      desc: "Register your business under Shop Act.",
      img: shopImg,
      slug: "shop-act",
    },
    {
      title: "Udyam Aadhaar (उद्यम आधार)",
      desc: "Register your Udyam Aadhaar MSME for benefits.",
      img: udyamImg,
      slug: "udyog-aadhaar",
    },
    {
      title: "FSSAI Food License (फूड लायसन्स)",
      desc: "Get your FSSAI license to run a food business legally.",
      img: foodImg,
      slug: "food",
    },
    {
      title: "Income Tax Return (ITR) (उत्पन्न कर विवरण)",
      desc: "File your Income Tax Return easily.",
      img: Incomtax,
      slug: "ITR",
    },
    {
      title: "Import Export Code (IEC) (आयात निर्यात कोड)",
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
      title: "Insurance (विमा)",
      desc: "File your insurance application or update details.",
      img: Insurance,
      slug: "insurance",
    },
    {
      title: "Mutual Fund (म्युच्युअल फंड)",
      desc: "File your mutual fund application or update details.",
      img: Mutualfunds,
      slug: "mutual-fund",
    },
    {
      title: "Rent Agreement (भाडे करार)",
      desc: "File your rent agreement application or update details.",
      img: Agriment,
      slug: "rent-agreement",
    },
    {
      title: "Vehicle Insurance (वाहन विमा)",
      desc: "File your vehicle insurance application or update details.",
      img: Vinsurance,
      slug: "vehicle-insurance",
    },
    {
      title: "Demat Account (डीमॅट खाते)",
      desc: "Open or manage your Demat account.",
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
      title: "Company Registration (कंपनी नोंदणी)",
      desc: "Register your company or business entity with government authorities.",
      img: CompanyImg,
      slug: "company-registration",
    },
    {
      title: "Government Bonds (सरकारी रोखे)",
      desc: "Apply for government bonds and secure your financial future.",
      img: GovtBondsImg,
      slug: "government-bonds",
    },
    {
      title: "Driving License (वाहन चालक परवाना)",
      desc: "Apply for a new driving license or renew your existing one.",
      img: DrivingImg,
      slug: "driving-license",
    },
    {
      title: "Aadhaar Card (आधार कार्ड)",
      desc: "Apply for new Aadhaar card or update your existing Aadhaar details.",
      img: AadhaarImg,
      slug: "aadhaar-card",
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
                onClick={() => handleApplyClick(service.slug)}
                className="mt-auto w-full bg-blue-900 hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300">
                Apply Now →
              </button>


            </div>
          </div>
        ))}
        </div> 
      </div>

      {/* Login Alert Modal */}
      {showLoginAlert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowLoginAlert(false)}>
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Login Required</h3>
            <p className="text-gray-600 mb-6">Please register or login to your account to apply for this service.</p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowLoginAlert(false);
                  navigate('/login');
                }}
                className="flex-1 bg-blue-900 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-300">
                Login
              </button>
              <button
                onClick={() => setShowLoginAlert(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg transition-all duration-300">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}