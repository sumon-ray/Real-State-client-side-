import { useContext } from "react";
import { AuthContext } from "../component/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useRole = () => {
    const {user,loader} =useContext(AuthContext)
    const axiosSecure = useAxiosSecure()


    const {data:role='',isLoading} = useQuery({
        queryKey:['role'],
        enabled:!loader && !!user?.email,
        queryFn:async () => {
            const {data} =await axiosSecure(`/user/${user?.email}`)
            return data.role;
        }
    })
    return [role,isLoading];
};

export default useRole;