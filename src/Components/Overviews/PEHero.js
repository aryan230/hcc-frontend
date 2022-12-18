import React, { useState } from "react";

const PEHero = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-10">
      <div className="mx-auto container relative px-6 xl:px-0">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center">
          <div className="xl:mt-8">
            <div className="text-3xl lg:text-4xl xl:text-6xl text-gray-800 tracking-1px font-extrabold">
              <h1 className="mt-2 lg:mt-0">Kickstart Your</h1>
              <h1 className="mt-2 lg:mt-0 text-indigo-700">Study Abroad</h1>
              <h1 className="mt-2 lg:mt-0"> Journey Here!</h1>
            </div>

            <button className="hover:opacity-90 flex items-center relative focus:outline-none justify-center mt-5 lg:mt-10 text-lg lg:text-2xl font-medium text-white p-2 lg:p-6 bg-indigo-700 rounded-3xl">
              Let's Start
              <svg
                className="ml-8"
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={17}
                viewBox="0 0 26 17"
                fill="none"
              >
                <path
                  d="M1.33333 8.6665H24.6667"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 15.3332L24.6667 8.6665"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 2L24.6667 8.66667"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="w-full custom-height bg-indigo-100 mt-8 lg:mt-0 rounded-3xl relative">
            <img
              class="w-full"
              src="https://i.ibb.co/80XYkkr/image.png"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PEHero;
