import React, { useEffect } from "react";

const TestimonialsNew = () => {
  useEffect(() => {
    let slides = document.querySelectorAll(".slide-ana>div");
    let slideSayisi = slides.length;

    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    for (let index = 0; index < slides.length; index++) {
      const element = slides[index];
      element.style.transform = "translateX(" + 100 * index + "%)";
    }
    let loop = 0 + 1000 * slideSayisi;

    function goNext() {
      loop++;
      for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform =
          "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
      }
    }

    function goPrev() {
      loop--;
      for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform =
          "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
      }
    }

    next.addEventListener("click", goNext);
    prev.addEventListener("click", goPrev);
    document.addEventListener("keydown", function (e) {
      if (e.code === "ArrowRight") {
        goNext();
      } else if (e.code === "ArrowLeft") {
        goPrev();
      }
    });
  });
  return (
    <>
      <div className="relative py-20 md:py-56 lg:py-72">
        <img
          src="https://cdn.tuk.dev/assets/components/111220/tst-15/background.png"
          className="absolute top-0 left-0 h2-image flex-no-shrink flex -mt-16 z-0"
        />
        <div className="w-full xl:px-0 px-4 lg:flex-row flex flex-col-reverse items-center justify-between mx-auto container relative z-20">
          <div className="w-full lg:w-1/2 relative">
            <div className="slider">
              <div className="slide-ana">
                <div
                  className="w-full"
                  style={{
                    transform: "translateX(0%)",
                  }}
                >
                  <div className="w-full lg:flex relative">
                    <div className="lg:w-1/2 relative bg-white rounded-md p-6 mr-6 lg:mb-0 mb-8 shadow-lg lg:mt-0 mt-8">
                      <div className="absolute right-0 top-0 -mt-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={50}
                          height={50}
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"
                            fill="rgba(76,81,191,1)"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center">
                        <h2 className="text-base f-m-m  font-semibold">Aman</h2>
                      </div>
                      <div className="flex items-center">
                        <h3 className="text-base f-m-m  italic">
                          University of Glassgow
                        </h3>
                      </div>
                      <p className="text-sm f-m-m mt-3">
                        My experience with The Honest Career Company is very
                        good. They have very supportive and dedicated members
                        who are working with the students in fulfilling dreams.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 relative mt-8 lg:ml-32 bg-white rounded-md shadow-lg p-6 mr-6">
                    <img
                      src="https://seeklogo.com/images/U/University_of_Glasgow-logo-7609B730AE-seeklogo.com.png"
                      alt=""
                      className="h-15"
                    />
                  </div>
                </div>
                <div
                  className="w-full"
                  style={{
                    transform: "translateX(100%)",
                  }}
                >
                  <div className="w-full lg:flex relative">
                    <div className="lg:w-1/2 relative bg-white rounded-md p-6 mr-6 lg:mb-0 mb-8 shadow-lg lg:mt-0 mt-8">
                      <div className="absolute right-0 top-0 -mt-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={50}
                          height={50}
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"
                            fill="rgba(76,81,191,1)"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center">
                        <h2 className="text-base f-m-m  font-semibold">
                          Amit Kumar
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <h3 className="text-base f-m-m  italic">HEC Paris</h3>
                      </div>
                      <p className="text-sm f-m-m mt-3">
                        It was fabulous having The Honest Career Company as a
                        consultant to me as they helped me at every step of
                        decision making and choosing the right path to the face
                        of universities.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 relative mt-8 lg:ml-32 bg-white rounded-md shadow-lg p-6 mr-6">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/HEC_Paris.svg/1200px-HEC_Paris.svg.png"
                      alt=""
                      className="h-15"
                    />
                  </div>
                </div>
                <div
                  className="w-full"
                  style={{
                    transform: "translateX(0%)",
                  }}
                >
                  <div className="w-full lg:flex relative">
                    <div className="lg:w-1/2 relative bg-white rounded-md p-6 mr-6 lg:mb-0 mb-8 shadow-lg lg:mt-0 mt-8">
                      <div className="absolute right-0 top-0 -mt-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={50}
                          height={50}
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"
                            fill="rgba(76,81,191,1)"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center">
                        <h2 className="text-base f-m-m  font-semibold">
                          Shreya Singh
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <h3 className="text-base f-m-m  italic">
                          University of Manchester
                        </h3>
                      </div>
                      <p className="text-sm f-m-m mt-3">
                        I joined the MBA/MiM application process program at The
                        Honest Career Company and the team seemed great at their
                        work, as I always wanted to go abroad for my further
                        studies my biggest concern was letting my parents know
                        of the pro???s and con???s and the reality of going abroad
                        and study, and I believe HCC helped me in that part big
                        time. Apart from this I also got helped in filling my
                        application forms with SOP???s and drafts for my LOR???s.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 relative mt-8 lg:ml-32 bg-white rounded-md shadow-lg p-6 mr-6">
                    <img
                      src="https://seeklogo.com/images/T/The_University_of_Manchester-logo-FB7EED7C0D-seeklogo.com.png"
                      alt=""
                      className="h-15"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-32 xl:pl-56">
            <h1 className="lg:text-5xl text-2xl f-m-w text-indigo-700 font-bold">
              What our Students say
            </h1>
            <p className="lg:text-base text-sm f-m-m leading-loose mt-3 mb-8">
              Always available, extremely knowledgeable, and with a tremendous
              "can-do" attitude. Our company was on a tight timeline and strict
              discipline to make sure that you get into a top ranked university
              to pursue your dream.{" "}
            </p>
            <div className="flex items-center">
              <div
                id="prev"
                className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border border-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-narrow-left"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#4C51BF"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <line x1={5} y1={12} x2={9} y2={16} />
                  <line x1={5} y1={12} x2={9} y2={8} />
                </svg>
              </div>
              <div
                id="next"
                className="cursor-pointer ml-4 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border border-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-narrow-right"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#4C51BF"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <line x1={15} y1={16} x2={19} y2={12} />
                  <line x1={15} y1={8} x2={19} y2={12} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`

    /* Slider css below */
    .slider {
        width: 100%;
        height: 600px;
        padding-top: 14px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
    }

    .slide-ana {
        height: 100%;
    }

    .slide-ana>div {
        width: 100%;
        height: 100%;
        position: absolute;
        transition: all 1s;
    }

    @media (min-width: 320px) and (max-width: 1023px) {
        .slider .left {
            margin-left: 40% !important;
        }

        .slider .right {
            margin-left: 50% !important;
        }

        .slider {
            height: 650px;
        }
    }`}
      </style>
    </>
  );
};

export default TestimonialsNew;
