import React, { useState, useEffect} from "react";
import onlyEnLetters from "../../utils/onlyEnLetters"; 

function TextInput(props) {
  const [input, setInput] = useState("");
  function handleChange(e) {
    let inputValue = e.target.value;
    if (!props.allowLanguages) {
      inputValue = onlyEnLetters(inputValue);
    }
    setInput(inputValue);
  }

  useEffect(() => {
    props.getValue(props.field, input);
  }, [input]);

  return (
    <div className={`${props.whiteInputBox && "whiteInputBox"} inputBox ${props.marginTop ? "" : "noMargin"} w-full`}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={input}
        required={true}
        onChange={handleChange}
        className={`${props.error && input.length === 0 && "errorBorder"}`}
      />
      <span>{props.value && typeof props.value === "object" ? JSON.stringify(props.value) : props.value}</span>
    </div>
  );
}

export default TextInput;
