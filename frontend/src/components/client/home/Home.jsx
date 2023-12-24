import React, { useEffect, useState } from "react";
import Payment from "../payment/Payment";
import RadioButtons from "../../common/RadioButtons";
import ChoiseInput from "../../common/ChoiseInput";
import { countries } from "../../../constants/index";
import { useSelector } from "react-redux";

const HomePage = () => {

  const radioOptions = [
    { label: "5 kg", value: 5 },
    { label: "10 kg", value: 10 },
    { label: "15 kg", value: 15 },
    { label: "20 kg", value: 20 },
    { label: "25 kg", value: 25 },
    { label: "30 kg", value: 30 },
  ];



  return (
    <>
      <div className={`titleText`}>ddd</div>

      <div className={`labelText`}>aaa</div>

      <div className={`articleText`}>ttt</div>

      <div className={`linkText`}>ttt</div>

      {<RadioButtons arr={radioOptions} />}

      {<ChoiseInput arr={countries} />}
    </>
  );
};

export default HomePage;
