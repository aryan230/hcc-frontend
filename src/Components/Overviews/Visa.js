import { useState } from "react";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import { CurrencyDollarIcon, GlobeIcon } from "@heroicons/react/outline";

import VisaImg from "../../assets/visa6.png";
const product = {
  name: "VISA CONSULTANCY",
  href: "#",
  price: "$220",
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc: "https://i.ibb.co/mTj3nGg/visa4.png",
  imageAlt:
    "Model wearing light green backpack with black canvas straps and front zipper pouch.",
  breadcrumbs: [
    { id: 1, name: "Travel", href: "#" },
    { id: 2, name: "Bags", href: "#" },
  ],
  sizes: [
    {
      name: "18L",
      description: "Enrolment in a recognised educational institution.",
    },
    {
      name: "20L",
      description:
        "Proof of your capacity to cover the cost of airfares, course tuition fees and living costs for you (and your family members) for the duration of your stay year.",
    },
  ],
  highlights: [
    "Enrolment in a recognised educational institution.",
    "Proof of your capacity to cover the cost of airfares, course tuition fees and living costs for you (and your family members) for the duration of your stay year.",
    "Passport size photos and a passport valid for at least six months beyond your period of stay.",
    "Some countries may require evidence of your English language proficiency, or ask you to undertake health examinations and/or police checks.",
  ],
};

const policies = [
  {
    name: "International delivery",
    icon: GlobeIcon,
    description: "Get your order in 2 years",
  },
  {
    name: "Loyalty rewards",
    icon: CurrencyDollarIcon,
    description:
      "Proof of your capacity to cover the cost of airfares, course tuition fees and living costs for you (and your family members) for the duration of your stay year.",
  },
];
const reviews = { average: 4, totalCount: 1624 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Visa = () => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-indigo-800 sm:text-4xl">
              {product.name.split(" ")[0]}
            </h1>
            <h1 className="text-3xl font-extrabold tracking-tight text-indigo-800 sm:text-4xl">
              {product.name.split(" ")[1]}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="mt-4 space-y-6">
              <p className="mt-10 text-base text-gray-500 font-bold">
                How do I apply for a student visa?
              </p>
              <p className="text-base text-gray-500 ">
                There are several steps to consider when you apply for a student
                visa. However, the order of these steps i.e., processes and
                requirements may vary as per the country where you plan to
                study.
              </p>
            </div>

            {/* <div className="mt-6 flex items-center">
              <CheckIcon
                className="flex-shrink-0 w-5 h-5 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-2 text-sm text-gray-500">
                Enrolment in a recognised educational institution.
              </p>
            </div> */}
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="rounded-3xl overflow-hidden">
            <img
              src={VisaImg}
              alt={product.imageAlt}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-0 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form>
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Most students will require evidence of:
                </h3>

                <div className="mt-4">
                  <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
                >
                  <span>Not sure yet?</span>
                  <QuestionMarkCircleIcon
                    className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Enroll
                </button>
              </div>
              <div className="mt-6 text-center">
                <a href="#" className="group inline-flex text-base font-medium">
                  <ShieldCheckIcon
                    className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500 hover:text-gray-700">
                    Refund Policy
                  </span>
                </a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Visa;
