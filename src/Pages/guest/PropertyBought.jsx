import { useContext } from "react";
import { AuthContext } from "../../component/AuthProvider";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const PropertyBought = () => {


    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
  
    const { data: offerd = [], isLoading, refetch, error } = useQuery({
      queryKey: ["offerd", user?.email],
      queryFn: async () => {
        if (!user?.email) {
          return [];
        }
        const { data } = await axiosSecure.get(`/offerd/email/${user?.email}`);
        return data;
      },
    });
console.log(offerd);
if (isLoading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error loading wishlist: {error.message}</p>;
  }

    return (
        <div className="bg-green-100">
            <h1 className="text-center font-bold text-5xl p-3">Hi!🏤 You Can Pay Here</h1>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-10">
           {
            offerd.map(offer=>(
                <div key={offer._id} className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                <div className="flex items-center gap-2 px-6">
                  <h3 className="text-2xl text-[#333] font-extrabold flex-1">{offer?.offerProperty?.productlist.property_title}</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer fill-[#333] shrink-0" viewBox="0 0 64 64">
                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                  </svg>
                </div>
                <div className="relative">
                <img src={offer?.offerProperty?.productlist.image} className="w-full h-[300px] my-6" />
                <span className="absolute bottom-0 right-0 text-white font-bold  bg-black px-2 py-1 opacity-60 rounded-xl">{offer?.offerProperty?.productlist.status}</span>
                </div>
                <div className="px-6">
                  <p className="text-sm text-gray-500">{offer?.offerProperty?.productlist.description}</p>
                  <p className="text-sm text-gray-700 mt-2">{offer?.offerProperty?.productlist.location}</p>
                  <h6 className="text-sm text-gray-700 mt-2">{offer?.offerProperty?.productlist?.agent?.name}</h6>
                  <div className="mt-10 flex items-center flex-wrap gap-4">
                    <h3 className="text-xl text-[#333] font-bold flex-1">${offer?.offeerAmount}</h3>
                    <Link to={`/dashboard/bought/payment/${offer._id}`}>
                    <button type="button" className="px-6 py-2.5 rounded text-[#333] text-sm tracking-wider font-semibold border-2 border-[#333] hover:bg-gray-50 outline-none">Pay now</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
           }
            </div>
        </div>
    );
};

export default PropertyBought;