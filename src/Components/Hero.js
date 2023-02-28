import Header from "./Header";

import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { LightningBoltIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  DocumentIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  GlobeIcon,
  SupportIcon,
  ViewGridIcon,
  HomeIcon,
  ClipboardCheckIcon,
  PaperAirplaneIcon,
  AcademicCapIcon,
  ColorSwatchIcon,
} from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Notification from "./Notification";
import { register } from "../redux/actions/userAction";
import { Link, useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import SignInWithProvider from "./SignInWithProvider";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Hero = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const userLogin = useSelector((state) => state.userLogin);
  let { userInfo: userData } = userLogin;

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [notif, setNotif] = useState(false);
  const [notifMessage, setNotifMessage] = useState("");

  const registerSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    if (password.length < 7) {
      setNotifMessage("Passwords week");
      setNotif(true);
      setLoader(false);
    } else {
      await dispatch(
        register({
          name: name,
          email: email,
          password: password,
        })
      );
      navigate("/app");
    }
  };

  const cardAnimate = {
    offScreen: {
      x: -100,
      opacity: 0,
    },
    onScreen: {
      x: 0,
      opacity: 1,
      rotate: [1, 0],
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const textAnimate = {
    offScreen: {
      y: 100,
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 2,
        type: "spring",
      },
    },
  };
  return (
    <div className="custom-home-page bg-fixed w-full h-full">
      <Header />
      {loader && <Loader />}
      {notif && <Notification message={notifMessage} />}

      <main className="mt-16 sm:mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8  ">
            <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center ">
              <motion.div
                initial={"offScreen"}
                whileInView={"onScreen"}
                exit={"offScreen"}
                viewport={{ once: false }}
                transition={{ staggerChildren: 0.5 }}
                variants={cardAnimate}
              >
                <span className="rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2.5 py-2  text-xs font-semibold text-white tracking-wide">
                  Use Code ALLNEW for 20% discount on all programs.
                </span>
                {userData ? (
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">
                      Welcome, {userData.name.split(" ")[0]}
                    </span>{" "}
                  </h1>
                ) : (
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">Let's Start Your</span>{" "}
                    <span className="text-white md:block">
                      journey to Abroad
                    </span>
                  </h1>
                )}

                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-karla">
                  Find your path to success with The Honest Career Company, a
                  leading study abroad firm. Our experts help students get
                  admission in top 150 ranked universities worldwide and provide
                  comprehensive support. Start your journey today and elevate
                  your future.
                </p>
                {userData ? (
                  <div className="mt-10 sm:flex sm:justify-evenly lg:justify-evenly items-center">
                    <div className="rounded-md shadow">
                      <Link
                        to="/pe"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-base md:px-10"
                      >
                        Get Your PE
                      </Link>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0">
                      <a
                        href="/apply"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-base md:px-10"
                      >
                        Apply Now
                      </a>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-neutral-600 hover:bg-neutral-800 md:py-4 md:text-base md:px-10"
                      >
                        <GlobeIcon className="w-5 mr-2" />
                        View Programs
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        to="/pe"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get Your PE
                      </Link>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                      <a
                        href="/apply"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                )}

                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <Link
                    className="text-base font-semibold tracking-wide text-gray-200 underline hover:text-white"
                    to="/pe"
                  >
                    Click here to get your Profile Evaluation Results.
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              {/* <div className="relative flex items-center">
                <div
                  id="slider"
                  className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                >
                  <img
                    src="https://images.unsplash.com/photo-1612563958093-2c3bcfbd8760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1610&q=80"
                    alt=""
                    className="w-full inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-3xl drop-shadow-xl"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                    alt=""
                    className="w-full inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2130&q=80"
                    alt=""
                    className="w-full inline-block p-2 cursor-pointer ease-in-out duration-300"
                  />
                </div>
              </div>
              <div className="flex">
                <ChevronLeftIcon
                  className="h-12 w-12 text-white"
                  onClick={sliderLeft}
                />
                <ChevronRightIcon
                  className="h-12 w-12 text-white"
                  onClick={sliderRight}
                />
              </div> */}
              {!userData && (
                <motion.div
                  className="sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden glass-form-effect-2"
                  initial={"offScreen"}
                  whileInView={"onScreen"}
                  exit={"offScreen"}
                  viewport={{ once: false }}
                  transition={{ staggerChildren: 0.5 }}
                  variants={textAnimate}
                >
                  <div className="px-4 py-8 sm:px-10">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Sign in with your account
                      </p>
                      <SignInWithProvider />
                    </div>

                    <div className="mt-6 relative">
                      <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                      >
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <form onSubmit={registerSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="sr-only">
                            Full name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder="Full name"
                            required
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="mobile-or-email" className="sr-only">
                            Mobile number or email
                          </label>
                          <input
                            type="text"
                            name="mobile-or-email"
                            id="mobile-or-email"
                            autoComplete="email"
                            placeholder="Mobile number or email"
                            required
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="password" className="sr-only">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            required
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Start your journey to abroad
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
