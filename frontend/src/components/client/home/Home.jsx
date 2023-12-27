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
  const radioOptions = [
    { label: "5 kg", value: 5 },
    { label: "10 kg", value: 10 },
    { label: "15 kg", value: 15 },
    { label: "20 kg", value: 20 },
    { label: "25 kg", value: 25 },
    { label: "30 kg", value: 30 },
  ];

  const label = "Pay";
  const article = "article text blablablablablabla ";
  const title="title sdfgsdfsdf sdfsdfsdfsdfsdfsdf sdfrtrr";


  return (
    <>
      <Sidebar />
      <div className={`wrapper`}>


        {/* <div className={`titleText`}>ddd</div>

        <div className={`labelText`}>aaa</div>

        <div className={`articleText`}>ttt</div>

        <div className={`linkText`}>ttt</div>

        <SolidButton label={label} />

        <RadioButtons arr={radioOptions} />

        <ChoiseInput arr={countries} />

        <ImgTitleContainer title={title} img={"img"} article={article} direction="row" bgColor="" shadow={true} imgPosition={"left"}  />

        <TextInput placeholder={"Andrew"} title={"Enter you name"} marginTop={true} />

        <PhoneInput arr={countries}  /> */}

      </div>
    </>
  );
};

export default HomePage;
