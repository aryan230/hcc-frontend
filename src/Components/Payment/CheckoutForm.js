import React from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://thehonestcareerco.in/thanks/1",
      },
    });

    if (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="max-w-xl p-20 rounded-lg" id="payment-form">
      <PaymentElement />
      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-600 mt-4 border border-transparent rounded-md py-4 px-8 flex items-center justify-center text-baseleading-6 font-medium text-white hover:bg-indigo-800 md:px-6"
      >
        Pay Now
      </button>
    </div>
  );
}

export default CheckoutForm;
