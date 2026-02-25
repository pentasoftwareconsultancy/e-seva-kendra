export default function AccountOverview() {
  // Dummy data (later replace with backend data)
  const stats = [
    { title: "Total Applications", value: 12, color: "border-blue-500" },
    { title: "Pending", value: 3, color: "border-yellow-500" },
    { title: "Approved", value: 7, color: "border-green-500" },
    { title: "Rejected", value: 2, color: "border-red-500" },
  ];

  const recentApplications = [
    { id: "APP001", service: "PAN Card", status: "Approved", date: "12 Jan 2026" },
    { id: "APP002", service: "GST Registration", status: "Pending", date: "15 Jan 2026" },
    { id: "APP003", service: "Aadhaar Update", status: "Rejected", date: "18 Jan 2026" },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Approved":
        return "text-green-600 bg-green-50";
      case "Pending":
        return "text-yellow-600 bg-yellow-50";
      case "Rejected":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="space-y-8">

      {/* 🔹 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-2xl shadow-sm border-l-4 ${item.color} hover:shadow-md transition`}
          >
            <p className="text-sm text-gray-500 font-medium">
              {item.title}
            </p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      {/* 🔹 Recent Applications */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Applications
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="py-3">Application ID</th>
                <th className="py-3">Service</th>
                <th className="py-3">Date</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {recentApplications.map((app) => (
                <tr key={app.id} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 font-medium text-gray-700">{app.id}</td>
                  <td className="py-3 text-gray-600">{app.service}</td>
                  <td className="py-3 text-gray-600">{app.date}</td>
                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor(
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