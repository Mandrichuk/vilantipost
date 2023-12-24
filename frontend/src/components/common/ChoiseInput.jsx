import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";

const ChoiseInput = (props) => {
  const [input, setInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [itemsUL, setItemsUL] = useState(props.arr);

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
      item.name.toLowerCase().includes(searchName)
    );
    setItemsUL(filteredItems);
  }, [input, props.arr]);

  return (
    <div>
      <div
        className={`customInputContainer`}
        onBlur={handleInputBlur}
      >
        <input
          className={`customInput`}
          placeholder="Choose"
          value={input}
          onClick={handleInputChange}
          onChange={handleInputChange}
        />
        <FaCaretDown className={`inputIcon`} />
      </div>
      {isActive && <ListUL itemsUL={itemsUL} handleInputChoose={handleInputChoose} />}
    </div>
  );
};

const ListUL = (props) => {
  const arr = props.itemsUL;
  return (
    <ul className={`customUL bg-red-600`}>
      {arr.map((item, index) => (
        <li
          key={`input-li-${index}`}
          value={item.name}
          className={`tinyText`}
          onClick={() => props.handleInputChoose(item.name)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ChoiseInput;
