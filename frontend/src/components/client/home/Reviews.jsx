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

function Reviews() {
  const language = useSelector((state) => state.language.language);
  const reviewsArr = homePage.Reviews.reviews;
  const reviewsText =
    language === "en" ? homePage.Reviews.en : homePage.Reviews.ru;
  const windowWidth = useWindowWidth();
  const [slidesToShow, setSlidesToShow] = useState(2.1);

  const settings = {
    infinite: false,
    speed: 400,
    slidesToShow: slidesToShow,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  useEffect(() => {
    if (windowWidth < 750) {
      setSlidesToShow(1.05);
    }
    if (windowWidth > 750) {
      setSlidesToShow(2.05);
    }
    if (windowWidth > 1400) {
      setSlidesToShow(3.05);
    }
  }, [windowWidth]);

  return (
    <div className={`${styles.Reviews} w-full items-center sectionMargin`}>
      <div className={`containerTitleText`}>{reviewsText.titleText}</div>

      <div
        className={`p-3 flex flex-col items-center justify-center w-full relative`}
      >
        <img
          src={images.peopleRating}
          alt="peopleRating"
          className={`object-cover opacity-[1] h-[300px]`}
        />
        <Link
          to="/"
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl max-w-[250px] bloatedButton`}
        ></Link>
      </div>

      <div className={`articleText mb-2 mx-2 text-gray-400`}>
        {reviewsText.articleText}
      </div>
      <Slider {...settings}>
        {reviewsArr.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </Slider>
    </div>
  );
}

function Review(props) {
  const language = useSelector((state) => state.language.language);
  const [translatedReview, setTranslatedReview] = useState(false);
  const reviewsText =
    language === "en" ? homePage.Reviews.en : homePage.Reviews.ru;

  function translatedReviewHandler() {
    setTranslatedReview(!translatedReview);
  }

  return (
    <div className="service-wrapper" style={{ margin: "0 8px" }}>
      <div
        // to="/form"
        className={`${styles.service} items-center bg-gray-100 h-[130px] rounded-lg overflow-hidden py-1.5 relative`}
      >
        <div
          className={`${styles.serviceImgContainer} flex flex-row items-center justify-between px-3 h-[45px]`}
        >
          <div
            className={`${styles.serviceImgContainer} flex flex-row items-center justify-between`}
          >
            <div className={`flex flex-row items-baseline`}>
              <div className={`aritcleText font-bold pl-2`}>{props.name}</div>
              <div className={`text-[0.8rem] text-gray-400 pl-2`}>
                {props.date}
              </div>
            </div>
          </div>
          <div className={`w-[80px] object-cover pr-2`}>
            <img
              alt=""
              src={getRating(props.rating)}
              className={`w-full h-full object-cover`}
            />
          </div>
        </div>

        <div className={`px-3`}>
          <div className={`aritcleText flex flex-row items-center`}>
            {translatedReview
              ? props.translatedReview
              : props.originalReview.comment}
          </div>
        </div>
        {language !== props.originalReview.lang && (
          <div
            onClick={translatedReviewHandler}
            className={`absolute bottom-2 right-5 underlinedText`}
          >
            {translatedReview
              ? reviewsText.originalBtn
              : reviewsText.translateBtn}
          </div>
        )}
      </div>
    </div>
  );
}

function getRating(ratingValue) {
  switch (ratingValue) {
    case 0:
      return images.rating0;
    case 0.5:
      return images.rating05;
    case 1:
      return images.rating10;
    case 1.5:
      return images.rating15;
    case 2:
      return images.rating20;
    case 2.5:
      return images.rating25;
    case 3:
      return images.rating30;
    case 3.5:
      return images.rating35;
    case 4:
      return images.rating40;
    case 4.5:
      return images.rating45;
    case 5:
      return images.rating50;
  }
}

export default Reviews;
