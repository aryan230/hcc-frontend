import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Loader from "../../Components/Loader";
import { db } from "../../firebase";

function ContactPage() {
  const navigate = useNavigate();

  const collRef = collection(db, "contact-form");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const [message, setMessage] = useState("");
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    const docRef = await addDoc(collRef, {
      name,
      phone,
      email,
      message,
    });
    setLoader(false);
    localStorage.setItem("formName", name);
    navigate(`/thanks/${docRef.id}`);
    console.log("Document written with ID: ", docRef.id);
  };
  return (
    <>
      {loader && <Loader />}
      <Header />
      <div className="container mx-auto pt-16 px-4 font-karla">
        <div className="bg-gray-100 py-12 xl:pl-20 pl-10 rounded">
          <h1 className="text-gray-800 xl:text-4xl text-3xl font-extrabold pt-6 pb-5">
            Get In touch
          </h1>
          <p className="text-xl text-gray-600 pb-8 font-normal">
            2493 AP, Sector 57 <br />
            Gurugram, 122001
          </p>
          <ul className="xl:flex w-1/3 justify-between pb-6">
            <li>
              <div className="flex sm:mb-4 mb-2 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#718096"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={3} y={5} width={18} height={14} rx={2} />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </div>
                <p className="pl-2 text-base text-gray-600 font-normal">
                  support@thehonestcareerco.in
                </p>
              </div>
            </li>
            <li>
              <div className="flex sm:mb-4 mb-1 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone-call"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#718096"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                  </svg>
                </div>
                <p className="pl-2 text-base text-gray-600 font-normal">
                  +91 (704) 2813171
                </p>
              </div>
            </li>
            {/* <li>
              <a
                href="javascript:void(0)"
                className="text-indigo-700 text-sm font-bold underline"
              >
                View Job Openings
              </a>
            </li> */}
          </ul>
        </div>
        <div className="xl:flex lg:flex bg-indigo-700 p-5 xl:rounded">
          <div className="w-full bg-white h-full rounded">
            <form
              id="contact"
              className="py-5 xl:px-12 px-4 xl:w-3/5 lg:w-3/5"
              onSubmit={formSubmitHandler}
            >
              <h1 className="text-4xl text-gray-800 font-extrabold mb-6">
                Enter Details
              </h1>
              <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="first_name"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Name
                  </label>
                  <input
                    required
                    id="first_name"
                    name="first_name"
                    type="text"
                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 w-full flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="block xl:flex w-full justify-between flex-wrap">
                <div className="xl:w-1/3 max-w-xs mt-6 xl:mt-0">
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Email
                    </label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      className="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="xl:w-2/4 max-w-xs xl:flex xl:justify-end">
                  <div className="flex flex-col mt-6 xl:mt-0">
                    <label
                      htmlFor="phone"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Phone
                    </label>
                    <input
                      required
                      id="phone"
                      name="phone"
                      type="tel"
                      className="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder="Phone Number"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-6">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-semibold text-gray-800 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Send a message"
                    className="text-sm border-gray-300 border mb-6 rounded py-2 outline-none resize-none px-3 focus:outline-none focus:border focus:border-indigo-700"
                    rows={5}
                    id="message"
                    defaultValue={""}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="focus:outline-none bg-indigo-700 mb-1 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-50">
        <div className="w-full h-full lg:flex items-start justify-center xl:py-20 py-8 px-4">
          <div className="lg:w-1/2 xl:mr-12 lg:mr-6">
            <img
              tabIndex={0}
              src="https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image of a dog with heart"
              className="w-full h-full"
            />
            <div className="flex flex-wrap items-center mt-8">
              <div
                arial-label="Address"
                className="mr-6 border md:w-auto w-full rounded border-gray-200 py-6 pr-9 pl-6"
              >
                <p className="text-base font-semibold leading-4 text-gray-900">
                  Gurugram
                </p>
                <p className="text-base leading-4 mt-4 text-gray-600">
                  2493 AP, Sector 57
                </p>
                <p className="text-base leading-4 mt-2 text-gray-600">
                  Haryana, 122001
                </p>
              </div>
              <div
                arial-label="Address"
                className="mr-6 border md:w-auto w-full rounded border-gray-200 py-6 pr-9 pl-6"
              >
                <p className="text-base font-semibold leading-4 text-gray-900">
                  Mumbai
                </p>
                <p className="text-base leading-4 mt-4 text-gray-600">
                  Nana Chowk, Grant Road
                </p>
                <p className="text-base leading-4 mt-2 text-gray-600">
                  Maharashtra, 400007
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 xl:pl-12 lg:pl-6 lg:pt-0 pt-4">
            <h1
              aria-label="Get in touch"
              role="heading"
              className="text-3xl font-bold   text-gray-900"
            >
              Get in touch
            </h1>
            <p
              role="contentinfo"
              className="mt-4 text-base leading-6 text-gray-600 lg:block hidden"
            >
              It is a long established fact that a reader <br /> will be
              distracted by the readable{" "}
            </p>
            <p
              role="contentinfo"
              className="mt-4 text-base leading-6 text-gray-600 lg:hidden"
            >
              It is a long established fact that a reader will be distracted by
              the readable{" "}
            </p>
            <div className="xl:flex items-center justify-between mt-10">
              <div>
                <p className="text-base font-medium leading-4 mb-4 text-gray-800">
                  First Name
                </p>
                <input
                  type="name"
                  aria-label="Please input first name"
                  className="xl:w-48 w-full p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500"
                  placeholder="eg. William"
                />
              </div>
              <div className="xl:ml-6 xl:mt-0 mt-4">
                <p className="text-base font-medium leading-4 mb-4 text-gray-800">
                  Last Name
                </p>
                <input
                  type="name"
                  aria-label="Please input Last name"
                  className="xl:w-48 w-full p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500"
                  placeholder="eg. Smith"
                />
              </div>
            </div>
            <div className="mt-6">
              <p className="text-base font-medium leading-4 mb-4 text-gray-800">
                Email Address
              </p>
              <input
                type="email"
                aria-label="Please enter email"
                className="w-full p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500"
                placeholder="eg. william.smith@doeco.com"
              />
            </div>
            <div className="mt-6">
              <p className="text-base font-medium leading-4 mb-4 text-gray-800">
                Message{" "}
              </p>
              <textarea
                aria-label="Please leave comments"
                className="w-full resize-none h-40 p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500"
                defaultValue={""}
              />
            </div>
            <button
              role="button"
              arial-label="send message "
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 text-base font-semibold leading-4 py-6 px-8 text-white bg-indigo-700 rounded mt-12"
            >
              Send Message
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ContactPage;
