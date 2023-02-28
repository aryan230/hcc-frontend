import {
  BadgeCheckIcon,
  CheckCircleIcon,
  FireIcon,
} from "@heroicons/react/outline";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import CouponLoader from "./CouponLoader";

function Coupons({ coupon, setCoupon, setValCoupon }) {
  const delay = 5000; //1s
  const [c, setC] = useState();
  const [value, setValue] = useState();
  const [des, setDes] = useState();
  const [showSucess, setShowSucess] = useState(false);
  const [couponLoader, setCouponLoader] = useState(false);
  const getCoupons = async () => {
    // http://localhost:3001/api/coupons/getmycoupons
    const { data } = await axios.get(
      `http://localhost:3001/api/coupons/getmycoupons`
    );
    if (data) {
      return data;
    }
  };

  const couponBtn = async (e) => {
    e.preventDefault();
    setCouponLoader(true);
    getCoupons().then((c) => {
      const mainC = c.find((obj) => obj.name == value.toUpperCase());
      if (mainC) {
        setCoupon(true);
        setValCoupon(mainC.value);
        setDes(mainC.message);
        setShowSucess(true);
      } else {
        setShowSucess(false);
      }
    });
  };
  const couponBtnRemove = async (e) => {
    e.preventDefault();
    setValue("");
    setCoupon(false);
    setValCoupon(1);
  };
  return (
    <form onSubmit={couponBtn}>
      {couponLoader && (
        <CouponLoader
          showSucess={showSucess}
          setCouponLoader={setCouponLoader}
          message={des}
        />
      )}

      <label
        htmlFor="discount-code"
        className="block text-sm font-medium text-white"
      >
        {coupon ? "COUPON APPLIED: " + value.toUpperCase() : "Discount Code"}
      </label>
      <div className="flex space-x-4 mt-1">
        {coupon ? (
          <div className="w-full bg-emerald-500 rounded-lg flex items-center justify-center shadow-sm">
            <BadgeCheckIcon className="w-6 h-6 text-white" />
            <p className="text-lg p-2 text-white">{des}</p>
          </div>
        ) : (
          // <input
          //   required
          //   type="text"
          //   disabled
          //   value={value}
          //   id="discount-code"
          //   name="discount-code"
          //   className=""
          // />
          <input
            required
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            id="discount-code"
            name="discount-code"
            className="uppercase text-black block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-800 focus:border-indigo-800 sm:text-sm"
          />
        )}

        {coupon ? (
          <button
            onClick={couponBtnRemove}
            className="bg-white text-sm font-medium text-stone-800 rounded-md px-4 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-white"
          >
            Remove
          </button>
        ) : (
          <button
            type="submit"
            className="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
          >
            Apply
          </button>
        )}
      </div>
    </form>
  );
}

export default Coupons;
