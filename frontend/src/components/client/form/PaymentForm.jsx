import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./form.module.css";
import { TbCircleNumber4 } from "react-icons/tb";
import useWindowWidth from "../../../utils/useWindowWidth";
import { formPage } from "../../../constants/index";
import { setFormData } from "../../../features/formsClient";


function PaymentForm(props) {
  const dispatch = useDispatch();
  const isOpened = props.isOpened;
  const orderBox = useSelector((state) => state.orderBox.orderBox);
  const windowWidth = useWindowWidth();
  const language = useSelector((state) => state.language.language);
  const paymentFormText = formPage.paymentForm;
  const paymentDetails =
    language === "en"
      ? paymentFormText.en.paymentDetails
      : paymentFormText.ru.paymentDetails;
  const [notFullfilledError, setNotFullfilledError] = useState(false);
  const [paymentForm, setPaymentForm] = useState({
    contactAfter: true,
    acceptRules: false,
  });
  const [btnAvailable, setBtnAvailable] = useState(paymentForm.acceptRules);

  function handleChangePaymentForm(field, value) {
    setPaymentForm((prevData) => ({ ...prevData, [field]: value }));

    if (field === "acceptRules") {
      setBtnAvailable(value);
    }
  }

  function submitPaymentForm(event) {
    event.preventDefault();

    if (isFormValid()) {
      dispatch(
        setFormData({ type: "UPDATE_PAYMENT_FORM_DATA", value: paymentForm })
      );
      props.sendToBackend();
    }
  }

  function isFormValid() {
    let isValid = false;
    if (paymentForm.acceptRules) {
      isValid = true;
    }

    setNotFullfilledError(!isValid);
    return isValid;
  }


  return (
  <>
    <form className={`${styles.paymentFormInfo} ${isOpened ? "mb-6" : "mb-3"}`}>
      {windowWidth < 1560 && (
        <div
          className={`${styles.title} ${
            isOpened && `text-custom-color-700 font-bold`
          } labelText p-3 ${
            isOpened ? "mb-5" : "mb-1"
          } w-full flex flex-row items-center`}
        >
          <TbCircleNumber4 className={`mr-2 text-[1.3rem]`} />
          {language === "en"
            ? paymentFormText.en.formTitle
            : paymentFormText.ru.formTitle}
        </div>
      )}

      <div className={`${styles.detailsCover} ${isOpened ? "open" : "hidden"}`}>
        <div
          className={`${styles.borderCustomContainer} ${
            windowWidth < 650 ? "px-3" : `px-5`
          }`}
        >
          <div className={`artileText font-bold`}>
            {language === "en"
              ? paymentFormText.en.paymentMethod
              : paymentFormText.ru.paymentMethod}
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
              <input
                type="checkbox"
                id={`do`}
                className={`mr-2`}
                checked={paymentForm.contactAfter}
                onChange={() => handleChangePaymentForm("contactAfter", true)}
              />
              <label htmlFor={`do`}>
                {language === "en"
                  ? paymentFormText.en.connectionAfter.do.message
                  : paymentFormText.ru.connectionAfter.do.message}
              </label>
            </div>
            <div className={`flex flex-row items-center`}>
              <input
                type="checkbox"
                id={`dont`}
                className={`mr-2`}
                checked={!paymentForm.contactAfter}
                onChange={() => handleChangePaymentForm("contactAfter", false)}
              />
              <label htmlFor={`dont`}>
                {language === "en"
                  ? paymentFormText.en.connectionAfter.dont.message
                  : paymentFormText.ru.connectionAfter.dont.message}
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
            } flex flex-row items-center ${
              notFullfilledError && "p-2 errorBorder rounded-md"
            }`}
          >
            <input
              type="checkbox"
              checked={paymentForm.acceptRules}
              id="acceptRules"
              className={`mr-2`}
              onClick={() =>
                handleChangePaymentForm("acceptRules", !paymentForm.acceptRules)
              }
            />
            <label htmlFor="acceptRules" className={`tinyText`}>
              {language === "en"
                ? paymentFormText.en.acceptRules
                : paymentFormText.ru.acceptRules}
            </label>
          </div>
          <div
            className={`${styles.finalPrice} labelText text-custom-color-700 flex flex-row items-center mt-3`}
          >
            {language === "en"
              ? paymentFormText.en.finalPrice
              : paymentFormText.ru.finalPrice}
          </div>
        </div>

        <div className={`w-full flex flex-row items-end justify-end mt-7`}>
          <button
            onClick={(event) => {
              submitPaymentForm(event);
            }}
            type="submit"
            className={`darkerButton ${btnAvailable ? "" : "unavailable"} ${
              windowWidth < 650 ? "" : `max-w-[300px]`
            }`}
          >
            {language === "en"
              ? paymentFormText.en.submitButton
              : paymentFormText.ru.submitButton}
          </button>
        </div>
      </div>
    </form>
    </>
  );
}

export default PaymentForm;
