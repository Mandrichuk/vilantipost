import React, { useState } from "react";

function TextInput(props) {
  const [value, setValue] = useState("");
  console.log(value);
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className={'inputBox'}>
      <input
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
