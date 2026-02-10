import React, { useState } from "react";
import AdminLayout from '../../components/common/AdminLayout';
const users = [
  {
    id: 101,
    name: "Rajesh Kumar",
    email: "rajesh@gmail.com",
    role: "User",
    status: "Active",
    date: "Mar 29, 2024",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 102,
    name: "Priya Sharma",
    email: "priya@gmail.com",
    role: "User",
    status: "Blocked",
    date: "Mar 28, 2024",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 103,
    name: "Amit Patil",
    email: "amit@gmail.com",
    role: "Admin",
    status: "Active",
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
  const [statusFilter, setStatusFilter] = useState('All Status');

  const filteredUsers = users
    .filter(user => 
      searchQuery === '' ? true : 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(user => roleFilter === 'All Roles' ? true : user.role === roleFilter)
    .filter(user => statusFilter === 'All Status' ? true : user.status === statusFilter);

  return (
    <AdminLayout>
      {/* Page Title */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Users</h1>

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

          

          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 md:px-4 py-2 border rounded-lg text-sm"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Blocked</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b text-xs">
                <th className="py-3">User</th>
                <th className="hidden sm:table-cell">Email</th>
                <th className="hidden md:table-cell">Role</th>
                <th>Status</th>
                <th className="hidden lg:table-cell">Joined</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-4 flex items-center gap-2 md:gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full"
                    />
                    <span className="font-medium text-gray-800 text-sm">
                      {user.name}
                    </span>
                  </td>

                  <td className="text-gray-600 text-sm hidden sm:table-cell">{user.email}</td>
                  <td className="text-gray-700 text-sm hidden md:table-cell">{user.role}</td>

                  <td>
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[user.status]}`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="text-gray-600 text-sm hidden lg:table-cell">{user.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 md:mt-6 text-xs md:text-sm text-gray-500 gap-3">
          <span>Showing 1 to 3 of 3 users</span>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border rounded-md">1</button>
            <button className="px-3 py-1 border rounded-md">2</button>
            <button className="px-3 py-1 border rounded-md">→</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
