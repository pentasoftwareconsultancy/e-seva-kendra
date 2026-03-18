import AdminLayout from "../../components/common/AdminLayout";
import React, { useState, useEffect } from "react";
import { MessageSquare, User, Eye } from "lucide-react";

const PAGE_SIZE = 6;

const AdminMessages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getStatusColor = (status) => {
    switch (status) {
      case "Unread":
        return "bg-yellow-100 text-yellow-700";
      case "Read":
        return "bg-blue-100 text-blue-700";
      case "Replied":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  useEffect(() => {
    fetch("https://e-seva-kendra-b.onrender.com/api/contact")
      .then((res) => res.json())
      .then((data) => {
        // newest first
        const sorted = [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setMessages(sorted);
      })
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  const markAsRead = (id) => {
    fetch(`https://e-seva-kendra-b.onrender.com/api/contact/${id}/read`, { method: "PUT" })
      .then((res) => res.json())
      .then((updatedMessage) => {
        setMessages((prev) =>
          prev.map((msg) => (msg.id === id ? updatedMessage : msg))
        );
        setSelectedMessage(updatedMessage);
      })
      .catch((error) => console.error("Error:", error));
  };

  const totalPages = Math.ceil(messages.length / PAGE_SIZE);
  const paginatedMessages = messages.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <AdminLayout>
      <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-800">
          Contact Messages
        </h2>
      </div>

      {/* Messages Table */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider hidden lg:table-cell">
                  Mobile
                </th>
                <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">
                  Service
                </th>
                <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedMessages.map((msg) => (
                <tr
                  key={msg.id}
                  className="hover:bg-blue-50/50 transition-colors duration-150"
                >
                  <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="relative">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                          <User size={14} className="sm:w-4 sm:h-4" />
                        </div>
                        {msg.status === "Unread" && (
                          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border border-white" />
                        )}
                      </div>
                      <span className="text-[10px] sm:text-sm font-medium text-gray-900 break-all">
                        {msg.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-[10px] sm:text-sm text-gray-600 hidden lg:table-cell">
                    {msg.mobile}
                  </td>
                  <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-[10px] sm:text-sm text-gray-600 hidden md:table-cell break-all">
                    {msg.service}
                  </td>
                  <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4">
                    <span
                      className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${getStatusColor(msg.status)}`}
                    >
                      {msg.status}
                    </span>
                  </td>
                  <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-center">
                    <button
                      onClick={() => setSelectedMessage(msg)}
                      className="inline-flex items-center gap-1 px-2 py-1.5 sm:px-2 sm:py-1.5 md:px-4 md:py-2 bg-blue-700 text-white text-[10px] sm:text-xs font-medium rounded-md sm:rounded-lg transition-colors duration-150 shadow-sm hover:shadow"
                    >
                      <Eye size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span className="hidden md:inline">View</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages >= 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 rounded-xl border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-40"
          >
            ←
          </button>
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
            {currentPage}
          </div>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded-xl border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-40"
          >
            →
          </button>
        </div>
      )}

      {/* Message Details Modal */}
      {selectedMessage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => setSelectedMessage(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl w-full max-w-[98vw] md:max-w-4xl h-[95vh] md:h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 flex items-center justify-between rounded-t-lg">
              <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-white flex items-center gap-1.5 sm:gap-2">
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                Message Details
              </h3>
              <button
                onClick={() => setSelectedMessage(null)}
                className="text-white/80 hover:text-white text-xl sm:text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Content - Two Column Layout */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              {/* Left: Contact Info */}
              <div className="w-full md:w-2/5 p-3 sm:p-4 md:p-6 md:border-r bg-gray-50 overflow-y-auto">
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 mb-1">Name</p>
                    <p className="text-xs sm:text-sm md:text-sm font-semibold text-gray-900 break-all">
                      {selectedMessage.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 mb-1">Email</p>
                    <p className="text-xs sm:text-sm md:text-sm font-semibold text-gray-900 break-all">
                      {selectedMessage.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 mb-1">Mobile</p>
                    <p className="text-xs sm:text-sm md:text-sm font-semibold text-gray-900">
                      {selectedMessage.mobile}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 mb-1">Service</p>
                    <p className="text-xs sm:text-sm md:text-sm font-semibold text-gray-900 break-all">
                      {selectedMessage.service}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 mb-1">Date</p>
                    <p className="text-xs sm:text-sm md:text-sm font-semibold text-gray-900">
                      {selectedMessage.createdAt
                        ? new Date(selectedMessage.createdAt).toLocaleString()
                        : ""}
                    </p>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-[10px] sm:text-xs text-gray-500 mb-2">Status</p>
                    <span
                      className={`inline-block px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${getStatusColor(selectedMessage.status)}`}
                    >
                      {selectedMessage.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Message Content */}
              <div className="w-full md:w-3/5 p-3 sm:p-4 md:p-6 flex flex-col overflow-y-auto">
                <p className="text-xs sm:text-sm md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                  Message
                </p>
                <div className="flex-1 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 p-3 sm:p-3 md:p-4">
                  <p className="text-xs sm:text-sm md:text-sm text-gray-800 leading-relaxed break-words">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-50 border-t flex gap-2 md:gap-3 rounded-b-lg">
              <button
                onClick={() => setSelectedMessage(null)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-medium text-[10px] sm:text-xs md:text-sm transition"
              >
                Close
              </button>
              <button
                onClick={() => markAsRead(selectedMessage.id)}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium text-[10px] sm:text-xs md:text-sm transition"
              >
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
