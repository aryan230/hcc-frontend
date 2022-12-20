import React, { useState } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "../Loader";
import PEModal from "../PE/PEModal";
import PELoader from "../../Utils/PELoader";
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";

registerCoreBlocks();
function NewPEForm() {
  const Boards = [
    {
      label: "CBSE - Central Board of Secondary Education",
      value: "CBSE - Central Board of Secondary Education",
    },
    {
      label: "ISC - Indian School Certificate",
      value: "ISC - Indian School Certificate",
    },
    {
      label: "ICSE - Indian School Certificate Examinations",
      value: "ICSE - Indian School Certificate Examinations",
    },
    {
      label: "NIOS – National Institute of Open Schooling",
      value: "NIOS – National Institute of Open Schooling",
    },
    {
      label:
        "UP Board - Board of High School and Intermediate Education Uttar Pradesh",
      value:
        "UP Board - Board of High School and Intermediate Education Uttar Pradesh",
    },
    {
      label: "JKBOSE - Jammu and Kashmir State Board of School Education",
      value: "JKBOSE - Jammu and Kashmir State Board of School Education",
    },
    {
      label: "RBSE - Board of Secondary Education Rajasthan",
      value: "RBSE - Board of Secondary Education Rajasthan",
    },
    {
      label: "HPBOSE - Himachal Pradesh Board of School Education",
      value: "HPBOSE - Himachal Pradesh Board of School Education",
    },
    {
      label: "MPBSE - Madhya Pradesh Board of Secondary Education",
      value: "MPBSE - Madhya Pradesh Board of Secondary Education",
    },
    {
      label: "CGBSE - Chhattisgarh Board of Secondary Education",
      value: "CGBSE - Chhattisgarh Board of Secondary Education",
    },
    {
      label: "PSEB – Punjab School Education Board",
      value: "PSEB – Punjab School Education Board",
    },
    {
      label: "BSEH - Haryana Board of School Education (HBSE)",
      value: "BSEH - Haryana Board of School Education (HBSE)",
    },
    {
      label: "BSEB - Bihar School Examination Board",
      value: "BSEB - Bihar School Examination Board",
    },
    {
      label: "GSEB - Gujarat Secondary and Higher Secondary Education Board",
      value: "GSEB - Gujarat Secondary and Higher Secondary Education Board",
    },
    {
      label:
        "MSBSHSE – Maharashtra State Board Of Secondary and Higher Secondary Education",
      value:
        "MSBSHSE – Maharashtra State Board Of Secondary and Higher Secondary Education",
    },
    {
      label: "BIEAP - Andhra Pradesh Board of Intermediate Education",
      value: "BIEAP - Andhra Pradesh Board of Intermediate Education",
    },
    {
      label: "BSEAP - Andhra Pradesh Board of Secondary Education",
      value: "BSEAP - Andhra Pradesh Board of Secondary Education",
    },
    {
      label: "WBBSE - West Bengal Board of Secondary Education",
      value: "WBBSE - West Bengal Board of Secondary Education",
    },
    {
      label: "WBCHSE - West Bengal Council of Higher Secondary Education",
      value: "WBCHSE - West Bengal Council of Higher Secondary Education",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];

  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const collRef = collection(db, "pe-forms");
  const [peModal, setPeModal] = useState(false);
  const [peData, setPeData] = useState({});
  const [peID, setPEID] = useState("");
  const formSubmitHandler = async (data) => {
    setLoader(true);

    const ansObj = {
      board: data.answers.board.value,
      email: data.answers.email.value,
      ftWEXP: data.answers.ftWEXP.value,
      gender: data.answers.gender.value,
      gmat: data.answers.gmat.value,
      gqr1294c: data.answers.gqr1294c.value,
      kd12edg: data.answers.kd12edg.value,
      nb913rqw: data.answers.nb913rqw.value,
      ptWEXP: data.answers.ptWEXP.value,
      something: data.answers.something.value,
      something2: data.answers.something2.value,
      something3: data.answers.something3.value,
      isPaid: false,
    };
    console.log(ansObj);
    const docRef = await addDoc(collRef, ansObj);
    setPeData(ansObj);
    setPEID(docRef.id);
    setLoader(false);
    setPeModal(true);
  };

  return (
    <div className="pe-form-new">
      <PEModal
        value={peModal}
        closePEModal={setPeModal}
        data={peData}
        id={peID}
      />
      {loader && <PELoader />}
      <Form
        formId="1"
        style={{ fontSize: "34px" }}
        formObj={{
          blocks: [
            {
              name: "welcome-screen",
              id: "jg1401r",
              layout: "split-right",
              attributes: {
                attachment: {
                  type: "image",
                  url: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
                },
                layout: "split-right",
                required: true,
                label: "Welcome to Profile Evaluation 2022",
                description: "For best experience use a Laptop/PC",
              },
            },
            {
              name: "short-text",
              id: "kd12edg",
              attributes: {
                required: true,
                label: "Let's start with your name",
              },
            },
            {
              name: "email",
              id: "email",
              attributes: {
                required: true,
                label: "Your Email Address",
              },
            },
            {
              name: "dropdown",
              id: "nb913rqw",
              attributes: {
                required: true,
                label: "Where you from?",
                choices: [
                  {
                    label: "India",
                    value: "India",
                  },
                  {
                    label: "United Kingdom",
                    value: "United Kingdom",
                  },
                  {
                    label: "Other",
                    value: "Other",
                  },
                ],
              },
            },
            {
              name: "dropdown",
              id: "gender",
              attributes: {
                required: true,
                label: "Gender?",
                choices: [
                  {
                    label: "Male",
                    value: "Male",
                  },
                  {
                    label: "Female",
                    value: "Female",
                  },
                  {
                    label: "Other",
                    value: "Other",
                  },
                ],
              },
            },
            {
              name: "number",
              id: "something",
              attributes: {
                required: true,
                label: "What is your 12th CGPA or %",
              },
            },
            {
              name: "number",
              id: "something2",
              attributes: {
                required: true,
                label: "What was your score in English in 12th class?",
              },
            },
            {
              name: "dropdown",
              id: "board",
              attributes: {
                required: true,
                label: "Which is your 12th class board?",
                choices: Boards,
              },
            },
            {
              name: "number",
              id: "something3",
              attributes: {
                required: true,
                label: "What is your college CGPA? % or CGPA out of 10",
              },
            },
            {
              name: "dropdown",
              id: "gmat",
              attributes: {
                required: true,
                label: "Have you taken or are you planning to take GMAT/GRE?",
                choices: [
                  {
                    label: "Taken",
                    value: "Taken",
                  },
                  {
                    label: "Planning",
                    value: "Planning",
                  },
                  {
                    label: "None",
                    value: "None",
                  },
                ],
              },
            },
            {
              name: "short-text",
              id: "ptWEXP",
              attributes: {
                required: true,
                label: "Do you have part time work experience ? (Internships) ",
              },
            },
            {
              name: "short-text",
              id: "ftWEXP",
              attributes: {
                required: true,
                label: "Do you have full time work experience ?",
              },
            },
            {
              name: "multiple-choice",
              id: "gqr1294c",
              attributes: {
                required: true,
                multiple: true,
                verticalAlign: false,
                label:
                  "Do you have any target Countries in mind? (You can choose multiple)",
                choices: [
                  {
                    label: "Overall Europe",
                    value: "Overall Europe",
                  },
                  {
                    label: "Canada",
                    value: "Canada",
                  },
                  {
                    label: "UK",
                    value: "UK",
                  },
                  {
                    label: "USA",
                    value: "USA",
                  },
                  {
                    label: "Ireland",
                    value: "Ireland",
                  },
                  {
                    label: "Singapore",
                    value: "Singapore",
                  },
                ],
              },
            },
          ],
          theme: {
            font: "Karla",

            buttonsBgColor: "#9b51e0",
            logo: {
              src: "",
            },
            questionsColor: "#000",
            answersColor: "#0aa7c2",
            buttonsFontColor: "#fff",
            buttonsBorderRadius: 25,
            errorsFontColor: "#fff",
            errorsBgColor: "#f00",
            progressBarFillColor: "#000",
            progressBarBgColor: "#ccc",
          },
        }}
        onSubmit={(
          data,
          { completeForm, setIsSubmitting, goToBlock, setSubmissionErr }
        ) => {
          console.log(data);
          setTimeout(() => {
            setIsSubmitting(false);
            formSubmitHandler(data);
          }, 500);
        }}
      />
    </div>
  );
}

export default NewPEForm;
