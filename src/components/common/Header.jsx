import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b">
      <div className="w-full px-8">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="flex items-center gap-3 ml-4">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-green-600 to-green-700 text-white grid place-items-center font-bold text-lg shadow-md">
              ES
            </div>
            <span className="font-bold text-xl text-slate-800">
              E-Suvidha
            </span>
          </div>

          {/* NAV WITH DIVIDERS */}
          <nav className="hidden md:flex items-center text-sm font-medium text-slate-700 ml-auto mr-8">
            <Link to="/services" className="px-4 hover:text-blue-600">
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
          <div className="flex items-center gap-4">
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
            <Link to="/login" className="px-5 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50">
              Login
            </Link>
            <Link to="/services" className="px-5 py-2 rounded-lg bg-yellow-500 text-white text-sm font-medium hover:bg-yellow-600">
              Get Started
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
