import {  useState } from "react";
import PropTypes from 'prop-types'
import UpdateUserModal from "./UpdateUserModal";

import useAxiosSecure from "../hook/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
// import { AuthContext } from "./AuthProvider";


const TableRow = ({user,refetch,handleDelete}) => {
console.log(user);
    const [isOpen,setIsOpen] = useState(false)
// const {user:loggedinuser} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { mutateAsync } = useMutation({
      mutationFn: async role => {
        const { data } = await axiosSecure.patch(
          `/users/update/${user?.email}`,
          role
        )
        return data
      },
      onSuccess: data => {
          console.log(data)
          Swal.fire("Added Successfully!");
          refetch()
          setIsOpen(false)
      },
    })

const modalHandler =async (selected)=>{
    
    console.log("user role updated",selected);
    const userRole = {
        role:selected,
        status:"verified",
        
    }
    try {
        await mutateAsync(userRole)
      } catch (err) {
        console.log(err)
        Swal.fire("added error!");
      }
}
    return (
        <tr className="hover:bg-gray-50">
        <td className="p-4 text-[15px] text-gray-800">
          {user?.name}
        </td>
        <td className="p-4 text-[15px] text-gray-800">
        {user?.email}
        </td>
        <td className="p-4 text-[15px] text-gray-800">
         
           {user?.role}
          
        </td>
        <td className="p-4 text-[15px] text-gray-800">
          {user?.fraud}
        </td>
        <td className="p-4 text-[15px] text-gray-800">
          {user?.status}
        </td>
        <td className="p-4 text-[15px] text-gray-800">
          <button onClick={()=> setIsOpen(true)} className="bg-green-100 px-3 py-1 rounded-xl">Update Role</button>
          <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} user={user} modalHandler={modalHandler}></UpdateUserModal>
        </td>
        <td className="p-4">
         
          <button onClick={()=>handleDelete(user._id)} className="mr-4" title="Delete">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000" />
              <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000" />
            </svg>
          </button>
        </td>
      
      </tr>
    );
};
TableRow.propTypes = {
    user: PropTypes.object,
    refetch: PropTypes.func,
  }
export default TableRow;