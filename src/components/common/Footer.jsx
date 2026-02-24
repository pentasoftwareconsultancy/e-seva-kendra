import logo from "../../assets/Home/omsai_logo-footer.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 items-start">

          {/* Company Info */}
          <div className="flex flex-col space-y-5 pl-2 md:pl-0">

            <img
              src={logo}
              alt="Shree Om Sai Multi Services"
              className="h-16 w-auto object-contain"
            />

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              All Government & Legal Services
            </p>

            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>

              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>

              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition">
                <i className="fa-brands fa-linkedin-in text-sm"></i>
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-base">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="/service" className="hover:text-white transition">Services</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-base">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Refund</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-base">
              Contact
            </h4>
            <p className="text-sm text-slate-400 mb-2">
              +91 8668266879
            </p>
            <p className="text-sm text-slate-400 break-words">
              omsaimultiservices411041@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-xs text-slate-500">
          © 2024 E-Suvidha. All rights reserved.
        </div>

      </div>
    </footer>
  );
}