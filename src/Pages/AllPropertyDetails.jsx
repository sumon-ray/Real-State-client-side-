import {  Modal } from "flowbite-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../hook/useAxiosCommon";
// import RviewModal from "../component/RviewModal";
import { useContext, useState } from "react";
import { AuthContext } from "../component/AuthProvider";
// import useAxiosSecure from "../hook/useAxiosSecure";
import Swal from "sweetalert2";
// import useAxiosPublic from "../axios/useAxiosPublic";
import CommentSec from "../component/CommentSec";
import useAxiosSecure from "../hook/useAxiosSecure";

const AllPropertyDetails = () => {
  
  // review section
  const {user} =useContext(AuthContext)
  // 
  const axiosSecure =useAxiosSecure()
  const [loading,setloading] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const {mutateAsync} = useMutation({
    mutationFn:async result=>{
        const {data} = await axiosSecure.post("/reviews",result)
        return data
    },
    onSuccess:()=>{
       console.log("adde success");
       
       Swal.fire("added Successfully!");
          // navigate("/house/:id")
          refetch()
        setloading(false)
    }
})
  // 
  const handleReview =async e => {
    e.preventDefault();
    const form = e.target;
    const description = form.description.value;
    const reviewerName=user?.displayName;
    const reviewerImage=user?.photoURL;
    const reviewerEmail=user?.email;
    const Property_title=house?.property_title;
    const agentName = house?.agent?.name;
    const reviewTime=new Date()
    // const result = {reviewTime,description,reviewerName,reviewerImage,reviewerEmail,Property_title}


    // console.log(result);

    try{
      
      const result = {reviewTime,agentName,description,reviewerName,reviewerImage,reviewerEmail,Property_title}
      // console.log(result);
      await mutateAsync(result)
      form.reset();
  }catch (error) {
      console.log(error);
      // Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Something went wrong!",
      //     footer: '<a href="#">Why do I have this issue?</a>'
      //   });
      setloading(false)
  }finally{
    setButtonDisabled(false);
  }
  }
  // 
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
// 
function onCloseModal() {
  setOpenModal(false);
  setEmail('');
}
// 

// 
// review sectio closed
    const {id} =useParams()
  const axiosCommon = useAxiosCommon();
  const { data: house = {}, isLoading,error,refetch } = useQuery({
    queryKey: ["house",id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/house/${id}`);
      return data;
    },
  });
  // console.log(house);
  if (isLoading) {
    return<p>loading....</p>;
       
    }
    if (error) {
        return <p>Error loading data: {error.message}</p>;  // Display an error message
      }
    // console.log(house);
    const addWishlist=async(e) => {
      // e.preventDefault();
      const productlist = e;
      const buyername=user.displayName;
      const buyeremail=user.email;
      const date=new Date()
     
    
      const res={productlist, buyername, buyeremail,date,}
      const menuRes = await axiosSecure.post('/wishlist',res);
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
            
            // reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: ' is added to the menu.',
                showConfirmButton: false,
                timer: 1500
              });
        }
    
      // console.log(res);
    }
  return <div>
    <section>
	<div className="bg-green-100">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">{house?.property_title}</h1>
			<p className="mt-6 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">{house?.description}</p>
            {/* <p className="  text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">Price Range: max: {house?.price_range.max} || min: {house?.price_range.min}  </p> */}
            <div>
              <p className="font-bold pb-3">Agent : {house.agent?.name}</p>
            </div>
			<div className="flex flex-wrap justify-center">
				<button onClick={()=>addWishlist(house)} type="button" className="px-8 py-3 border m-2 text-lg font-semibold rounded bg-green-400 dark:bg-gray-100 dark:text-gray-900">Add Wishlist</button>
				
				
				{/*  */}
				{/*  */}
				{/*  */}
        <button className="px-8 py-3 m-2 text-lg font-semibold border bg-green-400 rounded dark:border-gray-300 dark:text-gray-50" onClick={() => setOpenModal(true)}>Add Review</button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h1>Hi!👋 You Can Provide Your Opinion!</h1>
            <form onSubmit={handleReview}>
            <textarea placeholder='Type Message'
            required
            type="text"
            name="description"
    className="p-4 bg-white max-w-md mx-auto w-full block text-sm border border-gray-300 outline-[#007bff] rounded" rows="4"></textarea>


<div className="w-full mt-4">
              <input type="submit" disabled={buttonDisabled} value="Submit" className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-gradient-to-tr hover:bg-gradient-to-tl from-purple-700 to-purple-300" />
            </div>
            </form>
           
            
              
            
            
           
          </div>
        </Modal.Body>
      </Modal>
				{/*  */}
				{/*  */}
				{/*  */}
			</div>
		</div>
	</div>
	<img src={house.image} alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
</section>

{/*  */}
{/*  */}

{/*  */}
{/*  */}
<CommentSec house={house} refetchReviews={refetch}></CommentSec>
  </div>;

};

export default AllPropertyDetails;
