import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import Modals from "../../Utils/Modals";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { CART_RESET } from "../../redux/constants/cartConstants";
import { ORDER_CREATE_RESET } from "../../redux/constants/orderConstant";
import { createOrder, listMyOrders } from "../../redux/actions/orderAction";
import OrderModal from "../Order/orderModal";
import InsideLoader from "../InsideLoader";
import Loader from "../Loader";
import APImg from "../../assets/ap14.png";
import APImgSM from "../../assets/ap10.png";
import EnrollBtn from "../Apply/EnrollBtn";
const product = {
  name: "UNIVERSITY ADMISSION 2023",
  price: "₹25,000",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    "It all starts from choosing best universities from all around globe, our experts help you out with the process until you reach at your dream university.",
  highlights: [
    "Crispy SOP (Statement of Purpose)",
    "Preparing Documents which will be needed to fill up the form",
    "Application form filling",
    "Filling up the forms for Scholarships",
    "Preparing the applicant for interview (If Required)",
    "Responding to the universities",
    "Helping out to book Accommodation",
    "Arranging documents From university for VISA applications",
    "Filling up the VISA application form",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AP = () => {
  const id = "63bb8f3ee651c1ced5e9c67a";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [orderModalValue, setorderModalValue] = useState(false);
  const [orderID, setOrderID] = useState();
  const [loader, setLoader] = useState(false);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, sucess, error, loading: orderCreateLoading } = orderCreate;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { orders, loading: loadingOrders, error: errorOrders } = orderListMy;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  let { userInfo } = userLogin;

  //Calculate prices
  if (cartItems) {
    cart.itemsPrice = cart.cartItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );

    cart.taxPrice = 0;
    // cart.discountPrice = cartItems
    //   .reduce((acc, item) => acc + item.qty * item.price * discountAmount, 0)
    //   .toFixed(2);
    cart.totalPrice = Number(cart.itemsPrice) + Number(cart.taxPrice);
  }

  // const addToCartHandler = async () => {
  //   setLoader(true);
  //   if (orders.some((order) => order.orderCourse[0].product === id)) {
  //     setOrderID(
  //       orders.find((order) => order.orderCourse[0].product === id)._id
  //     );
  //     setLoader(false);
  //     setorderModalValue(true);
  //     return;
  //   } else {
  //     fetch(`https://hcc-backend.onrender.com/api/products/${id}`)
  //       .then((response) => response.json())
  //       .then(async (data) => {
  //         await dispatch(
  //           createOrder({
  //             orderCourse: {
  //               product: data._id,
  //               name: data.name,
  //               price: data.price,
  //             },
  //             paymentMethod: "Razorpay",
  //             coursePrice: Number(29900),
  //             taxPrice: 0,
  //             totalPrice: Number(29900),
  //           })
  //         );
  //       });

  //     setLoader(false);
  //   }
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (userInfo) {
      dispatch(listMyOrders());
    }
    if (sucess) {
      navigate(`/checkout/${order._id}`);
    }
  }, [navigate, sucess, userInfo]);
  return (
    <div className="bg-white">
      {loader && <Loader />}
      {userInfo && (
        <OrderModal
          value={orderModalValue}
          closeOrderModal={setorderModalValue}
          data={orderID}
          userData={userInfo}
        />
      )}

      <Modals value={open} closeModal={setOpen} />
      <div className="pt-6">
        {/* Image gallery */}
        {/* <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={APImg}
              alt={product.images[3].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div> */}
        <div className="ua-image-2">
          <img src={APImgSM} alt="" className="max-w-full max-h-full" />
        </div>
        <div className="ua-image">
          <img src={APImg} alt="" className="max-w-full max-h-full" />
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <span className="inline-flex items-center px-2.5 py-0.5 mb-2 rounded-md text-sm font-medium bg-purple-100 text-purple-800">
              Only Limited Seats Left for Fall Entry.
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">
              {product.name.split(" ")[0]}
            </h1>
            <h1 className="text-2xl font-extrabold tracking-tight text-indigo-800 sm:text-4xl">
              {product.name.split(" ")[1]} {product.name.split(" ")[2]}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            {/* <p className="text-3xl text-gray-900">{product.price}</p> */}

            {/* Reviews */}
            <p className="mt-4 text- text-gray-500">
              Not sure yet? <br />
              <a
                href=""
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Speak with our counsellor
              </a>
            </p>

            <form className="mt-10">
              {/* {userInfo ? (
                <EnrollBtn />
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCartHandler();
                  }}
                  disabled={loadingOrders ? true : false}
                  type="submit"
                  className="mt-10 mb-2 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {loadingOrders ? <InsideLoader /> : "Enroll"}
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                  type="submit"
                  className="mt-10 mb-2 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Apply
                </button>
              )} */}
              <EnrollBtn setOpen={setOpen} id={id} />
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-indigo-500"
              >
                Already Enrolled? Click here
              </a>
            </form>
            <div className="mt-6 text-left">
              <a href="#" className="group inline-flex text-base font-medium">
                <ShieldCheckIcon
                  className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="text-gray-500 hover:text-gray-700">
                  Refund Policy
                </span>
              </a>
            </div>
            <div className="border-t border-gray-200 mt-10 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Share</h3>
              <ul role="list" className="flex items-center space-x-6 mt-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on Facebook</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on Instagram</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on Twitter</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AP;
