import React from "react";
import { useSelector } from "react-redux";
import styles from "./form.module.css";
import PhoneInput from "../../common/PhoneInput";
import TextInput from "../../common/TextInput";
import Sidebar from "../../common/sidebar/Sidebar";
import { formPage, countries } from "../../../constants/index";

function Form() {
  const language = useSelector((state) => state.language.language);
  const formFromClient = formPage.formFromClient;

  const textInputs =
    language === "en"
      ? formFromClient.en?.textInputs || []
      : formFromClient.ru?.textInputs || [];

  return (
    <div
      className={`${styles.backgroundCover} w-full h-[100vh] flex flex-col items-center  bg-white`}
    >
      <Sidebar />
      <div className={`wrapper`}>
        <div className={`${styles.form} w-full`}>
          <div className={`${styles.fromClientContainer} w-full`}>
            <PhoneInput
              arr={countries}
              value={
                language === "en"
                  ? formFromClient.en.numberInput.value
                  : formFromClient.ru.numberInput.value
              }
            />
            {textInputs.map((item, index) => (
              <TextInput key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
