import React, { useContext, useEffect, useState } from 'react';
import CheckoutForm from '../../../utility/PaymentFrom/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
const stripePromise = loadStripe(import.meta.env.VITE_Publishable_KEY);

const ClassItem = ({ item, handleMolda }) => {
  const { _id, name, price, email, image, seats, classNames } = item;
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   axiosSecure.post("/create-payment-intent", { price })
  //     .then(res => {
  //       console.log(res.data.clientSecret);
  //       setClientSecret(res.data.clientSecret)
  //   })
  // }, [price, axiosSecure]);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div>
          <img
            src={image}
            className="w-full h-[250px]"
            draggable={false}
            alt="class image"
          />
        </div>

        <div className="p-5">
          <h1 className="card-title mb-5">{classNames}</h1>
          <h2 className="card-title">
            Instructors <span className=" text-secondary">{name}</span>
          </h2>
          <div className="flex gap-10">
            <p>Price$ {price}</p>
            <p>Seats {seats}</p>
          </div>

          <div className="modal" id="my_modal_8">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center">Pay Now</h3>
              <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
              </Elements>
              <div className="modal-action">
                <a href="#" className="btn">
                  cancel
                </a>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Select</div>
            <div className="badge badge-outline cursor-pointer">
              <a onClick={() => handleMolda(_id)} href="#my_modal_8">
                Pay
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassItem;