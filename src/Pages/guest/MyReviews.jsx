import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { AuthContext } from "../../component/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";


const MyReviews = () => {
const {user} = useContext(AuthContext)
console.log(user);
    // 
    // 
    const axiosSecure = useAxiosSecure();
    const { data: review = [], isLoading, refetch } = useQuery({
        queryKey: ["myreviews", user?.email],
        queryFn: async () => {
          if (!user?.email) return [];
          const { data } = await axiosSecure.get(`/reviews/${user?.email}`);
          return data;
        },
        enabled: !!user?.email, 
      });
    // console.log(review);
    if (isLoading) {
      return <p>loading....</p>;
    }
    // 

    const handleDelte = (data) => {
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
                axiosSecure.delete(`/review/${data}`)
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
    return (

      <div className="grid grid-cols-1 md:grid-cols-2 bg-green-100">
      {review.length > 0 ? (
        review.map(review => (
          <div key={review._id} className="review">
             <div className="font-[sans-serif] max-w-[350px] h-auto p-8 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative my-12">
              <h1>{review.Property_title}</h1>
           {/* <img src="https://readymadeui.com/profile_2.webp" className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7" /> */}
           <div className="mt-8 text-center">
               <p className="text-sm text-[#333] leading-relaxed">{review.description}</p>
               <p className="text-sm text-[#333] leading-relaxed">{review.reviewTime}</p>
      
               <h4 className="text-base font-extrabold mt-8">{review.agentName}</h4>
           </div>
           <button onClick={()=>handleDelte(review._id)} type="button"
              className="px-5 mt-2 py-2.5 w-full rounded-lg text-sm tracking-wider font-medium border border-purple-700 outline-none bg-transparent hover:bg-purple-700 text-purple-700 hover:text-white transition-all duration-300">Delete</button>
       </div>
       
          </div>
        ))
      ) : (
        <p>No reviews found for this user.</p>
      )}
      </div>
    )
};

export default MyReviews;