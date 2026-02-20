import React, { useState } from "react";


import Panhero from "../../assets/Servicesimg/Panhero.png";
import Pan1 from "../../assets/Servicesimg/Pan1.png";
import Pan2 from "../../assets/Servicesimg/Pan2.png";
import Pan3 from "../../assets/Servicesimg/Pan3.png";

/* =====================================
   PAN SERVICE FUNCTION (YOUR FULL UI)
===================================== */
function residence() {
  const [activeTab, setActiveTab] = useState('new');
  
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
  <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent"></div>
  </div>


        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Residence Certificate Services
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              We provide fast and reliable assistance for Residence Certificate <br/>
              application and updates<br/>
             
            </p>
            <h6> Get your Residence Certificate in a hassle-free manner.</h6>

           <a href="#pan-form">
  <button className="bg-[#f07e1b] text-black px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
    Apply Now
  </button>
</a>

          </div>
        </div>
      </section>

      {/* Document Requirements Section */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-blue-900 rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-green-600 text-center mb-2">
              रहिवाशी दाखल्यासाठी लागणारी कागदपत्रे
            </h2>
            <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-blue-900 pb-4">
              Documents Required for Residence Certificate
            </h3>
            
            <div className="space-y-4 text-lg">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">रेशनकार्ड</p>
                  <p className="text-gray-600 text-base">Ration Card</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">१५ वर्षापूर्वीचे १ लाईट बिल व चालू वर्षाचे १ लाईट बिल</p>
                  <p className="text-gray-600 text-base">1 Light Bill older than 15 years and 1 Recent Light Bill</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">स्वतःचे लाईटबील नसल्यास घरमालकाचे लाईटबील व समंतीपत्र</p>
                  <p className="text-gray-600 text-base">If Light Bill not in your name: Owner's Light Bill and Consent Letter</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">आधारकार्ड / पॅनकार्ड / मतदान कार्ड</p>
                  <p className="text-gray-600 text-base">Aadhaar Card / PAN Card / Voter ID</p>
                  <p className="text-gray-600 text-sm">(आपको १ कागदपत्रे, वडील व अर्जदार) - (Any 1 document of Parents and Applicant)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">१ पासपोर्ट साईज फोटो</p>
                  <p className="text-gray-600 text-base">1 Passport Size Photograph</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✱</span>
                <div>
                  <p className="text-gray-800 font-semibold">शाळा सोडल्याचा दाखला (वडिलांचा व स्वतःचा)</p>
                  <p className="text-gray-600 text-base">School Leaving Certificate (of Parents and Applicant)</p>
                </div>
              </div>
              
             
            </div>
            
           
          </div>
        </div>
      </section>


    {/* Form Section */}
<section  id="pan-form"
     className="py-5 px-4 md:px-8 bg-[#f8faff] scroll-mt-24">
  <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.04)] p-8 md:p-12">
    
    <h2 className="text-3xl font-bold text-[#0f172a] mb-8">Residence Certificate Application Form</h2>
     
    <form className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-bold text-[#0f172a] mb-2">
              Full Name (पूर्ण नाव) <span className="text-yellow-500 text-sm">★★★★★</span>
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-[#f8faff] border-none p-3 rounded-xl outline-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#1e40af]/20 transition-all shadow-sm pl-12 h-[52px]" 
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"/></svg>
            </div>
          </div>

          <div>
            <label className="block text-lg font-bold text-[#0f172a] mb-2">Mobile Number (मोबाईल क्रमांक)</label>
            <div className="flex gap-3">
              <div className="relative">
                <select className="appearance-none bg-[#f8faff] pl-4 pr-10 py-3 rounded-xl ring-1 ring-gray-100 text-gray-600 font-medium outline-none cursor-pointer focus:ring-2 focus:ring-[#1e40af]/20 h-[52px]">
                  <option value="+91">+91</option>
            
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 pointer-events-none"></span>
              </div>
              <input 
                type="text" 
                placeholder="Mobile Number" 
                className="w-full bg-[#f8faff] border-none p-3 rounded-xl outline-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#1e40af]/20 shadow-sm h-[52px]" 
              />
            </div>
          </div>
            
          {activeTab === 'update' && (
            <div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 fill-[#f59e0b]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm0 32v64H288V256H96zM240 416h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
              <span className="font-semibold text-gray-600">Marriage Certificate (विवाह प्रमाणपत्र)</span>
              </div>
              <label className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-[#d4ac5b] transition-all cursor-pointer">
                Upload File
                <input type="file" className="hidden" accept="image/*,.pdf" />
              </label>
            </div>
          )}

          <div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100 min-h-[52px]">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 fill-[#3b82f6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
              <span className="font-semibold text-gray-600">1 Passport Size Photograph</span>
            </div>
            <label className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-[#d4ac5b] transition-all cursor-pointer">
              Upload File
              <input type="file" className="hidden" accept="image/*" />
            </label>
          </div>

          <div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100 min-h-[52px]">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 fill-[#10b981]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"/></svg>
              <span className="font-semibold text-gray-600">School Leaving Certificate</span>
            </div>
            <label className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-[#d4ac5b] transition-all cursor-pointer">
              Upload File
              <input type="file" className="hidden" accept="image/*,.pdf" />
            </label>
          </div>

        </div>

        {/* Right Column - Document Upload */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[#0f172a] mb-2">Upload Required Documents</h3>
          
          <div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100 min-h-[52px]">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 fill-[#10b981]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"/></svg>
              <span className="font-semibold text-gray-600">Ration Card (रेशन कार्ड)</span>
            </div>
            <label className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-[#d4ac5b] transition-all cursor-pointer">
              Upload File
              <input type="file" className="hidden" accept="image/*,.pdf" />
            </label>
          </div>
          
          <div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100 min-h-[52px]">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 fill-[#f59e0b]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0z"/></svg>
              <span className="font-semibold text-gray-600">Light Bill (older than 1 year)</span>
            </div>
            <label className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-[#d4ac5b] transition-all cursor-pointer">
              Upload File
              <input type="file" className="hidden" accept="image/*,.pdf" />
            </label>
          </div>

          

          <div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100 min-h-[52px]">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 fill-[#f59e0b]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0z"/></svg>
              <span className="font-semibold text-gray-600">Consent Letter (if bill not in your name)</span>
            </div>
            <label className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-[#d4ac5b] transition-all cursor-pointer">
              Upload File
              <input type="file" className="hidden" accept="image/*,.pdf" />
            </label>
          </div>

          <div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100 min-h-[52px]">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 fill-[#ef4444]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"/></svg>
              <span className="font-semibold text-gray-600">Aadhaar / PAN / Voter ID</span>
            </div>
            <label className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-[#d4ac5b] transition-all cursor-pointer">
              Upload File
              <input type="file" className="hidden" accept="image/*,.pdf" />
            </label>
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

export default residence;