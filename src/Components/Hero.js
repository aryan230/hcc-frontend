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

                      <div className="mt-1 grid grid-cols-3 gap-3">
                        <div>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">
                              Sign in with Facebook
                            </span>

                            <svg
                              className="w-5 h-5"
                              viewBox="-3 0 262 262"
                              xmlns="http://www.w3.org/2000/svg"
                              preserveAspectRatio="xMidYMid"
                            >
                              <path
                                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                fill="#4285F4"
                              />
                              <path
                                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                fill="#34A853"
                              />
                              <path
                                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                fill="#FBBC05"
                              />
                              <path
                                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                fill="#EB4335"
                              />
                            </svg>
                          </a>
                        </div>

                        <div>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">
                              Sign in with Twitter
                            </span>

                            <svg
                              className="w-5 h-5"
                              viewBox="-52.01 0 560.035 560.035"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
                            </svg>
                          </a>
                        </div>

                        <div>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Sign in with GitHub</span>

                            <svg
                              className="w-5 h-5"
                              viewBox="126.445 2.281 589 589"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="420.945"
                                cy="296.781"
                                r="294.5"
                                fill="#3c5a9a"
                              />
                              <path
                                d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
                                fill="#fff"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
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
