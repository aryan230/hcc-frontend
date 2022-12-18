import CTA from "../../Components/CTA";
import Header from "../../Components/Header";
import ApplicationProcess from "../../Components/Overviews/ApplicationProcess";
import Stepper from "../../Components/Stepper";
import Logos from "../../Components/Logos";
import Stats from "../../Components/stats";
import CloudLogo from "../../Components/cloudLogo";
import AP from "../../Components/Overviews/AP";
import { createOrder, listMyOrders } from "../../redux/actions/orderAction";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const UA = () => {
  return (
    <>
      <Header />
      <AP />
      <CloudLogo />
      <Stats />
      <Stepper />
      <CTA />
    </>
  );
};

export default UA;
