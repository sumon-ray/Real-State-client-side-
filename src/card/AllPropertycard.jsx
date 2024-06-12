import { Avatar } from "flowbite-react";
import { Link } from "react-router-dom";


const AllPropertycard = ({house}) => {
    const {_id,image,property_title,property_location,location,agent,status,price_range} = house
    return (
       
         <div>
           <div className=" gap-2 mt-12 max-md:max-w-lg mx-auto">
          <div className="rounded  overflow-hidden p-6 hover:bg-white transition-all duration-300">
            <img src={image} alt="Blog Post 1" className="w-full h-64 object-cover rounded " />
            <div className="text-center">
              <span className="text-sm block text-[#333] mb-2 mt-4">{location}</span>
              <h3 className="text-xl font-bold text-[#333] mb-4">{property_title}</h3>
              <div className="flex justify-between">
              <div className="flex flex-wrap gap-2">
      <Avatar img={agent?.image} alt="avatar of Jese" rounded />
      <p className="flex items-center ml-1 ">{agent?.name}</p>
      
    </div>
    <div>
      <p className="bg-slate-700 px-3 py-1 rounded-xl text-white">{status}</p>
    </div>
              </div>
    <p className="mt-4">Price:${price_range.max} || {price_range.min}</p>
              <p className="text-[#333] text-sm"></p>
              {/* <Link  type="button" className="px-6 py-3 text-white text-sm tracking-wider border-none outline-none bg-[#b69b88] hover:bg-[#af876a] mt-6">Read more</Link> */}
              <Link to={`/house/${_id}`}>
          <button  type="button" className="px-6 py-3 text-white text-sm tracking-wider border-none outline-none bg-green-400 hover:bg-[#af876a] mt-6">
            View Details
          </button>
        </Link>
            </div>
          </div>
         
          
        </div>
        </div>
       
    );
};

export default AllPropertycard;