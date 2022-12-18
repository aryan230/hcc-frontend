import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Banner from "./Utils/banner";
import Login from "./Screens/Auth/Login";
import Footer from "./Components/footer";
import Register from "./Screens/Auth/Register";
import Landing from "./Screens/Landing";
import { useState } from "react";
import UA from "./Screens/Programs/UA";
import Checkout from "./Screens/Checkout";
import NotFound from "./Screens/NotFound";
import VisaC from "./Screens/Programs/VisaC";
import Acc from "./Screens/Programs/Acc";
import PE from "./Screens/Programs/PE";
import PEN from "./Screens/Programs/PEN";
import ThanksPage from "./thanks";
import "react-toastify/dist/ReactToastify.css";
import PECheckout from "./Components/PE/PECheckout";
import Whatsapp from "./Utils/whatsapp";
import NewPEForm from "./Components/NewPE/NewPEForm";

function App() {
  const [banner, setBanner] = useState(true);
  return (
    <div className="pb-10">
      <Router>
        {banner && <Banner closeBanner={setBanner} />}

        <Routes>
          <Route element={<Home />} path="/"></Route>

          <Route element={<Landing />} path="/app"></Route>

          <Route element={<Login />} path="/login"></Route>

          <Route element={<Register />} path="/signup"></Route>

          <Route element={<UA />} path="/university-admission"></Route>
          <Route element={<VisaC />} path="/visa"></Route>
          <Route element={<Acc />} path="/accomidation"></Route>
          <Route element={<NewPEForm />} path="/pe/form"></Route>
          <Route element={<PEN />} path="/pe"></Route>
          <Route element={<Checkout />} path="/checkout/:orderId"></Route>
          <Route element={<PECheckout />} path="/pecheckout/:formId"></Route>
          {/* <Route element={<NewPEForm />} path="/newpe"></Route> */}
          <Route element={<ThanksPage />} path="/thanks/:formId"></Route>
          <Route element={<NotFound />} path="*"></Route>
        </Routes>
        {/* <Whatsapp /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
