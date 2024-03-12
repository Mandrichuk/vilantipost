import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import images from "../../../constants/index";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowWidth from "../../../utils/useWindowWidth";
import { navId } from "../../../constants/index";
import { useSelector } from "react-redux";

function Poster(props) {
  const language = useSelector((state) => state.language.language);
  const windowWidth = useWindowWidth();
  let [currentPoster, setCurrentPoster] = useState(images.mobilePoster);

  useEffect(() => {
    if (windowWidth < 1300) {
      if (language === "en") {
        setCurrentPoster(images.mobileEnPoster);
      } else {
        setCurrentPoster(images.mobileRuPoster);
      }
    }
    if (windowWidth >= 1300) {
      if (language === "en") {
        setCurrentPoster(images.pcEnPoster);
      } else {
        setCurrentPoster(images.pcRuPoster);
      }
    }
  }, [windowWidth, language]);

  return (
    <div
      className={`${styles.poster} w-full relative top-0 left-0 ${
        windowWidth < 1300 ? "pt-[35%]" : "h-[585px]"
      } overflow-hidden  shadow-lg rounded-md`}
    >
      <a
        href={`#${navId.form}`}
        className={`${styles.service} bg-custom-color-100 rounded-lg h-full w-full cursor-pointer flex flex-col items-center justify-center overflow-hidden`}
      >
        <img
          alt="poster"
          src={currentPoster}
          className={`w-full ${
            windowWidth >= 1300 && "h-full"
          } absolute top-0 left-0 w-full h-full object-cover`}
        />
      </a>
    </div>
  );
}

export default Poster;
