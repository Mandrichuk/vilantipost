import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import styles from "./track.module.css";
import Navbar from "../../common/navbar/Navbar";
import { homePage } from "../../../constants/index";
import images from "../../../constants/index";
import { links } from "../../../constants/index";
import useWindowWidth from "../../../utils/useWindowWidth";
import { setOrderBoxData } from "../../../features/orderBox";
import Footer from "../../common/footer/Footer";

const HomePage = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const orderBoxData = useSelector((state) => state.orderBox.orderBox);
  const windowWidth = useWindowWidth();




  return (
    <>
      <Navbar />
      <div
        className={`${styles.backgroundCover} w-full h-[100vh] flex flex-col items-center`}
      >
        <div className={`wrapper`}>

        </div>
        </div>
      <Footer />
    </>
  );
};

export default HomePage;
