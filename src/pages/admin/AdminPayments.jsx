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
  },
  {
    id: 1002,
    user: "Priya Sharma",
    service: "Aadhaar Card",
    amount: "₹50",
    method: "Card",
    date: "Mar 28, 2024",
    status: "Success",
  },
  {
    id: 1003,
    user: "Amit Patil",
    service: "Voter ID",
    amount: "₹60",
    method: "UPI",
    date: "Mar 28, 2024",
    status: "Failed",
  },
];

const statusStyle = {
  Success: "bg-green-100 text-green-700",
  Failed: "bg-red-100 text-red-700",
};

const AdminPayments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(null);

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
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider text-xs hidden md:table-cell">Method</th>
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
                    <td className="px-4 md:px-6 py-4 text-gray-600 hidden md:table-cell">{pay.method}</td>
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

      {/* Payment Details Modal */}
      {selectedPayment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedPayment(null)}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-4">Payment Details</h3>
            <div className="space-y-3">
              <p><span className="font-semibold">Payment ID:</span> #{selectedPayment.id}</p>
              <p><span className="font-semibold">User:</span> {selectedPayment.user}</p>
              <p><span className="font-semibold">Service:</span> {selectedPayment.service}</p>
              <p><span className="font-semibold">Amount:</span> {selectedPayment.amount}</p>
              <p><span className="font-semibold">Method:</span> {selectedPayment.method}</p>
              <p><span className="font-semibold">Date:</span> {selectedPayment.date}</p>
              <p><span className="font-semibold">Status:</span> <span className={`px-2 py-1 rounded-full text-xs ${statusStyle[selectedPayment.status]}`}>{selectedPayment.status}</span></p>
            </div>
            <button 
              onClick={() => setSelectedPayment(null)}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
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
