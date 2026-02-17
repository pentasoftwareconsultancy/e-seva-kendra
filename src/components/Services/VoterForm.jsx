import React from 'react'
import Votehero from "../../assets/Panimg/Votehero.jpeg";
import Pan1 from "../../assets/Panimg/pan1.png";
import Pan2 from "../../assets/Panimg/pan2.png";
import Pan3 from "../../assets/Panimg/pan3.png";

function VoterForm() {
  return (
    <div>
    
    <div className="min-h-screen bg-[#f8faff] font-sans text-[#1e293b]">
    
          {/* Hero Section */}
          <section className="relative w-full h-[550px] flex items-center">
            <div className="absolute inset-0">
              <img src={Votehero} alt="PAN Hero" className="w-full h-full object-cover object-[20%_center]" />
            </div>
    
    
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
              <div className="w-full md:w-1/2 space-y-6 text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Voter ID  Services
                </h1>
    
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  Apply for new Viet ID ,Corections,and <br/>address change with 
                  easy online assistance.<br/> </p>
                   <h6  className="text-lg md:text-xl text-gray-200 leading-relaxed">Get your Voter ID in a hassle-free manner.</h6>
              
    
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
                Steps to Apply for Voter ID
              </h2>
              <h6  className="text-lg md:text-xl text-gray-500 leading-relaxed">Follow these simple steps to get your Voter ID easily and quickly.</h6>
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
          <h3 className="font-bold text-xl mb-1">1. Fill Voter ID  Application</h3>
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
          <h3 className="font-bold text-xl mb-1">2. Upload Documents</h3>
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
          <h3 className="font-bold text-xl mb-1">3. Track Application Status</h3>
          <p className="text-gray-500">Delivered to your address.</p>
        </div>
      </div>
    
    </div>
    
    
          </section>
    
    
       {/* Form Section */}
<section className="py-5 px-4 md:px-8 bg-[#f8faff]">
  <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.04)] p-8 md:p-12">
    
    <h2 className="text-3xl font-bold text-[#0f172a] mb-8">Voter ID Application Form</h2>
    
    {/* Tabbed Navigation */}
    <div className="flex bg-[#f1f5f9] p-1.5 rounded-2xl w-fit mb-6">
      <button className="bg-[#1e40af] text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-all">
        Apply for New Voter ID
      </button>
      <button className="text-gray-500 px-8 py-3 rounded-xl font-semibold hover:text-[#1e40af] transition-all">
        Correction/Address Change
      </button>
    </div>

    <p className="text-sm text-gray-600 mb-10">
      Fill the full form below to update your Voter ID details or to enroll for a new Voter ID
    </p>

    <form className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-bold text-[#0f172a] mb-3">
              Full Name <span className="text-blue-600 text-sm">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <input type="text" placeholder="First Name" className="bg-[#f8faff] border-none p-4 rounded-xl outline-none ring-1 ring-gray-100 shadow-sm" />
              <input type="text" placeholder="Middle Name" className="bg-[#f8faff] border-none p-4 rounded-xl outline-none ring-1 ring-gray-100 shadow-sm" />
              <input type="text" placeholder="Last Name" className="bg-[#f8faff] border-none p-4 rounded-xl outline-none ring-1 ring-gray-100 shadow-sm" />
            </div>
          </div>

          <div>
            <label className="block text-lg font-bold text-[#0f172a] mb-3">Aadhaar Number</label>
            <input type="text" placeholder="Aadhaar Number" className="w-full bg-[#f8faff] border-none p-4 rounded-xl outline-none ring-1 ring-gray-100 shadow-sm" />
          </div>

          <div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-gray-600">Identity Proof</span>
            </div>
            <button type="button" className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-[#d4ac5b] transition-all">Upload Proof</button>
          </div>

          <div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-gray-600">Photograph</span>
            </div>
            <button type="button" className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-[#d4ac5b] transition-all">Upload Proof</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-bold text-[#0f172a] mb-3">
              Date Of Birth <span className="text-blue-600 text-sm">*</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-[#f8faff] border-none p-4 rounded-xl outline-none ring-1 ring-gray-100 shadow-sm" />
              <div className="relative">
                <select className="appearance-none w-full bg-[#f8faff] border-none p-4 rounded-xl outline-none ring-1 ring-gray-100 text-gray-600 cursor-pointer">
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-lg font-bold text-[#0f172a] mb-3">EPIC Number</label>
            <input type="text" placeholder="EPIC Number" className="w-full bg-[#f8faff] border-none p-4 rounded-xl outline-none ring-1 ring-gray-100 shadow-sm" />
          </div>

          <div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-gray-600">Address Proof</span>
            </div>
            <button type="button" className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-[#d4ac5b] transition-all">Upload Proof</button>
          </div>

          <div className="flex items-center bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100 h-[58px]">
            <span className="font-semibold text-gray-600">Photograph</span>
          </div>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">Note: Please ensure all details are accurate. Additional fees may apply for correction or updates.</p>
        <button type="submit" className="bg-[#f07e1b] text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
          Submit Application
        </button>
      </div>
    </form>
  </div>
</section>
      
    </div>
    </div>
  );
};

export default VoterForm;
