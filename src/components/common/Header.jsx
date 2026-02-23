import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/Home/omsai_logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b">
      <div className="w-full px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center sm:ml-4">
            <img
              src={logo}
              alt="Shree Om Sai Multi Services"
              className="h-16 sm:h-45 mt-7 w-auto object-contain"
              style={{ imageRendering: "auto" }}
            />
          </Link>


          {/* NAV WITH DIVIDERS */}
          <nav className="hidden md:flex items-center text-sm font-medium text-slate-700 ml-auto mr-8">
            <Link to="/" className="px-4 hover:text-blue-600">
              Home
            </Link>

            <div className="h-5 w-px bg-slate-300" />

            <Link to="/service" className="px-4 hover:text-blue-600">
              Services
            </Link>

            <div className="h-5 w-px bg-slate-300" />

            <Link to="/about" className="px-4 hover:text-blue-600">
              About Us
            </Link>

            <div className="h-5 w-px bg-slate-300" />

            <Link to="/contact" className="px-4 hover:text-blue-600">
              Contact Us
            </Link>
          </nav>

          {/* SEARCH + CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* SEARCH */}
            <div className="hidden md:flex items-center border rounded-lg px-3 py-1.5 text-sm text-slate-500 bg-white">
              <svg
                className="w-4 h-4 mr-2 text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent w-28"
              />
            </div>

            {/* CTA */}
            <Link to="/login" className="hidden sm:block px-3 sm:px-5 py-2 rounded-lg border border-slate-300 text-slate-700 text-xs sm:text-sm font-medium hover:bg-slate-50">
              Login
            </Link>
            <Link to="/Register" className="hidden sm:block px-3 sm:px-5 py-2 rounded-lg bg-yellow-500 text-white text-xs sm:text-sm font-medium hover:bg-yellow-600">
              Get Started
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 hover:bg-slate-100 rounded">
                Home
              </Link>
              <Link to="/service" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 hover:bg-slate-100 rounded">
                Services
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 hover:bg-slate-100 rounded">
                About Us
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 hover:bg-slate-100 rounded">
                Contact Us
              </Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="mx-4 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-center hover:bg-slate-50">
                Login
              </Link>
              <Link to="/Register" onClick={() => setIsMenuOpen(false)} className="mx-4 px-4 py-2 rounded-lg bg-yellow-500 text-white text-center hover:bg-yellow-600">
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
