import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./form.module.css";
import PhoneInput from "../../common/PhoneInput";
import TextInput from "../../common/TextInput";
import Sidebar from "../../common/sidebar/Sidebar";
import { formPage, countries } from "../../../constants/index";
import { TbCircleNumber2 } from "react-icons/tb";
import useWindowWidth from "../../../utils/useWindowWidth";
import StaticInput from "../../common/StaticInput";
import { setFormData } from "../../../features/formsClient";

function FormTo(props) {
  const dispatch = useDispatch();
  const isOpened = props.isOpened;
  const orderBox = useSelector((state) => state.orderBox.orderBox);
  const windowWidth = useWindowWidth();
  const language = useSelector((state) => state.language.language);
  const formToClient = formPage.formToClient;
  const textInputsTo =
    language === "en"
      ? formToClient.en?.textInputs || []
      : formToClient.ru?.textInputs || [];
  const destinationCountry = orderBox.destination;
  const [notFullfilledError, setNotFullfilledError] = useState(false);
  const [toFormData, setToFormData] = useState({
    recipient: "",
    country: destinationCountry,
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
  });

  const handleFormToDataChange = (field, value) => {
    setToFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  function submitToForm(event) {
    event.preventDefault();

    if (isFormValid(toFormData)) {
      const fixedToFormData = { ...toFormData, country: destinationCountry.id };

      dispatch(setFormData({ type: "UPDATE_TO_FORM_DATA", value: fixedToFormData }));
      props.handleChangeActiveForm("openShippingForm");
    }
  }

  function isFormValid(toFormData) {
    const {
      recipient,
      city,
      street,
      houseNumber,
      zipCode,
      email,
      phoneNumber,
    } = toFormData;

    let isValid = false;
    if (
      recipient &&
      city &&
      street &&
      houseNumber &&
      zipCode &&
      email &&
      phoneNumber
    ) {
      isValid = true;
    }

    setNotFullfilledError(!isValid);
    return isValid;
  }

  return (
    <form className={`${styles.formClientInfo} ${isOpened ? "mb-6" : "mb-3"}`}>
      <div
        className={`${styles.title} ${
          isOpened && `text-custom-color-700 font-bold`
        } labelText p-3 ${
          isOpened ? "mb-5" : "mb-1"
        } w-full flex flex-row items-center`}
      >
        <TbCircleNumber2 className={`mr-2 text-[1.3rem]`} />
        {language === "en"
          ? formToClient.en.formTitle
          : formToClient.ru.formTitle}
      </div>

        <div id="formClientInfo" className={`${styles.detailsCover} ${isOpened ? "open" : "hidden"}`}>
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
                  ? formToClient.en.countryName.value
                  : formToClient.ru.countryName.value
              }
              placeholder={
                language === "en"
                  ? destinationCountry.en.name
                  : destinationCountry.ru.name
              }
              getValue={handleFormToDataChange}
            />
            {textInputsTo.map((item, index) => (
              <TextInput
                key={index}
                {...item}
                getValue={handleFormToDataChange}
                error={notFullfilledError}
              />
            ))}
            <PhoneInput
              arr={countries}
              field={"phoneNumber"}
              value={
                language === "en"
                  ? formToClient.en.numberInput.value
                  : formToClient.ru.numberInput.value
              }
              initailNumber={destinationCountry}
              getValue={handleFormToDataChange}
              error={notFullfilledError}
            />
          </div>
          <div className={`w-full flex flex-col items-end justify-end mt-7`}>
            <button
              onClick={(event) => submitToForm(event)}
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

    </form>
  );
}

export default FormTo;
