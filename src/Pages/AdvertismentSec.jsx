import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../hook/useAxiosCommon";
import { Link } from "react-router-dom";


const AdvertismentSec = () => {



    const axiosCommon = useAxiosCommon();
    // const [search, setSearch] = useState("");
    // const [sortCriteria, setSortCriteria] = useState("");
    const { data: houses = [], isLoading } = useQuery({
      queryKey: ["house"],
      queryFn: async () => {
        const { data } = await axiosCommon.get("/house");
        return data;
      },
    });



    // console.log(houses);
    if (isLoading) {
      return <p>loading....</p>;
    }
    return (
       <div className="mt-20">
        <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl font-extrabold p-3">Find Your Real Estate <span className="text-[#a8181f]">Property</span></h2>
              <p className="text-sm max-w-2xl mx-auto mt-5 leading-relaxed">Discover your dream home or investment property with our comprehensive real estate search platform. Whether you're looking for a cozy apartment in the city, a spacious family home in the suburbs, or a lucrative commercial property</p>
          </div>
         <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-10 mt-10">
           {
            houses.map(house=>(
                <div key={house._id}
                className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4"
              >
                <img src={house.image} className="w-full h-[250px] rounded-2xl" />
                <div className="p-6">
                  <h3 className="text-2xl text-[#333] font-extrabold"> {house.property_title} </h3>
                  <p className="text-sm text-[#333] mt-3">{house.description.slice(0, 100)}...</p>
                  <div className="mt-8 flex items-center">
                    <h3 className="text-xl text-[#333] font-bold flex-1">${`${house?.price_range?.min}||${house?.price_range?.max}`}</h3>
                    <p className="bg-slate-700 px-3 py-1 rounded-xl text-white">{house?.status}</p>
                    <div className="bg-gray-50 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="fill-[#333]" viewBox="0 0 64 64">
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div >
                  <Link to={`/house/${house._id}`} className="flex justify-center mt-8">
                  <button  className="bg-[#a8181f] text-white font-bold px-4 py-2 rounded-md w-full hover:bg-green-600">View Details</button>
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

export default AdvertismentSec;