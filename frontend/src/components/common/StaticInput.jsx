import React, { useState } from "react";

function TextInput(props) {


  return (
    <div className={`inputBox ${props.marginTop ? "" : "noMargin"}`}>
      <input
        placeholder={props.placeholder}
        className={`placeholder-dark-gray-color-600 font-bold`}
        readOnly 
      />
      <span>{props.value}</span>
    </div>
  );
}

export default TextInput;
