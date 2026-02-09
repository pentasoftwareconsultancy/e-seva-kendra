import React from "react";
import { Star } from "lucide-react";

const PanCardServices = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* ---------------- HERO SECTION ---------------- */}
      <div className="bg-gray-50 text-gray-800">

  {/* --------- BREADCRUMB BAR (Above Hero) --------- */}
  <div className="bg-gray-100 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <p className="text-sm text-gray-600">
        Home &gt; Services &gt; PAN Card Services
      </p>
    </div>
  </div>

  {/* ---------------- HERO SECTION ---------------- */}
  <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
      
      {/* Left Content */}
      <div>
        <h1 className="text-4xl font-bold mb-4">
          PAN Card Services
        </h1>

        <p className="text-gray-600 mb-6">
          We provide fast and reliable assistance for PAN card application and updates.
          Get your PAN card in a hassle-free manner.
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold shadow">
          Apply Now
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="PAN Illustration"
          className="w-96"
        />
      </div>
    </div>
  </section>

</div>


      {/* ---------------- STEPS SECTION ---------------- */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Steps to Apply for PAN Card
          </h2>
          <p className="text-gray-500 mb-10">
            Follow these simple steps to get your PAN card easily and quickly.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <div className="text-blue-600 text-lg font-bold mb-3">1.</div>
              <h3 className="font-semibold mb-2">Fill the Application Form</h3>
              <p className="text-gray-500 text-sm">
                Use the form below to provide the necessary details for your PAN card application.
              </p>
              <button className="text-blue-600 mt-4 text-sm font-medium">
                Learn More →
              </button>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <div className="text-blue-600 text-lg font-bold mb-3">2.</div>
              <h3 className="font-semibold mb-2">Submit Your Documents</h3>
              <p className="text-gray-500 text-sm">
                Upload required documents for identity and address proof.
              </p>
              <button className="text-blue-600 mt-4 text-sm font-medium">
                Learn More →
              </button>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <div className="text-blue-600 text-lg font-bold mb-3">3.</div>
              <h3 className="font-semibold mb-2">Receive Your PAN Card</h3>
              <p className="text-gray-500 text-sm">
                Get your PAN card delivered to your registered address.
              </p>
              <button className="text-blue-600 mt-4 text-sm font-medium">
                Learn More →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- FORM SECTION ---------------- */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            
            <h2 className="text-xl font-semibold mb-6">
              PAN Card Application Form
            </h2>

            {/* Tabs */}
            <div className="flex gap-4 mb-8">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                Apply for a New PAN Card
              </button>
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-600">
                Update/Correction PAN Card
              </button>
            </div>

            {/* Form Grid */}
            <div className>

              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Date</label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Mobile Number</label>
                <input
                  type="text"
                  placeholder="+91"
                  className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Date of Birth</label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Email Address</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Father's Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Upload Section */}
              <div className="flex items-center justify-between border rounded-lg px-4 py-3">
                <span className="text-sm text-gray-600">Identity Proof</span>
                <button className="bg-yellow-500 text-white px-4 py-1 rounded text-sm">
                  Upload Proof
                </button>
              </div>

              <div className="flex items-center justify-between border rounded-lg px-4 py-3">
                <span className="text-sm text-gray-600">Address Proof</span>
                <button className="bg-yellow-500 text-white px-4 py-1 rounded text-sm">
                  Upload Proof
                </button>
              </div>

              <div className="flex items-center justify-between border rounded-lg px-4 py-3">
                <span className="text-sm text-gray-600">Passport Size Photograph</span>
                <button className="bg-yellow-500 text-white px-4 py-1 rounded text-sm">
                  Upload
                </button>
              </div>

            </div>

            <div className="text-right mt-8">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold">
                Submit Application
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default PanCardServices;
