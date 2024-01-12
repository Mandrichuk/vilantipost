import React, { useEffect, useState } from "react";
import styles from "./shipments.module.css";
import Sidebar from "../../common/sidebar/Sidebar";
import { useSelector } from "react-redux";
import { shipmentsPage } from "../../../constants/index";
import images from "../../../constants/index";

function OneShipment(props) {
  const language = useSelector((state) => state.language.language);


  console.log(props)

  return (
    <div className={`bg-white text-custom-color-500 shadow-lg  w-full p-4 rounded-md`}>
      <div className={`flex flex-row w-full items-center font-bold labelText`}>
        <img alt="envelope" src={images.customEnvelope} className={`h-[35px] object-cover mr-4`}/>
        {language === "en" ? shipmentsPage.en.shipmentDetails.id : shipmentsPage.ru.shipmentDetails.id}
        {props.id}
      </div>


    </div>
  );
}

export default OneShipment;
