import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import images from "../../../constants/index";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useWindowWidth from "../../../utils/useWindowWidth";

function Posters() {
  const windowWidth = useWindowWidth();
  const [slidesToShow, setSlidesToShow] = useState(1);

  const settings = {
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    draggable: true,
    lazyLoad: "ondemand",
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
  };

  return (
    <div className={`${styles.Posters} w-full items-center mt-6 mb-10 `}>
      <Slider {...settings}>
        <Poster />
        <Poster />
        <Poster />
      </Slider>
    </div>
  );
}

function Poster(props) {
  return (
    <div className="service-wrapper" style={{ margin: "0 8px"}}>
      <div
        // to="/form"
        className={`${styles.service} bg-custom-color-100 h-[150px] rounded-lg cursor-pointer flex flex-col items-center justify-center`}
      >
        {/* <img  alt="" src={images.poster} className={`w-full h-full rounded-lg object-cover`}/> */}
        <div className={`titleText`}>Fast and Secure delivery!</div>
      </div>
    </div>
  );
}

export default Posters;
