import { Link } from "react-router-dom";
import illustrationImg from "../../assets/Auth/register-illustration.png";
import avtarImg from "../../assets/Auth/register-avtar.png";

export default function Login() {
  return (
    <>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[500px] overflow-hidden">
        {/* Background Image */}
        <img
          src={illustrationImg}
          alt="Login illustration"
          className="absolute inset-0 w-full h-full object-cover object-[45%_40%]"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-transparent"></div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          {/* LEFT TEXT */}
          <div className="text-white max-w-xl">
            <h1 className="text-4xl font-bold leading-tight">
              Welcome Back
            </h1>
            <p className="mt-4 text-blue-100">
              Login to access your account and continue with your services for PAN Card, Aadhaar, GST Registration and more.
            </p>

            <div className="mt-6 flex gap-4">
              <button 
                onClick={() => document.getElementById('login-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold text-white"
              >
                Login Now
              </button>
              <a
                href="https://wa.me/919876543310"
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold text-white"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

     {/* ================= LOGIN SECTION ================= */}
<section className="max-w-7xl mx-auto px-6 pb-0 pt-24 grid md:grid-cols-2 gap-20 items-end">

  {/* LEFT CONTENT */}
  <div className="flex flex-col justify-between pb-0">
    <div>
      <h2 className="text-3xl font-semibold text-slate-900">
        Login to Your Account
      </h2>

      <p className="mt-4 text-gray-600 max-w-md leading-relaxed">
        Access your account to manage and track your government and legal service applications.
      </p>
    </div>

    {/* IMAGE — bottom anchored */}
    <img
      src={avtarImg}
      alt="Login illustration"
      className="w-full max-w-6xl mt-10"
    />
  </div>

  {/* RIGHT FORM */}
  <div id="login-form" className="flex items-center -ml-10 mb-10">
    <div className="w-full bg-white rounded-2xl p-10
      shadow-[0_30px_70px_rgba(0,0,0,0.15)]">

      <h3 className="text-xl font-semibold mb-6 text-slate-900">
        Login to Continue
      </h3>

      <form className="space-y-5">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg px-4 py-3 text-sm
          focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-3 text-sm
          focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <div className="flex items-center justify-between text-sm">
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
          text-white py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-center mt-5 text-gray-600">
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
