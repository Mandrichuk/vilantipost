import React, { useState } from "react";

function TextInput(props) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    let inputValue = e.target.value;

    if (props.type === "phone") {
      inputValue = inputValue.replace(/\D/g, "");
      inputValue = inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }

    setValue(inputValue);
  }

  return (
    <div className={`inputBox ${props.marginTop ? "" : "noMargin"}`}>
      <input
        className={`${props.value === "number" ? "noneRoundedLeft" : ""}`}
        placeholder={props.placeholder}
        value={value}
        required={true}
        onChange={handleChange}
      />
      <span>{props.title}</span>
    </div>
  );
}

export default TextInput;
