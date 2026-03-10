import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Votehero from "../../assets/Servicesimg/Votehero.jpeg";
import Pan1 from "../../assets/Servicesimg/Pan1.png";
import Pan2 from "../../assets/Servicesimg/Pan2.png";
import Pan3 from "../../assets/Servicesimg/Pan3.png";

function VoterForm() {

const navigate = useNavigate();

const [formData,setFormData] = useState({
firstName:"",
middleName:"",
lastName:"",
aadhaar:"",
dob:"",
gender:"",
epic:""
})

const [files,setFiles] = useState({
identityProof:null,
addressProof:null,
photo:null
})

const handleFileChange = (e,field)=>{
const file = e.target.files[0]

if(file){
const fileURL = URL.createObjectURL(file)

setFiles(prev=>({
...prev,
[field]:{file,url:fileURL}
}))
}
}

const handleSubmit = (e)=>{
e.preventDefault()

if(!formData.firstName){
alert("Please enter full name")
return
}

if(!files.identityProof || !files.addressProof || !files.photo){
alert("Please upload all required documents")
return
}

const amount = 300

navigate("/payment",{
state:{
serviceName:"Voter ID",
applicantName:`${formData.firstName} ${formData.lastName}`,
Amount:amount,
type:"voter"
}
})

}

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

                <a href="#voter-form">
  <button className="bg-[#f07e1b] text-black px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
    Apply Now
  </button>
</a>
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

      <div className="bg-white rounded-[32px] shadow overflow-hidden">
        <div className="w-full h-44 flex items-center justify-center bg-gray-50">
          <img src={Pan1} className="max-h-full max-w-full object-contain"/>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl mb-1">1. Fill Voter ID  Application</h3>
          <p className="text-gray-500">Provide required details.</p>
        </div>
      </div>

      <div className="bg-white rounded-[32px] shadow overflow-hidden">
        <div className="w-full h-44 flex items-center justify-center bg-gray-50">
          <img src={Pan2} className="max-h-full max-w-full object-contain"/>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl mb-1">2. Upload Documents</h3>
          <p className="text-gray-500">Upload identity proof.</p>
        </div>
      </div>

      <div className="bg-white rounded-[32px] shadow overflow-hidden">
        <div className="w-full h-44 flex items-center justify-center bg-gray-50">
          <img src={Pan3} className="max-h-full max-w-full object-contain"/>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl mb-1">3. Track Application Status</h3>
          <p className="text-gray-500">Delivered to your address.</p>
        </div>
      </div>

    </div>

          </section>


<section id="voter-form" className="py-5 px-4 md:px-8 bg-[#f8faff]">
  <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-12">

    <h2 className="text-3xl font-bold text-[#0f172a] mb-8">Voter ID Application Form</h2>

<form onSubmit={handleSubmit} className="space-y-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

        <div className="space-y-6">

          <div>
            <label className="block text-lg font-bold text-[#0f172a] mb-3">
              Full Name <span className="text-blue-600 text-sm">*</span>
            </label>

            <div className="grid grid-cols-3 gap-2">

<input type="text" placeholder="First Name"
value={formData.firstName}
onChange={(e)=>setFormData({...formData,firstName:e.target.value})}
className="bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-100"/>

<input type="text" placeholder="Middle Name"
value={formData.middleName}
onChange={(e)=>setFormData({...formData,middleName:e.target.value})}
className="bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-100"/>

<input type="text" placeholder="Last Name"
value={formData.lastName}
onChange={(e)=>setFormData({...formData,lastName:e.target.value})}
className="bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-100"/>

            </div>
          </div>

<input type="text" placeholder="Aadhaar Number"
value={formData.aadhaar}
onChange={(e)=>setFormData({...formData,aadhaar:e.target.value})}
className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-100"/>

{/* Identity Upload */}
<div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100">
<span className="font-semibold text-gray-600">Identity Proof</span>

<label className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg cursor-pointer">
Upload Proof
<input type="file" className="hidden"
onChange={(e)=>handleFileChange(e,"identityProof")}/>
</label>
</div>

{/* Photo Upload */}
<div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100">
<span className="font-semibold text-gray-600">Photograph</span>

<label className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg cursor-pointer">
Upload Proof
<input type="file" className="hidden"
onChange={(e)=>handleFileChange(e,"photo")}/>
</label>
</div>

        </div>


        <div className="space-y-6">

<input type="text" placeholder="DD/MM/YYYY"
value={formData.dob}
onChange={(e)=>setFormData({...formData,dob:e.target.value})}
className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-100"/>

<select
value={formData.gender}
onChange={(e)=>setFormData({...formData,gender:e.target.value})}
className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-100">

<option value="">Select Gender</option>
<option value="female">Female</option>
<option value="male">Male</option>

</select>

<input type="text" placeholder="EPIC Number"
value={formData.epic}
onChange={(e)=>setFormData({...formData,epic:e.target.value})}
className="w-full bg-[#f8faff] p-4 rounded-xl ring-1 ring-gray-100"/>

{/* Address Upload */}
<div className="flex items-center justify-between bg-[#f8faff] p-3 pl-5 rounded-xl ring-1 ring-gray-100">
<span className="font-semibold text-gray-600">Address Proof</span>

<label className="bg-[#f07e1b] text-white px-6 py-2.5 rounded-lg cursor-pointer">
Upload Proof
<input type="file" className="hidden"
onChange={(e)=>handleFileChange(e,"addressProof")}/>
</label>
</div>

        </div>

      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">
          Note: Please ensure all details are accurate.
        </p>

<button type="submit"
className="bg-[#f07e1b] text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#d4ac5b] transition-all">
Submit Application
</button>

      </div>

    </form>

  </div>
</section>

    </div>
    </div>
  )
}

export default VoterForm