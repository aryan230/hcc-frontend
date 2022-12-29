import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import PELoader from "../../Utils/PELoader";

function CheckoutForm({ paymentSucess, setPaymentModal }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setLoader(true);
    const { error, sucess } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      confirmParams: {},
    });

    if (sucess) {
      console.log(sucess);
    }

    if (error) {
      console.log(error.message);
    }
    paymentSucess(true);
    setPaymentModal(false);
    setLoader(false);
  };
  return (
    <div className="max-w-xl p-20 rounded-lg" id="payment-form">
      {loader && <PELoader />}
      <PaymentElement />
      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-600 mt-4 border border-transparent rounded-md py-4 px-8 flex items-center justify-center text-baseleading-6 font-medium text-white hover:bg-indigo-800 md:px-6"
      >
        Pay Now
      </button>
      <div className="mt-2">
        <a
          href="/"
          className="text-lg font-karla text-indigo-600 tracking-tight"
        >
          Need Help?
        </a>
      </div>
      <div>
        <a
          href="/"
          className="text-lg font-karla text-indigo-600 tracking-tight"
        >
          Pay through upi/gpay/phonepay
        </a>
      </div>
    </div>
  );
}

export default CheckoutForm;
