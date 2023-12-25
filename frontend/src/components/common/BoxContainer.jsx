import React from "react";
function BoxContainer(props) {
  const { height = 0, width = 0, bgColor = 0, shadow } = props;
  console.log(bgColor,height , width)

  return (
    <>
      <div className={`h-${height} w-${width} bg-${bgColor} ${shadow ? "shadow-xl " : ""} infoContainer`}>
        {/* {props.title} */}
        dddsdfsdfsfsdf
      </div>
    </>
  );
}

export default BoxContainer;