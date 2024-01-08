import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./form.module.css";
import { TbCircleNumber3 } from "react-icons/tb";
import useWindowWidth from "../../../utils/useWindowWidth";
import { formPage } from "../../../constants/index";
import TextInput from "../../common/TextInput";
import { setFormData } from "../../../features/formsClient";


function ShippingForm(props) {
  const dispatch = useDispatch();
  const isOpened = props.isOpened;
  const orderBox = useSelector((state) => state.orderBox.orderBox);
  const windowWidth = useWindowWidth();
  const language = useSelector((state) => state.language.language);
  const shippingFromClient = formPage.shippingForm;
  const [notFullfilledError, setNotFullfilledError] = useState(false);
  const [adressInput, setAdressInput] = useState("");
  const adressInputText =
    language === "en"
      ? shippingFromClient.en.adressInput
      : shippingFromClient.ru.adressInput;

  function getAdressInput(field, value) {
    setAdressInput(value);
  }

  function submitShippingForm(event) {
    event.preventDefault();

    if (isFormValid(adressInput)) {
      dispatch(setFormData({ type: "UPDATE_SHIPPING_FORM_DATA", value: {adressInput: adressInput} }));
      props.handleChangeActiveForm("openPaymentForm");
    }
  }

  function isFormValid(adressInput) {
    let isValid = false;
    if (adressInput) {
      isValid = true;
    }

    setNotFullfilledError(!isValid);
    return isValid;
  }

  return (
    <form className={`${styles.shippingFormInfo} ${isOpened ? "mb-6" : "mb-3"}`}>
      <div
        className={`${styles.title} ${
          isOpened && `text-custom-color-700 font-bold`
        } labelText p-3 ${isOpened ? "mb-5" : "mb-1"} w-full flex flex-row items-center`}
      >
        <TbCircleNumber3 className={`mr-2 text-[1.3rem]`} />
        {language === "en"
          ? shippingFromClient.en.formTitle
          : shippingFromClient.ru.formTitle}
      </div>
        <div className={`${styles.detailsCover} ${isOpened ? "open" : "hidden"}`}>

          <div
            className={`${styles.borderCustomContainer}  ${
              windowWidth < 650 ? "px-3" : `px-5`
            }`}
          >
            <div className={`artileText font-bold mb-3`}>
              {language === "en"
                ? shippingFromClient.en.deliveryMethod
                : shippingFromClient.ru.deliveryMethod}
            </div>
            <div className={`flex flex-row items-center`}>
              <input type="checkbox" checked className={`mr-1`} />
              {language === "en"
                ? shippingFromClient.en.deliveryBy
                : shippingFromClient.ru.deliveryBy}
            </div>
            <div>
              <div className={`separator my-4 text-custom-color-300`} />

              <div
                className={`flex ${
                  windowWidth < 650 ? "flex-col" : "flex-row items-center"
                }  max-w-[700px]`}
              >
                <div className={`mr-4 min-w-[260px] articleText`}>
                  {language === "en"
                    ? shippingFromClient.en.toInputText
                    : shippingFromClient.ru.toInputText}
                </div>

                <TextInput
                  type={adressInputText.type}
                  placeholder={adressInputText.placeholder}
                  getValue={getAdressInput}
                />
              </div>
            </div>
          </div>
          <div className={`w-full flex flex-row items-end justify-end mt-7`}>
            <button
              onClick={(event) => submitShippingForm(event)}
              type="submit"
              className={`darkerButton ${
                windowWidth < 650 ? "" : `max-w-[300px]`
              }`}
            >
              {language === "en"
                ? shippingFromClient.en.submitButton
                : shippingFromClient.ru.submitButton}
            </button>
          </div>
        </div>
    </form>
  );
}

export default ShippingForm;
