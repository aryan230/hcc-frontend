import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import Header from "../../Components/Header";
import Loader from "../../Components/Loader";
import pdf from "./policy/tos.pdf";

function TOS() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setLoading(false);
    setNumPages(numPages);
    setPageNumber(1);
  }
  function LoadingProgress() {
    return <Loader />;
  }
  return (
    <>
      <Header />
      <center>
        <div>
          <iframe
            src={pdf}
            frameborder="0"
            style={{
              width: "80%",
              height: "90vh",
            }}
          ></iframe>
        </div>
      </center>
    </>
  );
}

export default TOS;
