import React from "react";
import Header from "../../Components/Header";
import { BriefcaseIcon } from "@heroicons/react/outline";

function PEN() {
  return (
    <>
      <Header />
      <div className="pe-hero-main">
        <main class="mx-auto max-w-7xl px-4 flex items-center w-full h-full justify-center">
          <div class="text-center">
            <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span class="block xl:inline">Profile </span>
              <span class="block text-sky-400 xl:inline">Evaluation</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Get your profile evaluated by our best counsellor’s. And match
              which colleges accept your profile.
            </p>
            <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center sm:items-center md:mt-8">
              <div class="rounded-md shadow">
                <a
                  href="/pe/form"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10"
                >
                  {" "}
                  Let's Start{" "}
                </a>
              </div>
              <div class="rounded-md shadow mt-2 sm:ml-5">
                <a
                  href="/pe/form"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10"
                >
                  PE Results <BriefcaseIcon className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default PEN;
