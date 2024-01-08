import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./form.module.css";
import PhoneInput from "../../common/PhoneInput";
import TextInput from "../../common/TextInput";
import Sidebar from "../../common/sidebar/Sidebar";
import { formPage, countries } from "../../../constants/index";
import useWindowWidth from "../../../utils/useWindowWidth";
import StaticInput from "../../common/StaticInput";
import images from "../../../constants/index";
import isObjNotEmpty from "../../../utils/isObjNotEmpty";
import FormFrom from "./FormFrom";
import FormTo from "./FormTo";
import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";



function Form() {
  const formsClientData = useSelector((state) => state.formsClient.formsData);
  const windowWidth = useWindowWidth();
  const orderBox = useSelector((state) => state.orderBox.orderBox);
  const language = useSelector((state) => state.language.language);
  const [toggleOpenForms, setToggleOpenForms] = useState({
    openFromForm: true,
    openToForm: false,
    openShippingForm: false,
    openPaymentForm: false,
  });

  function handleChangeActiveForm(currentActiveForm) {
    const initialValue = {
      openFromForm: false,
      openToForm: false,
      openShippingForm: false,
      openPaymentForm: false,
    };

    setToggleOpenForms({
      ...initialValue,
      [currentActiveForm]: true,
    });
  }

  const jsForm = JSON.stringify(formsClientData);
  const paredForm = JSON.parse(jsForm);
  console.log(paredForm)


  function sendToBackend() {
    // formsClientData
  }

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
              <div className={`h-[70px] flex flex-col justify-center`}>
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

          <FormFrom
            isOpened={toggleOpenForms.openFromForm}
            handleChangeActiveForm={handleChangeActiveForm}
          />
          <FormTo
            isOpened={toggleOpenForms.openToForm}
            handleChangeActiveForm={handleChangeActiveForm}
          />
          <ShippingForm
            isOpened={toggleOpenForms.openShippingForm}
            handleChangeActiveForm={handleChangeActiveForm}
          />
          <PaymentForm
            isOpened={toggleOpenForms.openPaymentForm}
            handleChangeActiveForm={handleChangeActiveForm}
            sendToBackend={sendToBackend}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
