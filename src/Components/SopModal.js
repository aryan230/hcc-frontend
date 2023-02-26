/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ClipboardListIcon } from "@heroicons/react/outline";
import { addDoc, collection } from "firebase/firestore";
import Loader from "./Loader";
import { db } from "../firebase";

export default function SopModal({ value, closeModal, nameBtn }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [sucess, setSucess] = useState(false);

  const formSubmitHandler = async (e) => {
    const collRef = collection(db, "apply-forms");
    console.log("clicked");
    e.preventDefault();
    setLoader(true);
    const docRef = await addDoc(collRef, {
      name,
      phone,
      email,
    });
    setLoader(false);
    setSucess(true);
    window.location.href =
      "https://www.dropbox.com/s/7hrx9njn8p770tk/STATEMENT_OF_PURPOSE_2.pdf?dl=0";
  };
  return (
    <Transition.Root show={value} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={closeModal}
      >
        {loader && <Loader />}
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <form
              onSubmit={formSubmitHandler}
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
            >
              <div>
                <div className="mx-auto flex items-center justify-center rounded-full">
                  <ClipboardListIcon className="h-6 w-6 " aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Please Enter your details
                  </Dialog.Title>
                </div>
              </div>
              <div className="pt-10">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    id="text"
                    required
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Ansh"
                  />
                </div>
              </div>
              <div className="pt-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    required
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="pt-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    required
                    name="number"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    id="number"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="91XXXXXXX"
                  />
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="submit"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                >
                  {nameBtn}
                </button>
              </div>
            </form>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
