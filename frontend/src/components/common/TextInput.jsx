import React, { useState } from "react";
import onlyEnLetters from "../../utils/onlyEnLetters"; 

function TextInput(props) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    let inputValue = onlyEnLetters(e.target.value);
    setInput(inputValue);
  }

  return (
    <div className={`inputBox ${props.marginTop ? "" : "noMargin"}`}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={input}
        required={true}
        onChange={handleChange}
      />
      <span>{props.value && typeof props.value === "object" ? JSON.stringify(props.value) : props.value}</span>
    </div>
  );
}

export default TextInput;
