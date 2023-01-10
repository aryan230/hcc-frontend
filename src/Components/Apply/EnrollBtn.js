import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder, listMyOrders } from "../../redux/actions/orderAction";
import Loader from "../Loader";
import OrderModal from "../Order/orderModal";
import { getOrderDetails } from "../../redux/actions/orderAction";
import toast, { Toaster } from "react-hot-toast";

function EnrollBtn({ setOpen, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  let { userInfo } = userLogin;

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, sucess, error, loading: orderCreateLoading } = orderCreate;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { orders, loading: loadingOrders, error: errorOrders } = orderListMy;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order: orderContent } = orderDetails;

  const [loader, setLoader] = useState(false);
  const [orderModalValue, setorderModalValue] = useState(false);
  const [orderID, setOrderID] = useState();

  const addToCartHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (orders.some((order) => order.orderCourse[0].product === id)) {
      setLoader(false);
      setOrderID(
        orders.find((order) => order.orderCourse[0].product === id)._id
      );
      setorderModalValue(true);
      // await dispatch(
      //   getOrderDetails(
      //     orders.find((order) => order.orderCourse[0].product === id)._id
      //   )
      // );

      // if (orderContent && orderContent.isPaid) {
      //   setLoader(false);
      //   notify();
      // } else {
      //   setLoader(false);
      //   setorderModalValue(true);
      // }

      return;
    } else {
      fetch(`https://hcc-backend.onrender.com/api/products/${id}`)
        .then((response) => response.json())
        .then(async (data) => {
          await dispatch(
            createOrder({
              orderCourse: {
                product: data._id,
                name: data.name,
                price: data.price,
              },
              paymentMethod: "Razorpay",
              coursePrice: Number(data.price),
              taxPrice: 0,
              totalPrice: Number(data.price),
            })
          );
        });

      setLoader(false);
    }
  };
  const notify = () => toast.success("Order Paid");
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
    <>
      <Toaster position="top-right" reverseOrder={true} />{" "}
      {loader && <Loader />}
      {userInfo && (
        <OrderModal
          value={orderModalValue}
          closeOrderModal={setorderModalValue}
          data={orderID}
          userData={userInfo}
        />
      )}
      {userInfo ? (
        <button
          onClick={addToCartHandler}
          type="submit"
          className="font-karla mt-10 mb-2 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Apply
        </button>
      ) : (
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
      )}
    </>
  );
}

export default EnrollBtn;
