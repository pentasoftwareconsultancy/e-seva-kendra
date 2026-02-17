import { Link } from "react-router-dom";
import illustrationImg from "../../assets/Auth/register-illustration.png";
import avtarImg from "../../assets/Auth/register-avtar.png";

export default function Login() {
  return (
    <>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <img
          src={illustrationImg}
          alt="Login illustration"
          className="absolute inset-0 w-full h-full object-cover object-[45%_40%]"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-transparent"></div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
          {/* LEFT TEXT */}
          <div className="text-white max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Welcome Back
            </h1>
            <p className="mt-3 md:mt-4 text-sm sm:text-base text-blue-100">
              Login to access your account and continue with your services for PAN Card, Aadhaar, GST Registration and more.
            </p>

            <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={() => document.getElementById('login-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold text-white text-center"
              >
                Login Now
              </button>
              <a
                href="https://wa.me/919876543310"
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold text-white text-center"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

     {/* ================= LOGIN SECTION ================= */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 pb-0 pt-12 sm:pt-16 md:pt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end">

  {/* LEFT CONTENT */}
  <div className="flex flex-col justify-between pb-0 order-2 md:order-1">
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Login to Your Account
      </h2>

      <p className="mt-3 md:mt-4 text-gray-600 max-w-md leading-relaxed text-sm sm:text-base">
        Access your account to manage and track your government and legal service applications.
      </p>
    </div>

    {/* IMAGE — bottom anchored */}
    <img
      src={avtarImg}
      alt="Login illustration"
      className="hidden md:block w-full max-w-6xl mt-10"
    />
  </div>

  {/* RIGHT FORM */}
  <div id="login-form" className="flex items-center md:-ml-10 mb-6 md:mb-10 order-1 md:order-2">
    <div className="w-full bg-white rounded-2xl p-6 sm:p-8 md:p-10
      shadow-[0_30px_70px_rgba(0,0,0,0.15)]">

      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-slate-900">
        Login to Continue
      </h3>

      <form className="space-y-4 sm:space-y-5">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg px-4 py-2.5 sm:py-3 text-sm
          focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-2.5 sm:py-3 text-sm
          focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-gray-600">Remember me</span>
          </label>
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Forgot Password?
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700
          text-white py-2.5 sm:py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-center mt-4 sm:mt-5 text-gray-600">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 font-medium cursor-pointer hover:underline">
          Register here
        </Link>
      </p>
    </div>
  </div>
</section>


      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919876543310"
        className="fixed bottom-5 right-5 h-14 w-14 bg-green-600 rounded-full text-white flex items-center justify-center shadow-lg text-xl"
      >
        💬
      </a>
    </>
  );
}
