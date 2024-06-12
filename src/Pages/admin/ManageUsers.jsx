import { useContext, useState } from "react";
import { AuthContext } from "../../component/AuthProvider";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
// import UpdateUserModal from "../../component/UpdateUserModal";
import TableRow from "../../component/TableRow";
import Swal from "sweetalert2";

const ManageUsers = () => {

    // 
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    //   Fetch Rooms Data
    const {
      data: users = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/users`)
  
        return data
      },
    })
    if (isLoading){
        return <p>loading....</p>
    }
    // 
    // 
    // 
    // 
    const handleDelete = (data) => {
        // console.log(data);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if(result.isConfirmed){
                axiosSecure.delete(`/users/${data}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                }).catch(error => {
                    console.error("Error deleting user:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "There was a problem deleting the user.",
                        icon: "error"
                    });
                });
            }
        })
    
    };
    // 
    // 
    // 
  //  console.log(users);
    return (
        <div className="font-sans overflow-x-auto">
  <table className="min-w-full bg-white">
    <thead className="bg-gray-100 whitespace-nowrap">
      <tr>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Name
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Email
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Role
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Fraud
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Status
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Actions
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Delete
        </th>
      </tr>
    </thead>

    <tbody className="whitespace-nowrap">
      {
        users.map(user => (
            <TableRow key={user?._id} user={user} refetch={refetch} handleDelete={handleDelete}></TableRow>
        ))
      }

      
    </tbody>
  </table>
</div>
    );
};

export default ManageUsers;