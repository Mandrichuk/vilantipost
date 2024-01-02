import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const ChoiseInput = (props) => {
  const language = useSelector((state) => state.language.language);
  const [input, setInput] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [countries, setCountries] = useState(props.arr);
  const customInputContainerRef = useRef(null);

  useEffect(() => {
    const searchName = input.toLowerCase();

    const filteredItems = props.arr.filter(
      (item) =>
        item.en.name.toLowerCase().includes(searchName) ||
        item.ru.name.toLowerCase().includes(searchName) ||
        item.code.toLowerCase().includes(searchName) ||
        item.number.toLowerCase().includes(searchName)
    );
    setCountries(filteredItems);
  }, [input, props.arr]);

  useEffect(() => {
    if (customInputContainerRef.current) {
      const containerWidth = customInputContainerRef.current.offsetWidth;
      const customUL = document.querySelector(".customUL");
      if (customUL) {
        customUL.style.width = `${containerWidth}px`;
      }
    }
  }, [isActive]);

  useEffect(() => {
    props.getCountry(selectedCountry);
  }, [selectedCountry]);

  function handleInputClick() {
    setIsActive(!isActive);
  }

  function handleInputChange(e) {
    const value = e.target.value;
    setInput(value);
    setIsActive(true);
  }

  function handleInputChoose(selectedItem) {
    const selectedName = language === "en" ? selectedItem.en.name : selectedItem.ru.name;
    setSelectedCountry(selectedItem);
    setInput(selectedName);
    setIsActive(false);
  }

  return (
    <div>
      <div
        className={`customInputContainer`}
        onClick={handleInputClick}
        ref={customInputContainerRef}
      >
        <input
          className={`customInput ${isActive ? "active" : ""} ${props.error ? "errorBorder" : ""}`}
          placeholder={language === "en" ? "Choose" : "Выберите"}
          value={input}
          onChange={handleInputChange}
        />
        <FaCaretDown className={`inputIcon`} />
      </div>
      {isActive && (
        <ListUL itemsUL={countries} handleInputChoose={handleInputChoose} />
      )}
      {props.error && <span className={`tinyText text-[#fc3535]`}>{props.errorMessage}</span>}
    </div>
  );
};

const ListUL = (props) => {
  const language = useSelector((state) => state.language.language);
  const arr = props.itemsUL;

  return (
    <ul className={`customUL`}>
      {arr.map((item, index) => (
        <li
          key={`input-li-${index}`}
          value={language === "en" ? item.en.name : item.ru.name}
          className={`text-xs`}
          onClick={() => props.handleInputChoose(item)}
        >
          {language === "en" ? item.en.name : item.ru.name}
        </li>
      ))}
    </ul>
  );
};

export default ChoiseInput;
