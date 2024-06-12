import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../axios/useAxiosPublic";
// import useAxiosSecure from "../hook/useAxiosSecure";
// import useAxiosPublic from "../axios/useAxiosPublic";
import useAxiosSecure from "../hook/useAxiosSecure";


const CommentSec = ({house,refetchReviews}) => {
    const {property_title} =house
    const axiosSecure = useAxiosSecure()
    const {data:reviews=[],isLoading}=useQuery({
        queryKey:["reviews"],
        queryFn:async()=>{
            const response = await axiosSecure.get("/reviews");
            console.log(response);
            if (response.headers['content-type'].includes('text/html')) {
                throw new Error("Received HTML instead of JSON");
            }
            return response.data;
        }
    })
    const filteredReviews = reviews.filter(review => review.Property_title === property_title);
    // console.log(filteredReviews);
    // console.log(reviews);
    if (isLoading){
        return<p>loading....</p>
    }
    return (
        <div>
           <div className="font-[sans-serif] text-[#333]">
    <div className="">
        <h1 className="text-center font-bold text-5xl py-4">Our Platefrom Reviews</h1>
        <div className="  bg-green-100  gap-8">
        
            {
                filteredReviews.map(rev => (
                    <div key={rev._id}  className="  rounded-3xl py-8  px-2">
                <div  className="flex items-center m-auto  p-6 bg-white shadow-[0_2px_12px_-4px_rgba(93,96,127,0.2)] rounded-xl max-w-md">
                    <img src={rev.reviewerImage} className="w-20 h-20 rounded-full" />
                    <div className="ml-4">
                        <h4 className="text-lg font-extrabold italic">{rev.reviewerName}</h4>
                        <p className="text-sm text-gray-400 mt-1 italic">{rev.description}</p>
                    </div>
                </div>
            </div>
                ))
            }
            </div>
    </div>
</div> 
        </div>
    );
};

export default CommentSec;