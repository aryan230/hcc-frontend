import React, { useState } from "react";
import Header from "./Components/Header";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon, StarIcon } from "@heroicons/react/solid";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function ThanksPage() {
  const { formId } = useParams();
  const [name, setName] = useState("");
  useEffect(() => {
    setName(localStorage.getItem("formName"));
    localStorage.removeItem("formName");
  }, []);

  return (
    <div className="h-screen">
      <Header />
      <div className="bg-white flex items-center pt-36">
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
      </div>
    </div>
  );
}

export default ThanksPage;
