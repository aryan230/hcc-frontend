import React from "react";
import { Triangle } from "react-loader-spinner";

function PELoader() {
  return (
    <div className="pe-loader">
      {" "}
      <Triangle
        height={80}
        width={80}
        color="#3730a3"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#3730a3"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export default PELoader;
