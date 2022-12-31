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
import TyepForm from "./Components/NewPE/TyepForm";
import UseOfSite from "./Screens/Policy/UseOfSite";
import TOS from "./Screens/Policy/Tos";
import Privacy from "./Screens/Policy/Privacy";
import Refund from "./Screens/Policy/Refund";
import Help from "./Screens/Help/help";
import Stripe from "./Components/Payment/Stripe";
import PEResult from "./Components/NewPE/PEResult";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PETrack from "./Components/NewPE/PETrack";
import ContactPage from "./Screens/Help/ContactPage";
import Apply from "./Screens/Apply";

function App() {
  const [banner, setBanner] = useState(true);
  return (
    <GoogleOAuthProvider clientId="370638679894-7f7e5ni95dmsv3gkhh53ioa5jflipibc.apps.googleusercontent.com">
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
            <Route element={<Apply />} path="/apply"></Route>
            <Route element={<NewPEForm />} path="/pe/form"></Route>
            <Route element={<PEN />} path="/pe"></Route>
            <Route element={<Checkout />} path="/checkout/:orderId"></Route>
            <Route element={<PEResult />} path="/pe/form/:id"></Route>
            <Route element={<PETrack />} path="/pe/track"></Route>
            {/* <Route element={<NewPEForm />} path="/newpe"></Route> */}
            <Route element={<ThanksPage />} path="/thanks/:formId"></Route>
            <Route element={<ContactPage />} path="/contact"></Route>
            <Route element={<NotFound />} path="*"></Route>
            {/* Policy */}
            <Route element={<UseOfSite />} path="/useOfSite"></Route>
            <Route element={<TOS />} path="/tos"></Route>
            <Route element={<Privacy />} path="/privacy"></Route>
            <Route element={<Refund />} path="/refund"></Route>
            {/* Help */}
            <Route element={<Help />} path="/help"></Route>
            <Route element={<Stripe />} path="/stripe"></Route>
          </Routes>

          {/* <Whatsapp /> */}

          <Footer />
        </Router>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
