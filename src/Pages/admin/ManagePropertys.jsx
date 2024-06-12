import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";


const ManagePropertys = () => {
    const axiosSecure = useAxiosSecure();
    // const [search, setSearch] = useState("");
    // const [sortCriteria, setSortCriteria] = useState("");
    const { data: houses = [], isLoading,refetch } = useQuery({
      queryKey: ["house"],
      queryFn: async () => {
        const { data } = await axiosSecure.get("/house");
        return data;
      },
    });
    // console.log(houses);
    if (isLoading) {
        return <p>loading....</p>;
      }





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
                axiosSecure.delete(`/myaddedhouse/${data}`)
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
    return (
        <div className="font-[sans-serif] overflow-x-auto">
           <table className="min-w-full bg-white">
  <thead className="bg-gray-800 whitespace-nowrap">
    <tr>
      <th className="p-4 text-left text-sm font-medium text-white">
        Property Title
      </th>
      <th className="p-4 text-left text-sm font-medium text-white">
      Property location
      </th>
      <th className="p-4 text-left text-sm font-medium text-white">
      Agent name
      </th>
      <th className="p-4 text-left text-sm font-medium text-white">
      Agent email
      </th>
      <th className="p-4 text-left text-sm font-medium text-white">
      Price range
      </th>
      <th className="p-4 text-left text-sm font-medium text-white">
      Action
      </th>
    </tr>
  </thead>
  <tbody className="whitespace-nowrap">
    {
      houses.map(house=>(
        <tr key={house._id} className="even:bg-green-100">
      <td className="p-4 text-sm text-black">
      {house?.property_title}
      </td>
      <td className="p-4 text-sm text-black">
      {house?.location}
      </td>
      <td className="p-4 text-sm text-black">
      {house?.agent?.name}
      </td>
      <td className="p-4 text-sm text-black">
      {house?.agent?.email}
      </td>
      <td className="p-4 text-sm text-black">
      ${`${house?.price_range?.max}-${house?.price_range?.min}`}
      </td>
      <td className="p-4 text-sm text-black">
      <button className="bg-green-400 px-4 rounded-md">Verify</button>
      <button onClick={()=>handleDelete(house._id)} className="bg-red-500 px-4 rounded-md ml-1">Reject</button>
      </td>
      
    </tr>
      ))
    }
  </tbody>
</table>
        </div>
    );
};

export default ManagePropertys;