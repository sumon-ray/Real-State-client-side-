import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { AuthContext } from "../../component/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutFrom = ({data}) => {
  const {offeerAmount,offerProperty}=data;
    const elements = useElements();
    const navigate=useNavigate()
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const [error, setError] = useState('');
    const {user} =useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const totalPrice =offeerAmount;
    // console.log(totalPrice);

    useEffect(()=>{
      if (totalPrice > 0) {
      axiosSecure.post('/create-payment-intent',{price:totalPrice})
      .then(res=>{
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
    }
    },[axiosSecure,totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
          setError("Stripe.js has not loaded yet. Please try again later.");
          return;
        }
    
    const card = elements.getElement(CardElement);
        if (card===null) {
            // setError("Card element not found.");
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card
        });

        if (error) {
          // console.log('payment error', error);
          setError(error.message);
      }
      else {
          console.log('payment method', paymentMethod)
          setError('');
      }
      // confirm payment
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'
            }
        }
    })

    if (confirmError) {
        console.log('confirm error')
    }else {
      console.log('payment intent', paymentIntent)
      if (paymentIntent.status === 'succeeded') {
        Swal.fire({
          title: "Success",
          text: "Payment Successfully Done",
          imageUrl: offerProperty?.productlist?.image,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image"
        });
        navigate('/dashboard/bought')
          console.log('transaction id', paymentIntent.id);
          setTransactionId(paymentIntent.id);

          const payment = {
            date:new Date(),
            paymentdata:data,
            // cartId: data.map(item => item._id),
            // propertyId: data.map(items =>items.offerProperty._id),
          };
          const res = await axiosSecure.post('/payment', payment);
          console.log('payment saved', res.data);
          // refetch();
          if (res.data?.paymentResult?.insertedId) {
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Thank you for the taka paisa",
                  showConfirmButton: false,
                  timer: 1500
              });
              // navigate('/dashboard/bought')
            }
      }
      }
    }
    const cardElementStyles = {
      base: {
        fontSize: '16px',
        color: '#1f2937',
        '::placeholder': {
          color: '#1f2937',
        },
      },
      invalid: {
        color: '#ed2027',
      },
    };
    const containerStyles = {
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      padding: '10px',
      backgroundColor: '#f9fafb',
    };
    return (
        <form className="bg-green-100 min-h-screen px-4 py-8" onSubmit={handleSubmit}>
     


                {/*  */}
                {/*  */}
                <h2 className="text-2xl font-extrabold text-gray-800">Payment Details</h2>
  <div className="grid gap-4 mt-8">
    <div>
      <label className="block text-base font-semibold text-gray-800 mb-2">Card Holder Name</label>
      <input type="text" placeholder="statics" className="px-4 py-3 bg-transparent text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-purple-500 outline-none" />
    </div>
{/*  */}
{/*  */}
<label className="block text-base font-semibold text-gray-800 mb-2">Card Number</label>
<div style={containerStyles}>
<CardElement  options={{ style: cardElementStyles }} 

                />
</div>
{/*  */}
{/*  */}
  

    <div className="grid grid-cols-2 gap-6">
      <div>
        <label className="block text-base font-semibold text-gray-800 mb-2">Expiry Date</label>
        <input type="number" placeholder="08/27" className="px-4 py-3 bg-transparent text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-purple-500 outline-none" />
      </div>

      <div>
        <label className="block text-base font-semibold text-gray-800 mb-2">CVV</label>
        <input type="number" placeholder="XXX" className="px-4 py-3 bg-transparent text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-purple-500 outline-none" />
      </div>
    </div>
  </div>


                {/*  */}
                {/*  */}
      
      
      <button type="submit"  disabled={!stripe || !clientSecret} className="w-full mt-8 py-3 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none bg-transparent hover:bg-green-400 text-black hover:text-white transition-all duration-300" >
        Pay
      </button>
      <p>{error}</p>
      {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
    </form>
    );
};

export default CheckoutFrom;