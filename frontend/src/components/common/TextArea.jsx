import React, { useState, useEffect } from "react";
import onlyEnLetters from "../../utils/onlyEnLetters";

function TextArea(props) {
  const [input, setInput] = useState("");
  function handleChange(e) {
    let inputValue = onlyEnLetters(e.target.value);
    setInput(inputValue);
  }

  useEffect(() => {
    props.getValue(props.field, input);
  }, [input]);

  return (
    <>
      <textarea
        type={props.type}
        placeholder={props.placeholder}
        value={input}
        required={true}
        onChange={handleChange}
        className={`${
          props.error && input.length === 0 && "errorBorder"
        } textArea w-full`}
      />
      <span>
        {props.value && typeof props.value === "object"
          ? JSON.stringify(props.value)
          : props.value}
      </span>
    </>
  );
}

export default TextArea;
