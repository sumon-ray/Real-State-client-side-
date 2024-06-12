import axios from "axios"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../component/AuthProvider";



export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    
  })
  const useAxiosSecure = () => {
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()
    // useEffect(() => {
      axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('token')
        console.log('request stopped by interface',token)
        config.headers.authorization=`Bearer ${token}`;
        return config
      },function (error) {
        return Promise.reject(error)
      });


      axiosSecure.interceptors.response.use(function(response) {
        return response;
      },async(error)=> {
        const status = error.response.status;
        console.log('status error in the  interceptor response',status);
        if (status === 401 || status === 403) {
          await logout()
          navigate('/login')
        }
        return Promise.reject(error)
      })
      return axiosSecure
  
  }
  
  export default useAxiosSecure