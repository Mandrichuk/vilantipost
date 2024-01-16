import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "./form.module.css";
import Navbar from "../../common/navbar/Navbar";
import { formPage } from "../../../constants/index";
import useWindowWidth from "../../../utils/useWindowWidth";
import images from "../../../constants/index";
import FormFrom from "./FormFrom";
import FormTo from "./FormTo";
import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 } from "react-icons/tb";

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
  const blockResults = [
    {
      title: {
        ru: formPage.formFromClient.ru.formTitle,
        en: formPage.formFromClient.en.formTitle,
      },
      isActive: toggleOpenForms.openFromForm,
      icon: "TbCircleNumber1"
    },
    {
      title: {
        ru: formPage.formToClient.ru.formTitle,
        en: formPage.formToClient.en.formTitle,
      },
      isActive: toggleOpenForms.openToForm,
      icon: "TbCircleNumber2"
    },
    {
      title: {
        ru: formPage.shippingForm.ru.formTitle,
        en: formPage.shippingForm.en.formTitle,
      },
      isActive: toggleOpenForms.openShippingForm,
      icon: "TbCircleNumber3"
    },
    {
      title: {
        ru: formPage.paymentForm.ru.formTitle,
        en: formPage.paymentForm.en.formTitle,
      },
      isActive: toggleOpenForms.openPaymentForm,
      icon: "TbCircleNumber"
    },
  ];


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

  function sendToBackend() {
    const stringifiedForm = JSON.stringify(formsClientData);

    axios
      .post("http://127.0.0.1:5000/api/save-form-to-db", stringifiedForm, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при отправке данных на сервер:", error);
      });
  }

  return (
    <div
      className={`${styles.backgroundCover} w-full flex flex-col items-center bg-white`}
    >
      <Navbar />
      <div className={`wrapper`}>
        <div className={`${styles.form} w-full`}>
          <div
            className={`${styles.formIntroduction} w-full flex flex-col items-center justify-center text-[1rem]`}
          >
            <div className={`titleText font-bold`}>
              {language === "en" ? formPage.en.title : formPage.ru.title}
            </div>
            {windowWidth < 1560 && (
              <div
                className={`bg-[#419088] text-white w-full rounded-md noneRoundedBottom p-5 flex flex-row items-center justify-center mt-[30px]`}
              >
                <img
                  className={`max-h-[45px] object-cover mr-5`}
                  src={images.whiteEnvelope}
                />
                <div className={`h-[70px] flex flex-col justify-center font-bold`}>
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
            )}

            <div
              className={`flex ${
                windowWidth < 1560 ? "flex-col" : "flex-row mt-[30px]"
              } w-full`}
            >
              <div className={`flex-1 w-full`}>
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

              {windowWidth > 1560 && (
                <>
                  <div className={`flex flex-col ml-7 flex-[0.5]`}>
                    <div
                      className={`bg-[#419088] text-white w-full rounded-md noneRoundedBottom p-5 flex flex-row items-center justify-center `}
                    >
                      <img
                        className={`max-h-[70px] object-cover mr-8`}
                        src={images.whiteEnvelope}
                      />
                      <div className={`h-[70px] flex flex-col justify-center font-bold `}>
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

                    <div>
                      {blockResults.map((item, index) => (
                        <div
                          key={index}
                          className={`${styles.title} ${
                            item.isActive && `text-custom-color-700 font-bold`
                          } labelText p-3 mb-3 w-full flex flex-row items-center`}
                        >
                          <TbCircleNumber1 className={`mr-2 text-[1.3rem]`} />
                          {language === "en" ? item.title.en : item.title.ru}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
