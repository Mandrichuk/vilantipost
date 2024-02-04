import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import axios from "axios";
import { domens } from "../../../constants";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "../../common/navbar/Navbar";


function Home() {
  const [forms, setForms] = useState([]);
  const [increaseTable, setIncreaseTable] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [sortedByStatus, setSortedByStatus] = useState(-1);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get(`${domens.backend}/api/get-all-forms`);
        setForms(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchForms();
  }, []);

  const formTitles = [
    "id",
    "sender",
    "sender_country",
    "sender_city",
    "sender_street",
    "sender_houseNumber",
    "sender_zipCode",
    "sender_email",
    "sender_phoneNumber",
    "recipient",
    "recipient_country",
    "recipient_city",
    "recipient_street",
    "recipient_houseNumber",
    "recipient_zipCode",
    "recipient_email",
    "recipient_phoneNumber",
    "Delivery address",
    "contactAfter",
    "acceptRules",
    "FedEx_number",
  ];

  function openFiltersHandle() {
    setOpenFilters(!openFilters);
  }

  function increaseTableHandle(e) {
    setIncreaseTable(e.target.checked);
  }

  function sortByStatus(field) {
    setSortedByStatus(field);
  }


  return (
    <div className={`flex flex-col`}>
    <Navbar bottomShadow={true}/>
      <div className={`titleText w-full flex items-center justify-center mb-8`}>
        Forms
      </div>
      <div className={`w-full mb-4 px-5 flex flex-row items-center`}>
        <input
          type="checkbox"
          className={`mr-2`}
          id="increaseTable"
          onChange={increaseTableHandle}
        />
        <label htmlFor="increaseTable">Увеличенный размер таблиц</label>
      </div>

      <div className={`w-full mb-2 px-5 flex flex-row items-center`}>
        <div
          onClick={openFiltersHandle}
          className={`labelText flex flex-row items-center cursor-pointer`}
        >
          Фильтры
          <IoIosArrowDown className={`mt-1 ml-1`} />
        </div>
      </div>

      <div className={`w-full mb-7 px-5 flex flex-row items-center`}>
        {openFilters && (
          <div className={`w-full`}>
            <div className={`flex flex-row items-center`}>
              <p className={`mr-4 font-bold`}>Статус:</p>
              <button
                onClick={() => sortByStatus(0)}
                className={`${
                  sortedByStatus === 0 && `${styles.selectedFilter}`
                } px-[5px] py-[10px] mr-3`}
              >
                В ожидании
              </button>
              <button
                onClick={() => sortByStatus(1)}
                className={`${
                  sortedByStatus === 1 && `${styles.selectedFilter}`
                } px-[5px] py-[10px] mr-3`}
              >
                Отправленные
              </button>
            </div>
          </div>
        )}
      </div>

      <div
        className={`flex flex-row ${
          increaseTable ? "min-w-[300px]" : "min-w-[150px]"
        } font-bold`}
      >
        {formTitles.map((title, index) => (
          <div
            key={index}
            className={`border px-2 ${
              increaseTable ? "min-w-[300px]" : "min-w-[150px]"
            } text-nowrap overflow-hidden text-ellipsis`}
          >
            {title}
          </div>
        ))}
      </div>

      <div className={`${styles.nowrap}`}>
        {forms.map((form, index) => (
          <Form key={index} form={form} increaseTable={increaseTable} />
        ))}
      </div>
    </div>
  );
}

function Form({ form, increaseTable }) {
  return (
    <div
      className={`flex flex-row  ${
        increaseTable ? "min-w-[300px]" : "min-w-[150px]"
      }`}
    >
      {form.map((item, index) => (
        <div
          key={index}
          className={`border px-2  ${
            increaseTable ? "min-w-[300px]" : "min-w-[150px]"
          } text-nowrap overflow-hidden text-ellipsis`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Home;
