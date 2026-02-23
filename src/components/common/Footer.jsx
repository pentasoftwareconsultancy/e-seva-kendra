import logo from "../../assets/Home/omsai_logo.png";
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          {/* Company Info */}
          <div className="flex flex-col items-start">
            <img
              src={logo}
              alt="Shree Om Sai Multi Services"
              className="h-14 w-auto mb-1"
            />

            <p className="text-sm text-slate-400 mb-3">
              All Government & Legal Services
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition">
                <i className="fa-brands fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/service" className="hover:text-white transition">Services</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Refund</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <p className="text-sm text-slate-400 mb-1">+91 8668266879</p>
            <p className="text-sm text-slate-400">omsaimultiservices411041@gmail.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © 2024 E-Suvidha. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
