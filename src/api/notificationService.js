import axios from "axios";

const API_URL = "http://localhost:8080/api/notifications";

const notificationService = {
  getUserNotifications: async () => {
    return axios.get(API_URL);
  },

  markAsRead: async (id) => {
    return axios.put(`${API_URL}/${id}/read`);
  },

  markAllAsRead: async () => {
    return axios.put(`${API_URL}/read-all`);
  }
};

export default notificationService;