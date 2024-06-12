import axios from "axios";

export const axiosCommon = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: " https://real-estate-platform-server-woad.vercel.app",
});
const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;
