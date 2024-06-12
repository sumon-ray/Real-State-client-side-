import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";

const OfferdPage = () => {
    const item =useLoaderData()
    const navigate =useNavigate()
    const price_range=item.productlist.price_range; 
    const [startDate, setStartDate] = useState(new Date());
    const [error,setError]=useState()
    const[offerAmount,setOfferAmount] =useState()
    const axiosSecure =useAxiosSecure()

    const mutation = useMutation({
        mutationFn: async (result) => {
          const { data } = await axiosSecure.post("/offerd", result);
          return data;
        },
        onSuccess: () => {
          Swal.fire("Success", "Offer added successfully!", "success");
          navigate("/dashboard/bought");

        },
        onError: (error) => {
          Swal.fire("Error", error.message, "error");
        },
      });

    const handleSubmit= async  (e)=>{
    e.preventDefault();
    const amount = parseFloat(offerAmount);
  
    if (isNaN(amount)) {
      setError('Please enter a valid number for the offer amount.');
      return;
    }
    if (amount < price_range?.min || amount > price_range?.max) {

        setError(`Offered amount must be between`);
        Swal.fire("you must be added price between min and max!");
        return;
      }
      const offerProperty = item;
      const offeerAmount= parseFloat(amount);
      const res={offerProperty,offeerAmount}
      // console.log(res);


       
    setError("");
    mutation.mutate(res);
    
} 


    
    
     


    return (
        <div>
            <div className="font-[sans-serif] max-w-7xl mx-auto relative bg-green-100 rounded-xl overflow-hidden">
  <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-green-400"></div>
  <div className="absolute -bottom-6 -left-0 w-24 h-20 rounded-tr-[40px] bg-green-400"></div>
  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-green-400"></div>
  <div className="absolute -bottom-6 -right-0 w-24 h-20 rounded-tl-[40px] bg-green-400"></div>
  <div className="grid md:grid-cols-2">
    <div className="text-center p-6 xl:p-10 flex flex-col items-center justify-center">
      <h2 className="text-3xl text-green-400 font-bold">Contact Us</h2>
      <img src="https://readymadeui.com/contact.webp" className="mt-4 shrink-0 w-full" />
    </div>
    <form onSubmit={handleSubmit} className="bg-green-100 p-6 xl:p-10">
      <div className="max-w-sm mx-auto space-y-4">
      <div>
        <h1>Property Title</h1>
        <input
          type=""
          defaultValue={item?.productlist?.property_title}
          placeholder="Email"
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        </div>
       <div>
        <h1>Property Location</h1>
        <input
          type=""
          defaultValue={item?.productlist?.location}
          placeholder="Email"
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        </div>
        <div>
        <h1>Agent Name</h1>
        <input
          type="text"
          defaultValue={item?.productlist?.agent?.name}
          placeholder="Email"
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        </div>
       <div>
        <h1>Offerd Amount</h1>
        <input
        type="number" 
        value={offerAmount}
        
        placeholder={`between : ${price_range?.max} - ${price_range?.min}`}
        onChange={(e) => setOfferAmount(e.target.value)}
        className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"

        />
        </div>
        <div>
        <h1>Buyer Email</h1>
        <input
          type="text"
          defaultValue={item?.buyeremail}
          placeholder="Email"
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        </div>
        <div>
        <h1>Buyer Name</h1>
        <input
          type=""
          defaultValue={item?.buyername}
          placeholder="Email"
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        </div>
        <div>
        <h1>Buying Date</h1>
        <div  className="w-full bg-gray-100 rounded  px-4 text-sm outline-none">
        <DatePicker className="w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
         
         
        
        </div>
        {error && <div className="error">{error}</div>}
        {/* <input type="submit" value="OFFER" /> */}
         <input type="submit"
         value="Submit"
         className="text-white w-full relative bg-green-600 hover:bg-blue-600 font-semibold rounded text-sm px-6 py-3"
         />
        
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default OfferdPage;