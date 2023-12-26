import React, { useState } from "react";

function TextInput(props) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    let inputValue = e.target.value;
    setInput(inputValue);
  }

  return (
    <div className={`inputBox ${props.marginTop ? "" : "noMargin"}`}>
      <input
        placeholder={props.placeholder}
        value={input}
        required={true}
        onChange={handleChange}
      />
      <span>{props.title}</span>
    </div>
  );
}

export default TextInput;
