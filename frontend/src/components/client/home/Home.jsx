import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./home.module.css";
import Payment from "../payment/Payment";
import RadioButtons from "../../common/RadioButtons";
import ChoiseInput from "../../common/ChoiseInput";
import { countries, sidebar } from "../../../constants/index";
import SolidButton from "../../common/SolidButton";
import ImgTitleContainer from "../../common/ImgTitleContainer";
import TextInput from "../../common/TextInput";
import PhoneInput from "../../common/PhoneInput";
import Sidebar from "../../common/sidebar/Sidebar";

const HomePage = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <>
      <Sidebar />
      <div className={`wrapper`}>


      </div>
    </>
  );
};

export default HomePage;
