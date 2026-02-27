import { useEffect, useState } from "react";
import NotificationCard from "../components/common/NotificationCard";


export default function Notifications() {

  const [notifications, setNotifications] = useState([]);

  // 🔥 Dummy Data (Backend Ready Structure)
  useEffect(() => {
    const dummyData = [
    {
      _id: "1",
      userId: "101",
      type: "APPLICATION_SUBMITTED",
      title: "Application Submitted",
      message: "Your PAN Card application has been successfully submitted.",
      isRead: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 10),
    },
    {
      _id: "2",
      userId: "101",
      type: "PAYMENT_SUCCESS",
      title: "Payment Successful",
      message: "Your GST registration payment was completed successfully.",
      isRead: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 60),
    },
    {
      _id: "3",
      userId: "101",
      type: "APPLICATION_APPROVED",
      title: "Application Approved",
      message: "Your Passport application has been approved.",
      isRead: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
    },
    {
      _id: "4",
      userId: "101",
      type: "APPLICATION_REJECTED",
      title: "Application Rejected",
      message: "Your Voter ID request was rejected due to incomplete documents.",
      isRead: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
    {
      _id: "5",
      userId: "101",
      type: "PAYMENT_SUCCESS",
      title: "Payment Successful",
      message: "Your Life Insurance premium payment was received.",
      isRead: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30),
    },
    {
      _id: "6",
      userId: "101",
      type: "APPLICATION_SUBMITTED",
      title: "Application Submitted",
      message: "Your Shop Act registration request is under review.",
      isRead: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
    },
    {
      _id: "7",
      userId: "101",
      type: "SYSTEM_ALERT",
      title: "System Maintenance",
      message: "Scheduled maintenance on Sunday from 2AM to 4AM.",
      isRead: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72),
    },
  ];


    setNotifications(dummyData);
  }, []);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = async (id) => {
    

    // 🔵 Immediately update UI
    setNotifications(prev =>
      prev.map(n =>
        n._id === id ? { ...n, isRead: true } : n
      )
    );

    // 🔌 Later enable when backend ready
    // await notificationService.markAsRead(id);
  };

  const markAllAsRead = async () => {

    setNotifications(prev =>
      prev.map(n => ({ ...n, isRead: true }))
    );

    // await notificationService.markAllAsRead();
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Notifications
            </h1>
            <p className="text-sm text-gray-500">
              {unreadCount} unread notifications
            </p>
          </div>

          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-sm text-blue-600 hover:underline"
            >
              Mark all as read
            </button>
          )}
        </div>

        {/* Body */}
        {notifications.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            No notifications yet.
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map(notification => (
              <NotificationCard
                key={notification._id}
                notification={notification}
                onMarkRead={markAsRead}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}