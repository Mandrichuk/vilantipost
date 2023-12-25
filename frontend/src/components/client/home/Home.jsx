import React, { useEffect, useState } from "react";
import Payment from "../payment/Payment";
import RadioButtons from "../../common/RadioButtons";
import ChoiseInput from "../../common/ChoiseInput";
import { countries } from "../../../constants/index";
import { useSelector } from "react-redux";
import SolidButton from "../../common/SolidButton";
import BoxContainer from "../../common/BoxContainer";

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


  return (
    <div className={`wrapper`}>

        <div className={`titleText`}>ddd</div>

        <div className={`labelText`}>aaa</div>

        <div className={`articleText`}>ttt</div>

        <div className={`linkText`}>ttt</div>

        <SolidButton label={label} />

        <RadioButtons arr={radioOptions} />

        <ChoiseInput arr={countries} />

        <BoxContainer title="title" img="img" height="[100px]" width="[500px]" bgColor="red-300" shadow={true} />


    </div>
  );
};

export default HomePage;
