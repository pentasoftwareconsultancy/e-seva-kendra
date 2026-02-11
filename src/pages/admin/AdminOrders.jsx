import AdminLayout from '../../components/common/AdminLayout';
import React, { useState } from 'react';
const AdminOrders = () => {
  const [activeTab, setActiveTab] = useState('All Orders');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  
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
                    <th className="px-4 md:px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredOrders.map((order, index) => (
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
                      <td className="px-4 md:px-6 py-4 text-center">
                        <button 
                          onClick={() => setSelectedOrder(order)}
                          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors duration-150 shadow-sm hover:shadow"
                        >
                          View
                        </button>
                      </td>
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

          {/* Order Details Modal */}
          {selectedOrder && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedOrder(null)}>
              <div className="bg-white rounded-lg p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-xl font-bold mb-4">Order Details</h3>
                <div className="space-y-3">
                  <p><span className="font-semibold">Order ID:</span> {selectedOrder.id}</p>
                  <p><span className="font-semibold">Customer:</span> {selectedOrder.name}</p>
                  <p><span className="font-semibold">Service:</span> {selectedOrder.service}</p>
                  <p><span className="font-semibold">Status:</span> <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(selectedOrder.status)}`}>{selectedOrder.status}</span></p>
                  <p><span className="font-semibold">Date:</span> {selectedOrder.date}</p>
                </div>
                <button 
                  onClick={() => setSelectedOrder(null)}
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

export default AdminOrders;
