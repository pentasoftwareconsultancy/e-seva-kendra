import React from "react";


import Panhero from "../../assets/Servicesimg/Panhero.png";
import Pan1 from "../../assets/Servicesimg/Pan1.png";
import Pan2 from "../../assets/Servicesimg/Pan2.png";
import Pan3 from "../../assets/Servicesimg/Pan3.png";

/* =====================================
   PAN SERVICE FUNCTION (YOUR FULL UI)
===================================== */
function PANCardServices() {
  return (
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">

      {/* Hero Section */}
      <section className="relative w-full h-[550px] flex items-center">
        <div className="absolute inset-0">
  <img 
    src={Panhero} 
    alt="PAN Hero" 
    className="w-full h-full object-cover object-[20%_center]"
  />
</div>

{/* Left Side Blue Gradient Overlay */}
<div className="absolute inset-0">
  <div className="h-full w-full md:w-1/2 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-transparent"></div>
</div>






        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              PAN Card Services
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              We provide fast and reliable assistance for PAN card <br/>
              application and updates<br/>
             
            </p>
            <h6> Get your PAN card in a hassle-free manner.</h6>

            <button className="bg-[#f07e1b] text-black px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-[#f8faff] py-20 px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-3">
            Steps to Apply for PAN Card
          </h2>
           <h6  className="text-lg md:text-xl text-gray-500 leading-relaxed">Follow these simple steps to get your PAN card easily and quickly.</h6>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

  {/* Card 1 */}
  <div className="bg-white rounded-[32px] shadow overflow-hidden">
    <div className="w-full h-44 flex items-center justify-center bg-gray-50">
      <img 
        src={Pan1} 
        alt="" 
        className="max-h-full max-w-full object-contain"
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-xl mb-1">1. Fill Application</h3>
      <p className="text-gray-500">Provide required details.</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-[32px] shadow overflow-hidden">
    <div className="w-full h-44 flex items-center justify-center bg-gray-50">
      <img 
        src={Pan2} 
        alt="" 
        className="max-h-full max-w-full object-contain"
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-xl mb-1">2. Submit Documents</h3>
      <p className="text-gray-500">Upload identity proof.</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-[32px] shadow overflow-hidden">
    <div className="w-full h-44 flex items-center justify-center bg-gray-50">
      <img 
        src={Pan3} 
        alt="" 
        className="max-h-full max-w-full object-contain"
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-xl mb-1">3. Receive Card</h3>
      <p className="text-gray-500">Delivered to your address.</p>
    </div>
  </div>

</div>


      </section>


    {/* Form Section */}
<section className="py-5 px-4 md:px-8 bg-[#f8faff]">
  <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.04)] p-8 md:p-12">
    
    <h2 className="text-3xl font-bold text-[#0f172a] mb-8">PAN Card Application Form</h2>
    
    {/* Tabbed Navigation */}
    <div className="flex bg-[#f1f5f9] p-1.5 rounded-2xl w-fit mb-10">
      <button className="bg-[#1e40af] text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-all">
        Apply for a New PAN Card
      </button>
      <button className="text-gray-500 px-8 py-3 rounded-xl font-semibold hover:text-[#1e40af] transition-all">
        Update/Correction PAN Card
      </button>
    </div>
     
       <p className="text-sm text-gray-600 mb-10">
      Fill the full form below to provide  your neccessary details for your PAN card application.
    </p>
    <form className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-bold text-[#0f172a] mb-2">
              Full Name <span className="text-yellow-500 text-sm">★★★★★</span>
            </label>
            .
            <div className="relative">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-[#f8faff] border-none p-4 rounded-xl outline-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#1e40af]/20 transition-all shadow-sm pl-12" 
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"/></svg>
            </div>
          </div>

          <div>
            <label className="block text-lg font-bold text-[#0f172a] mb-3">Mobile Number</label>
            <div className="flex gap-3">
              <div className="relative">
                <select className="appearance-none bg-[#f8faff] pl-4 pr-10 py-4 rounded-xl ring-1 ring-gray-100 text-gray-600 font-medium outline-none cursor-pointer focus:ring-2 focus:ring-[#1e40af]/20">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 pointer-events-none">▼</span>
              </div>
              <input 
                type="text" 
                placeholder="Mobile Number" 
                className="w-full bg-[#f8faff] border-none p-4 rounded-xl outline-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#1e40af]/20 shadow-sm" 
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-bold text-[#0f172a] mb-3">Email Address</label>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-[#f8faff] border-none p-4 rounded-xl outline-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#1e40af]/20 shadow-sm" 
            />
          </div>

          {/* Upload Cards */}
          <div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 fill-[#10b981]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"/></svg>
              <span className="font-semibold text-gray-600">Identity Proof</span>
            </div>
            <button type="button" className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-[#d4ac5b] transition-all">Upload Proof</button>
          </div>

          <div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 fill-[#3b82f6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"/></svg>
              <span className="font-semibold text-gray-600">Address Proof</span>
            </div>
            <button type="button" className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-[#d4ac5b] transition-all">Upload Proof</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">Date:</label>
              <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-[#f8faff] border-none p-4 rounded-xl outline-none ring-1 ring-gray-100" />
            </div>
            <div className="pt-7 relative">
              <select className="appearance-none w-full bg-[#f8faff] border-none p-4 rounded-xl outline-none ring-1 ring-gray-100 text-gray-400 cursor-pointer focus:ring-2 focus:ring-[#1e40af]/20">
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
              <span className="absolute right-4 top-[70%] -translate-y-1/2 text-[10px] text-gray-400 pointer-events-none">▼</span>
            </div>
          </div>

          <div>
            <label className="block text-lg font-bold text-[#0f172a] mb-3">Date of Birth</label>
            <input type="text" placeholder="Date of Birth" className="w-full bg-[#f8faff] border-none p-4 rounded-xl outline-none ring-1 ring-gray-100" />
          </div>

          <div>
            <label className="block text-lg font-bold text-[#0f172a] mb-3">Father's Name</label>
            <input type="text" placeholder="Father's Name" className="w-full bg-[#f8faff] border-none p-4 rounded-xl outline-none ring-1 ring-gray-100" />
          </div>

          <div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 fill-[#10b981]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"/></svg>
              <span className="font-semibold text-gray-600">Identity Proof</span>
            </div>
            <button type="button" className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-[#d4ac5b] transition-all">Upload Proof</button>
          </div>

          <div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 fill-[#3b82f6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"/></svg>
              <span className="font-semibold text-gray-600">Passport Size Photograph</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">Note: Please ensure all details are accurate. Additional fees may apply for correction or updates.</p>
        <button type="submit" className="bg-[#f07e1b] text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all transform hover:-translate-y-1">
          Submit Application
        </button>
      </div>
    </form>
  </div>
</section>
    </div>
  ); 
};

export default PANCardServices;