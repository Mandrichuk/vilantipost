import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./track.module.css";
import Navbar from "../../common/navbar/Navbar";
import images from "../../../constants/index";
import { links } from "../../../constants/index";
import useWindowWidth from "../../../utils/useWindowWidth";
import { setOrderBoxData } from "../../../features/orderBox";
import Footer from "../../common/footer/Footer";
import { trackPage } from "../../../constants/index";
import TextInput from "../../common/TextInput";


const HomePage = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const trackPageText = language === "en" ? trackPage.en : trackPage.ru;
  const windowWidth = useWindowWidth();


  return (
    <>
      <Navbar />
      <div
        className={`${styles.backgroundCover} w-full h-[100vh] flex flex-col items-center`}
      >
        <div className={`wrapper`}>
          <div className={`titleText`}>{trackPageText.title}</div>
          <div className={`${styles.trackInputs} mt-[30px] w-full flex ${windowWidth < 650 ? "flex-col" : "flex-row"}`}>
            <TextInput
              placeholder={trackPageText.input.placeholder}
              value={trackPageText.input.value}
              field={trackPageText.input.field}
              type={trackPageText.input.type}
              getValue={(field, value) => {
                
              }}
            />
            <button className={`darkerButton`}>
              {trackPageText.buttonSubmit}
            </button>
          
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
