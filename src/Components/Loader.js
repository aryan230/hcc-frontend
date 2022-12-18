import { ClimbingBoxLoader } from "react-spinners";
import Logo from "../assets/logo.gif";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-content">
      <div className="loader-inside">
        <Oval
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
    </div>
  );
};

export default Loader;
