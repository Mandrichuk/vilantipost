import React from "react";
import { FaGun } from "react-icons/fa6";

function ImgTitleContainer(props) {
  const { direction = "column", bgColor = "transparent", shadow } = props;

  const containerStyles = {
    display: "flex",
    flexDirection: direction,
    alignItems: "center",
    justifyContent: "start",
    width: "350px",
    height: "auto",
    backgroundColor: bgColor,
    boxShadow: shadow ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
  };

  return (
    <div style={containerStyles} className="infoContainer">
      <div className={`h-[70px] w-[100px] mr-4`}>
        <img src="" alt="" className={`w-full h-full object-cover`} />
      </div>
      <div className={`text-lg font-bold`}>
        {props.title}
      </div>
    </div>
  );
}

export default ImgTitleContainer;
