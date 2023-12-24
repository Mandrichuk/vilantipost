import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";


const ChoiseInput = (props) => {
  const [input, setInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const itemsUL = props.arr;

  function handleInputChange(e) {
    console.log(e.target.value);
    setInput(e.target.value);
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

  return (
    <div>
      <div className={`customInputContainer`}
          onBlur={handleInputBlur}
          onClick={handleInputChange}
      >
        <input
          className={`customInput`}
          placeholder="Choose"
          value={input}
          onChange={handleInputChange}
        />
        <FaCaretDown className={`inputIcon`}/>
      </div>
      {isActive && (
        <ListUL itemsUL={itemsUL} handleInputChoose={handleInputChoose} />
      )}
    </div>
  );
};

const ListUL = (props) => {
  const arr = props.itemsUL;
  return (
    <ul className={`customUL bg-red-600`}>
      {arr.map((item) => (
        <li
          key={item.value}
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
