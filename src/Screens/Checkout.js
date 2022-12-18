import Header from "../Components/Header";
import Logo from "../assets/header-logo.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import {
  ORDER_DELIVERED_RESET,
  ORDER_PAY_RESET,
} from "../redux/constants/orderConstant";
import axios from "axios";
import { getOrderDetails, payOrder } from "../redux/actions/orderAction";
import Loader from "../Components/Loader";

const products = [
  {
    id: 1,
    name: "Application Process",
    href: "#",
    price: "₹29,900.00",
    color: "White and black",
    size: "15L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, white handles, and black drawstring top.",
  },
  // More products...
];
const discount = { code: "CHEAPSKATE", amount: "$24.00" };

const Checkout = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { sucess: sucessPay, loading: loadingPay } = orderPay;

  const [paymentLoading, setPaymentLoading] = useState(false);
  const [sdkready, setsdkReady] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [course, setCourse] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [taxPrice, setTaxPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [user, setUser] = useState(false);

  const startRazorPay = async () => {
    setPaymentLoading(true);
    const { data: clientId } = await axios.get(
      "https://hcc-backend.onrender.com/api/config/razorpay"
    );

    const result = await axios.post(
      "https://hcc-backend.onrender.com/api/create-order",
      {
        amount: totalPrice,
        receipt: order._id,
      }
    );
    setPaymentLoading(false);
    const { amount, id, currency } = result.data;
    var options = {
      key: clientId, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: currency,
      name: order._id,
      description: "Transaction For The Farsan",
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
        console.log(response);
        dispatch(payOrder(orderId, response));
      },
    };

    setsdkReady(true);
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    if (!order) {
      dispatch(getOrderDetails(orderId));
    } else {
      if (order._id !== orderId) {
        dispatch(getOrderDetails(orderId));
      } else {
        setCoursePrice(Number(order.coursePrice));
        setTaxPrice(Number(order.coursePrice * 0.18));
        setTotalPrice(
          Number(order.coursePrice) +
            Number(order.coursePrice * 0.18) -
            Number(discountPrice)
        );
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
        if (sucessPay) {
          dispatch({ type: ORDER_PAY_RESET });
          dispatch({ type: ORDER_DELIVERED_RESET });
          dispatch(getOrderDetails(orderId));
        } else if (!order.isPaid) {
          if (!window.razerpay) {
            addRazorPayScript();
          } else {
            setsdkReady(true);
          }
        }
      }
    }
  }, [dispatch, order, orderId, sucessPay]);

  return loading ? (
    <Loader />
  ) : error ? (
    <h1>{error}</h1>
  ) : (
    <>
      <div className="bg-white">
        {/* Background color split screen for large screens */}
        <div
          className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white"
          aria-hidden="true"
        />
        <div
          className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-indigo-900"
          aria-hidden="true"
        />

        <header className="relative max-w-7xl mx-auto bg-indigo-900 py-6 lg:bg-transparent lg:grid lg:grid-cols-2 lg:gap-x-16 lg:px-8 lg:pt-16 lg:pb-10">
          <div className="max-w-2xl mx-auto flex px-4 lg:max-w-lg lg:w-full lg:px-0">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img src={Logo} alt="" className="h-8 w-auto lg:hidden" />
              <img src={Logo} alt="" className="hidden lg:block h-8 w-auto" />
            </a>
          </div>
        </header>

        <main className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2">
          <h1 className="sr-only">Checkout</h1>

          <section
            aria-labelledby="summary-heading"
            className="bg-indigo-900 text-indigo-300 pt-6 pb-12 md:px-10 lg:max-w-lg lg:w-full lg:mx-auto lg:px-0 lg:pt-0 lg:pb-24 lg:bg-transparent lg:row-start-1 lg:col-start-2"
          >
            <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
              <h2 id="summary-heading" className="sr-only">
                Order summary
              </h2>

              <dl>
                <dt className="text-sm font-medium">Amount due</dt>
                <dd className="mt-1 text-3xl font-extrabold text-white">
                  ₹29,900
                </dd>
              </dl>

              <ul
                role="list"
                className="text-sm font-medium divide-y divide-white divide-opacity-10"
              >
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-start py-6 space-x-4"
                  >
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="flex-none w-20 h-20 rounded-md object-center object-cover"
                    />
                    <div className="flex-auto space-y-1">
                      <h3 className="text-white">{product.name}</h3>
                      <p>{product.color}</p>
                      <p>{product.size}</p>
                    </div>
                    <p className="flex-none text-base font-medium text-white">
                      {product.price}
                    </p>
                  </li>
                ))}
              </ul>

              <dl className="text-sm font-medium space-y-6 border-t border-white border-opacity-10 pt-6">
                <form>
                  <label
                    htmlFor="discount-code"
                    className="block text-sm font-medium text-white"
                  >
                    Discount code
                  </label>
                  <div className="flex space-x-4 mt-1">
                    <input
                      type="text"
                      id="discount-code"
                      name="discount-code"
                      className="uppercase text-black block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-800 focus:border-indigo-800 sm:text-sm"
                    />
                    <button
                      type="submit"
                      className="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                      Apply
                    </button>
                  </div>
                </form>
                <div className="flex items-center justify-between">
                  <dt>Subtotal (Course Fees)</dt>
                  <dd>₹ {coursePrice}</dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt>Total Discount</dt>
                  <dd>₹ {discountPrice}</dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt>Taxes</dt>
                  <dd> ₹ {taxPrice}</dd>
                </div>

                <div className="flex items-center justify-between border-t border-white border-opacity-10 text-white pt-6">
                  <dt className="text-base">Grand Total</dt>
                  <dd className="text-base">₹ {totalPrice}</dd>
                </div>
              </dl>
            </div>
          </section>

          <section
            aria-labelledby="payment-and-shipping-heading"
            className="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1"
          >
            <h2 id="payment-and-shipping-heading" className="sr-only">
              Payment and shipping details
            </h2>
            {userInfo ? (
              <form>
                <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
                  <div>
                    <h3
                      id="contact-info-heading"
                      className="text-lg font-medium text-gray-900"
                    >
                      Welcome, {userInfo.name}
                    </h3>
                    {order.isPaid && (
                      <>
                        <div className="mt-10 flex justify-evenly pt-6 border-t border-gray-200 w-full">
                          <button className="border bg-indigo-600 border-indigo-600 rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white  focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500">
                            Track your progress
                          </button>
                          <button
                            disabled
                            className="border border-green-600 rounded-md shadow-sm py-2 px-4  text-sm font-medium text-green-700  focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500"
                          >
                            Payment Sucess on {order.paidAt.slice(0, 10)}
                          </button>
                        </div>
                      </>
                    )}
                    <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                      <div className="col-span-3 sm:col-span-4">
                        <label
                          htmlFor="card-number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="card-number"
                            value={userInfo.name}
                            name="card-number"
                            disabled
                            autoComplete="cc-number"
                            className="block w-full border-indigo-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          value={userInfo.email}
                          id="email-address"
                          disabled
                          name="email-address"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          autoComplete="email"
                          className="block w-full border-indigo-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          id="phone-number"
                          name="phone-number"
                          autoComplete="email"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3
                      id="shipping-heading"
                      className="text-lg font-medium text-gray-900"
                    >
                      Shipping address
                    </h3>

                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Address
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="address"
                            name="address"
                            autoComplete="street-address"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="city"
                            name="city"
                            autoComplete="address-level2"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="region"
                            name="region"
                            autoComplete="address-level1"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Postal code
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="postal-code"
                            name="postal-code"
                            autoComplete="postal-code"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {!order.isPaid && (
                    <>
                      {loadingPay && <h1>Loading</h1>}
                      {!sdkready ? (
                        <h1>Loading</h1>
                      ) : (
                        <div className="mt-10 flex justify-end pt-6 border-t border-gray-200">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              startRazorPay();
                            }}
                            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                          >
                            Pay now
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </form>
            ) : (
              <form>
                <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
                  <div>
                    <h3
                      id="contact-info-heading"
                      className="text-lg font-medium text-gray-900"
                    >
                      Contact information
                    </h3>
                    <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                      <div className="col-span-3 sm:col-span-4">
                        <label
                          htmlFor="card-number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="card-number"
                            name="card-number"
                            autoComplete="cc-number"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          value={email}
                          id="email-address"
                          name="email-address"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          autoComplete="email"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          id="phone-number"
                          name="phone-number"
                          autoComplete="email"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3
                      id="shipping-heading"
                      className="text-lg font-medium text-gray-900"
                    >
                      Shipping address
                    </h3>

                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Address
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="address"
                            name="address"
                            autoComplete="street-address"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="city"
                            name="city"
                            autoComplete="address-level2"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="region"
                            name="region"
                            autoComplete="address-level1"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Postal code
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="postal-code"
                            name="postal-code"
                            autoComplete="postal-code"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex justify-end pt-6 border-t border-gray-200">
                    <button
                      type="submit"
                      className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                      Pay now
                    </button>
                  </div>
                </div>
              </form>
            )}
          </section>
        </main>
      </div>
    </>
  );
};

export default Checkout;
