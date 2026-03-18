export default function NotificationCard({ notification, onMarkRead }) {

  // Format time like "5 minutes ago"
  const formatTimeAgo = (date) => {

    const seconds = Math.floor((new Date() - new Date(date)) / 1000);

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 }
    ];

    for (let interval of intervals) {

      const count = Math.floor(seconds / interval.seconds);

      if (count >= 1) {
        return count + " " + interval.label + (count > 1 ? "s" : "") + " ago";
      }

    }

    return "just now";
  };

  const getColorStyle = () => {

    // Highlight unread notifications
    if (!notification.read) {
      return "bg-blue-50 border-blue-300 border-l-4 border-l-blue-600";
    }

    // Read notifications with type-based colors
    switch (notification.type) {

      case "PAYMENT_SUCCESS":
      case "payment":
        return "bg-green-50 border-green-300 border-l-4 border-l-green-600";

      case "ORDER_CREATED":
        return "bg-yellow-50 border-yellow-300 border-l-4 border-l-yellow-600";

      case "ORDER_STATUS_UPDATE":
        return "bg-purple-50 border-purple-300 border-l-4 border-l-purple-600";

      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border transition ${getColorStyle()}`}>
      <div className="flex justify-between items-start gap-2">

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm sm:text-base text-slate-800 break-words">
            {notification.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 mt-1 break-words">
            {notification.message}
          </p>

          <span className="text-[10px] sm:text-xs text-gray-400 block mt-1.5 sm:mt-2">
            {notification.createdAt && formatTimeAgo(notification.createdAt)}
          </span>
        </div>

        {!notification.read && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMarkRead(notification.id);
            }}
            className="text-[10px] sm:text-xs text-blue-600 hover:underline whitespace-nowrap shrink-0"
          >
            Mark as read
          </button>
        )}

      </div>
    </div>
  );
}