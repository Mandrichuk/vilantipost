import React from "react";
import { footerData } from "../../../constants/index";
import styles from "./footer.module.css";
import TextInput from "../TextInput";
import TextArea from "../TextArea";
import { Link } from "react-router-dom";
import useWindowWidth from "../../../utils/useWindowWidth";
import { footer } from "../../../constants/index";
import { useSelector } from "react-redux";

function Footer() {
  const language = useSelector((state) => state.language.language);
  const windowWidth = useWindowWidth();
  const footerData = language === "en" ? footer.en : footer.ru;
  const emailUsData = footerData.emailUs;
  // const footerData = [
  //   "Fullfill form",
  //   "Popular shippings ",
  //   "Delivery process",
  //   "Track parcel",
  // ];

  console.log(emailUsData);

  return (
    <div
      className={`${styles.footer} flex flex-col justify-end items-center w-full bg-custom-color-700 mt-[100px]`}
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
          <div className={`mt-6 w-full grid gap-[20px]`}>
            <TextInput
              getValue={() => console.log("ehllo")}
              placeholder={emailUsData.nameInput.placeholder}
              value={emailUsData.nameInput.value}
              field={emailUsData.nameInput.field}
              type={emailUsData.nameInput.type}
            />
            <TextInput
              getValue={() => console.log("ehllo")}
              placeholder={emailUsData.emailInput.placeholder}
              value={emailUsData.emailInput.value}
              field={emailUsData.emailInput.field}
              type={emailUsData.emailInput.type}
            />
            <TextArea
              getValue={() => console.log("ehllo")}
              placeholder={emailUsData.messageInput.placeholder}
              field={emailUsData.messageInput.field}
            />
          </div>
          <button className={`regularButton`}>Send</button>
        </div>

        {windowWidth < 950 ? (
          <div className={`bg-gray-300 h-[1px] w-full my-10`} />
        ) : (
          <div
            className={`bg-gray-300 h-[470px] ${windowWidth < 1100 ? "ml-10" : "ml-[7rem]"} w-[1px] my-10`}
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
