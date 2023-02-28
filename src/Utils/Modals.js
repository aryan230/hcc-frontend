import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import Logo from "../assets/header-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/userAction";
import Loader from "../Components/Loader";
import SignInWithProvider from "../Components/SignInWithProvider";

const Modals = ({ value, closeModal }) => {
  const [open, setOpen] = useState(value);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [notif, setNotif] = useState(false);
  const [notifMessage, setNotifMessage] = useState("");

  const registerSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    if (password.length < 7) {
      setNotifMessage("Passwords week");
      setNotif(true);
      setLoader(false);
    } else {
      dispatch(
        register({
          name: name,
          email: email,
          password: password,
        })
      );
    }
  };

  useEffect(() => {
    if (userInfo) {
      //navigate to redirect
      navigate("/");
    }
  }, [navigate, userInfo]);
  return (
    <Transition.Root show={value} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="flex z-9999 items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {loader && <Loader />}
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full">
                  <img className="h-20 w-auto" src={Logo} alt="Workflow" />
                </div>
                <div className="mt-3 text-center sm:mt-5 border-b-2 pb-5">
                  <Dialog.Title
                    as="h3"
                    className="text-sm leading-6 font-medium text-gray-900"
                  >
                    Already have an account?
                  </Dialog.Title>
                  <div className="mt-2">
                    <Link to="/login" className="text-base text-indigo-600">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Sign in with
                      </p>

                      <SignInWithProvider />
                    </div>

                    <div className="mt-6 relative">
                      <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                      >
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <form onSubmit={registerSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="sr-only">
                            Full name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            autoComplete="name"
                            placeholder="Full name"
                            required
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="mobile-or-email" className="sr-only">
                            Mobile number or email
                          </label>
                          <input
                            type="text"
                            name="mobile-or-email"
                            id="mobile-or-email"
                            autoComplete="email"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            placeholder="Mobile number or email"
                            required
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="password" className="sr-only">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            required
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Create your account
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modals;
