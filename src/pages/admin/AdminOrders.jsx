import AdminLayout from '../../components/common/AdminLayout';
import React, { useState } from 'react';
import { User, Eye, ShoppingBag } from 'lucide-react';
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
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <ShoppingBag className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
        <h2 className="text-xl md:text-3xl font-bold"><span className="text-gray-800">Orders</span> <span className="text-green-600">Management</span></h2>
      </div>

          {/* Tabs */}
          <div className="flex gap-2 md:gap-4 mb-4 md:mb-6 overflow-x-auto pb-2 cursor-pointer">
            {['All Orders', 'Pending', 'In Progress', 'Completed', 'Cancelled'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 md:px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-102'
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
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue -500"
            />
            
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
                    <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">Status</th>
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
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                            <User size={16} />
                          </div>
                          <span className="text-sm font-medium text-gray-900">{order.name}</span>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-600 hidden sm:table-cell">{order.service}</td>
                      <td className="px-4 md:px-6 py-4 hidden md:table-cell">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-500 hidden md:table-cell">{order.date}</td>
                      <td className="px-4 md:px-6 py-4 text-center">
                        <button 
                          onClick={() => setSelectedOrder(order)}
                          className="inline-flex items-center gap-1 px-2 md:px-4 py-1.5 md:py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors duration-150 shadow-sm hover:shadow"
                        >
                          <Eye size={15} className="md:w-3.5 md:h-3.5 cursor-pointer" />
                          <span className="hidden md:inline cursor-pointer">View</span>
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
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 md:p-4" onClick={() => setSelectedOrder(null)}>
              <div className="bg-white rounded-lg shadow-2xl w-full max-w-[95vw] md:max-w-2xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-3 md:px-6 py-2 md:py-3 flex items-center justify-between rounded-t-lg">
                  <h3 className="text-sm md:text-lg font-semibold text-white flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                    Order Details
                  </h3>
                  <button 
                    onClick={() => setSelectedOrder(null)}
                    className="text-white/80 hover:text-white text-2xl leading-none"
                  >
                    ×
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 p-3 md:p-6 overflow-y-auto">
                  <div className="bg-gray-50 rounded-lg p-3 md:p-4 space-y-2 md:space-y-3">
                    <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Order ID</span>
                      <span className="text-xs md:text-sm font-semibold text-gray-900">#{selectedOrder.id}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Customer Name</span>
                      <span className="text-xs md:text-sm font-semibold text-gray-900">{selectedOrder.name}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Service Type</span>
                      <span className="text-xs md:text-sm font-semibold text-gray-900">{selectedOrder.service}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Date</span>
                      <span className="text-xs md:text-sm font-semibold text-gray-900">{selectedOrder.date}</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Status</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedOrder.status)}`}>
                        {selectedOrder.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-3 md:px-6 py-2 md:py-3 bg-gray-50 border-t flex gap-2 md:gap-3 rounded-b-lg">
                  <button 
                    onClick={() => setSelectedOrder(null)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-medium text-xs md:text-sm transition"
                  >
                    Close
                  </button>
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium text-xs md:text-sm transition">
                    Update Status
                  </button>
                </div>
              </div>
            </div>
          )}
    </AdminLayout>
  );
};

export default AdminOrders;
