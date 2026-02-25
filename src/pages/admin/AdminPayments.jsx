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
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider text-xs hidden md:table-cell">Payment ID</th>
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
                    <td className="px-4 md:px-6 py-4 font-semibold text-blue-600 hidden md:table-cell">#{pay.id}</td>
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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 md:p-4" onClick={() => setSelectedPayment(null)}>
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-[98vw] md:max-w-4xl h-[95vh] md:h-[85vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-3 md:px-6 py-2 md:py-3 flex items-center justify-between rounded-t-lg">
              <h3 className="text-sm md:text-lg font-semibold text-white flex items-center gap-2">
                <CreditCard className="w-4 h-4 md:w-5 md:h-5" />
                Payment Details
              </h3>
              <button 
                onClick={() => setSelectedPayment(null)}
                className="text-white/80 hover:text-white text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Content - Two Column Layout (stacked on mobile) */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              
              {/* Left: Payment Info */}
              <div className="w-full md:w-2/5 p-3 md:p-6 md:border-r bg-gray-50 overflow-y-auto">
                <div className="space-y-2 md:space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Payment ID</p>
                    <p className="text-xs md:text-sm font-bold text-gray-900">#{selectedPayment.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Customer Name</p>
                    <p className="text-xs md:text-sm font-semibold text-gray-900">{selectedPayment.user}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Service</p>
                    <p className="text-xs md:text-sm font-semibold text-gray-900">{selectedPayment.service}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Payment Method</p>
                    <p className="text-xs md:text-sm font-semibold text-gray-900">{selectedPayment.method}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Date</p>
                    <p className="text-xs md:text-sm font-semibold text-gray-900">{selectedPayment.date}</p>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-gray-500 mb-1">Amount</p>
                    <p className="text-xl md:text-2xl font-bold text-green-600">{selectedPayment.amount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Status</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[selectedPayment.status]}`}>
                      {selectedPayment.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Screenshot */}
              <div className="w-full md:w-3/5 p-3 md:p-6 flex flex-col items-center overflow-y-auto">
                <p className="text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3 self-start">Payment Screenshot</p>
                <div className="w-full max-w-[280px] md:w-80 flex-1 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                  {selectedPayment.screenshot ? (
                    <img
                      src={selectedPayment.screenshot}
                      alt="Payment Screenshot"
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <p className="text-gray-400 text-xs md:text-sm">No screenshot available</p>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-3 md:px-6 py-2 md:py-3 bg-gray-50 border-t flex gap-2 md:gap-3 rounded-b-lg">
              <button 
                onClick={() => setSelectedPayment(null)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-medium text-xs md:text-sm transition"
              >
                Close
              </button>
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium text-xs md:text-sm transition">
                Mark as Verified
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminPayments;
