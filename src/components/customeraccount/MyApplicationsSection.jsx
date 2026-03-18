import { useEffect, useState } from "react";

export default function MyApplicationsSection() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const userId = sessionStorage.getItem("userId") || localStorage.getItem("userId");
    if (!userId) {
      console.log('No userId found in storage');
      return;
    }

    console.log('Fetching applications for userId:', userId);
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
        const formatted = [...data].reverse().map(order => ({
          id: `ORD#${order.id}`,
          service: order.serviceName,
          date: new Date(order.createdAt).toLocaleDateString(),
          status: order.status,
        }));
        setApplications(formatted);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching applications:', err);
        setLoading(false);
      });
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-600";
      case "Pending":
        return "bg-yellow-50 text-yellow-600";
      case "Cancelled":
        return "bg-red-50 text-red-600";
      case "In Progress":
        return "bg-blue-50 text-blue-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const handleDownload = (id) => {
    alert(`Downloading document for ${id}`);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 md:p-6">
        <div className="flex items-center justify-center h-48 sm:h-64">
          <div className="text-gray-500 text-sm sm:text-base">Loading applications...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 md:p-6">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
        My Applications
      </h2>

      <input
        type="text"
        placeholder="Search by application ID or service..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded-lg text-xs sm:text-sm outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="overflow-x-auto -mx-3 sm:mx-0">
        <table className="w-full text-xs sm:text-sm text-left border-collapse min-w-[600px] sm:min-w-0">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2 sm:py-3 px-2 sm:px-0">Application ID</th>
              <th className="py-2 sm:py-3 px-2 sm:px-0">Service</th>
              <th className="py-2 sm:py-3 px-2 sm:px-0">Date Submitted</th>
              <th className="py-2 sm:py-3 px-2 sm:px-0">Status</th>
            
            </tr>
          </thead>

          <tbody>
            {applications.filter(a =>
              search === "" ? true :
              a.id.toLowerCase().includes(search.toLowerCase()) ||
              a.service.toLowerCase().includes(search.toLowerCase())
            ).map((app) => (
              <tr
                key={app.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 sm:py-4 px-2 sm:px-0 font-medium text-gray-700">
                  {app.id}
                </td>

                <td className="py-3 sm:py-4 px-2 sm:px-0 text-gray-600">
                  {app.service}
                </td>

                <td className="py-3 sm:py-4 px-2 sm:px-0 text-gray-600">
                  {app.date}
                </td>

                <td className="py-3 sm:py-4 px-2 sm:px-0">
                  <span
                    className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${getStatusStyle(
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
  );
}