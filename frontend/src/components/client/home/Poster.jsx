import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import images from "../../../constants/index";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowWidth from "../../../utils/useWindowWidth";


function Poster(props) {
  const windowWidth = useWindowWidth();
  let [currentPoster, setCurrentPoster] = useState(images.mobilePoster);

  console.log(currentPoster);
  useEffect(() => {

    if (windowWidth <= 625) {
      setCurrentPoster(images.mobilePoster);
    }
    if (windowWidth > 625 && windowWidth <= 1000) {
      setCurrentPoster(images.tabletPoster);
    }
    if (windowWidth > 1000 && windowWidth <= 1500) {
      setCurrentPoster(images.laptopPoster);
    }
    if (windowWidth > 1500) {
      setCurrentPoster(images.pcPoster);
    }
  }, [windowWidth]);

  return (
    <div
      className={`${styles.poster} w-full  ${
        windowWidth < 500 && windowWidth < 1000 ? "h-[130px]" : "h-[200px]"
      } ${
        windowWidth >= 1000 ? "h-[587px] mr-4 flex-1" : "h-[140px] mb-4"
      } shadow-lg`}
    >
      <a
        href="#orderBox"
        className={`${styles.service} bg-custom-color-100 rounded-lg h-full w-full cursor-pointer flex flex-col items-center justify-center overflow-hidden`}
      >
        <img
          alt="poster"
          src={currentPoster}
          className={`w-full object-cover ${windowWidth >= 1000 && "h-full"}`}
        />
      </a>
    </div>
  );
}

export default Poster;
