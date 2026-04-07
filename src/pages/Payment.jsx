import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function Payment() {
  const location = useLocation();
  const data = location.state;
 
  const [screenshot, setScreenshot] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [qrImage, setQrImage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("https://e-seva-kendra-b.onrender.com/api/payment/qr")
      .then(res => res.text())
      .then(data => setQrImage(data))
      .catch(err => console.error(err));
  }, []);
 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshot(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };
 
  const handleConfirmPayment = async () => {
    if (!screenshot) {
      setErrorMessage("Please upload payment screenshot");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    const userId = sessionStorage.getItem("userId") || localStorage.getItem("userId");
    
    if (!userId) {
      setErrorMessage("Please login first to place order");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
      return;
    }

    console.log('Placing order with userId:', userId);

    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("name", data.applicantName);
    formData.append("mobile", data.mobile);
    formData.append("serviceName", data.serviceName);
    formData.append("extraData", JSON.stringify(data.formData || {}));
    formData.append("amount", data.Amount);
    formData.append("screenshot", screenshot);

    // ✅ Dynamic Documents Upload — skip null/undefined, send key as documentType
    if (data.documents) {
      Object.keys(data.documents).forEach((key) => {
        if (data.documents[key]) {
          formData.append("documents", data.documents[key]);
          formData.append("documentTypes", key);
        }
      });
    }

    // ensure at least one dummy entry so backend doesn't fail on empty array
    const hasDocuments = data.documents && Object.values(data.documents).some(v => v);
    if (!hasDocuments) {
      formData.append("documents", new Blob([]), "placeholder.txt");
      formData.append("documentTypes", "other");
    }

    try {
      const response = await fetch("https://e-seva-kendra-b.onrender.com/api/payment/confirm", {
        method: "POST",
        body: formData
      });
 
      const result = await response.text();
      setSuccessMessage(result);
      setTimeout(() => {
        window.location.href = "/service";
      }, 2000);

    } catch (error) {
      console.error(error);
      setErrorMessage("Payment Failed. Please try again.");
      setTimeout(() => setErrorMessage(""), 3000);
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
            Amount: ₹{data.Amount}
          </p>
        </div>
 
        {/* QR CODE */}
        <div className="text-center space-y-4">
          <div className="inline-block bg-white p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:-translate-y-1">
            <img
      src={qrImage.startsWith('http') ? qrImage : `https://e-seva-kendra-b.onrender.com${qrImage}`}
              alt="QR Code"
              className="w-48 mx-auto rounded-lg"
            />
          </div>
          <p className="font-semibold text-lg">Scan & Pay</p>
          
          
        </div>
 
        {/* UPLOAD SECTION */}
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">
              Upload Payment Screenshot *
              {Number(data.Amount) === 0 && (
                <span className="block mt-1 text-xs font-normal text-orange-600">
                  Amount is ₹0 — Upload a dummy screenshot &amp; call us. | रक्कम ₹0 आहे — नमुना स्क्रीनशॉट अपलोड करा आणि{" "}
                  <a href="tel:+918668266879" className="underline text-green-600 font-semibold">📞 8668266879</a> वर कॉल करा.
                </span>
              )}
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

        {/* SUCCESS/ERROR MESSAGES */}
        {successMessage && (
          <div className="p-3 bg-green-50 border border-green-300 rounded-lg text-green-700 text-sm text-center">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-300 rounded-lg text-red-700 text-sm text-center">
            {errorMessage}
          </div>
        )}
 
        {/* CONFIRM BUTTON */}
        <button
          onClick={handleConfirmPayment}
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
          Need Help? Contact Support: +91 8668266879
        </div>
 
      </div>
    </div>
  );
}
 
export default Payment;