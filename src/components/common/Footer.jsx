import logo from "../../assets/Home/new logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start text-left sm:text-center">

          {/* Company Info */}
            <div className="flex flex-col space-y-3 items-center text-center col-span-2 sm:col-span-1 justify-self-center">

              <img
                src={logo}
                alt="Shree Om Sai Multi Services"
                className="h-15 w-auto object-contain mix-blend-lighten"
              />

              <p className="text-sm text-white leading-relaxed text-center">
                All Government & Legal Services
              </p>

              <div className="flex gap-4 pt-2 justify-center">
                

                <a href="https://www.instagram.com/shree_om_sai_multiservices?igsh=anZvY2ZudWVzYm1n" className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition">
                  <i className="fa-brands fa-instagram text-sm"></i>
                </a>

                <a href="https://wa.me/8668266879" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-green-600 rounded-full flex items-center justify-center transition">
                  <i className="fa-brands fa-whatsapp text-sm"></i>
                </a>

                <a href="tel:+918668266879" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition">
                  <i className="fa-solid fa-phone text-sm"></i>
                </a>

            
              </div>

            </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-2 text-base">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/service" className="hover:text-white transition">Services</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-2 text-base">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Refund</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-white mb-2 text-base">
              Contact
            </h4>
            <p className="text-sm text-slate-400 mb-2 flex items-center gap-2">
              <i className="fa-solid fa-phone text-green-500"></i>
              <a href="tel:+918668266879" className="hover:text-white transition">+91 8668266879</a>
            </p>
            <p className="text-sm text-slate-400 mb-2 flex items-center gap-2">
              <i className="fa-solid fa-envelope text-blue-500"></i>
              <a href="mailto:omsaimultiservices411041@gmail.com" className="hover:text-white transition">omsaimultiservices411041@gmail.com</a>
            </p>
            <p className="text-sm text-slate-400 flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-red-500"></i>
              <a href="https://maps.google.com/?q=Shop+No+6+Dagade+Patil+Complex+Karle+Chowk+Nanded+City+Pune" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Shop No 6, Dagade Patil Complex, Karle Chowk, Nanded City, Pune</a>
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-xs text-white">
          © 2026 Shree Om Sai Multiservices . All rights reserved.
        </div>

      </div>
    </footer>
  );
}