import axios from "axios";

const axiosPublic = axios.create({
  // baseURL : "https://real-estate-platform-server-woad.vercel.app"
  baseURL: "https://real-estate-platform-server-woad.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
