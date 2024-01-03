import React from "react";
import { useSelector } from "react-redux";
import styles from "./form.module.css";
import PhoneInput from "../../common/PhoneInput";
import TextInput from "../../common/TextInput";
import Sidebar from "../../common/sidebar/Sidebar";
import { formPage, countries } from "../../../constants/index";
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";

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



          <form className={`${styles.formClientInfo} mb-6`}>
            <div
              className={`${styles.formClientTitle} text-custom-color-700 font-bold labelText p-3 mb-5 w-full flex flex-row items-center`}
            >
              <TbCircleNumber1 className={`mr-2 text-[1.3rem]`} />
              {language === "en"
                ? formFromClient.en.formTitle
                : formFromClient.ru.formTitle}
            </div>
            <div id="formClientInfo" className={`${styles.detailsCover}`}>
              <div
                className={`${styles.informDetails} text-dark-gray-color-300 labelText`}
              >
                {language === "en"
                  ? formFromClient.en.informDetails
                  : formFromClient.ru.informDetails}
              </div>
              <div
                className={`${styles.informDetails} font-bold text-custom-color-700 articleText mb-5`}
              >
                {language === "en"
                  ? formFromClient.en.alertMessage
                  : formFromClient.ru.alertMessage}
              </div>
              <div className={`${styles.formClientContainer} w-full`}>
                {textInputs.map((item, index) => (
                  <TextInput key={index} {...item} />
                ))}
                <PhoneInput
                  arr={countries}
                  value={
                    language === "en"
                      ? formFromClient.en.numberInput.value
                      : formFromClient.ru.numberInput.value
                  }
                />
              </div>
              <div
                className={`w-full flex flex-col items-end justify-end mt-7`}
              >
                <button type="submit" className={`darkerButton max-w-[300px]`}>
                  {language === "en"
                    ? formFromClient.en.submitButton
                    : formFromClient.ru.submitButton}
                </button>
              </div>
            </div>
          </form>


          <form className={`${styles.formClientInfo} mb-6`}>
            <div
              className={`${styles.formClientTitle} text-custom-color-700 font-bold labelText p-3 mb-5 w-full flex flex-row items-center`}
            >
              <TbCircleNumber2 className={`mr-2 text-[1.3rem]`} />
              {language === "en"
                ? formFromClient.en.formTitle
                : formFromClient.ru.formTitle}
            </div>
            <div id="formClientInfo" className={`${styles.detailsCover}`}>
              <div
                className={`${styles.informDetails} text-dark-gray-color-300 labelText`}
              >
                {language === "en"
                  ? formFromClient.en.informDetails
                  : formFromClient.ru.informDetails}
              </div>
              <div
                className={`${styles.informDetails} font-bold text-custom-color-700 articleText mb-5`}
              >
                {language === "en"
                  ? formFromClient.en.alertMessage
                  : formFromClient.ru.alertMessage}
              </div>
              <div className={`${styles.formClientContainer} w-full`}>
                {textInputs.map((item, index) => (
                  <TextInput key={index} {...item} />
                ))}
                <PhoneInput
                  arr={countries}
                  value={
                    language === "en"
                      ? formFromClient.en.numberInput.value
                      : formFromClient.ru.numberInput.value
                  }
                />
              </div>
              <div
                className={`w-full flex flex-col items-end justify-end mt-5`}
              >
                <button type="submit" className={`darkerButton max-w-[300px]`}>
                  {language === "en"
                    ? formFromClient.en.submitButton
                    : formFromClient.ru.submitButton}
                </button>
              </div>
            </div>
          </form>



        </div>
      </div>
    </div>
  );
}

export default Form;
