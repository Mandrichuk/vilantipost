import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./form.module.css";
import PhoneInput from "../../common/PhoneInput";
import TextInput from "../../common/TextInput";
import { formPage, countries } from "../../../constants/index";
import { TbCircleNumber1 } from "react-icons/tb";
import useWindowWidth from "../../../utils/useWindowWidth";
import StaticInput from "../../common/StaticInput";
import {setFormData} from "../../../features/formsClient";


function FormFrom(props) {
  const dispatch = useDispatch();
  const isOpened = props.isOpened;
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
  const formFromRedux = useSelector((state) => state.formsClient.formsData.formFromClient);
  const [fromFormData, setFromFormData] = useState({
    sender: formFromRedux.sender,
    country: departureCountry,
    city: formFromClient.city,
    street: formFromClient.street,
    houseNumber: formFromClient.houseNumber,
    zipCode: formFromClient.zipCode,
    email: formFromClient.email,
    phoneNumber: formFromClient.phoneNumber,
  });


  const handleFormFromDataChange = (field, value) => {
    setFromFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  function submitFromForm(event) {
    event.preventDefault(); 

    if (isFormValid(fromFormData)) {
      dispatch(setFormData({ type: "UPDATE_FROM_FORM_DATA", value: fromFormData }));
      props.handleChangeActiveForm("openToForm");
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
        } labelText p-3 ${isOpened ? "mb-5" : "mb-1"} w-full flex flex-row items-center`}
      >
        <TbCircleNumber1 className={`mr-2 text-[1.3rem]`} />
        {language === "en"
          ? formFromClient.en.formTitle
          : formFromClient.ru.formTitle}
      </div>

        <div id="formClientInfo" className={`${styles.detailsCover} ${isOpened ? "open" : "hidden"}`}>
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

    </form>
  );
}

export default FormFrom;
