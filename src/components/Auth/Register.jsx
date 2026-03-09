import axios from "axios";
import { useState } from "react";

import { Link } from "react-router-dom";
import illustrationImg from "../../assets/Auth/register-illustration.png";
import avtarImg from "../../assets/Auth/register-avtar.png";

export default function Register() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const handleRegister = async (e) => {
  e.preventDefault();

  console.log(name,email,phone,password);
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const user = {
    name: name,
    email: email,
    phone: phone,
    password: password
  };

  try {
    const response = await axios.post(
      "http://localhost:8080/api/users/register",
      user
    );

    alert(response.data);

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");

  } 
  
  catch (error) {
    console.error(error);
    alert("Registration failed");
  }
};

  return (
    <>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <img
          src={illustrationImg}
          alt="Register illustration"
          className="absolute inset-0 w-full h-full object-cover object-[45%_40%]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-transparent"></div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
          {/* LEFT TEXT */}
          <div className="text-white max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Register for Our Services
            </h1>
            <p className="mt-3 md:mt-4 text-sm sm:text-base text-blue-100">
              Sign up to get your trusted help for PAN Card, Aadhaar,
              GST Registration and more.
            </p>

            <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold text-white text-center"
              >
                Get Started
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

      {/* ================= REGISTER SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-0 pt-12 sm:pt-16 md:pt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-between pb-0 order-2 md:order-1">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Register for Our Services
            </h2>

            <p className="mt-3 md:mt-4 text-gray-600 max-w-md leading-relaxed text-sm sm:text-base">
              Create an account to apply for government and legal services
              quickly, securely, and hassle-free.
            </p>
          </div>

          {/* IMAGE — bottom anchored */}
          <img
            src={avtarImg}
            alt="Checklist illustration"
            className="hidden md:block w-full max-w-6xl mt-10"
          />
        </div>

        {/* RIGHT FORM */}
        <div id="register-form" className="flex items-center md:-ml-10 mb-6 md:mb-10 order-1 md:order-2">
          <div className="w-full bg-white rounded-2xl p-6 sm:p-8 md:p-10
      shadow-[0_30px_70px_rgba(0,0,0,0.15)]">

            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-slate-900">
              Register for Services
            </h3>

           <form onSubmit={handleRegister} className="space-y-4 sm:space-y-5">
             <input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full border rounded-lg px-4 py-2.5 sm:py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
/>

             <input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border rounded-lg px-4 py-2.5 sm:py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
/>

           <input
type="tel"
placeholder="Phone number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
pattern="[0-9]{10}"
maxLength="10"
className="w-full border rounded-lg px-4 py-2.5 sm:py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
/>
            <input
type="password"
placeholder="Create Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full border rounded-lg px-4 py-2.5 sm:py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
/>

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-2.5 sm:py-3 text-sm
          focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700
          text-white py-2.5 sm:py-3 rounded-lg font-semibold transition"
              >
                Register
              </button>
            </form>

            <p className="text-sm text-center mt-4 sm:mt-5 text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 font-medium cursor-pointer hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </section>


      
    </>
  );
}
