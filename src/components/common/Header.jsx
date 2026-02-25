import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faHouse,
  faLayerGroup,
  faCircleInfo,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../../assets/Home/new logo.png";




export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [navSearch, setNavSearch] = useState("");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const services = [
    { name: "Income Tax Return (आयकर रिटर्न)", slug: "itr" },
    { name: "Import Export Code (आयात निर्यात कोड)", slug: "iec" },
    { name: "Goods and Services Tax (वस्तू आणि सेवा कर)", slug: "gst" },
    { name: "Trademark (ट्रेडमार्क)", slug: "trademark" },
    { name: "Insurance (विमा)", slug: "insurance" },
    { name: "Systematic Investment Plan (सिस्टेमॅटिक इन्व्हेस्टमेंट प्लॅन)", slug: "sip" },
    { name: "Mutual Fund (म्युच्युअल फंड)", slug: "mutual-fund" },
    { name: "Rent Agreement (भाडे करार)", slug: "rent-agreement" },
    { name: "E-Shram Card (ई-श्रम कार्ड)", slug: "e-shram-card" },
    { name: "Ayushman Card (आयुष्मान कार्ड)", slug: "ayushman-card" },
    { name: "2-4 Wheeler Insurance (वाहन विमा)", slug: "vehicle-insurance" },
    { name: "Demat Account (डीमॅट खाते)", slug: "dmat-account" },
    { name: "Loan (कर्ज)", slug: "loan" },
    { name: "Personal Financial Services (वैयक्तिक आर्थिक सेवा)", slug: "pfs" },
    { name: "PAN Card (पॅन कार्ड)", slug: "pan" },
    { name: "Passport (पासपोर्ट)", slug: "passport" },
    { name: "Ration Card (रेशन कार्ड)", slug: "ration-card" },
    { name: "Gazette Certificate (गॅझेट प्रमाणपत्र)", slug: "gazette" },
    { name: "Shop Act (दुकान अधिनियम)", slug: "shop-act" },
    { name: "Udyog Aadhar (उद्योग आधार)", slug: "udyog-aadhaar" },
    { name: "Food License (अन्न परवाना)", slug: "food" },
    { name: "Senior Citizen Certificate (ज्येष्ठ नागरिक प्रमाणपत्र)", slug: "senior" },
    { name: "Voter ID (मतदार ओळखपत्र)", slug: "voter" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur border-b">
      <div className="w-full px-4 sm:px-8">

        {/* TOP ROW */}
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Shree Om Sai Multi Services"
              className="h-15 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center text-sm font-medium text-slate-700 ml-auto">

            <Link
              to="/"
              onClick={() => setIsDropdownOpen(false)}
              className="px-4 flex items-center gap-2 hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faHouse} className="text-xs" />
              Home
            </Link>

            <div className="h-5 w-px bg-slate-300" />

            {/* SERVICES DROPDOWN */}
            <div className="relative px-4">
              <div className="flex items-center gap-1">
                <Link
                  to="/service"
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <FontAwesomeIcon icon={faLayerGroup} className="text-xs" />
                  Services
                </Link>

                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
              </div>

              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 bg-white shadow-xl rounded-xl z-50">
                  <div className="p-3 border-b">
                    <input
                      type="text"
                      placeholder="Search service..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="max-h-80 overflow-y-auto">
                    {services
                      .filter(service =>
                        service.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .map((service, index) => (
                        <Link
                          key={index}
                          to={`/apply/${service.slug}`}
                          onClick={() => setIsDropdownOpen(false)}
                          className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                        >
                          {service.name}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>

            <div className="h-5 w-px bg-slate-300" />

            <Link
              to="/about"
              className="px-4 flex items-center gap-2 hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faCircleInfo} className="text-xs" />
              About
            </Link>

            <div className="h-5 w-px bg-slate-300" />

            <Link
              to="/contact"
              className="px-4 flex items-center gap-2 hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faAddressBook} className="text-xs" />
              Contact
            </Link>

            <div className="h-5 w-px bg-slate-300 mx-4" />

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search..."
              value={navSearch}
              onChange={(e) => setNavSearch(e.target.value)}
              className="px-3 py-1.5 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 mr-6"
            />
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* Desktop Buttons */}
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="hidden md:block px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-50"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="hidden md:block px-4 py-2 rounded-lg bg-[#f07e1b] text-black text-sm font-medium hover:bg-[#d4ac5b] transition-all"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                {/* Notification */}
                <button className="relative hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition">
                  <FontAwesomeIcon icon={faBell} className="text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                    3
                  </span>
                </button>

                <Link
                  to="/account"
                  className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faUser} className="text-gray-600" />
                  Profile
                </Link>
              </>
            )}

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="w-6 h-0.5 bg-slate-800"></span>
              <span className="w-6 h-0.5 bg-slate-800"></span>
              <span className="w-6 h-0.5 bg-slate-800"></span>
            </button>
          </div>

          {/* MOBILE SLIDE MENU */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
              }`}
          >
            <div className="flex flex-col space-y-4 px-4 text-sm font-medium text-slate-700">

              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>

              <Link to="/service" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </Link>

              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>

              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>

              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    className="pt-2 border-t"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/account"
                    className="pt-2 border-t"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>

                  <button
                    className="text-left"
                    onClick={() => {
                      localStorage.removeItem("isLoggedIn");
                      setIsMobileMenuOpen(false);
                      window.location.href = "/";
                    }}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>

        </div>

      </div>
    </header>
  );
}