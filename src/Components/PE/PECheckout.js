import React from "react";
import { useParams } from "react-router-dom";
import Logo from "../../assets/pe2.png";
import Header from "../Header";
import {
  CalendarIcon,
  CheckIcon,
  PlusIcon,
  UsersIcon,
  ViewBoardsIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "List view",
    icon: ViewListIcon,
    description:
      "Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.",
  },
  {
    name: "Boards",
    icon: ViewBoardsIcon,
    description:
      "Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.",
  },
  {
    name: "Calendar",
    icon: CalendarIcon,
    description:
      "Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.",
  },
  {
    name: "Teams",
    icon: UsersIcon,
    description:
      "Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.",
  },
];
const checklist = [
  "Unlimited projects",
  "No per user fees",
  "Unlimited storage",
  "24/7 support",
  "Cancel any time",
  "14 days free",
];

function PECheckout() {
  const { formId } = useParams();
  return (
    <div className="bg-white">
      <Header />
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2212858/pexels-photo-2212858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-80"
        />

        <div className="relative w-full mx-auto py-32 px-6 flex items-center text-center sm:py-64 lg:px-0 justify-evenly">
          <div className="max-w-lg flex-col items-center justify-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
              Hey, Ankita
            </h1>
            <p className="mt-4 text-xl text-white">
              Thanks for submitting your profile evaluation form. Now just sit
              back and relax our counsellor will get back to you within 24
              hours.
            </p>
            <a
              href="#"
              className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Pay Now
            </a>
          </div>
          <div className="w-lg flex items-center justify-center">
            <img src={Logo} alt="" className="max-h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PECheckout;
