import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../hook/useAxiosCommon";


const LatestReviews = () => {

    const axiosCommon = useAxiosCommon()
    const {data:reviews=[],isLoading}=useQuery({
        queryKey:["reviews"],
        queryFn:async()=>{
            const {data} = await axiosCommon.get("/review")
            return data;


        }
    })
    console.log(reviews);
    if (isLoading){
        return<p>loading....</p>
         
        
    }
    return (
      <div className="my-6 font-[sans-serif] text-[#333] mt-20">
      <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl font-extrabold p-3">What our happy client <span className="text-[#a8181f]">say</span></h2>
              <p className="text-sm max-w-2xl mx-auto mt-2 leading-relaxed">Credibly expedite process-centric methodologies and customer directed customer service. Competently scale e-business partnerships rather than</p>
          </div>
         
          <div className="grid md:grid-cols-3 md:gap-6 max-md:gap-10 max-md:justify-center text-center mt-12">
              {
                reviews.map(revie=>(
                  <div key={revie._id} className="max-w-[350px] h-auto p-4 rounded-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)]">
                  <div className="flex flex-col items-center">
                      <img src={revie?.reviewerImage} className="w-70 object-contain object-top rounded-md h-[250px] " alt="John Doe" />
                      <div className="mt-4">
                          <h4 className="text-sm font-extrabold">{revie.reviewerName}</h4>
                          <p className="text-xs text-gray-400 font-extrabold mt-1">{revie?.Property_title}</p>
                      </div>
                      <div className="flex justify-center space-x-1 mt-4">
                          <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                      </div>
                  </div>
                  <div className="mt-4">
                      <p className="text-sm leading-relaxed">{revie?.description}</p>
                  </div>
              </div>
                ))
              }
             
          </div>
      </div>
      
  </div>
    );
};

export default LatestReviews;