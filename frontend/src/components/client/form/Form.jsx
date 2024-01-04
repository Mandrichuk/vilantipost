import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./form.module.css";
import PhoneInput from "../../common/PhoneInput";
import TextInput from "../../common/TextInput";
import Sidebar from "../../common/sidebar/Sidebar";
import { formPage, countries } from "../../../constants/index";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
} from "react-icons/tb";
import useWindowWidth from "../../../utils/useWindowWidth";
import StaticInput from "../../common/StaticInput";
import images from "../../../constants/index";

function Form() {
  const orderBox = useSelector((state) => state.orderBox.orderBox);
  const windowWidth = useWindowWidth();
  const language = useSelector((state) => state.language.language);
  const formFromClient = formPage.formFromClient;
  const formToClient = formPage.formToClient;
  const textInputsFrom =
    language === "en"
      ? formFromClient.en?.textInputs || []
      : formFromClient.ru?.textInputs || [];
  const textInputsTo =
    language === "en"
      ? formToClient.en?.textInputs || []
      : formToClient.ru?.textInputs || [];
  const departureCountry = orderBox.departure;
  const destinationCountry = orderBox.destination;
  const [openFromForm, setOpenFromForm] = React.useState(true);
  const [openToForm, setOpenToForm] = React.useState(false);

  return (
    <div
      className={`${styles.backgroundCover} w-full h-[100vh] flex flex-col items-center  bg-white`}
    >
      <Sidebar />
      <div className={`wrapper`}>
        <div className={`${styles.form} w-full`}>
          <div
            className={`${styles.formIntroduction} w-full flex flex-col items-center justify-center font-bold text-[1rem]`}
          >
            <div className={`titleText`}>
              {language === "en" ? formPage.en.title : formPage.ru.title}
            </div>
            <div
              className={`bg-[#419088] text-white w-full rounded-md noneRoundedBottom p-5 flex flex-row items-center justify-center mt-[30px]`}
            >
              <img
                className={`max-h-[70px] object-cover mr-5`}
                src={images.envelope}
              />
              <div
                className={`h-[70px] flex flex-col justify-center`}
              >
                <div className={`mb-1`}>
                  {language === "en"
                    ? formPage.en.envelopeText
                    : formPage.ru.envelopeText}
                  ({orderBox.weight}
                  {language === "en" ? "kg" : "кг"})
                </div>
                <div>
                  {language === "en"
                    ? formPage.en.totalPrice
                    : formPage.ru.totalPrice}
                </div>
              </div>
            </div>
          </div>
          <form className={`${styles.formClientInfo} mb-6`}>
            <div
              className={`${styles.formClientTitle} text-custom-color-700 font-bold labelText p-3 mb-5 w-full flex flex-row items-center`}
            >
              <TbCircleNumber1 className={`mr-2 text-[1.3rem]`} />
              {language === "en"
                ? formFromClient.en.formTitle
                : formFromClient.ru.formTitle}
            </div>
            {openFromForm && (
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
                  <StaticInput
                    value={
                      language === "en"
                        ? formFromClient.en.countryName.value
                        : formFromClient.ru.countryName.value
                    }
                    placeholder={
                      language === "en"
                        ? departureCountry.en.name
                        : departureCountry.ru.name
                    }
                  />
                  {textInputsFrom.map((item, index) => (
                    <TextInput key={index} {...item} />
                  ))}
                  <PhoneInput
                    arr={countries}
                    value={
                      language === "en"
                        ? formFromClient.en.numberInput.value
                        : formFromClient.ru.numberInput.value
                    }
                    initailNumber={departureCountry}
                  />
                </div>
                <div
                  className={`w-full flex flex-col items-end justify-end mt-7`}
                >
                  <button
                    type="submit"
                    className={`darkerButton ${
                      windowWidth < 650 ? "" : `max-w-[300px]`
                    }`}
                  >
                    {language === "en"
                      ? formFromClient.en.submitButton
                      : formFromClient.ru.submitButton}
                  </button>
                </div>
              </div>
            )}
          </form>

          <form className={`${styles.formClientInfo} mb-6`}>
            <div
              className={`${styles.formClientTitle} text-custom-color-700 font-bold labelText p-3 mb-5 w-full flex flex-row items-center`}
            >
              <TbCircleNumber2 className={`mr-2 text-[1.3rem]`} />
              {language === "en"
                ? formToClient.en.formTitle
                : formToClient.ru.formTitle}
            </div>

            {openToForm && (
              <div id="formClientInfo" className={`${styles.detailsCover}`}>
                <div
                  className={`${styles.informDetails} text-dark-gray-color-300 labelText`}
                >
                  {language === "en"
                    ? formToClient.en.informDetails
                    : formToClient.ru.informDetails}
                </div>
                <div
                  className={`${styles.informDetails} font-bold text-custom-color-700 articleText mb-5`}
                >
                  {language === "en"
                    ? formToClient.en.alertMessage
                    : formToClient.ru.alertMessage}
                </div>
                <div className={`${styles.formClientContainer} w-full`}>
                  <StaticInput
                    value={
                      language === "en"
                        ? formFromClient.en.countryName.value
                        : formFromClient.ru.countryName.value
                    }
                    placeholder={
                      language === "en"
                        ? destinationCountry.en.name
                        : destinationCountry.ru.name
                    }
                  />
                  {textInputsTo.map((item, index) => (
                    <TextInput key={index} {...item} />
                  ))}
                  <PhoneInput
                    arr={countries}
                    value={
                      language === "en"
                        ? formToClient.en.numberInput.value
                        : formToClient.ru.numberInput.value
                    }
                    initailNumber={destinationCountry}
                  />
                </div>
                <div
                  className={`w-full flex flex-col items-end justify-end mt-7`}
                >
                  <button
                    type="submit"
                    className={`darkerButton ${
                      windowWidth < 650 ? "" : `max-w-[300px]`
                    }`}
                  >
                    {language === "en"
                      ? formToClient.en.submitButton
                      : formToClient.ru.submitButton}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
