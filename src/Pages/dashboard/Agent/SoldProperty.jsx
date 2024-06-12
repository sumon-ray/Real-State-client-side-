import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";


const SoldProperty = () => {

    const axiosSecure = useAxiosSecure()
    const {data:sold=[],isLoading,refetch}=useQuery({
        queryKey:["reviews"],
        queryFn:async()=>{
            const {data} = await axiosSecure.get("/payment")
            return data;


        }
    })
    // console.log(s);
    if (isLoading){
        return<p>loading....</p>
    }

    const totalSum = sold.reduce((sum, solds) => {
        return sum + (solds?.paymentdata?.offeerAmount || 0);
    }, 0);
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
      Buyer email
      </th>
      <th className="p-4 text-left text-sm font-medium text-white">
      Buyer name
      </th>
      <th className="p-4 text-left text-sm font-medium text-white">
      Sold price
      </th>
    </tr>
  </thead>
  <tbody className="whitespace-nowrap">
    {
      sold.map(solds=>(
        <tr key={solds._id} className="even:bg-green-100">
      <td className="p-4 text-sm text-black">
      {solds?.paymentdata?.offerProperty.productlist?.property_title}
      </td>
      <td className="p-4 text-sm text-black">
      {solds?.paymentdata?.offerProperty?.productlist?.location}
      </td>
      <td className="p-4 text-sm text-black">
      {solds?.paymentdata?.offerProperty?.buyeremail}
      </td>
      <td className="p-4 text-sm text-black">
      {solds?.paymentdata?.offerProperty?.buyername}
      </td>
      <td className="p-4 text-sm text-black">
      ${solds?.paymentdata?.offeerAmount}
      </td>
      
    </tr>
      ))
    }
  </tbody>
</table>
<div className="p-4 text-sm text-black flex justify-end  mt-6 ">
                <strong>Total Sold Price: ${totalSum}</strong>
            </div>
        </div>
    );
};

export default SoldProperty;