import React from "react";
function BoxContainer(props) {
  const { height, width, bgColor, shadow } = props;

  return (
    <div className={`h-${height} w-${width} bg-${bgColor} ${shadow ? "shadow-xl " : ""} infoContainer`}>
      {props.title}
    </div>
  );
}

export default BoxContainer;