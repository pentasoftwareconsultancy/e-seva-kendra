import React, { useState } from "react";


import Panhero from "../../assets/Servicesimg/Panhero.png";
import Pan1 from "../../assets/Servicesimg/Pan1.png";
import Pan2 from "../../assets/Servicesimg/Pan2.png";
import Pan3 from "../../assets/Servicesimg/Pan3.png";

/* =====================================
   PAN SERVICE FUNCTION (YOUR FULL UI)
===================================== */
function Marriage() {
  const [activeTab, setActiveTab] = useState('new');
  
  const [files, setFiles] = useState({
    groomPan: null,
    groomAadhaar: null,
    groomSchool: null,
    groomPhotos: null,
    bridePan: null,
    brideAadhaar: null,
    brideSchool: null,
    bridePhotos: null,
    invitation: null,
    couplePhoto: null,
    witness1Pan: null,
    witness1Aadhaar: null,
    witness1Photos: null,
    witness2Pan: null,
    witness2Aadhaar: null,
    witness2Photos: null,
    witness3Pan: null,
    witness3Aadhaar: null,
    witness3Photos: null,
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFiles((prev) => ({
        ...prev,
        [field]: { file, url: fileURL },
      }));
    }
  };
  
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
              Marriage Certificate Services
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              We provide fast and reliable assistance for Marriage Certificate <br/>
              application and registration<br/>
             
            </p>
            <h6> Get your Marriage Certificate in a hassle-free manner.</h6>

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
          <div className="bg-white border-4 border-green-700 rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-green-600 text-center mb-2">
              मॅरेज सर्टिफिकेट काढण्यासाठी लागणारी कागदपत्रे
            </h2>
            <h3 className="text-2xl font-bold text-green-600 text-center mb-8 border-b-4 border-green-700 pb-4">
              Documents Required for Marriage Certificate
            </h3>
            
            <div className="space-y-6 text-lg">
              {/* Groom Section */}
              <div className="bg-blue-50 p-4 rounded-xl">
                <h4 className="text-xl font-bold text-blue-600 mb-3">👤 वर (Groom):</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✱</span>
                    <div>
                      <p className="text-gray-800 font-semibold">पॅनकार्ड</p>
                      <p className="text-gray-600 text-base">PAN Card</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✱</span>
                    <div>
                      <p className="text-gray-800 font-semibold">आधारकार्ड</p>
                      <p className="text-gray-600 text-base">Aadhaar Card</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✱</span>
                    <div>
                      <p className="text-gray-800 font-semibold">शाळा सोडल्याचा दाखला</p>
                      <p className="text-gray-600 text-base">School Leaving Certificate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✱</span>
                    <div>
                      <p className="text-gray-800 font-semibold">२ पासपोर्ट साईझ फोटो</p>
                      <p className="text-gray-600 text-base">2 Passport Size Photographs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bride Section */}
              <div className="bg-pink-50 p-4 rounded-xl">
                <h4 className="text-xl font-bold text-pink-600 mb-3">👰 वधू (Bride):</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✱</span>
                    <div>
                      <p className="text-gray-800 font-semibold">पॅनकार्ड</p>
                      <p className="text-gray-600 text-base">PAN Card</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✱</span>
                    <div>
                      <p className="text-gray-800 font-semibold">आधारकार्ड</p>
                      <p className="text-gray-600 text-base">Aadhaar Card</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✱</span>
                    <div>
                      <p className="text-gray-800 font-semibold">शाळा सोडल्याचा दाखला</p>
                      <p className="text-gray-600 text-base">School Leaving Certificate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✱</span>
                    <div>
                      <p className="text-gray-800 font-semibold">२ पासपोर्ट साईझ फोटो</p>
                      <p className="text-gray-600 text-base">2 Passport Size Photographs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Requirements */}
              <div className="bg-yellow-50 p-4 rounded-xl">
                <h4 className="text-xl font-bold text-yellow-700 mb-3">📌 अतिरिक्त आवश्यकता (Additional Requirements):</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✱</span>
                    <div>
                      <p className="text-gray-800 font-semibold">लग्नपत्रिका</p>
                      <p className="text-gray-600 text-base">Marriage Invitation Card</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✱</span>
                    <div>
                      <p className="text-gray-800 font-semibold">वरात हार घालताना किंवा मंगलाष्टक घालतानाचा १ फोटो</p>
                      <p className="text-gray-600 text-base">1 Photo of the couple exchanging garlands / during the marriage ritual</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✱</span>
                    <div>
                      <p className="text-gray-800 font-semibold">३ साक्षीदार त्यांचे पॅनकार्ड, आधारकार्ड, २ पासपोर्ट फोटो</p>
                      <p className="text-gray-600 text-base">3 Witnesses with PAN Card, Aadhaar Card, 2 Passport Size Photographs each</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
           
          </div>
        </div>
      </section>


    {/* Form Section */}
