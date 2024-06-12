
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { imageUpload } from "../../../api/utils";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";



const UpdatePropery = () => {
    const navigate = useNavigate();
    const axiosSecure=useAxiosSecure()
    const [imagePreview, setImagePreview] = useState()
  const [imageText, setImageText] = useState('Upload Image')
  const [loading,setloading] = useState(false)
    const Data = useLoaderData();
    console.log(Data);
    const handleImage = image => {
        
        setImagePreview(URL.createObjectURL(image))
        setImageText(image.name)
      }
    const handleUpdate =async (e)=>{
        e.preventDefault();
        const form=e.target;
        const min_price = parseFloat(form.min_price.value);
        const max_price = parseFloat(form.max_price.value);
        const image = form.image.files[0]
        const location = form.property_location.value;
        const property_title =form.property_title.value;
        const price_range = {
            min: min_price,
            max: max_price
          };
        // const
        
        try{
            setloading(true);
            const image_url = await imageUpload(image)
            const res={image:image_url,location,property_title,price_range}
            console.log(res);
            const response = await axiosSecure.patch(`/house/${Data?._id}`,res);
            if (response.data.modifiedCount > 0) {
                // Show success popup
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: ` has been updated successfully.`,
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate("/dashboard/myaddedpro");
              }
              setloading(false);
        }catch(error) {
            // console.log(error);
            // setloading(false)
        }
       
       
    }





    
    return (
        <div className="bg-green-100 py-4">
            <div className="my-6 mx-auto max-w-xl p-4 bg-white font-[sans-serif]">
  <h1 className="text-3xl text-[#333] font-extrabold text-center">Update Your Information</h1>
  <form onSubmit={handleUpdate}  className="mt-8 space-y-6">
    <div>
      <label className="text-sm font-semibold block mb-2">Property Title</label>
      <input
        type="text"
        name="property_title"
        required
        placeholder="Property title"
       
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      />
    </div>
    <div>
      <label className="text-sm font-semibold block mb-2">Property Location</label>
      <input
        type="text"
        required
        name="property_location"
        placeholder="Property location"
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      />
    </div>
    <div>
      <label className="text-sm font-semibold block mb-2">Agent Name</label>
      <input
        type="text"
        defaultValue={Data?.agent?.name}
        placeholder="Agent Name"
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      />
    </div>
    <div>
      <label className="text-sm font-semibold block mb-2">Agent Email</label>
      <input
        type="email"
        placeholder="Agent Email"
        defaultValue={Data?.agent?.email}
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      />
    </div>
    <div>
      <label className="text-sm font-semibold block mb-2">Max Price Range</label>
      <input
        type="number"
        required
        name="max_price"
        placeholder="Price Range"
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      />
    </div>
    <div>
      <label className="text-sm font-semibold block mb-2">Min Price Range</label>
      <input
        type="number"
        required
        name="min_price"
        placeholder="Price Range"
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      />
    </div>
    {/*  */}
    <input
          type="file"
          onChange={e => handleImage(e.target.files[0])}
          name='image'
          id='image'
          accept='image/*'
          
          required
          className="w-full  text-gray-500 font-medium text-lg bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
        />
    {/*  */}
    
      
     <input type="submit" value="Update"   className="text-white bg-green-400 hover:bg-green-600 font-semibold rounded-md text-sm px-4 py-3 w-full"/>
    
    
  </form>
</div>
        </div>
    );
};

export default UpdatePropery;