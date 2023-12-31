import React, { useState } from "react";

const RadioButtons = (props) => {
  const radioOptions = props.arr;
  const [selectedRadio, setSelectedRadio] = useState(radioOptions[0].value);
  const handleRadioChange = (value) => {
    setSelectedRadio(value);
  };

  return (
    <div className={`mt-5 mb-3 flex flex-row items-center justify-between`}>
      {
        radioOptions.map(item => (
          <RadioButton
            key={item.value}
            mutualName={"choose-kg"}
            label={item.label}
            value={item.value}
            selected={selectedRadio === item.value}
            onChange={() => handleRadioChange(item.value)}
          />
        ))
      } 
    </div>
  );
};

const RadioButton = (props) => {
  return (
    <label className={`radioContainer ${props.selected ? "selected" : ""}`}>
      <input
        className="customRadio"
        type="radio"
        name={props.mutualName}
        value={props.value}
        checked={props.selected}
        onChange={props.onChange}
      />
      {props.label}
    </label>
  );
};

export default RadioButtons;
