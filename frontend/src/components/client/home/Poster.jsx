import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import images from "../../../constants/index";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useWindowWidth from "../../../utils/useWindowWidth";

function Poster(props) {
  const windowWidth = useWindowWidth();

  return (
    <div className={`${styles.poster} w-full ${
        windowWidth > 1000 ? "h-[690px] mr-4 flex-1" : "h-[140px] mb-4"
      } shadow-lg`}>
    <div
      // to="/form"
      className={`${
        styles.service
      } bg-custom-color-100 rounded-lg h-full w-full cursor-pointer flex flex-col items-center justify-center `}
    >
      {/* <img  alt="" src={images.poster} className={`w-full h-full rounded-lg object-cover`}/> */}
      <div className={`titleText`}>Fast and Secure delivery!</div>
    </div>
    </div>
  );
}

export default Poster;
