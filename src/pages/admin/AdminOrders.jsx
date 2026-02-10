import AdminLayout from '../../components/common/AdminLayout';
import React, { useState } from 'react';
const AdminOrders = () => {
  const [activeTab, setActiveTab] = useState('All Orders');
  const [searchQuery, setSearchQuery] = useState('');
  
  const orders = [
    { id: 2375, name: 'Rajesh Kumar', service: 'PAN Card', status: 'Pending', date: 'Mar 28, 2024' },
    { id: 2374, name: 'Priya Sharma', service: 'Aadhaar Card', status: 'Completed', date: 'Mar 28, 2024' },
    { id: 2373, name: 'Amit Patil', service: 'Voter ID Card', status: 'In Progress', date: 'Mar 28, 2024' },
    { id: 2372, name: 'Sunita Verma', service: 'Aadhaar Card', status: 'Cancelled', date: 'Mar 28, 2024' },
    { id: 2371, name: 'Deepak Singh', service: 'Driving License', status: 'Completed', date: 'Mar 27, 2024' },
    { id: 2370, name: 'Anjali Deshmukh', service: 'PAN Card', status: 'Pending', date: 'Mar 27, 2024' },
    { id: 2369, name: 'Mahesh Joshi', service: 'Voter ID Card', status: 'Completed', date: 'Mar 28, 2024' },
  ];

  const filteredOrders = orders
    .filter(order => activeTab === 'All Orders' ? true : order.status === activeTab)
    .filter(order => 
      searchQuery === '' ? true : 
      order.id.toString().includes(searchQuery) || 
      order.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Orders Management</h2>

          {/* Tabs */}
          <div className="flex gap-2 md:gap-4 mb-4 md:mb-6 overflow-x-auto pb-2">
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium">Filter</button>
          </div>

          {/* Order Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer Name</th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Service Type</th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Date</th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-3 md:px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                      <td className="px-3 md:px-6 py-4 text-sm text-gray-900">{order.name}</td>
                      <td className="px-3 md:px-6 py-4 text-sm text-gray-900 hidden sm:table-cell">{order.service}</td>
                      <td className="px-3 md:px-6 py-4">
                        <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-3 md:px-6 py-4 text-sm text-gray-500 hidden md:table-cell">{order.date}</td>
                      <td className="px-3 md:px-6 py-4">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-3 md:px-6 py-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-gray-500">Showing 1 to 7 of 152 entries</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded">1</button>
                <button className="px-3 py-1 border rounded bg-blue-600 text-white">2</button>
                <button className="px-3 py-1 border rounded">→</button>
              </div>
            </div>
          </div>
    </AdminLayout>
  );
};

export default AdminOrders;
