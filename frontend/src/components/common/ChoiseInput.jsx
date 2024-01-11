import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const ChoiseInput = (props) => {
  const language = useSelector((state) => state.language.language);
  const [input, setInput] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [isFinalBlur, setIsFinalBlur] = useState(false);
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

  useEffect(() => {
    let blurTimeout;

    const handleOutsideClick = (e) => {
      if (
        customInputContainerRef.current &&
        !customInputContainerRef.current.contains(e.target) &&
        !e.target.classList.contains("customUL")
      ) {
        // Set isFinalBlur to false to indicate that it's not the final blur yet
        setIsFinalBlur(false);

        // Clear any existing timeout
        clearTimeout(blurTimeout);

        // Set a new timeout for 100 milliseconds
        blurTimeout = setTimeout(() => {
          // Set isFinalBlur to true after the delay
          setIsFinalBlur(true);
          setIsActive(false);
        }, 100);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      clearTimeout(blurTimeout); // Clear the timeout on component unmount
    };
  }, []);

  function handleInputClick() {
    setIsActive(!isActive);
  }

  function handleInputChange(e) {
    const value = e.target.value;
    setInput(value);
    setIsActive(true);
  }

  function handleInputChoose(selectedItem) {
    const selectedName =
      language === "en" ? selectedItem.en.name : selectedItem.ru.name;
    setSelectedCountry(selectedItem);
    setInput(selectedName);

    // Set isFinalBlur to true when an item is chosen
    setIsFinalBlur(true);
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
          className={`customInput ${isActive ? "active" : ""} ${
            props.error ? "errorBorder" : ""
          }`}
          placeholder={language === "en" ? "Choose" : "Выберите"}
          value={input}
          onChange={handleInputChange}
        />
        <FaCaretDown className={`inputIcon`} />
      </div>
      {isActive && (
        <ListUL itemsUL={countries} handleInputChoose={handleInputChoose} />
      )}
      {props.error && (
        <span className={`tinyText text-[#fc3535]`}>{props.errorMessage}</span>
      )}
    </div>
  );
};

const ListUL = (props) => {
  const language = useSelector((state) => state.language.language);
  const arr = props.itemsUL;

  return (
    <ul className={`customUL`}>
      {arr.map((item, index) => {
        if (item.ru.name !== "Россия" && item.en.name !== "Russia") {
          return (
            <li
              key={`input-li-${index}`}
              value={language === "en" ? item.en.name : item.ru.name}
              className={`text-xs`}
              onClick={() => props.handleInputChoose(item)}
            >
              {language === "en" ? item.en.name : item.ru.name}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default ChoiseInput;
