/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import SopModal from "./SopModal";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [openModal, setOpenModal] = useState(false);
  const [nameBtn, setNameBtn] = useState();
  return (
    <div>
      {/* component */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="hero section" />

      <link rel="stylesheet" href="css/tailus.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        body {\n            font-family : Urbanist, sans-serif;\n            @apply bg-white dark:bg-gray-900\n        }\n\n        .navbar-active .hamburger div:first-child {\n            @apply rotate-45 translate-y-1.5;\n        }\n        .navbar-active .hamburger div:last-child {\n            @apply -rotate-45 -translate-y-1;\n        }\n        .navbar-active div:first-child div:first-child div:last-child{\n            @apply block lg:flex\n        }\n    ",
        }}
      />
      <SopModal value={openModal} closeModal={setOpenModal} nameBtn={nameBtn} />
      <div className="bg-white relative pt-40 pb-20 lg:pt-44 dark:bg-gray-900">
        <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
          <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
            Perfect Your Path to Success with <br className="lg:block hidden" />{" "}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              HCC's SOP Editing Program
            </span>
            .
          </h1>
          <div className="lg:flex">
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                Our team of experienced editors will review and refine your
                Statement of Purpose (SOP) to ensure it accurately reflects your
                strengths, goals, and motivation for pursuing higher education.
              </p>
              <span className="block font-semibold text-gray-500 dark:text-gray-400">
                1000+ Student's getting Offer Letter's. Get your's today
              </span>
              <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                <a
                  aria-label="add to slack"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setNameBtn("Apply");
                    setOpenModal(true);
                  }}
                  className="p-4 px-10 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                >
                  <div className="flex justify-center space-x-4">
                    {/* <img
                      className="w-6 h-6"
                      src="https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png"
                      alt="slack logo"
                      loading="lazy"
                      width={128}
                      height={128}
                    /> */}
                    <span className="font-medium md:block dark:text-white">
                      Apply
                    </span>
                  </div>
                </a>
                <button
                  aria-label="add to slack"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setNameBtn("Download");
                    setOpenModal(true);
                  }}
                  className="p-4 px-10 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                >
                  <div className="flex justify-center space-x-4">
                    {/* <img
                      className="w-6 h-6"
                      src="https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png"
                      alt="slack logo"
                      loading="lazy"
                      width={128}
                      height={128}
                    /> */}
                    <span className="font-medium md:block dark:text-white">
                      Download Sample
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
              <div className="relative w-full">
                <div
                  aria-hidden="true"
                  className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg"
                  className="relative w-full"
                  alt="wath illustration"
                  loading="lazy"
                  width={320}
                  height={280}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
