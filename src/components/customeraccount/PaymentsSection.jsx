import { useEffect, useState } from "react";

export default function PaymentsSection() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const userId = sessionStorage.getItem("userId") || localStorage.getItem("userId");
    if (!userId) {
      console.log('No userId found in storage');
      return;
    }

    console.log('Fetching payments for userId:', userId);
    fetch(`http://localhost:8080/api/payment/user/${userId}`)
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
        const formatted = [...data].reverse().map(payment => ({
          id: `PAY#${payment.id}`,
          service: payment.serviceName || "N/A",
          amount: `₹${payment.amount}`,
          date: new Date(payment.createdAt).toLocaleDateString(),
          status: payment.paymentStatus || payment.status,
        }));
        setPayments(formatted);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching payments:', err);
        setLoading(false);
      });
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Paid":
      case "Success":
      case "Completed":
        return "bg-green-50 text-green-600";
      case "Pending":
        return "bg-yellow-50 text-yellow-600";
      case "Failed":
        return "bg-red-50 text-red-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const handleDownloadReceipt = (id) => {
    alert(`Downloading receipt for ${id}`);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 md:p-6">
        <div className="flex items-center justify-center h-48 sm:h-64">
          <div className="text-gray-500 text-sm sm:text-base">Loading payments...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 md:p-6">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
        Payment History
      </h2>

      <input
        type="text"
        placeholder="Search by payment ID or service..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded-lg text-xs sm:text-sm outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="overflow-x-auto -mx-3 sm:mx-0">
        <table className="w-full text-xs sm:text-sm text-left border-collapse min-w-[650px] sm:min-w-0">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2 sm:py-3 px-2 sm:px-0">Payment ID</th>
              <th className="py-2 sm:py-3 px-2 sm:px-0">Service</th>
              <th className="py-2 sm:py-3 px-2 sm:px-0">Amount</th>
              <th className="py-2 sm:py-3 px-2 sm:px-0">Date</th>
              <th className="py-2 sm:py-3 px-2 sm:px-0">Status</th>
             
            </tr>
          </thead>

          <tbody>
            {payments.filter(p =>
              search === "" ? true :
              p.id.toLowerCase().includes(search.toLowerCase()) ||
              p.service.toLowerCase().includes(search.toLowerCase())
            ).map((payment) => (
              <tr
                key={payment.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 sm:py-4 px-2 sm:px-0 font-medium text-gray-700">
                  {payment.id}
                </td>

                <td className="py-3 sm:py-4 px-2 sm:px-0 text-gray-600">
                  {payment.service}
                </td>

                <td className="py-3 sm:py-4 px-2 sm:px-0 text-gray-600">
                  {payment.amount}
                </td>

                <td className="py-3 sm:py-4 px-2 sm:px-0 text-gray-600">
                  {payment.date}
                </td>

                <td className="py-3 sm:py-4 px-2 sm:px-0">
                  <span
                    className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      payment.status
                    )}`}
                  >
                    {payment.status}
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