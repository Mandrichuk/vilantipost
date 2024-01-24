import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import images from "../../../constants/index";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useWindowWidth from "../../../utils/useWindowWidth";

function Reviews() {
  const windowWidth = useWindowWidth();
  const [slidesToShow, setSlidesToShow] = useState(2.1);

  const settings = {
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    draggable: true,
    lazyLoad: "ondemand",
  };

  useEffect(() => {
    if (windowWidth < 800) {
      setSlidesToShow(1.03);
    } else {
      setSlidesToShow(2.02);
    }
  }, [windowWidth]);

  return (
    <div className={`${styles.Reviews} w-full items-center my-6`}>
      <div className={`titleText mt-4`}>Clients' rewiews</div>
      <div className={`articleText mb-4 text-gray-400`}>Take a look what our clients say about us!</div>
      <Slider {...settings}>
        <Review />
        <Review />
        <Review />

      </Slider>
    </div>
  );
}

function Review(props) {
  return (
    <div className="service-wrapper" style={{ margin: "0 8px" }}>
      <div
        // to="/form"
        className={`${styles.service} items-center bg-gray-100  h-[130px] rounded-lg overflow-hidden py-1.5`}
      >
        <div
          className={`${styles.serviceImgContainer} flex flex-row items-center justify-between px-3 h-[45px]`}
        >
          <div className={`${styles.serviceImgContainer} flex flex-row items-center justify-between`}>
            <div
              className={`rounded-full bg-gray-300 text-gray-400 h-[30px] w-[30px]`}
            />
            <div className={`ml-2 aritcleText font-bold`}>
              {/* {props.userName} */}
              John Doe
            </div>
          </div>
          <div className={`w-[60px] object-cover`}>
            <img  alt="" src={images.rating50} className={`w-full h-full object-cover`}/>
          </div>
        </div>

        <div className={`px-3 `}>
          <div className={`aritcleText flex flex-row items-center`}>
            {/* {props.rewiewComment} */}
            Nice cervice, sent the job's files to the client. It was delivered in only 5 days. I do recomend this site.
    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
