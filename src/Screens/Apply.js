import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
import { db } from "../firebase";

function Apply() {
  const collRef = collection(db, "apply-forms");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [sucess, setSucess] = useState(false);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    const docRef = await addDoc(collRef, {
      name,
      phone,
      email,
    });
    setLoader(false);
    setSucess(true);
  };
  return (
    <>
      <Header />
      {loader && <Loader />}
      <div className="relative flex h-full w-full">
        <div className="w-full h-screen lg:w-1/2 bg-indigo-700">
          {sucess ? (
            <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
              <div>
                <h1 className="text-4xl font-space">Hey, {name}</h1>
                <p className="mt-5 font-karla">
                  Thanks for filling out the form. Our experts will get back to
                  you soon.
                </p>
              </div>
            </div>
          ) : (
            <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
              <div>
                <h1 className="text-4xl font-space">
                  We believe to get you a offer letter from the best possible
                  univ.
                </h1>
                <p className="mt-5 font-karla">
                  Let's get you started with the first steps.
                </p>
              </div>

              <div className="mt-10  font-karla">
                <form onSubmit={formSubmitHandler}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-gray-800 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Ex. Ankita Malik"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="you@example.com"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white"
                    >
                      Number
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="number"
                        id="number"
                        required
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="+917042813171"
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                  >
                    Study
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="max-w-lg block text-gray-600 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div> */}
                  <div className="my-10">
                    <button
                      type="submit"
                      className="transition ease-in-out w-1/3 rounded-full bg-orange-600 p-3 hover:-translate-y-1 duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        <div className="hidden lg:block h-screen w-1/2 bg-blue-600">
          <img
            src="https://images.pexels.com/photos/5624130/pexels-photo-5624130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Apply;
