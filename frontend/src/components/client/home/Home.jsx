import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./home.module.css";
import Payment from "../payment/Payment";
import RadioButtons from "../../common/RadioButtons";
import ChoiseInput from "../../common/ChoiseInput";
import { countries, sidebar } from "../../../constants/index";
import ImgTitleContainer from "../../common/ImgTitleContainer";
import TextInput from "../../common/TextInput";
import PhoneInput from "../../common/PhoneInput";
import Sidebar from "../../common/sidebar/Sidebar";
import { homePage } from "../../../constants/index";
import images from "../../../constants/index";
import { links } from "../../../constants/index";

const HomePage = () => {
  const language = useSelector((state) => state.language.language);
  const orderBoxInfo = homePage.orderBox;
  const [fromWhere, setFromWhere] = useState("from");

  function handleFromWhereChange(e) {
    setFromWhere(e);
  }

  return (
    <>
      <Sidebar />
      <div className={`${styles.backgroundCover} w-full h-[100vh] flex flex-col items-center  bg-custom-color-50`}>
        <div className={`wrapper`}>

          <div className={`${styles.orderBox} text-custom-color-500 bg-dark-gray-color-500 w-full p-3 rounded-xl shadow-md`}>
            <div className={`${styles.titleContainer} titleText my-3 text-center`}>
              {language === "en" ? orderBoxInfo.en.title : orderBoxInfo.ru.title}
            </div>

            <div className={`separator my-4`} />

            <div className={`${styles.deliveryInputs} w-full`}>

              <div className={`${styles.fromWhereInputs} flex flex-col`}>
                <button onClick={() => handleFromWhereChange("to")} className={`${fromWhere === "to" ? "selectedButton" : "button"} flex-1 mb-3`}>{language === "en" ? orderBoxInfo.en.fromWhereInputs[0] : orderBoxInfo.ru.fromWhereInputs[0]}</button>
                <button onClick={() => handleFromWhereChange("from")} className={`${fromWhere === "from" ? "selectedButton" : "button"} flex-1 mb-3`}>{language === "en" ? orderBoxInfo.en.fromWhereInputs[1] : orderBoxInfo.ru.fromWhereInputs[1]}</button>
              </div>

              <div className={`${styles.fromToInputs}`}>
                {fromWhere === "to" ? (
                <div className={`mb-3`}>
                  <div className={`labelText`}>{language === "en" ? orderBoxInfo.en.fromInput : orderBoxInfo.ru.fromInput}</div>
                  <ChoiseInput arr={countries} />
                </div>
                ) : (
                <div>
                  <div className={`labelText`}>{language === "en" ? orderBoxInfo.en.toInput : orderBoxInfo.ru.toInput}</div>
                  <ChoiseInput arr={countries} />
                </div>
                )}
              </div>

              <div className={`separator my-4`} />

              <div className={`my-4 w-full`}>
                <label className={`labelText`}>{language === "en" ? orderBoxInfo.en.youSend.label : orderBoxInfo.ru.youSend.label}</label>
                <ImgTitleContainer
                  direction="row"
                  bgColor="#419088"
                  shadow={false}
                  title={language === "en" ? orderBoxInfo.en.youSend.name : orderBoxInfo.ru.youSend.name}
                  article={language === "en" ? orderBoxInfo.en.youSend.article : orderBoxInfo.ru.youSend.article}
                  img={images.envelope}
                />
              </div>

              <div className={`${styles.weightChoice}} w-full`}>
                <label className={`labelText`}>{language === "en" ? orderBoxInfo.en.amountInput : orderBoxInfo.ru.amountInput}</label>
                <div className={`${styles.choiceGrid}`}>
                  <RadioButtons arr={(language === "en" ? orderBoxInfo.en : orderBoxInfo.ru)?.amountVariants || []} />
                </div>
              </div>
            </div>

            <div className={`separator my-4`} />

            <div className={`flex flex-row items-center justify-center`}>
                <Link to={links.sendForm} className={`w-[260px]`}>
                  <button to={links.sendForm} className={`flex-1 mb-3 regularButton`}>{language === "en" ? orderBoxInfo.en.buttonSubmit : orderBoxInfo.ru.buttonSubmit}</button>
                </Link>
            </div>

          </div>
        </div>
      </div>
      <div className={`wrapper`}>
        dddd
      </div>
    </>
  );
};

export default HomePage;
