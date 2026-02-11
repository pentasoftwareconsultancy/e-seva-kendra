import AdminLayout from '../../components/common/AdminLayout';
import React, { useState } from 'react';
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('All Orders');
  
  const orders = [
    { id: 2375, name: 'Rajesh Kumar', service: 'PAN Card', status: 'Pending', date: 'Mar 28, 2024' },
    { id: 2374, name: 'Priya Sharma', service: 'Aadhaar Card', status: 'Completed', date: 'Mar 28, 2024' },
    { id: 2373, name: 'Amit Patil', service: 'Voter ID Card', status: 'In Progress', date: 'Mar 28, 2024' },
    { id: 2372, name: 'Sunita Verma', service: 'Aadhaar Card', status: 'Cancelled', date: 'Mar 28, 2024' },
    { id: 2371, name: 'Deepak Singh', service: 'Driving License', status: 'Completed', date: 'Mar 27, 2024' },
    { id: 2370, name: 'Anjali Deshmukh', service: 'PAN Card', status: 'Pending', date: 'Mar 27, 2024' },
    { id: 2369, name: 'Mahesh Joshi', service: 'Voter ID Card', status: 'Completed', date: 'Mar 28, 2024' },
  ];

  const filteredOrders = activeTab === 'All Orders' 
    ? orders 
    : orders.filter(order => order.status === activeTab || (activeTab === 'In Progress' && order.status === 'In Progress'));

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'In Progress': return 'bg-blue-100 text-blue-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <AdminLayout>
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Dashboard</h2>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl shadow p-5 relative overflow-hidden">
              <div className="absolute right-2 bottom-2 w-16 h-16 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M20 80 L35 70 L50 75 L65 65 L80 70" stroke="#9333ea" strokeWidth="3" fill="none"/>
                  <path d="M20 85 L35 75 L50 80 L65 70 L80 75" stroke="#9333ea" strokeWidth="3" fill="none"/>
                </svg>
              </div>
              <div className="flex items-start gap-3 relative z-10">
                <div className="w-10 h-10 bg-purple-200 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📦</span>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Total Orders</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">152</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl shadow p-5 relative overflow-hidden">
              <div className="absolute right-2 bottom-2 w-16 h-16 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M20 80 L35 75 L50 78 L65 72 L80 75" stroke="#ea580c" strokeWidth="3" fill="none"/>
                  <path d="M20 85 L35 80 L50 83 L65 77 L80 80" stroke="#ea580c" strokeWidth="3" fill="none"/>
                </svg>
              </div>
              <div className="flex items-start gap-3 relative z-10">
                <div className="w-10 h-10 bg-orange-200 rounded-lg flex items-center justify-center">
                  <span className="text-xl">⏱️</span>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Pending Orders</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">32</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl shadow p-5 relative overflow-hidden">
              <div className="absolute right-2 bottom-2 w-16 h-16 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M20 80 L35 73 L50 77 L65 68 L80 72" stroke="#16a34a" strokeWidth="3" fill="none"/>
                  <path d="M20 85 L35 78 L50 82 L65 73 L80 77" stroke="#16a34a" strokeWidth="3" fill="none"/>
                </svg>
              </div>
              <div className="flex items-start gap-3 relative z-10">
                <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🔄</span>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">In Progress Orders</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">15</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl shadow p-5 relative overflow-hidden">
              <div className="absolute right-2 bottom-2 w-16 h-16 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M20 80 L35 68 L50 72 L65 62 L80 67" stroke="#ca8a04" strokeWidth="3" fill="none"/>
                  <path d="M20 85 L35 73 L50 77 L65 67 L80 72" stroke="#ca8a04" strokeWidth="3" fill="none"/>
                </svg>
              </div>
              <div className="flex items-start gap-3 relative z-10">
                <div className="w-10 h-10 bg-yellow-200 rounded-lg flex items-center justify-center">
                  <span className="text-xl">✅</span>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Completed Orders</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">98</p>
                </div>
              </div>
            </div>
          </div>

          {/* Earnings Card */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow p-6 mb-6 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-20">
              <svg width="200" height="100" viewBox="0 0 200 100">
                <rect x="10" y="60" width="15" height="30" fill="#fb923c" opacity="0.5"/>
                <rect x="30" y="50" width="15" height="40" fill="#fb923c" opacity="0.6"/>
                <rect x="50" y="40" width="15" height="50" fill="#fb923c" opacity="0.7"/>
                <rect x="70" y="30" width="15" height="60" fill="#fb923c" opacity="0.8"/>
                <rect x="90" y="45" width="15" height="45" fill="#fb923c" opacity="0.6"/>
                <rect x="110" y="35" width="15" height="55" fill="#fb923c" opacity="0.7"/>
              </svg>
            </div>
            <div className="absolute right-6 bottom-6">
              <div className="text-6xl">💰</div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Earnings Today</h3>
            <p className="text-3xl font-bold text-gray-800">₹ 12,450</p>
          
          </div>

          {/* Tabs */}
          <div className="flex gap-2 md:gap-4 mb-4 overflow-x-auto pb-2">
            {['All Orders', 'Pending', 'In Progress', 'Completed', 'Cancelled'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 md:px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap ${
                  activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 mb-4 md:mb-6">
            <input
              type="text"
              placeholder="Search by order ID or customer name..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium">Filter</button>
          </div>

          {/* Order Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                    <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order ID</th>
                    <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Customer Name</th>
                    <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden sm:table-cell">Service Type</th>
                    <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                    <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                      <td className="px-4 md:px-6 py-4 text-sm font-semibold text-blue-600">#{order.id}</td>
                      <td className="px-4 md:px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-xs">
                            {order.name.charAt(0)}
                          </div>
                          <span className="text-sm font-medium text-gray-900">{order.name}</span>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-600 hidden sm:table-cell">{order.service}</td>
                      <td className="px-4 md:px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-500 hidden md:table-cell">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 md:px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-gray-600 font-medium">Showing 1 to 7 of 152 entries</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">1</button>
                <button className="px-4 py-2 border border-blue-600 rounded-lg bg-blue-600 text-white text-sm font-medium shadow-sm">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">→</button>
              </div>
            </div>
          </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
