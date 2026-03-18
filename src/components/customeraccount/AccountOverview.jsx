import { useEffect, useState } from "react";

export default function AccountOverview() {
  const [stats, setStats] = useState([
    { title: "Total Applications", value: 0, color: "border-blue-500" },
    { title: "Pending", value: 0, color: "border-yellow-500" },
    { title: "Completed", value: 0, color: "border-green-500" },
    { title: "Cancelled", value: 0, color: "border-red-500" },
  ]);
  const [recentApplications, setRecentApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId") || localStorage.getItem("userId");
    if (!userId) {
      console.log('No userId found in storage');
      return;
    }

    console.log('Fetching orders for userId:', userId);
    fetch(`http://localhost:8080/api/orders/user/${userId}`)
      .then(res => {
        if (!res.ok) throw new Error('API not found');
        return res.json();
      })
      .then(data => {
        if (!Array.isArray(data)) {
          console.error('Invalid data format:', data);
          setLoading(false);
          return;
        }
        const total = data.length;
        const pending = data.filter(o => o.status === "Pending").length;
        const completed = data.filter(o => o.status === "Completed").length;
        const cancelled = data.filter(o => o.status === "Cancelled").length;

        setStats([
          { title: "Total Applications", value: total, color: "border-blue-500" },
          { title: "Pending", value: pending, color: "border-yellow-500" },
          { title: "Completed", value: completed, color: "border-green-500" },
          { title: "Cancelled", value: cancelled, color: "border-red-500" },
        ]);

        const recent = [...data].reverse().slice(0, 3).map(order => ({
          id: `ORD#${order.id}`,
          service: order.serviceName,
          status: order.status,
          date: new Date(order.createdAt).toLocaleDateString()
        }));
        setRecentApplications(recent);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching orders:', err);
        setLoading(false);
      });
  }, []);

  const statusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-600 bg-green-50";
      case "Pending":
        return "text-yellow-600 bg-yellow-50";
      case "Cancelled":
        return "text-red-600 bg-red-50";
      case "In Progress":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">

      {/* 🔹 Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-sm border-l-4 ${item.color} hover:shadow-md transition`}
          >
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              {item.title}
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mt-1 sm:mt-2">
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      {/* 🔹 Recent Applications */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 md:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
          Recent Applications
        </h3>

        <div className="overflow-x-auto -mx-3 sm:mx-0">
          <table className="w-full text-xs sm:text-sm text-left border-collapse min-w-[500px] sm:min-w-0">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="py-2 sm:py-3 px-2 sm:px-0">Application ID</th>
                <th className="py-2 sm:py-3 px-2 sm:px-0">Service</th>
                <th className="py-2 sm:py-3 px-2 sm:px-0">Date</th>
                <th className="py-2 sm:py-3 px-2 sm:px-0">Status</th>
              </tr>
            </thead>

            <tbody>
              {recentApplications.map((app) => (
                <tr key={app.id} className="border-b hover:bg-gray-50 transition">
                  <td className="py-2 sm:py-3 px-2 sm:px-0 font-medium text-gray-700">{app.id}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-0 text-gray-600">{app.service}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-0 text-gray-600">{app.date}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-0">
                    <span
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${statusColor(
                        app.status
                      )}`}
                    >
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}