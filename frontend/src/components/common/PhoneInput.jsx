import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { countries } from "../../constants/index";
import numericInput from "../../utils/numericInput";

function PhoneInput(props) {
  const language = useSelector((state) => state.language.language);
  const customInputContainerRef = useRef(null);
  const [input, setInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [countries, setCountries] = useState(props.arr);
  const [numberInput, setNumberInput] = useState("");
  const [chosenNumber, setChosenNumber] = useState(countries[0].exampleNumber);

  useEffect(() => {
    const foundItem = countries.find((item) => item.number === input);
    if (foundItem) {
      setChosenNumber(foundItem.exampleNumber);
    }
  }, [input, countries]);

  useEffect(() => {
    if (customInputContainerRef.current) {
      const containerWidth = customInputContainerRef.current.offsetWidth;
      const customUL = document.querySelector(".customUL");
      if (customUL) {
        customUL.style.width = `${containerWidth}px`;
      }
    }
  }, [isActive]);

  function handleInputChange(e) {
    const value = e.target.value;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setInput(capitalizedValue);
    setIsActive(true);
  }

  function handleInputChoose(newInput) {
    setInput(newInput);
    handleInputBlur();
  }

  function handleInputBlur() {
    setTimeout(() => {
      setIsActive(false);
    }, 150);
  }

  function handleNumberInputChange(e) {
    let inputValue = e.target.value;
    const fixedInputValue = numericInput(inputValue);

    if (inputValue.length <= 15) {
      setNumberInput(fixedInputValue);
    }
  }

  return (
    <div className={`flex flex-row`}>
      <div>
        <div
          className={`customInputContainer w-[90px]`}
          onBlur={handleInputBlur}
          ref={customInputContainerRef}
        >
          <input
            className={`customInput ${
              isActive ? "active" : ""
            } noneRoundedRight`}
            placeholder={language === "en" ? "Choose" : "Выберите"}
            value={input}
            onClick={handleInputChange}
          />
          <FaCaretDown className={`inputIcon`} />
        </div>
        {isActive && (
          <ListUL itemsUL={countries} handleInputChoose={handleInputChoose} />
        )}
      </div>

      <div className={`inputBox ${props.marginTop ? "" : "noMargin"}`}>
        <input
          className={`noneRoundedLeft`}
          placeholder={chosenNumber}
          value={numberInput}
          required={true}
          onChange={handleNumberInputChange}
        />
        <span>{props.title}</span>
      </div>
    </div>
  );
}

const ListUL = (props) => {
  const language = useSelector((state) => state.language.language);
  const arr = props.itemsUL;

  return (
    <ul className={`customUL`}>
      {arr.map((item, index) => (
        <li
          key={`input-li-${index}`}
          value={item.number}
          className={`tinyText flex flex-row`}
          onClick={() => props.handleInputChoose(item.number)}
        >
          <div className={`w-[20px]`}>{item.flag}</div>
          <div className={`w-[50px]`}>({item.number})</div>
        </li>
      ))}
    </ul>
  );
};

export default PhoneInput;
