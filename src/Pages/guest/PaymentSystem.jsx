import { useLoaderData } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutFrom from "./CheckoutFrom";
// import CheckoutFrom from './CheckoutFrom';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_pk)
const PaymentSystem = () => {
const data =useLoaderData()
// console.log(data);


    return (
        <div>
           <Elements stripe={stripePromise}>
            <CheckoutFrom data={data}></CheckoutFrom>
           </Elements>
        </div>
    );
};

export default PaymentSystem;