import React, { useState } from "react";
import Header from "./Components/Header";
import Bulb from "./assets/bulb.svg";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon, StarIcon } from "@heroicons/react/solid";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function ThanksPage() {
  const { formId } = useParams();
  const [name, setName] = useState();
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setName(localStorage.getItem("formName"));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-screen">
      <Header />

      {/* <div className="bg-white flex items-center pt-36">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Thanks {name},</span>
                  <span className="block">
                    We will get back to you within 24 hours.
                  </span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-200">
                  Your form is submitted with reference number {formId}. We will
                  get back to you within 24 hours.
                </p>
                <a
                  href="#"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Sign up for free
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="object-fit object-left-top h-20"
                src="https://www.sketchvalley.com/promo/assets/img/signup-img.svg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div> */}
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="mt-1 block text-3xl tracking-tight font-extrabold sm:text-4xl xl:text-5xl">
                <span className="block text-gray-700">
                  Hey {name}, We have recieved your query.
                </span>
                <span className="block text-blue-700 mt-2">
                  Our agent will get back to you.
                </span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-karla">
              We usually reply within the next three hours of submission of the
              contact form. Please feel free to use the live chat support. For
              future reference, please note the form ID below.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 font-space">
              <p className="text-base font-medium text-gray-900">
                Form Reference ID.
              </p>
              <form className="mt-3 sm:flex">
                <label htmlFor="email" className="sr-only">
                  Form Reference ID.
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  disabled
                  className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300"
                  placeholder={formId}
                />
                {copied ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setCopied(true);
                      navigator.clipboard.writeText(formId);
                    }}
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 shadow-sm hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Copied
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setCopied(true);
                      navigator.clipboard.writeText(formId);
                    }}
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Copy
                  </button>
                )}
              </form>
              <p className="mt-3 text-sm text-gray-500">
                We care about the protection of your data. Read our
                <a href="#" className="font-medium text-gray-900 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
              width={640}
              height={784}
              fill="none"
              viewBox="0 0 640 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x={118}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                y={72}
                width={640}
                height={640}
                className="text-gray-50"
                fill="currentColor"
              />
              <rect
                x={118}
                width={404}
                height={784}
                fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
              />
            </svg>
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <button
                type="button"
                className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="sr-only">Watch our video to learn more</span>
                <img className="w-full" src={Bulb} alt="" />
                <div
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    className="h-20 w-20 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                  >
                    <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ThanksPage;
