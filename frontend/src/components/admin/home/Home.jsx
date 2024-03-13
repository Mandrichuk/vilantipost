import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import axios from "axios";
import { domens } from "../../../constants";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "../../common/navbar/Navbar";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { links } from "../../../constants/index";
import { formTitles } from "../../../constants/index";
import { useSelector } from "react-redux";

function Home() {
  const isAdminLoggined = useSelector(
    (state) => state.isAdminLoggined.isAdminLoggined
  );
  const [forms, setForms] = useState([]);
  const [increaseTable, setIncreaseTable] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [sortedByStatus, setSortedByStatus] = useState(-1);
  const [isBlocked, setIsBlocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggined) {
      navigate(links.adminLogin);
    }
  });

  const handleBlock = () => {
    setIsBlocked(true);
  };

  function openFiltersHandle() {
    setOpenFilters(!openFilters);
  }

  function increaseTableHandle(e) {
    setIncreaseTable(e.target.checked);
  }

  function sortByStatus(field) {
    setSortedByStatus(field);
  }

  // const [formToEdit, setFormToEdit] = useState(null);

  function RedirectEditForm(formToEdit) {
    navigate(`${links.adminEdit}/${formToEdit}`);
  }

  const [formToDelete, setFormToDelete] = useState(null);

  function handleDelete(formId) {
    setFormToDelete(formId);
  }

  const removeFormFromDB = async () => {
    try {
      const response = await axios.post(
        `${domens.backend}/api/delete-form-from-db`,
        {
          formId: formToDelete,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Ошибка при отправке данных на сервер:", error);
    }
  };

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get(`${domens.backend}api/get-all-forms`);
        setForms(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchForms();
  }, [removeFormFromDB]);

  return (
    <div className={`flex flex-col mb-10`}>
      <div className={`fixed top-0 right-0 left-0`}>
        <Navbar bottomShadow={true} />
      </div>
      <div className={`titleText w-full flex items-center justify-center mb-8`}>
        Forms
      </div>
      <div className={`w-full mb-10 px-5 flex flex-row items-center`}>
        <input
          type="checkbox"
          className={`mr-2`}
          id="increaseTable"
          onChange={increaseTableHandle}
        />
        <label htmlFor="increaseTable">Увеличенный размер таблиц</label>
      </div>

      {/* <div className={`w-full mb-2 px-5 flex flex-row items-center`}>
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
                Все
              </button>
              <button
                onClick={() => sortByStatus(1)}
                className={`${
                  sortedByStatus === 1 && `${styles.selectedFilter}`
                } px-[5px] py-[10px] mr-3`}
              >
                В ожидании
              </button>
              <button
                onClick={() => sortByStatus(2)}
                className={`${
                  sortedByStatus === 2 && `${styles.selectedFilter}`
                } px-[5px] py-[10px] mr-3`}
              >
                Отправленные
              </button>
            </div>
          </div>
        )}
      </div> */}

      <div
        className={`flex flex-row ${
          increaseTable ? "min-w-[300px]" : "min-w-[150px]"
        } font-bold ml-[195px]`}
      >
        {formTitles.map((title, index) => (
          <div
            key={`formTitle-${index}`}
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
          <Form
            key={`form-${index}`}
            form={form}
            increaseTable={increaseTable}
            handleBlock={handleBlock}
            formToDelete={formToDelete}
            handleDelete={handleDelete}
            removeFormFromDB={removeFormFromDB}
            RedirectEditForm={RedirectEditForm}
          />
        ))}
      </div>
    </div>
  );
}

function Form({
  form,
  increaseTable,
  formToDelete,
  handleDelete,
  removeFormFromDB,
  RedirectEditForm,
}) {
  const formId = form[0];

  return (
    <>
      <div className={`flex flex-row items-center`}>
        <div
          className={`flex flex-row items-center border-red-500 border px-2 mr-[20px] cursor-pointer relative z-[1]`}
          onClick={() => handleDelete(formId)}
        >
          Delete
          <FaRegTrashAlt className={`ml-2`} />
        </div>

        <div
          onClick={() => RedirectEditForm(formId)}
          className={`flex flex-row items-center border-green-500 border px-2 mr-[20px] cursor-pointer`}
        >
          Edit
          <MdEdit className={`ml-2`} />
        </div>
        <div
          className={`flex flex-row  ${
            increaseTable ? "min-w-[300px]" : "min-w-[150px]"
          }`}
        >
          {form.map((item, index) => (
            <>
              <div
                key={`oneForm-${index}`}
                className={`border px-2  ${
                  increaseTable ? "min-w-[300px]" : "min-w-[150px]"
                } text-nowrap overflow-hidden text-ellipsis`}
              >
                {item}
              </div>

              {formToDelete && (
                <div
                  className={`fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" bg-gray-100 rounded-md h-[150px] w-[500px] p-3 justify-center items-center`}
                >
                  <div className={`labelText w-full text-center mt-2`}>
                    Are you sure you want to delete this form {formToDelete}?
                  </div>

                  <div
                    className={`flex flex-row max-w-[500px] p-2 text-white mt-5`}
                  >
                    <button
                      onClick={() => {
                        removeFormFromDB();
                        handleDelete(null);
                      }}
                      className={`button mr-2 ${styles.greenButton} flex-1 `}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleDelete(null)}
                      className={`button ${styles.redButton} flex-1`}
                    >
                      No
                    </button>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
