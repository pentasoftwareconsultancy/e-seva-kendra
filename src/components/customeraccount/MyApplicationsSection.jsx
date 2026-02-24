export default function MyApplicationsSection() {

  const applications = [
    {
      id: "APP001",
      service: "PAN Card",
      date: "12 Jan 2026",
      status: "Completed",
    },
    {
      id: "APP002",
      service: "GST Registration",
      date: "15 Jan 2026",
      status: "Pending",
    },
    {
      id: "APP003",
      service: "Aadhaar Update",
      date: "18 Jan 2026",
      status: "Rejected",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-600";
      case "Pending":
        return "bg-yellow-50 text-yellow-600";
      case "Rejected":
        return "bg-red-50 text-red-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const handleDownload = (id) => {
    alert(`Downloading document for ${id}`);
    // Later:
    // window.open(`/api/download/${id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        My Applications
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-3">Application ID</th>
              <th className="py-3">Service</th>
              <th className="py-3">Date Submitted</th>
              <th className="py-3">Status</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-4 font-medium text-gray-700">
                  {app.id}
                </td>

                <td className="py-4 text-gray-600">
                  {app.service}
                </td>

                <td className="py-4 text-gray-600">
                  {app.date}
                </td>

                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      app.status
                    )}`}
                  >
                    {app.status}
                  </span>
                </td>

                <td className="py-4">
                  {app.status === "Completed" ? (
                    <button
                      onClick={() => handleDownload(app.id)}
                      className="px-4 py-1.5 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Download
                    </button>
                  ) : (
                    <span className="text-gray-400 text-xs">
                      —
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}