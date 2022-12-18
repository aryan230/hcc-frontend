import {
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
  UserGroupIcon,
  ViewGridAddIcon,
} from "@heroicons/react/outline";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import Loader from "../Loader";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const notificationMethods = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];
const PEForm = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const collRef = collection(db, "pe-forms");

  //Form Errors

  const [formError, setFormError] = useState({
    formID: 0,
  });

  //Initialize

  const [step, setActiveStep] = useState(0);
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("India");
  const [gender, setGender] = useState("male");

  //Form Data 2
  const [twCGPA, settwCGPA] = useState("");
  const [twENGCGPA, settwENGCGPA] = useState("");
  const [twBoard, settwBoard] = useState("");
  const [cgCGPA, setcgCGPA] = useState("");
  const [gmat, setgmat] = useState("");

  //Form Data 3
  const [ptWEXP, setptWEXP] = useState("");
  const [ftWEXP, setftWEXP] = useState("");
  const [targetC, settargetC] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    const docRef = await addDoc(collRef, {
      fname,
      lname,
      email,
      country,
      gender,
      twCGPA,
      twENGCGPA,
      twBoard,
      cgCGPA,
      gmat,
      ptWEXP,
      ftWEXP,
      targetC,
    });
    setLoader(false);
    localStorage.setItem("formName", fname);
    navigate(`/thanks/${docRef.id}`);
    console.log("Document written with ID: ", docRef.id);
  };

  const navigation = [
    {
      name: "Personal Information",
      href: "#",
      icon: UserCircleIcon,
      set: 0,
    },
    { name: "Scores", href: "#", icon: KeyIcon, set: 1 },
    { name: "Experience ", href: "#", icon: CreditCardIcon, set: 2 },
  ];

  //Handle Steps

  const handleNextStep = () => {
    console.log(gmat);
    setActiveStep(step + 1);
  };

  return (
    <div className="lg:w-2/3  mx-auto py-20">
      {loader && <Loader />}
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <nav className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveStep(item.set);
                }}
                className={classNames(
                  item.set === step
                    ? "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white"
                    : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                  "group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                <item.icon
                  className={classNames(
                    item.set === step
                      ? "text-indigo-500 group-hover:text-indigo-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                <span className="truncate">{item.name}</span>
              </a>
            ))}
          </nav>
        </aside>
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          {step === 0 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleNextStep();
              }}
            >
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Personal Information
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Use a permanent address where you can recieve mail.
                    </p>
                  </div>

                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        required
                        value={fname}
                        onChange={(e) => {
                          setfName(e.target.value);
                        }}
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        required
                        name="last-name"
                        onChange={(e) => {
                          setlName(e.target.value);
                        }}
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        required
                        id="email-address"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        autoComplete="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        onChange={(e) => {
                          setCountry(e.target.value);
                        }}
                        autoComplete="country-name"
                        className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="India">India</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Gender
                    </label>
                    <p className="text-sm leading-5 text-gray-500">
                      Some business schools give preference to women candidates
                      owing to gender imbalance
                    </p>
                    <fieldset className="mt-4">
                      <legend className="sr-only">Notification method</legend>
                      <div className="space-y-4">
                        {notificationMethods.map((notificationMethod) => (
                          <div
                            key={notificationMethod.id}
                            className="flex items-center"
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                          >
                            <input
                              id={notificationMethod.id}
                              name="notification-method"
                              type="radio"
                              required
                              value={notificationMethod.id}
                              defaultChecked={notificationMethod.id === "male"}
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label
                              htmlFor={notificationMethod.id}
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {notificationMethod.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          )}
          {step === 1 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleNextStep();
              }}
            >
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Your Scores
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Provide basic informtion about your scores. Be specific
                      with the percentages and CGPA.
                    </p>
                  </div>

                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What is your 12th class CGPA or %?
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        required
                        onChange={(e) => {
                          settwCGPA(e.target.value);
                        }}
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What was your score in English in 12th class?
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        required
                        onChange={(e) => {
                          settwENGCGPA(e.target.value);
                        }}
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Which is your 12th class board?
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        required
                        onChange={(e) => {
                          settwBoard(e.target.value);
                        }}
                        autoComplete="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What is your college CGPA? % or CGPA out of 10
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        required
                        onChange={(e) => {
                          setcgCGPA(e.target.value);
                        }}
                        autoComplete="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Have you taken or are you planning to take GMAT/GRE?
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        onChange={(e) => {
                          setgmat(e.target.value);
                        }}
                        autoComplete="country-name"
                        className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="Taken">Taken</option>
                        <option value="Planning">Planning</option>
                        <option value="None">None</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={formSubmitHandler}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Experience and your preffered countries
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Provide basic informtion about your experience. Be
                      specific with the countries you want to apply.
                    </p>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Do you have part time work experience ? (Internships) *
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      onChange={(e) => {
                        setptWEXP(e.target.value);
                      }}
                      autoComplete="country-name"
                      className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Do you have full time work experience ?  
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      onChange={(e) => {
                        setftWEXP(e.target.value);
                      }}
                      autoComplete="country-name"
                      className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <fieldset>
                    <div className="mt-4 space-y-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Do you have any target Countries in mind? (You can
                        choose multiple)
                      </label>
                      <div className="flex items-start">
                        <div className="h-5 flex items-center">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            required
                            onChange={(e) => {
                              settargetC(e.target.value);
                            }}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="comments"
                            className="font-medium text-gray-700"
                          >
                            Overall Europe
                          </label>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-start">
                          <div className="h-5 flex items-center">
                            <input
                              id="candidates"
                              name="candidates"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="candidates"
                              className="font-medium text-gray-700"
                            >
                              Canada
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-start">
                          <div className="h-5 flex items-center">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              UK
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-start">
                          <div className="h-5 flex items-center">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              USA
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-start">
                          <div className="h-5 flex items-center">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Ireland
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-start">
                          <div className="h-5 flex items-center">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Singapore
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PEForm;
