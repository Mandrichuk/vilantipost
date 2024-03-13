import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./home.module.css";
import Navbar from "../../common/navbar/Navbar";
import PopularServices from "./PopularServices";
import Reviews from "./Reviews";
import DeliveryProcesses from "./DeliveryProcesses";
import OrderBox from "./OrderBox";
import TrackParcel from "./TrackParcel";
import ProhibitedGoods from "./ProhibitedGoods";
import Footer from "../../common/footer/Footer";
import { usePreviousURL } from "../../../utils/HIstoryContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifySuccess, notifyError } from "../../../constants";
import ContactUsButton from "../../common/AiSupport/AiSupport";
import AllowedGoods from "./AllowedGoods";

const HomePage = () => {
  const { history } = usePreviousURL();
  const previousURL = history.length > 1 ? history[history.length - 2] : null;
  const isFormSuccessed = useSelector(
    (state) => state.isFormSuccessed.isFormSuccessed
  );
  useEffect(() => {
    if (previousURL === "/form" && isFormSuccessed) {
      console.log("hell");
      notifySuccess();
    } else if (previousURL === "/form" && !isFormSuccessed) {
      notifyError();
    } else {
      return;
    }
  }, [previousURL]);

  return (
    <>
      <Navbar customColor={true} bottomShadow={false} />
      <OrderBox />

      <div className={`w-full flex flex-col justify-center items-center`}>
        <div className={`wrapper`}>
          <PopularServices />
          <DeliveryProcesses />
          <AllowedGoods />
          <ProhibitedGoods />
          <TrackParcel />
          <Reviews />
        </div>
      </div>

      <Footer />
      {/* <ContactUsButton /> */}
      <ToastContainer />
    </>
  );
};

export default HomePage;
