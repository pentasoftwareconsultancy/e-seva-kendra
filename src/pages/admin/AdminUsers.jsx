import React, { useState, useEffect } from "react";
import AdminLayout from '../../components/common/AdminLayout';
import { Users as UsersIcon, User, Eye } from 'lucide-react';

const AdminUsers = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  // ✅ added state for backend users
  const [users, setUsers] = useState([]);

  // ✅ fetch users from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/users/all")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const filteredUsers = users.filter(user =>
    searchQuery === '' ? true :
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  ).reverse();

  return (
    <AdminLayout>

      {/* Page Title */}
      <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
        <UsersIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Users</h1>
      </div>

      {/* Card */}
      <div className="bg-white/70 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6">

        {/* Search */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 min-w-[200px] px-3 sm:px-3 md:px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 text-xs sm:text-sm"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm">

              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 text-left text-[10px] sm:text-xs">
                  <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-700 uppercase tracking-wider hidden sm:table-cell">User ID</th>
                  <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-700 uppercase tracking-wider">User</th>
                  <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-700 uppercase tracking-wider hidden sm:table-cell">Email</th>
                  <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">Mobile No</th>
                  <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-center font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-blue-50/50 transition-colors duration-150">

                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-[10px] sm:text-sm font-semibold text-blue-600 hidden sm:table-cell">
                      USE#{user.id}
                    </td>

                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                          <User size={14} className="sm:w-4 sm:h-4" />
                        </div>
                        <span className="font-medium text-gray-900 text-[10px] sm:text-sm break-all">
                          {user.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-600 text-xs sm:text-sm hidden sm:table-cell break-all">
                      {user.email}
                    </td>

                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700 text-xs sm:text-sm hidden md:table-cell">
                      {user.mobile}
                    </td>

                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-center">
                      <button
                        onClick={() => setSelectedUser(user)}
                        className="inline-flex items-center gap-1 px-2 sm:px-2 md:px-4 py-1.5 sm:py-1.5 md:py-2 bg-blue-600 hover:bg-blue-700 text-white text-[10px] sm:text-xs font-medium rounded-md sm:rounded-lg transition-colors duration-150 shadow-sm hover:shadow"
                      >
                        <Eye size={12} className="sm:w-[15px] sm:h-[15px]" />
                        <span className="hidden md:inline">View</span>
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-3 sm:p-4"
             onClick={() => setSelectedUser(null)}>

          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl"
               onClick={(e) => e.stopPropagation()}>

            <div className="bg-blue-600 px-4 sm:px-6 py-3 flex justify-between items-center text-white">
              <h3 className="text-sm sm:text-base font-semibold">User Details</h3>
              <button onClick={() => setSelectedUser(null)} className="text-2xl sm:text-3xl leading-none">&times;</button>
            </div>

            <div className="p-4 sm:p-6 space-y-2 sm:space-y-3 text-xs sm:text-sm">

              <p className="break-all"><b>ID:</b> USE#{selectedUser.id}</p>
              <p className="break-all"><b>Name:</b> {selectedUser.name}</p>
              <p className="break-all"><b>Email:</b> {selectedUser.email}</p>
              <p className="break-all"><b>Mobile:</b> {selectedUser.mobile}</p>
            </div>

          </div>
        </div>
      )}

    </AdminLayout>
  );
};

export default AdminUsers;