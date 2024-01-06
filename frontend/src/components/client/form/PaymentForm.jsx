import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./form.module.css";
import { TbCircleNumber4 } from "react-icons/tb";
import useWindowWidth from "../../../utils/useWindowWidth";
import StaticInput from "../../common/StaticInput";
import { formPage } from "../../../constants/index";
import TextInput from "../../common/TextInput";
import images from "../../../constants/index";
import { deliveryPrices } from "../../../constants/index";

function PaymentForm(props) {
  const orderBox = useSelector((state) => state.orderBox.orderBox);
  const windowWidth = useWindowWidth();
  const language = useSelector((state) => state.language.language);
  const paymentForm = formPage.paymentForm;
  const paymentDetails =
    language === "en"
      ? paymentForm.en.paymentDetails
      : paymentForm.ru.paymentDetails;
  const [notFullfilledError, setNotFullfilledError] = useState(false);

  // function submitShippingForm(event) {
  //   event.preventDefault();

  //   if (isFormValid(adressInput)) {
  //     // props.handleOpenToForm();
  //   }
  // }

  function isFormValid(adressInput) {
    let isValid = false;
    // if (adressInput) {
    //   isValid = true;
    // }

    setNotFullfilledError(!isValid);
    return isValid;
  }

  return (
    <form className={`${styles.paymentFormInfo} mb-6`}>
      <div
        className={`${styles.title} ${
          props.isOpened && `text-custom-color-700 font-bold`
        } labelText p-3 mb-5 w-full flex flex-row items-center`}
      >
        <TbCircleNumber4 className={`mr-2 text-[1.3rem]`} />
        {language === "en"
          ? paymentForm.en.formTitle
          : paymentForm.ru.formTitle}
      </div>
      <div
        className={`${styles.borderCustomContainer} ${
          windowWidth < 650 ? "px-3" : `px-5`
        }`}
      >
        <div className={`artileText font-bold`}>
          {language === "en"
            ? paymentForm.en.paymentMethod
            : paymentForm.ru.paymentMethod}
        </div>
        <div className={`${styles.paymentDetails} my-3`}>
          {paymentDetails.map((item, index) => (
            <div className={`flex flex-row mb-1.5`}>
              &#8226;&nbsp;
              <div key={index}>{item}</div>
            </div>
          ))}
        </div>
        <div className={`${styles.connectAfter}`}>
          <div className={`flex flex-row items-center`}>
            <input type="checkbox" id={`do`} className={`mr-2`} />
            <label htmlFor={`do`}>
              {language === "en"
                ? paymentForm.en.connectionAfter.do.message
                : paymentForm.ru.connectionAfter.do.message}
            </label>
          </div>
          <div className={`flex flex-row items-center`}>
            <input type="checkbox" id={`dont`} className={`mr-2`} />
            <label htmlFor={`dont`}>
              {language === "en"
                ? paymentForm.en.connectionAfter.dont.message
                : paymentForm.ru.connectionAfter.dont.message}
            </label>
          </div>
        </div>
      </div>

      <div
        className={`flex ${
          windowWidth < 650 ? "flex-col items-start" : "flex-row items-center"
        } justify-between mt-3`}
      >
        <div
          className={`${
            windowWidth < 650 ? "" : "max-w-[200px]"
          } flex flex-row items-center`}
        >
          <input type="checkbox" id="acceptRules" className={`mr-2`} />
          <label htmlFor="acceptRules" className={`tinyText`}>
            {language === "en"
              ? paymentForm.en.acceptRules
              : paymentForm.ru.acceptRules}
          </label>
        </div>
        <div
          className={`${styles.finalPrice} labelText text-custom-color-700 flex flex-row items-center mt-3`}
        >
          {language === "en"
            ? paymentForm.en.finalPrice
            : paymentForm.ru.finalPrice}
        </div>
      </div>

      <div className={`w-full flex flex-row items-end justify-end mt-7`}>
        <button
          // onClick={(event) => submitFromForm(event)}
          type="submit"
          className={`darkerButton ${windowWidth < 650 ? "" : `max-w-[300px]`}`}
        >
          {language === "en"
            ? paymentForm.en.submitButton
            : paymentForm.ru.submitButton}
        </button>
      </div>
    </form>
  );
}

export default PaymentForm;
