import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import QR from "../assets/Servicesimg/QR.png";

function Payment() {
  const location = useLocation();
  const data = location.state;

  const [screenshot, setScreenshot] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshot(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };
  

  if (!data) {
    return <div className="p-10 text-center">No Payment Data Found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-8">

        {/* SERVICE SUMMARY */}
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">
            Service Summary
          </h2>

          <div className="space-y-2 text-gray-700">
            <p><strong>Service Name:</strong> {data.serviceName}</p>
            <p><strong>Applicant Name:</strong> {data.applicantName}</p>
            <p><strong>Mobile Number:</strong> {data.mobile}</p>
            <p className="text-lg font-semibold text-green-600">
              Total Amount: ₹{data.Amount}
            </p>
          </div>
        </div>

        {/* AMOUNT SECTION */}
        <div className="bg-gray-100 p-4 rounded-xl text-center">
          <p className="text-lg font-bold">
            Amount: ₹{data.Amount  }
          </p>
        </div>

        {/* QR CODE */}
        <div className="text-center space-y-4">
          <img
            src={QR}
            alt="QR Code"
            className="w-48 mx-auto"
          />
          <p className="font-semibold text-lg">Scan & Pay</p>
          <p className="text-gray-600">UPI ID: esuvidha@upi</p>
        </div>

        {/* UPLOAD SECTION */}
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">
              Upload Payment Screenshot *
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border p-2 rounded-lg"
            />
          </div>

          {/* SCREENSHOT PREVIEW */}
          {previewUrl && (
            <div className="mt-4">
              <p className="font-semibold mb-2">Screenshot Preview:</p>
              <img
                src={previewUrl}
                alt="Payment Screenshot"
                className="w-full max-w-md mx-auto border-2 border-gray-300 rounded-lg"
              />
            </div>
          )}
        </div>

        {/* CONFIRM BUTTON */}
        <button
          disabled={!screenshot}
          className={`w-full py-3 rounded-xl font-bold text-white ${
            screenshot 
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Confirm Payment
        </button>

        {/* SUPPORT */}
        <div className="text-center text-sm text-gray-500 border-t pt-4">
          Need Help? Contact Support: +91 9876543210
        </div>

      </div>
    </div>
  );
}

export default Payment;