import AdminLayout from '../../components/common/AdminLayout';
import React, { useState } from 'react';
import { MessageSquare, User, Eye } from 'lucide-react';

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
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
        <h2 className="text-xl md:text-3xl font-bold text-gray-800">Contact 
          <span className="text-green-600"> Messages</span>
        </h2>
      </div>

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
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                        <User size={16} />
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
                      className="inline-flex items-center gap-1 px-2 py-1.5 md:px-4 md:py-2 bg-green-500 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors duration-150 shadow-sm hover:shadow"
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

      {/* Message Details Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 md:p-4" onClick={() => setSelectedMessage(null)}>
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-[98vw] md:max-w-4xl h-[95vh] md:h-[85vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-3 md:px-6 py-2 md:py-3 flex items-center justify-between rounded-t-lg">
              <h3 className="text-sm md:text-lg font-semibold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                Message Details
              </h3>
              <button 
                onClick={() => setSelectedMessage(null)}
                className="text-white/80 hover:text-white text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Content - Two Column Layout */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              
              {/* Left: Contact Info */}
              <div className="w-full md:w-2/5 p-3 md:p-6 md:border-r bg-gray-50 overflow-y-auto">
                <div className="space-y-2 md:space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Name</p>
                    <p className="text-xs md:text-sm font-semibold text-gray-900">{selectedMessage.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="text-xs md:text-sm font-semibold text-gray-900">{selectedMessage.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Mobile</p>
                    <p className="text-xs md:text-sm font-semibold text-gray-900">{selectedMessage.mobile}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Service</p>
                    <p className="text-xs md:text-sm font-semibold text-gray-900">{selectedMessage.service}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Date</p>
                    <p className="text-xs md:text-sm font-semibold text-gray-900">{selectedMessage.date}</p>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-gray-500 mb-2">Status</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedMessage.status)}`}>
                      {selectedMessage.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Message Content */}
              <div className="w-full md:w-3/5 p-3 md:p-6 flex flex-col overflow-y-auto">
                <p className="text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">Message</p>
                <div className="flex-1 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 p-3 md:p-4">
                  <p className="text-xs md:text-sm text-gray-800 leading-relaxed">{selectedMessage.message}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-3 md:px-6 py-2 md:py-3 bg-gray-50 border-t flex gap-2 md:gap-3 rounded-b-lg">
              <button 
                onClick={() => setSelectedMessage(null)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-medium text-xs md:text-sm transition"
              >
                Close
              </button>
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium text-xs md:text-sm transition">
                Mark as Read
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminMessages;
