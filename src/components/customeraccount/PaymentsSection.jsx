export default function PaymentsSection() {
  // Dummy Data (replace later with backend data)
  const payments = [
    {
      id: "PAY001",
      service: "PAN Card",
      amount: "₹499",
      date: "12 Jan 2026",
      status: "Paid",
    },
    {
      id: "PAY002",
      service: "GST Registration",
      amount: "₹1499",
      date: "15 Jan 2026",
      status: "Pending",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-50 text-green-600";
      case "Pending":
        return "bg-yellow-50 text-yellow-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const handleDownloadReceipt = (id) => {
    alert(`Downloading receipt for ${id}`);
    // Later:
    // window.open(`/api/receipt/${id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Payment History
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-3">Payment ID</th>
              <th className="py-3">Service</th>
              <th className="py-3">Amount</th>
              <th className="py-3">Date</th>
              <th className="py-3">Status</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-4 font-medium text-gray-700">
                  {payment.id}
                </td>

                <td className="py-4 text-gray-600">
                  {payment.service}
                </td>

                <td className="py-4 text-gray-600">
                  {payment.amount}
                </td>

                <td className="py-4 text-gray-600">
                  {payment.date}
                </td>

                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      payment.status
                    )}`}
                  >
                    {payment.status}
                  </span>
                </td>

                <td className="py-4">
                  {payment.status === "Paid" ? (
                    <button
                      onClick={() => handleDownloadReceipt(payment.id)}
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