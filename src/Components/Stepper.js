import { CheckIcon } from "@heroicons/react/solid";

const steps = [
  {
    name: "Create account",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "complete",
  },
  {
    name: "Profile information",
    description: "Cursus semper viverra facilisis et et some more.",
    href: "#",
    status: "current",
  },
  {
    name: "Business information",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
  {
    name: "Theme",
    description: "Faucibus nec enim leo et.",
    href: "#",
    status: "upcoming",
  },
  {
    name: "Preview",
    description: "Iusto et officia maiores porro ad non quas.",
    href: "#",
    status: "upcoming",
  },
];

function classNameNames(...classNamees) {
  return classNamees.filter(Boolean).join(" ");
}

const Stepper = () => {
  const applyClicked = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };
  return (
    <section>
      <div className="bg-indigo-800 text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-gray-300 uppercase tracking-loose">
              Working Process
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Working Process of HCC
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Here’s your guide to the application process. Go through all the
              steps to know the exact process of the program.
            </p>
            <a
              onClick={applyClicked}
              className="bg-transparent mr-auto hover:bg-gray-300 text-gray-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-300 hover:border-transparent"
            >
              Apply
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-gray-555 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                />
                <div
                  className="border-2-2 border-gray-555 absolute h-full border"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                />
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12" />
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-gray-300"></p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Profile Evaluation
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      After Profile Evaluation from our experts, we will be able
                      to provide the list of universities which fits best to the
                      needs of the applicant.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12" />
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-gray-300"></p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      SOP/LOR
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      At this point, when we know what all college's are good to
                      go , we will start making your statement of purpose &
                      gathering of LORs and other documents.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12" />
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-gray-300"></p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Application / Scholarship Form Filling
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Application and scholarship form filling which will be
                      done by our expert team.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12" />
                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-gray-300"></p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                      Offer Letter
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Once you receive the offer letter will start the search
                      for accommodation and simultaneously apply for CAS Letter.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12" />
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-gray-300"></p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">VISA</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Gathering all the required documents for visa and filling
                      the visa form
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12" />
                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-gray-300"></p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left"></h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Pack your bags for the new Journey.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-44 md:-mt-44"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stepper;
