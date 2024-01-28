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

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  return (
    <>
      <Navbar customColor={true} bottomShadow={false} />
      <OrderBox />

      <div className={`w-full flex flex-col justify-center items-center`}>
        <div className={`wrapper`}>
          <PopularServices />
          <DeliveryProcesses />
          <Reviews />
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
