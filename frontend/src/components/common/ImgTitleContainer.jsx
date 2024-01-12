import React from "react";
import { FaGun } from "react-icons/fa6";
import images from "../../constants/index";

function ImgTitleContainer(props) {
  const { direction = "column", bgColor = "transparent", shadow, title, article, img } = props;

  const containerStyles = {
    display: "flex",
    flexDirection: direction,
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    height: "70px",
    backgroundColor: bgColor,
    boxShadow: shadow ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
  };

  return (
    <div style={containerStyles} className="infoContainer text-gray-100">
      <div className={`h-[35px] mr-4`}>
        <img src={images.whiteEnvelope} alt="" className={`w-full h-full object-cover`} />
      </div>
      <div className={`flex flex-col`}>
      
        <div className={`text-lg font-bold`}>
          {title}
        </div>
        <div className={`text-lg font-bold tinyText`}>
          {article}
        </div>
      </div>
    </div>
  );
}

export default ImgTitleContainer;
