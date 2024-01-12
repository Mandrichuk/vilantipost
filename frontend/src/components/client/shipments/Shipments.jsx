import React, { useEffect, useState } from "react";
import styles from "./shipments.module.css";
import Sidebar from "../../common/sidebar/Sidebar";
import { shipmentsPage } from "../../../constants/index";
import { useSelector } from "react-redux";
import OneShipment from "./OneShipment";

function Shipments() {
  const language = useSelector((state) => state.language.language);

  const parcels = [
  {
    id: 1,
    formFromClient: {
      sender: "sender",
      country: "country",
      city: "city",
      street: "street",
      houseNumber: "houseNumber",
      zipCode: "zipCode",
      email: "email",
      phoneNumber: "phoneNumber",
    },
    formToClient: {
      recipient: "recipient",
      country: "country",
      city: "city",
      street: "street",
      houseNumber: "houseNumber",
      zipCode: "zipCode",
      email: "email",
      phoneNumber: "phoneNumber",
    },
    shippingForm: {
      addressInput: "addressInput",
    },
    paymentForm: {
      contactAfter: false,
      acceptRules: false,
    },
  },
  {
    id: 1,
    formFromClient: {
      sender: "sender",
      country: "country",
      city: "city",
      street: "street",
      houseNumber: "houseNumber",
      zipCode: "zipCode",
      email: "email",
      phoneNumber: "phoneNumber",
    },
    formToClient: {
      recipient: "recipient",
      country: "country",
      city: "city",
      street: "street",
      houseNumber: "houseNumber",
      zipCode: "zipCode",
      email: "email",
      phoneNumber: "phoneNumber",
    },
    shippingForm: {
      addressInput: "addressInput",
    },
    paymentForm: {
      contactAfter: false,
      acceptRules: false,
    },
  },
  ];

  
  return (
    <div
      className={`${styles.backgroundCover} w-full flex flex-col items-center bg-white`}
    >
      <Sidebar />
      <div className={`wrapper`}>
        <div className={`titleText`}>
          {language === "en" ? shipmentsPage.en.title : shipmentsPage.ru.title}
        </div>

        <div className={`${styles.shipmentsGrid} w-full grid grid-cols-1 gap-4 mt-[30px]`}>
          {parcels.map((item, index) => (
            <OneShipment key={`shipment-${index}`} {...item} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Shipments;
