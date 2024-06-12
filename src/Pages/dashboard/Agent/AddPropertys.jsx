import { useContext, useState } from "react";
import Form from "../../../component/Form";
import { AuthContext } from "../../../component/AuthProvider";
import { imageUpload } from "../../../api/utils";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddPropertys = () => {
    const axiosSecure =useAxiosSecure()
    const navigate=useNavigate()
    const [loading,setloading] = useState(false)
const {user} =useContext(AuthContext)

const {mutateAsync} = useMutation({
    mutationFn:async result=>{
        const {data} = await axiosSecure.post("/house",result)
        return data
    },
    onSuccess:()=>{
       console.log("adde success");
       Swal.fire("added Successfully!");
          navigate("/dashboard/myaddedpro")
        setloading(false)
    }
})

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        const form = e.target;
        const property_title=form.property_title.value;
        const location=form.location.value;
        const min_price = parseFloat(form.min_price.value);
  const max_price = parseFloat(form.max_price.value);
        // const price_range = form.price_range.value;
        const description = form.description.value;
        const status="pending";
        const price_range = {
            min: min_price,
            max: max_price
          };
        
          
        const image = form.image.files[0];
        const agent= {
            name:user?.displayName,
            image:user?.photoURL,
            email:user?.email
        }
        try{
            const image_url = await imageUpload(image)
            const result ={property_title,status,location,price_range,image:image_url,agent,description}
            // console.log(result);
            await mutateAsync(result)
        }catch (error) {
            console.log(error);
            // Swal.fire({
            //     icon: "error",
            //     title: "Oops...",
            //     text: "Something went wrong!",
            //     footer: '<a href="#">Why do I have this issue?</a>'
            //   });
            setloading(false)
        }
        const image_url = await imageUpload(image)
        console.log(image_url);
        
        // console.log(result);
    }
    return (
        <div>
            
            <div>
            <div
  className="grid lg:grid-cols-3 items-center max-lg:justify-center h-full py-6 px-16 max-sm:px-4 bg-green-100 font-[sans-serif]"
>
  <div className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6">
    <h2 className="text-4xl font-extrabold text-[#333]">Get In Touch</h2>
    <p className="text-sm text-[#333] mt-4">
      Have a specific inquiry or looking to explore new opportunities? Our experienced team is ready to engage with you.
    </p>
   <Form handleSubmit={handleSubmit} loading={loading}></Form>
  </div>
  <div className="z-10 relative lg:col-span-2">
    <img src="https://readymadeui.com/contact.webp" className="w-full" />
  </div>
</div>
            </div>
        </div>
    );
};

export default AddPropertys;