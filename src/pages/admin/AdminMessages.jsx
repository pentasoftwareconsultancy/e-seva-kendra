import AdminLayout from '../../components/common/AdminLayout';
import React, { useState } from 'react';

const AdminMessages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  
  const messages = [
    { id: 1, name: 'Rajesh Kumar', email: 'rajesh@example.com', service: 'PAN Card', mobile: '+91 9876543210', message: 'I need help with PAN card application', date: 'Mar 29, 2024', status: 'Unread' },
    { id: 2, name: 'Priya Sharma', email: 'priya@example.com', service: 'Aadhaar', mobile: '+91 9876543211', message: 'Need to update my Aadhaar details', date: 'Mar 28, 2024', status: 'Read' },
    { id: 3, name: 'Amit Patil', email: 'amit@example.com', service: 'Passport', mobile: '+91 9876543212', message: 'Passport renewal inquiry', date: 'Mar 28, 2024', status: 'Replied' },
    { id: 4, name: 'Sunita Verma', email: 'sunita@example.com', service: 'PAN Card', mobile: '+91 9876543213', message: 'Lost my PAN card, need duplicate', date: 'Mar 27, 2024', status: 'Unread' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Unread': return 'bg-yellow-100 text-yellow-700';
      case 'Read': return 'bg-blue-100 text-blue-700';
      case 'Replied': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <AdminLayout>
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Contact Messages</h2>

      {/* Messages Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden sm:table-cell">Email</th>
                <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden lg:table-cell">Mobile</th>
                <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">Service</th>
                <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">Date</th>
                <th className="px-4 md:px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {messages.map((msg) => (
                <tr key={msg.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-xs">
                        {msg.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{msg.name}</span>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-600 hidden sm:table-cell">{msg.email}</td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-600 hidden lg:table-cell">{msg.mobile}</td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-600 hidden md:table-cell">{msg.service}</td>
                  <td className="px-4 md:px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(msg.status)}`}>
                      {msg.status}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-500 hidden md:table-cell">{msg.date}</td>
                  <td className="px-4 md:px-6 py-4 text-center">
                    <button 
                      onClick={() => setSelectedMessage(msg)}
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
      </div>

      {/* Message Details Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedMessage(null)}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-4">Message Details</h3>
            <div className="space-y-3">
              <p><span className="font-semibold">Name:</span> {selectedMessage.name}</p>
              <p><span className="font-semibold">Email:</span> {selectedMessage.email}</p>
              <p><span className="font-semibold">Mobile:</span> {selectedMessage.mobile}</p>
              <p><span className="font-semibold">Service:</span> {selectedMessage.service}</p>
              <p><span className="font-semibold">Status:</span> <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(selectedMessage.status)}`}>{selectedMessage.status}</span></p>
              <p><span className="font-semibold">Date:</span> {selectedMessage.date}</p>
              <div className="mt-4">
                <p className="font-semibold mb-2">Message:</p>
                <p className="text-gray-700 bg-gray-50 p-3 rounded">{selectedMessage.message}</p>
              </div>
            </div>
            <button 
              onClick={() => setSelectedMessage(null)}
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

export default AdminMessages;
