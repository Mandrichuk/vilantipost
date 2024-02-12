import React, { useEffect, useState } from "react";
import styles from "./edit.module.css";
import Navbar from "../../common/navbar/Navbar";
import axios from "axios";
import { domens } from "../../../constants";
import { useParams } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";
import { links } from "../../../constants/index";
import { formTitles } from "../../../constants/index";
import { MdEdit } from "react-icons/md";
import Textinput from "../../common/TextInput";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdDone } from "react-icons/md";

function Edit() {
  const [form, setForm] = useState({});
  let { id } = useParams();

  function changeFormData(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  console.log(form);

  useEffect(() => {
    const url = `${domens.backend}api/get-form-by-id/${id}`;

    axios
      .get(url)
      .then((response) => {
        setForm(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  function sendNewFormDb() {
    axios
      .post(`${domens.backend}api/update-form-in-db`, form)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className={`mb-10`}>
      <Navbar bottomShadow={true} />
      <div className={`pl-5 mt-8`}>
        <Link
          to={links.admin}
          className={`labelText flex flex-row items-center cursor-pointer`}
        >
          <TbArrowBackUp className={`mr-1`} />
          Back
        </Link>

        <div className={`${styles.editForm} mt-4`}>
          <div className={``}>
            <div className={`font-bold mb-2`}>Edit Form</div>
            <div className={`${styles.formFields} flex flex-col `}>
              {formTitles.map((item, index) => (
                <Field
                  item={item}
                  key={index}
                  form={form}
                  changeFormData={changeFormData}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.confirmChanges} w-full flex justify-end px-[30px] mt-[60px]`}>
        <button onClick={() => {window.location.reload();}} className={`button ${styles.redButton} max-w-[230px]`}> Discard All Changes</button>
        <button onClick={() => {sendNewFormDb()}} className={`button ${styles.greenButton} max-w-[230px] ml-[20px]`}> Confirm Changes</button>
      </div>
    </div>
  );
}

function Field(props) {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState({ value: "", field: "" });

  function handleChangeField(e) {
    setEditMode((prevValue) => !prevValue);
  }

  function getValue(field, value) {
    setText({ value: value, field: field });
  }
  console.log(props.item);
  return (
    <div>
      {props.item !== "id" && props.item !== "parcel_fedExNumber" ? (
        <div className={`flex flex-row items-center mb-1`} key={props.index}>
          <div
            onClick={handleChangeField}
            className={`flex flex-row items-center border-green-500 border px-2 mr-[20px] cursor-pointer`}
          >
            {editMode ? (
              <div
                onClick={() => props.changeFormData(text.field, text.value)}
                className={`flex flex-row items-center`}
              >
                Save
                <MdDone className={`ml-2`} />
              </div>
            ) : (
              <div className={`flex flex-row items-center`}>
                Edit
                <MdEdit className={`ml-2`} />
              </div>
            )}
          </div>

          <span className={`w-[200px]`}>{props.item}: </span>

          {editMode ? (
            <div>
              <Textinput
                field={`${props.item}`}
                getValue={getValue}
                whiteInputBox={true}
              />
            </div>
          ) : (
            <div>{props.form[`${props.item}`]}</div>
          )}
        </div>
      ) : (
        <div className={`flex flex-row items-center font-bold`}>
          <span className={`mr-4`}>{props.item}: </span>
          <div>{props.form[`${props.item}`]}</div>
        </div>
      )}
    </div>
  );
}

export default Edit;
