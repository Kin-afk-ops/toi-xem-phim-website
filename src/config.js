import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://linh-video-back-end.vercel.app/api",
});

export default axiosInstance;
