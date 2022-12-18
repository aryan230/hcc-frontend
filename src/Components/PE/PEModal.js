import React, { useEffect } from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon,
  CursorClickIcon,
  MenuIcon,
  BadgeCheckIcon,
  FireIcon,
  ReceiptTaxIcon,
  PhoneIcon,
  PlayIcon,
  ArrowNarrowRightIcon,
  PlusIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  LightningBoltIcon,
  UsersIcon,
  ViewBoardsIcon,
  ViewGridIcon,
  ViewListIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { payOrder } from "../../redux/actions/orderAction";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import Check from "../../assets/check.gif";

function PEModal({ value, closePEModal, id, data }) {
  const formId = id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentLoading, setPaymentLoading] = useState(false);
  const [sdkready, setsdkReady] = useState(false);
  const [open, setOpen] = useState(value);
  const [totalPrice, setTotalPrice] = useState(99);
  const [paymentSucess, setPaymentSucess] = useState(false);
  const [order, setOrder] = useState();

  const features = [
    {
      name: "Form Filling",
      description:
        "Fill the short form about your profile complete the form and save the details.",
      icon: CheckIcon,
      check: true,
    },
    {
      name: "Payment",
      description:
        "After completing the form the applicant will make the payment of INR 399.",
      icon: paymentSucess ? CheckIcon : XIcon,
      check: paymentSucess ? true : false,
    },
    {
      name: "Call From Counsellor",
      description:
        "Applicant will get the call from the counsellor to discuss the profile.",
      icon: XIcon,
      check: false,
    },
    {
      name: "PE Report",
      description:
        "After the counsellor's call the applicant will receive PE report.",
      icon: XIcon,
      check: false,
    },
  ];

  const startRazorPay = async () => {
    setPaymentLoading(true);
    const { data: clientId } = await axios.get(
      "https://hcc-backend.onrender.com/api/config/razorpay"
    );

    const result = await axios.post(
      "https://hcc-backend.onrender.com/api/create-order",
      {
        amount: totalPrice,
      }
    );
    setPaymentLoading(false);
    const { amount, id, currency } = result.data;
    var options = {
      key: clientId, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: currency,
      name: id,
      description: "Transaction For The Honest Career Company",
      image: "https://i.ibb.co/cTjDFcB/Chetan-s.png",
      order_id: id,
      prefill: {
        name: "The Honest Career Company",
        email: "support@thehonestcareerco.in",
        contact: "7045013337",
      },
      readonly: {
        email: true,
        contact: true,
        name: true,
      },
      theme: {
        color: "#2F2E41",
      },
      handler: function (response) {
        const docRef = doc(db, "pe-forms", formId);
        console.log(response);
        updateDoc(docRef, {
          isPaid: true,
          payment: response,
        });
        setPaymentSucess(true);
      },
    };

    setsdkReady(true);
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const collRef = collection(db, "pe-forms");

  useEffect(() => {
    if (id) {
      if (!order) {
        onSnapshot(collRef, (snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.id === id) {
              setOrder(doc.data());
            }
          });
        });
      }
      const addRazorPayScript = () => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = async () => {
          setsdkReady(true);
        };
        document.body.appendChild(script);
      };
      if (!window.razerpay) {
        addRazorPayScript();
      } else {
        setsdkReady(true);
      }
    }
  }, [id, order]);

  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={value} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto zIndexIncrement"
        onClose={closePEModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-max sm:w-full sm:p-6">
              <div className="relative bg-white">
                <div className="absolute inset-0" aria-hidden="true">
                  <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-b from-sky-600 to-indigo-800" />
                </div>
                <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
                  <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
                    <div className="max-w-lg mx-auto lg:mx-0">
                      <h2 className="text-base font-semibold tracking-wide text-cyan-600 uppercase">
                        Ref ID: {id}
                      </h2>
                      <p className="mt-2 text-3xl font-extrabold text-sky-900 sm:text-4xl">
                        Hey {data.kd12edg},
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
                            <dd className="mt-2 ml-16 text-sm text-gray-500">
                              {feature.description}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-600 to-green-400 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
                    {paymentSucess ? (
                      <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
                        <div className="w-full flex items-center justify-center">
                          <div className="bg-emerald-200 flex w-24 h-24 justify-center items-center rounded-full">
                            <CheckIcon className="text-green-600 w-12 h-12" />
                          </div>
                        </div>

                        <span className="flex flex-col text-center">
                          <span className="text-4xl font-extrabold text-white uppercase">
                            Payment
                          </span>
                          <span className="text-4xl font-extrabold text-white uppercase">
                            Sucessfull
                          </span>
                          <span className="mt-2 text-sm  text-gray-200">
                            REF ID: {id}
                          </span>
                          <span className="sr-only">plus</span>
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            startRazorPay();
                          }}
                          className="w-full bg-white border border-transparent rounded-md py-4 px-8 flex items-center justify-center text-lg leading-6 font-medium text-cyan-700 hover:bg-cyan-50 md:px-10"
                        >
                          Track your PE
                        </button>
                        <div className="max-w-sm mx-auto">
                          {" "}
                          <a
                            href="#"
                            className="block text-center text-base  text-cyan-100 hover:text-white"
                          >
                            A mail will be sent to your registered email address
                            with the details.
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
                        <div>
                          <h2 className="sr-only">Price</h2>
                          <p className="relative grid grid-cols-2">
                            <span className="flex flex-col text-center">
                              <span className="text-5xl font-extrabold text-white tracking-tight">
                                ₹399
                              </span>
                              <span className="mt-2 text-base font-medium text-gray-200">
                                Orignal Price
                              </span>
                              <span className="sr-only">plus</span>
                            </span>
                            <span
                              className="pointer-events-none absolute h-12 w-full flex items-center justify-center"
                              aria-hidden="true"
                            >
                              <ArrowNarrowRightIcon
                                className="h-10 w-10 text-white"
                                aria-hidden="true"
                              />
                            </span>
                            <span>
                              <span className="flex flex-col text-center">
                                <span className="text-5xl font-extrabold text-white tracking-tight">
                                  ₹99
                                </span>
                                <span className="mt-2 text-base font-medium text-gray-100">
                                  Limited Time Price
                                </span>
                              </span>
                            </span>
                          </p>
                        </div>
                        <ul role="list" className="rounded overflow-hidden">
                          <li className="bg-opacity-50 py-4 px-4 flex items-center text-base text-white justify-center">
                            <FireIcon
                              className="h-6 w-6 text-gray-200"
                              aria-hidden="true"
                            />
                            <span className="ml-3">
                              Limited Time Deal. Ends Soon.
                            </span>
                          </li>
                        </ul>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            startRazorPay();
                          }}
                          className="w-full bg-white border border-transparent rounded-md py-4 px-8 flex items-center justify-center text-lg leading-6 font-medium text-cyan-700 hover:bg-cyan-50 md:px-10"
                        >
                          {!sdkready ? "Loading" : "Pay Now"}
                        </button>
                        <a
                          href="#"
                          className="block text-center text-base font-medium text-cyan-100 hover:text-white"
                        >
                          T & C's Applied
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default PEModal;