<section id="pan-form" className="py-10 px-4 md:px-8 bg-[#f8faff] scroll-mt-24">
  <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow p-8 md:p-12 mb-20">
    
    <h2 className="text-3xl font-bold mb-6">Marriage Certificate Application Form</h2>

    <form className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div>
          <label className="block font-bold mb-2">Groom Full Name (वराचे पूर्ण नाव)</label>
          <input
            type="text"
            placeholder="Enter Groom Full Name"
            className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
          />
        </div>

        <div>
          <label className="block font-bold mb-2">Bride Full Name (वधूचे पूर्ण नाव)</label>
          <input
            type="text"
            placeholder="Enter Bride Full Name"
            className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
          />
        </div>

        <div>
          <label className="block font-bold mb-2">Mobile Number (मोबाईल क्रमांक)</label>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
          />
        </div>

        <div>
          <label className="block font-bold mb-2">Marriage Date (लग्नाची तारीख)</label>
          <input
            type="date"
            className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1e40af]/20"
          />
        </div>

        {/* Groom Documents */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-blue-600">👤 Groom Documents (वराची कागदपत्रे)</h3>
        </div>
        
        <UploadBox label="Groom PAN Card (वराचे पॅन कार्ड)" fileData={files.groomPan} onChange={(e) => handleFileChange(e, "groomPan")} />
        <UploadBox label="Groom Aadhaar Card (वराचे आधार कार्ड)" fileData={files.groomAadhaar} onChange={(e) => handleFileChange(e, "groomAadhaar")} />
        <UploadBox label="Groom School Certificate (वराचे शाळा सोडल्याचा दाखला)" fileData={files.groomSchool} onChange={(e) => handleFileChange(e, "groomSchool")} />
        <UploadBox label="Groom 2 Photos (वराचे 2 फोटो)" fileData={files.groomPhotos} onChange={(e) => handleFileChange(e, "groomPhotos")} />

        {/* Bride Documents */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-pink-600">👰 Bride Documents (वधूची कागदपत्रे)</h3>
        </div>
        
        <UploadBox label="Bride PAN Card (वधूचे पॅन कार्ड)" fileData={files.bridePan} onChange={(e) => handleFileChange(e, "bridePan")} />
        <UploadBox label="Bride Aadhaar Card (वधूचे आधार कार्ड)" fileData={files.brideAadhaar} onChange={(e) => handleFileChange(e, "brideAadhaar")} />
        <UploadBox label="Bride School Certificate (वधूचे शाळा सोडल्याचा दाखला)" fileData={files.brideSchool} onChange={(e) => handleFileChange(e, "brideSchool")} />
        <UploadBox label="Bride 2 Photos (वधूचे 2 फोटो)" fileData={files.bridePhotos} onChange={(e) => handleFileChange(e, "bridePhotos")} />

        {/* Additional Documents */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-yellow-700">📌 Additional Documents (अतिरिक्त कागदपत्रे)</h3>
        </div>
        
        <UploadBox label="Marriage Invitation Card (लग्नपत्रिका)" fileData={files.invitation} onChange={(e) => handleFileChange(e, "invitation")} />
        <UploadBox label="Couple Photo (वराती हार घालताना फोटो)" fileData={files.couplePhoto} onChange={(e) => handleFileChange(e, "couplePhoto")} />

        {/* Witness 1 */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Witness 1 (साक्षीदार 1)</h3>
        </div>
        
        <UploadBox label="Witness 1 PAN Card" fileData={files.witness1Pan} onChange={(e) => handleFileChange(e, "witness1Pan")} />
        <UploadBox label="Witness 1 Aadhaar Card" fileData={files.witness1Aadhaar} onChange={(e) => handleFileChange(e, "witness1Aadhaar")} />
        <UploadBox label="Witness 1 - 2 Photos" fileData={files.witness1Photos} onChange={(e) => handleFileChange(e, "witness1Photos")} />

        {/* Witness 2 */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Witness 2 (साक्षीदार 2)</h3>
        </div>
        
        <UploadBox label="Witness 2 PAN Card" fileData={files.witness2Pan} onChange={(e) => handleFileChange(e, "witness2Pan")} />
        <UploadBox label="Witness 2 Aadhaar Card" fileData={files.witness2Aadhaar} onChange={(e) => handleFileChange(e, "witness2Aadhaar")} />
        <UploadBox label="Witness 2 - 2 Photos" fileData={files.witness2Photos} onChange={(e) => handleFileChange(e, "witness2Photos")} />

        {/* Witness 3 */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Witness 3 (साक्षीदार 3)</h3>
        </div>
        
        <UploadBox label="Witness 3 PAN Card" fileData={files.witness3Pan} onChange={(e) => handleFileChange(e, "witness3Pan")} />
        <UploadBox label="Witness 3 Aadhaar Card" fileData={files.witness3Aadhaar} onChange={(e) => handleFileChange(e, "witness3Aadhaar")} />
        <UploadBox label="Witness 3 - 2 Photos" fileData={files.witness3Photos} onChange={(e) => handleFileChange(e, "witness3Photos")} />

      </div>

      <div className="pt-6 flex justify-end">
        <button
          type="submit"
          className="bg-[#f07e1b] text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#d4ac5b] transition-all"
        >
          Submit Application
        </button>
      </div>
    </form>
  </div>
</section>
    </div>
  ); 
};

export default Marriage;

function UploadBox({ label, fileData, onChange }) {
  return (
    <div className="bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-200">
      <div className="flex justify-between items-center">
        <span className="font-semibold">{label}</span>
        <label className="bg-[#f07e1b] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#d4ac5b] transition-all">
          Upload
          <input type="file" accept="image/*,.pdf" className="hidden" onChange={onChange} />
        </label>
      </div>
      {fileData && (
        <p
          className="text-blue-600 text-sm mt-2 cursor-pointer hover:text-blue-800"
          onClick={() => window.open(fileData.url, "_blank")}
        >
          {fileData.file.name}
        </p>
      )}
    </div>
  );
}