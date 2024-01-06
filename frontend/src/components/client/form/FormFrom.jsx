// FormFrom.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./form.module.css";
import PhoneInput from "../../common/PhoneInput";
import TextInput from "../../common/TextInput";
import Sidebar from "../../common/sidebar/Sidebar";
import { formPage, countries } from "../../../constants/index";
import { TbCircleNumber1 } from "react-icons/tb";
import useWindowWidth from "../../../utils/useWindowWidth";
import StaticInput from "../../common/StaticInput";
import images from "../../../constants/index";
import isObjNotEmpty from "../../../utils/isObjNotEmpty";

function FormFrom(props) {
  const orderBox = useSelector((state) => state.orderBox.orderBox);
  const windowWidth = useWindowWidth();
  const language = useSelector((state) => state.language.language);
  const formFromClient = formPage.formFromClient;
  const textInputsFrom =
    language === "en"
      ? formFromClient.en?.textInputs || []
      : formFromClient.ru?.textInputs || [];
  const departureCountry = orderBox.departure;
  const [notFullfilledError, setNotFullfilledError] = useState(false);

  const [fromFormData, setFromFormData] = useState({
    sender: "",
    country: departureCountry,
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
  });

  const handleFormFromDataChange = (field, value) => {
    setFromFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  function submitFromForm(event) {
    event.preventDefault(); 

    if (isFormValid(fromFormData)) {

    }
  }

  function isFormValid(fromFormData) {
    const { sender, city, street, houseNumber, zipCode, email, phoneNumber } =
      fromFormData;

    let isValid = false;
    if (
      sender &&
      city &&
      street &&
      houseNumber &&
      zipCode &&
      email &&
      phoneNumber &&
      phoneNumber.length >= 7
    ) {
      isValid = true;
    }

    setNotFullfilledError(!isValid);
    return isValid;
  }

  return (
    <form className={`${styles.formClientInfo} mb-6`}>
      <div
        className={`${styles.title} ${
          props.isOpened && `text-custom-color-700 font-bold`
        } labelText p-3 mb-5 w-full flex flex-row items-center`}
      >
        <TbCircleNumber1 className={`mr-2 text-[1.3rem]`} />
        {language === "en"
          ? formFromClient.en.formTitle
          : formFromClient.ru.formTitle}
      </div>
      {props.isOpened && (
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
              <TextInput
                key={index}
                {...item}
                getValue={handleFormFromDataChange}
                error={notFullfilledError}
              />
            ))}
            <PhoneInput
              arr={countries}
              value={
                language === "en"
                  ? formFromClient.en.numberInput.value
                  : formFromClient.ru.numberInput.value
              }
              field={"phoneNumber"}
              initailNumber={departureCountry}
              getValue={handleFormFromDataChange}
              error={notFullfilledError}
            />
          </div>
          <div className={`w-full flex flex-row items-end justify-end mt-7`}>
            <button
              onClick={(event) => submitFromForm(event)}
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
  );
}

export default FormFrom;
