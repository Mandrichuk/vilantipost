import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import images from "../../../constants/index";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useWindowWidth from "../../../utils/useWindowWidth";
import { homePage } from "../../../constants/index";
import { useSelector } from "react-redux";


function PopularServices() {
  const language = useSelector((state) => state.language.language);
  // const popularServicesText = language === "en" ? homePage.en.popularServices : homePage.ru.popularServices;
  const windowWidth = useWindowWidth();
  const [slidesToShow, setSlidesToShow] = useState(2.1);


  console.log(language)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    swipeToSlide: true,
    draggable: true,
    lazyLoad: "ondemand",
    arrows: false,
  };


  useEffect(() => {
    if (windowWidth < 750) {
      setSlidesToShow(2.05);
    } 
    if (windowWidth > 750) {
      setSlidesToShow(3.05);
    }
    if (windowWidth > 1250) {
      setSlidesToShow(4.05);
    }
  }, [windowWidth]);

  return (
    <div className={`${styles.popularServices} w-full items-center mt-6`}>
      <div className={`titleText mb-4`}>Popular choices</div>
      <Slider {...settings}>
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </Slider>
    </div>
  );
}

function Service(props) {
  return (
    <div className="service-wrapper" style={{ margin: "0 4px" }}>
      <Link
        // to="/form"
        className={`${styles.service} items-center bg-red-100 max-w-[200px] h-[250px] rounded-lg overflow-hidden cursor-pointer`}
      >
        <div
          className={`${styles.serviceImgContainer} flex flex-col items-centere justify-center h-[75%] border-[0.5px] border-gray-200`}
        >
          <img
            alt=""
            src={images.SlovakFlag}
            className={`w-full h-full object-cover`}
          />
        </div>

        <div className={`px-2 py-2`}>
          <div className={`aritcleText flex flex-row items-center`}>
            {/* {props.fromCountryName} */}
            {/* - */}
            {/* {props.toCountryName} */}
            Croatia - Russia
          </div>
          <p
            className={`labelText whitespace-no-wrap overflow-hidden text-ellipsis`}
          >
            {props.deliveryTime}
            Доставка: 5 дней
          </p>
        </div>
      </Link>
    </div>
  );
}

export default PopularServices;
