import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";
import Bulb from "../assets/bulb.svg";
import Loader from "../Components/Loader";
import { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
function Mail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const collRef = collection(db, "mail-one");
  const [dataSet, setDataSet] = useState(false);
  const putData = async () => {
    const docRef = await addDoc(collRef, {
      id,
    });
    setDataSet(true);
  };
  useEffect(() => {
    if (dataSet) {
      navigate("/apply");
    }
    putData();
  }, [dataSet]);
  return (
    <>
      <Loader />
    </>
  );
}

export default Mail;
