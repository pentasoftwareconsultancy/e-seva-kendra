import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [navSearch, setNavSearch] = useState("");

  const services = [
  { name: "ITR", slug: "itr" },
  { name: "IEC", slug: "iec" },
  { name: "GST", slug: "gst" },
  { name: "Trademark", slug: "trademark" },
  { name: "Health Insurance", slug: "health-insurance" },
  { name: "Life Insurance", slug: "life-insurance" },
  { name: "SIP", slug: "sip" },
  { name: "Mutual Fund", slug: "mutual-fund" },
  { name: "Rent Agreement", slug: "rent-agreement" },
  { name: "E-Shram Card", slug: "e-shram-card" },
  { name: "Ayushman Card", slug: "ayushman-card" },
  { name: "2-4 Wheeler Insurance", slug: "vehicle-insurance" },
  { name: "D-Mat Account", slug: "dmat-account" },
  { name: "Personal Loan", slug: "personal-loan" },
  { name: "Business Loan", slug: "business-loan" },
  { name: "Home Loan", slug: "home-loan" },
  { name: "PFS", slug: "pfs" },
  { name: "PAN Card", slug: "pan" },
  { name: "Passport", slug: "passport" },
  { name: "Ration Card", slug: "ration-card" },
  { name: "Gazette Certificate", slug: "gazette" },
  { name: "Shop Act", slug: "shop-act" },
  { name: "Udyog Aadhar", slug: "udyog-aadhaar" },
  { name: "Food License", slug: "food" },
  { name: "Senior Citizen Certificate", slug: "senior" },
  { name: "Voter ID", slug: "voter" }

];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b">
      <div className="w-full px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-600 to-green-700 text-white grid place-items-center font-bold shadow-md">
              ES
            </div>
            <span className="font-bold text-xl text-slate-800">
              E-Suvidha
            </span>
          </Link>

          {/* NAVIGATION */}
         <nav className="hidden md:flex items-center text-sm font-medium text-slate-700 ml-auto">

  <Link to="/" className="px-4 hover:text-blue-600">
    Home
  </Link>

  <div className="h-5 w-px bg-slate-300" />

  {/* SERVICES */}
  <div className="relative px-4">
    <div className="flex items-center gap-1">
      <Link to="/service" className="hover:text-blue-600">
        Services
      </Link>

      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <ChevronDown
          size={16}
          className={`transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
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

  <Link to="/about" className="px-4 hover:text-blue-600">
    About
  </Link>

  <div className="h-5 w-px bg-slate-300" />

  <Link to="/contact" className="px-4 hover:text-blue-600">
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
          <div className="flex items-center gap-6">

  <Link
    to="/login"
    className="hidden sm:block px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-50"
  >
    Login
  </Link>

  <Link
    to="/register"
    className="hidden sm:block px-4 py-2 rounded-lg bg-yellow-500 text-white text-sm font-medium hover:bg-yellow-600"
  >
    Get Started
  </Link>

</div>
        </div>
      </div>
    </header>
  );
}