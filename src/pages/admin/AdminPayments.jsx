import React, { useState } from "react";
import AdminLayout from '../../components/common/AdminLayout';
import { CreditCard, User, Eye } from 'lucide-react';
const payments = [
  {
    id: 1001,
    user: "Rajesh Kumar",
    service: "PAN Card",
    amount: "₹110",
    method: "UPI",
    date: "Mar 29, 2024",
    status: "Success",
    screenshot: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=600&fit=crop",
  },
  {
    id: 1002,
    user: "Priya Sharma",
    service: "Aadhaar Card",
    amount: "₹50",
    method: "Card",
    date: "Mar 28, 2024",
    status: "Success",
    screenshot: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=600&fit=crop",
  },
  {
    id: 1003,
    user: "Amit Patil",
    service: "Voter ID",
    amount: "₹60",
    method: "UPI",
    date: "Mar 28, 2024",
    status: "Failed",
    screenshot: "https://images.unsplash.com/photo-1554224311-beee460c201f?w=400&h=600&fit=crop",
  },
];

const statusStyle = {
  Success: "bg-green-100 text-green-700",
  Failed: "bg-red-100 text-red-700",
};

const AdminPayments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [viewScreenshot, setViewScreenshot] = useState(null);

  const filteredPayments = payments.filter(pay => 
    searchQuery === '' ? true : 
    pay.id.toString().includes(searchQuery) || 
    pay.user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <CreditCard className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
        <h1 className="text-xl md:text-3xl font-bold text-[#1f2a44]">Payments</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by payment ID or user name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 md:px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 text-left">
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider text-xs">Payment ID</th>
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider text-xs">User</th>
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider text-xs hidden sm:table-cell">Service</th>
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider text-xs hidden sm:table-cell">Amount</th>
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider text-xs hidden md:table-cell">Screenshot</th>
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider text-xs hidden lg:table-cell">Date</th>
                  <th className="px-4 md:px-6 py-4 text-center font-semibold text-gray-700 uppercase tracking-wider text-xs">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredPayments.map((pay) => (
                  <tr key={pay.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                    <td className="px-4 md:px-6 py-4 font-semibold text-blue-600">#{pay.id}</td>
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                          <User size={16} />
                        </div>
                        <span className="font-medium text-gray-900">{pay.user}</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-gray-600 hidden sm:table-cell">{pay.service}</td>
                    <td className="px-4 md:px-6 py-4 font-semibold text-gray-900 hidden sm:table-cell">{pay.amount}</td>
                    <td className="px-4 md:px-6 py-4 hidden md:table-cell">
                      {pay.screenshot && (
                        <img
                          src={pay.screenshot}
                          alt="Screenshot"
                          className="w-12 h-12 object-cover rounded border cursor-pointer"
                          onClick={() => setSelectedPayment(pay)}
                        />
                      )}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-gray-500 hidden lg:table-cell">{pay.date}</td>
                    <td className="px-4 md:px-6 py-4 text-center">
                      <button 
                        onClick={() => setSelectedPayment(pay)}
                        className="inline-flex items-center gap-1 px-2 md:px-4 py-1.5 md:py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors duration-150 shadow-sm hover:shadow"
                      >
                        <Eye size={12} className="md:w-3.5 md:h-3.5" />
                        <span className="hidden md:inline">View</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Screenshot Full View Modal */}
      {viewScreenshot && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60] p-4" onClick={() => setViewScreenshot(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setViewScreenshot(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>
            <img
              src={viewScreenshot}
              alt="Payment Screenshot Full View"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Payment Details Modal */}
      {selectedPayment && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4" onClick={() => setSelectedPayment(null)}>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-4 md:p-8 w-full max-w-[95vw] md:max-w-3xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-blue-100">
              <h3 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-2">
                <CreditCard className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                Payment Details
              </h3>
              <button 
                onClick={() => setSelectedPayment(null)}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-xs text-gray-500 mb-1">Payment ID</p>
                <p className="text-sm md:text-base font-bold text-blue-600">#{selectedPayment.id}</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="text-xs text-gray-500 mb-1">Amount</p>
                <p className="text-sm md:text-base font-bold text-green-600">{selectedPayment.amount}</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                <p className="text-xs text-gray-500 mb-1">User</p>
                <p className="text-sm md:text-base font-semibold text-gray-800">{selectedPayment.user}</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                <p className="text-xs text-gray-500 mb-1">Service</p>
                <p className="text-sm md:text-base font-semibold text-gray-800">{selectedPayment.service}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 md:col-span-2">
                <p className="text-xs text-gray-500 mb-1">Date</p>
                <p className="text-sm md:text-base font-semibold text-gray-800">{selectedPayment.date}</p>
              </div>
            </div>
              
            {/* Screenshot Section */}
            {selectedPayment.screenshot && (
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border-2 border-dashed border-gray-300">
                <p className="font-bold text-xs md:text-sm text-gray-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Payment Screenshot
                </p>
                <img
                  src={selectedPayment.screenshot}
                  alt="Payment Screenshot"
                  onMouseEnter={() => setViewScreenshot(selectedPayment.screenshot)}
                  onMouseLeave={() => setViewScreenshot(null)}
                  className="w-full border-2 border-gray-300 rounded-xl max-h-[35vh] object-contain cursor-pointer hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">Hover to view full size</p>
              </div>
            )}

            {/* Close Button */}
            <button 
              onClick={() => setSelectedPayment(null)}
              className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 font-semibold text-xs md:text-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminPayments;
