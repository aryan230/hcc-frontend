import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  PlusIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  UsersIcon,
  ViewBoardsIcon,
  ViewGridIcon,
  ViewListIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Header from "../Header";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Payment/CheckoutForm";
import { Link, useParams } from "react-router-dom";
import PaymentModal from "./PaymentModal";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "../Loader";
import PELoader from "../../Utils/PELoader";

const checklist = [
  "Unlimited projects",
  "No per user fees",
  "Unlimited storage",
  "24/7 support",
  "Cancel any time",
  "14 days free",
];
function PEResult() {
  const { id } = useParams();
  console.log(id);
  const [paymentSucess, setPaymentSucess] = useState(false);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentModal, setPaymentModal] = useState(false);
  const [formDataLoading, setFormDataLoading] = useState(true);
  const [formData, setFormData] = useState();
  const [subtotal, setSubtotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [Total, setTotal] = useState(0);
  const [idError, setIdError] = useState(false);
  useEffect(() => {
    const collRef = collection(db, "pe-forms");
    if (!formData) {
      setFormDataLoading(true);
      onSnapshot(collRef, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.id === id) {
            setFormData(doc.data());
            console.log(doc.data());
            setFormDataLoading(false);
          } else {
            setFormDataLoading(false);
            setIdError(true);
          }
        });
      });
    }
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/api/config/stripe").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: 2000,
      }),
    }).then(async (r) => {
      const { clientSecret } = await r.json();
      setClientSecret(clientSecret);
    });
  }, []);
  const features = [
    {
      name: "Form Filling",
      description:
        "Fill the short form about your profile complete the form and save the details.",
      icon: CheckIcon,
      check: true,
      href: "Edit",
    },
    {
      name: "Payment",
      description:
        "After completing the form the applicant will make the payment of INR 399.",
      icon: paymentSucess ? CheckIcon : XIcon,
      check: paymentSucess ? true : false,
      href: "View receipt",
    },
    {
      name: "Call From Counsellor",
      description:
        "Applicant will get the call from the counsellor to discuss the profile.",
      icon: XIcon,
      check: false,
      href: "Show status",
    },
    {
      name: "PE Report",
      description:
        "After the counsellor's call the applicant will receive PE report.",
      icon: XIcon,
      check: false,
      href: "View Report",
    },
  ];
  return formData ? (
    <>
      <Header />
      {paymentModal && (
        <PaymentModal
          value={paymentModal}
          setPaymentModal={setPaymentModal}
          paymentSucess={setPaymentSucess}
        />
      )}
      {formDataLoading && <PELoader />}
      <div className="relative bg-white font-karla h-screen">
        <div className="absolute inset-0" aria-hidden="true">
          {paymentSucess ? (
            <div className="absolute inset-y-0 right-0 w-1/2 bg-emerald-500" />
          ) : (
            <div className="absolute inset-y-0 right-0 w-1/2 bg-violet-700" />
          )}
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
          <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-base font-semibold tracking-wide text-cyan-600 uppercase">
                Ref ID: {id}
              </h2>
              <p className="mt-2 text-3xl font-black tracking-wide  font-karla text-sky-900 sm:text-4xl">
                Hey {formData.kd12edg},
              </p>
              <dl className="mt-12 space-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      {feature.check ? (
                        <div className="absolute h-12 w-12 bg-emerald-400 rounded-full flex items-center justify-center">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                      ) : (
                        <div className="absolute h-12 w-12 bg-red-500 rounded-full flex items-center justify-center">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                      )}

                      <p className="ml-16 text-lg leading-6 font-medium text-gray-800">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                    </dd>
                    <Link
                      to="/"
                      className="transition ease-in-out delay-150 mt-2 ml-16 text-base text-indigo-500 hover:-translate-y-1 hover:scale-110"
                    >
                      {feature.href}
                    </Link>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          {paymentSucess ? (
            <div className="bg-emerald-500 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
              <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
                <div>
                  <h2 className="sr-only">Price</h2>
                  <p className="relative">
                    <span className="flex flex-col text-center">
                      <span className="text-5xl font-extrabold text-white tracking-tight">
                        Thanks! We have recieved your Payment.
                      </span>
                    </span>

                    {/* <span>
                  <span className="flex flex-col text-center mt-10">
                    <span className="text-3xl font-extrabold text-white tracking-tight">
                      ₹399
                    </span>
                    <span className="mt-2 text-base font-medium text-gray-100">
                      Per PE Evaluation
                    </span>
                  </span>
                </span> */}
                  </p>
                </div>
                <div className="bg-white">
                  {/* {stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm />
                </Elements>
              )} */}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-violet-700 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
              <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
                <div>
                  <h2 className="sr-only">Price</h2>
                  <p className="relative">
                    <span className="flex flex-col text-center">
                      <span className="text-5xl font-extrabold text-white tracking-tight">
                        Awaiting Payment
                      </span>
                    </span>

                    {/* <span>
                  <span className="flex flex-col text-center mt-10">
                    <span className="text-3xl font-extrabold text-white tracking-tight">
                      ₹399
                    </span>
                    <span className="mt-2 text-base font-medium text-gray-100">
                      Per PE Evaluation
                    </span>
                  </span>
                </span> */}
                  </p>
                  <form className="mt-10 w-full">
                    <label
                      htmlFor="discount-code-mobile"
                      className="block text-sm font-medium text-white"
                    >
                      Discount code
                    </label>
                    <div className="flex space-x-4 mt-1">
                      <input
                        type="text"
                        id="discount-code-mobile"
                        name="discount-code-mobile"
                        className="block w-full uppercase border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <button
                        type="submit"
                        className="bg-gray-200 text-sm font-medium text-gray-700 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                      >
                        Apply
                      </button>
                    </div>
                    <dl className="text-sm text-white font-medium space-y-6 border-t border-white border-opacity-10 pt-6 mt-5">
                      <div className="flex items-center justify-between">
                        <dt>Subtotal</dt>
                        <dd>₹399</dd>
                      </div>

                      <div className="flex items-center justify-between">
                        <dt>Convinience fees (5%)</dt>
                        <dd>₹{(399 * 0.05).toFixed(2)}</dd>
                      </div>

                      <div className="flex items-center justify-between">
                        <dt>Taxes (18%)</dt>
                        <dd>₹{(399 * 0.18).toFixed(2)}</dd>
                      </div>

                      <div className="flex items-center justify-between border-t border-white border-opacity-10 text-white pt-6">
                        <dt className="text-base">Total</dt>
                        <dd className="text-base">₹</dd>
                      </div>
                    </dl>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setPaymentModal(true);
                      }}
                      className="transition ease-in-out  w-full bg-white border  border-transparent rounded-md mt-5 py-4 px-8 flex items-center justify-center text-lg leading-6 font-medium text-gray-800 hover:-translate-y-1 duration-300 md:px-10"
                    >
                      Pay now
                    </button>
                  </form>
                </div>
                <div className="bg-white">
                  {/* {stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm />
                </Elements>
              )} */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  ) : formDataLoading ? (
    <PELoader />
  ) : (
    idError && (
      <>
        <Header />
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <h1 className="text-2xl font-space font-semibold text-red-600">
            {" "}
            The Form ID {id} could not be found. <br />
            Please check and try again.
            <br />
            <Link
              to="/pe/track"
              className="text-indigo-700 font-karla text-xl underline mt-5"
            >
              Go back
            </Link>
          </h1>
        </div>
      </>
    )
  );
}

export default PEResult;
