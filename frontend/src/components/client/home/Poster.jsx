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


  useEffect(() => {

    if (windowWidth < 1300) {
      setCurrentPoster(images.mobilePoster);
    }
    if (windowWidth >= 1300) {
      setCurrentPoster(images.pcPoster);
    }
  }, [windowWidth]);

  return (
    <div
      className={`${styles.poster} w-full relative top-0 left-0 ${windowWidth < 1300 ?"pt-[35%]" : "h-[585px]"} overflow-hidden  shadow-lg rounded-md`}
    >
      <a
        href="#orderBox"
        className={`${styles.service} bg-custom-color-100 rounded-lg h-full w-full cursor-pointer flex flex-col items-center justify-center overflow-hidden`}
      >
        <img
          alt="poster"
          src={currentPoster}
          className={`w-full ${windowWidth >= 1300 && "h-full"} absolute top-0 left-0 w-full h-full object-cover`}
        />
      </a>
    </div>
  );
}

export default Poster;
