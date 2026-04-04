import axios from "axios";

// 1. Create a custom Axios instance
const apiClient = axios.create({
    // This will be your Node.js backend URL
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// 2. Add an Interceptor (Optional but highly recommended)
// This automatically attaches the user's login token to every request if they are logged in
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// 3. Export basic methods you can import anywhere in your app
const AppService = {
  get: (url) => apiClient.get(url),
  post: (url, data) => apiClient.post(url, data),
  put: (url, data) => apiClient.put(url, data),
  delete: (url) => apiClient.delete(url),

  // Auth specific methods
  login: (credentials) => apiClient.post("/auth/login", credentials),
  register: (userData) => apiClient.post("/auth/register", userData),
};

export default AppService;
