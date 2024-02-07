import React, { useState, useRef } from "react";
import { MdMessage } from "react-icons/md";
import useWindowWidth from "../../utils/useWindowWidth";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/animatedMessage.json";
import {sosialMedias} from "../../constants/index";
import motion from "framer-motion";

function ContactUsButton() {
  const windowWidth = useWindowWidth();
  const ref = useRef(null);
  const [messangersOpened, setMessangersOpened] = useState(false);
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const toggleMessangersHandle = () => {
    setMessangersOpened((prevValue) => !prevValue);
  };


  return (
    <div className={`contactUsButton fixed flex flex-col items-end justify-end`}>
      {messangersOpened && (
      <div className={` grid gap-2`}>
      
      {sosialMedias.map((item, index) => (
        <a key={index} href={item.link} target="_blank">
          <div className={`h-[60px] w-[60px] text-white rounded-full bg-white overflow-hidden`}>
            <img  src={item.icon} alt="" className={``}/>
          </div>
        </a>
      ))}


      
      </div>
      )}


      <div
        onClick={toggleMessangersHandle}
        className={` h-[60px] w-[60px]  bg-custom-color-900 text-white rounded-lg mt-2`}
      >
        <div className={`w-full h-full p-2.5`}>
          <Lottie lottieRef={ref} options={defaultOptions} />
        </div>
      </div>
    </div>
  );
}

export default ContactUsButton;
