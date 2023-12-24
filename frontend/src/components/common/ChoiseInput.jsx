import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useSelector } from "react-redux";
const ChoiseInput = (props) => {
  const language = useSelector((state) => state.language.language);
  const [input, setInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [countries, setCountries] = useState(props.arr);

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
    }, 100);
  }

  useEffect(() => {
    const searchName = input.toLowerCase();
    const filteredItems = props.arr.filter((item) =>
      item.en.name.toLowerCase().includes(searchName)
    );
    setCountries(filteredItems);
  }, [input, props.arr]);

  return (
    <div>
      <div className={`customInputContainer`} onBlur={handleInputBlur}>
        <input
          className={`customInput ${isActive ? "active" : ""}`}
          placeholder={language === "en" ? "Choose" : "Выберите"}
          value={input}
          onClick={handleInputChange}
          onChange={handleInputChange}
        />
        <FaCaretDown className={`inputIcon`} />
      </div>
      {isActive && (
        <ListUL itemsUL={countries} handleInputChoose={handleInputChoose} />
      )}
    </div>
  );
};

const ListUL = (props) => {
  const language = useSelector((state) => state.language.language);
  const arr = props.itemsUL;

  return (
    <>
      {language === "en" ? (
        <ul className={`customUL bg-red-600`}>
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
      )}
    </>
  );
};

export default ChoiseInput;
