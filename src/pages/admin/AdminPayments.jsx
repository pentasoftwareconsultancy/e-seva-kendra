import React, { useState } from "react";
import AdminLayout from '../../components/common/AdminLayout';
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

  const filteredPayments = payments.filter(pay => 
    searchQuery === '' ? true : 
    pay.id.toString().includes(searchQuery) || 
    pay.user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <h1 className="text-xl md:text-2xl font-bold text-[#1f2a44] mb-4 md:mb-6">Payments</h1>

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
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider text-xs">Amount</th>
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider text-xs hidden md:table-cell">Method</th>
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider text-xs hidden lg:table-cell">Date</th>
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider text-xs">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredPayments.map((pay) => (
                  <tr key={pay.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                    <td className="px-4 md:px-6 py-4 font-semibold text-blue-600">#{pay.id}</td>
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-xs">
                          {pay.user.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-900">{pay.user}</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-gray-600 hidden sm:table-cell">{pay.service}</td>
                    <td className="px-4 md:px-6 py-4 font-semibold text-gray-900">{pay.amount}</td>
                    <td className="px-4 md:px-6 py-4 text-gray-600 hidden md:table-cell">{pay.method}</td>
                    <td className="px-4 md:px-6 py-4 text-gray-500 hidden lg:table-cell">{pay.date}</td>
                    <td className="px-4 md:px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[pay.status]}`}
                      >
                        {pay.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPayments;
