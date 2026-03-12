import React, { useState } from "react";
import AdminLayout from "../../components/common/AdminLayout";

const AdminUpiQR = () => {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleFileChange = (e) => {

    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    if (!selectedFile.type.startsWith("image/")) {
      alert("Please upload a valid image file");
      return;
    }

    if (selectedFile.size > 2 * 1024 * 1024) {
      alert("File size must be less than 2MB");
      return;
    }

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setSuccess("");
  };

  const handleUpload = async () => {

    if (!file) {
      alert("Please select a QR image first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      setUploading(true);

      const res = await fetch(
        "http://localhost:8080/api/payment/upload-qr",
        {
          method: "POST",
          body: formData
        }
      );

      const msg = await res.text();

      setSuccess(msg);
      setFile(null);

    } catch {

      alert("Upload failed");

    }

    setUploading(false);
  };

  return (
    <AdminLayout>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex justify-center items-start p-3 sm:p-6 md:p-10">

        <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6 border">

          {/* HEADER */}
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              Update UPI QR
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Upload the latest QR code for payments
            </p>
          </div>

          {/* DRAG DROP AREA */}
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl sm:rounded-2xl p-6 sm:p-8 cursor-pointer hover:border-green-500 transition">

            <p className="text-gray-500 mb-2 text-center text-xs sm:text-sm md:text-base">
              Drag & drop QR image here
            </p>

            <span className="text-xs sm:text-sm text-gray-400">
              or click to browse
            </span>

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

          </label>

          {/* PREVIEW */}
          {preview && (
            <div className="text-center space-y-2 sm:space-y-3">

              <p className="font-semibold text-gray-700 text-sm sm:text-base">
                QR Preview
              </p>

              <div className="flex justify-center">

                <img
                  src={preview}
                  alt="QR Preview"
                  className="w-40 sm:w-48 md:w-56 rounded-xl shadow-lg border hover:scale-105 transition"
                />

              </div>

            </div>
          )}

          {/* SUCCESS MESSAGE */}
          {success && (
            <div className="bg-green-100 text-green-700 text-center p-2 sm:p-3 rounded-lg text-xs sm:text-sm">
              {success}
            </div>
          )}

          {/* UPLOAD BUTTON */}
          <button
            onClick={handleUpload}
            disabled={uploading}
            className={`w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-white transition text-sm sm:text-base ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-blue-600 hover:scale-105 shadow-lg"
            }`}
          >

            {uploading ? "Uploading..." : "Upload QR Code"}

          </button>

          {/* INFO */}
          <div className="text-xs sm:text-sm text-gray-400 text-center border-t pt-3 sm:pt-4">
            Supported formats: JPG, PNG | Max size: 2MB
          </div>

        </div>

      </div>

    </AdminLayout>
  );
};

export default AdminUpiQR;