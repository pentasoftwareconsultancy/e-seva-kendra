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

        <div className="overflow-x-auto">
        <table className="w-full text-xs md:text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-3">Payment ID</th>
              <th className="pb-3">User</th>
              <th className="pb-3 hidden sm:table-cell">Service</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3 hidden md:table-cell">Method</th>
              <th className="pb-3 hidden lg:table-cell">Date</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredPayments.map((pay) => (
              <tr key={pay.id} className="text-gray-700">
                <td className="py-4 font-medium">{pay.id}</td>
                <td className="py-4 font-semibold">{pay.user}</td>
                <td className="py-4 hidden sm:table-cell">{pay.service}</td>
                <td className="py-4 font-semibold">{pay.amount}</td>
                <td className="py-4 hidden md:table-cell">{pay.method}</td>
                <td className="py-4 hidden lg:table-cell">{pay.date}</td>
                <td className="py-4">
                  <span
                    className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[pay.status]}`}
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
    </AdminLayout>
  );
};

export default AdminPayments;
