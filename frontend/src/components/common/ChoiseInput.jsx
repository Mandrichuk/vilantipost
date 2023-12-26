import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const ChoiseInput = (props) => {
  const language = useSelector((state) => state.language.language);
  const [input, setInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [countries, setCountries] = useState(props.arr);
  const customInputContainerRef = useRef(null);

  // console.log(props)

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

  return (
    <div>
      <div
        className={`customInputContainer`}
        onBlur={handleInputBlur}
        ref={customInputContainerRef}
      >
        <input
          className={`customInput ${isActive ? "active" : ""} ${
            props.type === "number" ? "noneRoundedRight" : ""
          }`}
          placeholder={language === "en" ? "Choose" : "Выберите"}
          value={input}
          onClick={handleInputChange}
          onChange={handleInputChange}
        />
        <FaCaretDown className={`inputIcon`} />
      </div>
      {isActive && (
        <ListUL
          itemsUL={countries}
          type={props.type}
          handleInputChoose={handleInputChoose}
        />
      )}
    </div>
  );
};

const ListUL = (props) => {
  const language = useSelector((state) => state.language.language);
  const arr = props.itemsUL;

  return (
    <>
      {props.type === "name" &&
        (language === "en" ? (
          <ul className={`customUL`}>
            {arr.map((item, index) => (
              <li
                key={`input-li-${index}`}
                value={item.name}
                className={`tinyText`}
                onClick={() => props.handleInputChoose(item.en.name)}
              >
                {item.en.name}
              </li>
            ))}
          </ul>
        ) : (
          <ul className={`customUL`}>
            {arr.map((item, index) => (
              <li
                key={`input-li-${index}`}
                value={item.name}
                className={`tinyText`}
                onClick={() => props.handleInputChoose(item.ru.name)}
              >
                {item.ru.name}
              </li>
            ))}
          </ul>
        ))}
      {props.type === "number" && (
        <ul className={`customUL`}>
          {arr.map((item, index) => (
            <li
              key={`input-li-${index}`}
              value={item.name}
              className={`tinyText flex flex-row items-center justify-start`}
              onClick={() => props.handleInputChoose(item.number)}
            >
              <div className={`w-[30px]`}>{item.flag}</div>
              {language === "en" ? (
                <div
                  className={`overflow-hidden whitespace-nowrap w-[70px] ellipsis`}
                >
                  {item.en.name}
                </div>
              ) : (
                <div
                  className={`overflow-hidden whitespace-nowrap w-[70px] ellipsis`}
                >
                  {item.ru.name}
                </div>
              )}
              <div className={`ml-3`}>({item.number})</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ChoiseInput;
