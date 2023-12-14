import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://next-movie-backend.vercel.app/api",
});

export default axiosInstance;
