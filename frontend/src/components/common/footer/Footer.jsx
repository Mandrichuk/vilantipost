import React, { useRef, useState } from "react";
import { footerData } from "../../../constants/index";
import styles from "./footer.module.css";
import TextInput from "../TextInput";
import TextArea from "../TextArea";
import { Link } from "react-router-dom";
import useWindowWidth from "../../../utils/useWindowWidth";
import { footer } from "../../../constants/index";
import { useSelector } from "react-redux";
import axios from "axios";
import { domens } from "../../../constants";

function Footer() {
  const form = useRef();
  const language = useSelector((state) => state.language.language);
  const windowWidth = useWindowWidth();
  const footerData = language === "en" ? footer.en : footer.ru;
  const emailUsData = footerData.emailUs;
  const [error, setError] = useState(false);
  const [emailData, setEmailData] = useState({
    emailName: "",
    email: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();


    if (!isValid()) {
      return;
    }

    try {
      const response = await axios.post(
        `${domens.backend}/api/send-email`,
        emailData
      );
    } catch (error) {
      console.error(error);
    }
  };

  function getDataFromForm(field, value) {
    setEmailData({
      ...emailData,
      [field]: value,
    });
  }

  function isValid() {
    let isValid = false;
    if (emailData.emailName && emailData.email && emailData.message) {
      isValid = true;
    }
    setError(!isValid);
    return isValid;
  }

  return (
    <div
      className={`${styles.footer} flex flex-col justify-end items-center w-full bg-custom-color-700 sectionMargin`}
    >
      <div className={`wrapper ${styles.cover} min-h-[400px]`}>
        <div
          className={`flex-1 text-white flex flex-col items-center justify-center w-full px-8 max-w-[550px] 
          ${windowWidth < 950 ? "min-w-[400px]" : "min-w-[550px]"}`}
        >
          <div className={`tinyText text-gray-300 mb-2`}>
            {emailUsData.articleText}
          </div>
          <div className={`labelText`}>{emailUsData.questionText}</div>
          <div className={`labelText`}>{emailUsData.contactUs}</div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`mt-6 w-full grid gap-[20px]`}
          >
            <TextInput
              getValue={getDataFromForm}
              placeholder={emailUsData.nameInput.placeholder}
              value={emailUsData.nameInput.value}
              field={emailUsData.nameInput.field}
              type={emailUsData.nameInput.type}
              allowLanguages={true}
              error={error}
            />
            <TextInput
              getValue={getDataFromForm}
              placeholder={emailUsData.emailInput.placeholder}
              value={emailUsData.emailInput.value}
              field={emailUsData.emailInput.field}
              type={emailUsData.emailInput.type}
              allowLanguages={true}
              error={error}
            />
            <TextArea
              getValue={getDataFromForm}
              placeholder={emailUsData.messageInput.placeholder}
              field={emailUsData.messageInput.field}
              allowLanguages={true}
              error={error}
            />
          </form>
          <button onClick={sendEmail} className={`regularButton`}>
            Send
          </button>
        </div>

        {windowWidth < 950 ? (
          <div className={`bg-gray-300 h-[1px] w-full my-10`} />
        ) : (
          <div
            className={`bg-gray-300 h-[470px] ${
              windowWidth < 1100 ? "ml-10" : "ml-[7rem]"
            } w-[1px] my-10`}
          />
        )}
        <div
          className={`${styles.footerNav} w-full flex flex-1 ${
            windowWidth < 950
              ? "flex-row tinyText"
              : "flex-col h-[200px] articleText"
          } items-center justify-between text-white px-5 max-w-[550px]`}
        >
          {footerData.nav.map((item, index) => (
            <a
              href={`${item.link}`}
              key={`footer-item-${index}`}
              className={`cursor-pointer`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className={`tinyText text-gray-300 mb-3 w-full text-center`}>
        © 2024 All rights reserved
        <br />
        Created by{" "}
        <a
          href="https://github.com/mandrichuk"
          className={`underline`}
          target={"_blank"}
        >
          Andrew Mandrichuk
        </a>
      </div>
    </div>
  );
}

export default Footer;
