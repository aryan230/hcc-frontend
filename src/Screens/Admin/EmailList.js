import { MailIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Papa from "papaparse";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

// Allowed extensions for input file
const allowedExtensions = ["csv"];
const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];
function EmailList() {
  const [data, setData] = useState();
  const [emailSend, setEmailSend] = useState();
  const [emailQuery, setEmailQuery] = useState();
  const [subject, setSubject] = useState();
  const collRef = collection(db, "emails");

  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState("");
  const notify = () => toast.success("Sucessfully deleted");

  // It will store the file uploaded by the user
  const [file, setFile] = useState("");
  const handleFileChange = (e) => {
    setError("");

    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }

      // If input type is correct set the state
      setFile(inputFile);
    }
  };
  const handleParse = (e) => {
    e.preventDefault();
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      Array.from(csv.data).forEach(async (element) => {
        console.log(element);
        const docRef = await addDoc(collRef, {
          name: element.FIRST + element.LAST,
          email: element.EMAIL,
          emailStatus: "Queued",
        });

        axios
          .post("http://localhost:3001/api/email", {
            name: element.FIRST + " " + element.LAST,
            email: element.EMAIL,
          })
          .then(
            (response) => {
              console.log(response);
              updateDoc(docRef, {
                emailStatus: "Sent",
              });
            },
            (error) => {
              console.log(error);
              updateDoc(docRef, {
                emailStatus: "Error",
              });
            }
          );
      });
    };
    reader.readAsText(file);
  };

  const deleteEmail = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "emails", e.target.id);
    await deleteDoc(docRef).then(() => {
      notify();
    });
  };

  useEffect(() => {
    onSnapshot(collRef, (snapshot) => {
      let emails = [];
      let sentEmails = [];
      let queuedEmails = [];
      snapshot.docs.forEach((doc) => {
        emails.push({ ...doc.data(), id: doc.id });
        if (doc.data().emailStatus === "Sent") {
          sentEmails.push({ ...doc.data(), id: doc.id });
        }
        if (doc.data().emailStatus === "Queued") {
          queuedEmails.push({ ...doc.data(), id: doc.id });
        }
      });
      setData(emails);
      setEmailSend(sentEmails);
      setEmailQuery(queuedEmails);
    });
  }, []);

  return (
    <>
      <Header />
      <Toaster position="top-right" reverseOrder={true} />
      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Emails sended by the HCC
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              List of email addresses.
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-5">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Total Emails
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      {data && data.length}
                    </dd>
                  </div>
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Emails Send
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      {data && emailSend.length}
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Emails Queued
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      {data && emailQuery.length}
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      User Clicked
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      0
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      User Applied
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      0
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form
        className="max-w-7xl mx-auto sm:px-6 lg:px-8"
        onSubmit={handleParse}
      >
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700"
        >
          Enter email list
        </label>
        <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                {file ? <span>{file.name}</span> : <span>Upload a file</span>}

                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  required
                  onChange={handleFileChange}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>

            <p className="text-xs text-gray-500">only csv</p>
          </div>
        </div>

        <button
          type="submit"
          className="my-5 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <MailIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
          Send
        </button>
      </form>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col py-10">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Role
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data &&
                      data.map((person) => (
                        <tr key={person.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {person.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {person.email}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap">
                            {person.emailStatus === "Queued" && (
                              <span className="px-5 inline-flex text-base leading-5 font-semibold rounded-full bg-yellow-100 text-green-800">
                                {person.emailStatus}
                              </span>
                            )}
                            {person.emailStatus === "Error" && (
                              <span className="px-5 inline-flex text-base leading-5 font-semibold rounded-full bg-pink-200 text-green-800">
                                {person.emailStatus}
                              </span>
                            )}
                            {person.emailStatus === "Sent" && (
                              <span className="px-5 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {person.emailStatus}
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              href="#"
                              onClick={deleteEmail}
                              id={person.id}
                              className="text-pink-600 hover:text-pink-900"
                            >
                              Delete
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailList;
