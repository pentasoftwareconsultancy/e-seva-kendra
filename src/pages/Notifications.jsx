import React, { useEffect, useState } from "react";
import NotificationCard from "../components/common/NotificationCard";

export default function Notifications() {

  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) return;

    const fetchNotifications = async () => {
      try {
        const res = await fetch(`http://localhost:8080/notifications/${userId}`);
        const data = await res.json();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    const fetchUnreadCount = async () => {
      try {
        const res = await fetch(`http://localhost:8080/notifications/unread-count/${userId}`);
        const count = await res.json();
        setUnreadCount(count);
      } catch (error) {
        console.error("Error fetching unread count:", error);
      }
    };

    fetchNotifications();
    fetchUnreadCount();

    const interval = setInterval(() => {
      fetchNotifications();
      fetchUnreadCount();
    }, 10000);

    return () => clearInterval(interval);
  }, [userId]);

  const markAsRead = async (id) => {
    try {
      await fetch(`http://localhost:8080/notifications/read/${id}`, {
        method: "PATCH"
      });

      setNotifications(prev =>
        prev.map(n =>
          n.id === id ? { ...n, read: true } : n
        )
      );

      setUnreadCount(prev => prev - 1);
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const markAllAsRead = async () => {
    try {
      await fetch(`http://localhost:8080/notifications/read-all/${userId}`, {
        method: "PATCH"
      });

      setNotifications(prev =>
        prev.map(n => ({ ...n, read: true }))
      );
      setUnreadCount(0);
    } catch (error) {
      console.error("Error marking all as read:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4 md:px-10">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-6">

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
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Mark all as read
            </button>
          )}

        </div>

        {notifications.length === 0 ? (

          <div className="text-center py-10 text-gray-400">
            No notifications yet.
          </div>

        ) : (

          <div className="space-y-4">

            {notifications.map(notification => (
              <NotificationCard
                key={notification.id}
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