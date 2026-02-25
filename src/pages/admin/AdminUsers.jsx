import React, { useState } from "react";
import AdminLayout from '../../components/common/AdminLayout';
import { Users as UsersIcon, User, Eye } from 'lucide-react';
const users = [
  {
    id: 101,
    name: "Rajesh Kumar",
    email: "rajesh@gmail.com",
    mobile: "+91 98765 43210",
    role: "User",
    date: "Mar 29, 2024",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 102,
    name: "Priya Sharma",
    email: "priya@gmail.com",
    mobile: "+91 98765 43211",
    role: "User",
    date: "Mar 28, 2024",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 103,
    name: "Amit Patil",
    email: "amit@gmail.com",
    mobile: "+91 98765 43212",
    role: "Admin",
    date: "Mar 28, 2024",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

const statusStyles = {
  Active: "bg-green-100 text-green-700",
  Blocked: "bg-red-100 text-red-700",
};

const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users
    .filter(user => 
      searchQuery === '' ? true : 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(user => roleFilter === 'All Roles' ? true : user.role === roleFilter);

  return (
    <AdminLayout>
      {/* Page Title */}
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <UsersIcon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Users</h1>
      </div>

      {/* Card */}
      <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-4 md:p-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-4 md:mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 min-w-[200px] px-3 md:px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 text-left text-xs">
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider">User</th>
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider hidden sm:table-cell">Email</th>
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">Mobile No</th>
                  <th className="px-4 md:px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider hidden lg:table-cell">Joined</th>
                  <th className="px-4 md:px-6 py-4 text-center font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-blue-50/50 transition-colors duration-150"
                  >
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                          <User size={16} />
                        </div>
                        <span className="font-medium text-gray-900 text-sm">
                          {user.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-4 md:px-6 py-4 text-gray-600 text-sm hidden sm:table-cell">{user.email}</td>
                    <td className="px-4 md:px-6 py-4 text-gray-700 text-sm hidden md:table-cell">{user.mobile}</td>

                    <td className="px-4 md:px-6 py-4 text-gray-500 text-sm hidden lg:table-cell">{user.date}</td>
                    <td className="px-4 md:px-6 py-4 text-center">
                      <button 
                        onClick={() => setSelectedUser(user)}
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

          {/* Footer */}
          <div className="px-4 md:px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs md:text-sm">
            <span className="text-gray-600 font-medium">Showing 1 to 3 of 3 users</span>

            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">→</button>
            </div>
          </div>
        </div>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 md:p-4" onClick={() => setSelectedUser(null)}>
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-[95vw] md:max-w-2xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-3 md:px-6 py-2 md:py-3 flex items-center justify-between rounded-t-lg">
              <h3 className="text-sm md:text-lg font-semibold text-white flex items-center gap-2">
                <User className="w-4 h-4 md:w-5 md:h-5" />
                User Details
              </h3>
              <button 
                onClick={() => setSelectedUser(null)}
                className="text-white/80 hover:text-white text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-3 md:p-6 overflow-y-auto">
              <div className="bg-gray-50 rounded-lg p-3 md:p-4 space-y-2 md:space-y-3">
                <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                  <span className="text-xs md:text-sm text-gray-600 font-medium">User ID</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-900">#{selectedUser.id}</span>
                </div>
                <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                  <span className="text-xs md:text-sm text-gray-600 font-medium">Name</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-900">{selectedUser.name}</span>
                </div>
                <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                  <span className="text-xs md:text-sm text-gray-600 font-medium">Email</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-900">{selectedUser.email}</span>
                </div>
                <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                  <span className="text-xs md:text-sm text-gray-600 font-medium">Mobile</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-900">{selectedUser.mobile}</span>
                </div>
                <div className="flex justify-between items-center pb-2 md:pb-3 border-b">
                  <span className="text-xs md:text-sm text-gray-600 font-medium">Role</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-900">{selectedUser.role}</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-xs md:text-sm text-gray-600 font-medium">Joined Date</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-900">{selectedUser.date}</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-3 md:px-6 py-2 md:py-3 bg-gray-50 border-t flex gap-2 md:gap-3 rounded-b-lg">
              <button 
                onClick={() => setSelectedUser(null)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-medium text-xs md:text-sm transition"
              >
                Close
              </button>
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium text-xs md:text-sm transition">
                Block User
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminUsers;
