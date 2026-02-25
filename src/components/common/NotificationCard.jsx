export default function NotificationCard({ notification, onMarkRead }) {

  const getColorStyle = () => {

    // 🔵 Unread gets priority highlight
    if (!notification.isRead) {
      return "bg-blue-50 border-blue-300 border-l-4 border-l-blue-600";
    }

    switch (notification.type) {

      case "PAYMENT_SUCCESS":
        return "bg-green-50 border-green-300 border-l-4 border-l-green-600";

      case "APPLICATION_APPROVED":
      case "APPLICATION_SUBMITTED":
        return "bg-yellow-50 border-yellow-300 border-l-4 border-l-yellow-600";

      case "APPLICATION_REJECTED":
        return "bg-red-50 border-red-300 border-l-4 border-l-red-600";

      default:
        return "bg-white border-gray-200";
    }
  };

  return (
    <div
      className={`p-4 rounded-xl border transition ${getColorStyle()}`}
    >
      <div className="flex justify-between items-start">

        <div>
          <h3 className="font-semibold text-slate-800">
            {notification.title}
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            {notification.message}
          </p>

          <span className="text-xs text-gray-400 block mt-2">
            {new Date(notification.createdAt).toLocaleString()}
          </span>
        </div>

        {!notification.isRead && (
          <button
            onClick={() => onMarkRead(notification._id)}
            className="text-xs text-blue-600 hover:underline"
          >
            Mark as read
          </button>
        )}

      </div>
    </div>
  );
}