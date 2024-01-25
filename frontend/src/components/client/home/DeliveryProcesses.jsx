import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import images from "../../../constants/index";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowWidth from "../../../utils/useWindowWidth";
import { homePage } from "../../../constants/index";
import { useSelector } from "react-redux";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbCircleNumber5,
} from "react-icons/tb";

function DeliveryProcesses() {
  const language = useSelector((state) => state.language.language);
  // const deliveryProcessesText = language === "en" ? homePage.deliveryProcesses.en : homePage.deliveryProcesses.ru;
  const windowWidth = useWindowWidth();
  const [currentProgress, setCurrentProgress] = useState(0);

  function handlePointChange(currentPoint) {
    setCurrentProgress(currentPoint);
  }

  const progressFillerHeight = `${currentProgress * 25}%`;
  console.log(progressFillerHeight);

  return (
    <div className={`${styles.deliveryProcesses} w-full my-6`}>
      <div className={`titleText`}>
        Процесс отправки
        <div
          className={`w-full flex flex-row items-center justify-between p-3 h-[500px]`}
        >
          <div
            className={`h-full w-[10px] bg-custom-color-700 mr-6 rounded-full relative flex flex-col justify-between items-center`}
          >
            <div
              className={`${styles.progressFiller} w-[10px] bg-custom-color-900 mr-6 rounded-full absolute inset-0`}
              style={{ height: progressFillerHeight }}
            />

            <TbCircleNumber1
              onClick={() => handlePointChange(0)}
              className={`bg-custom-color-700 rounded-full text-white text-[2rem] z-20 cursor-pointer`}
            />
            <TbCircleNumber2
              onClick={() => handlePointChange(1)}
              className={`bg-custom-color-700 rounded-full text-white text-[2rem] z-20 cursor-pointer`}
            />
            <TbCircleNumber3
              onClick={() => handlePointChange(2)}
              className={`bg-custom-color-700 rounded-full text-white text-[2rem] z-20 cursor-pointer`}
            />
            <TbCircleNumber4
              onClick={() => handlePointChange(3)}
              className={`bg-custom-color-700 rounded-full text-white text-[2rem] z-20 cursor-pointer`}
            />
            <TbCircleNumber5
              onClick={() => handlePointChange(4)}
              className={`bg-custom-color-700 rounded-full text-white text-[2rem] z-20 cursor-pointer`}
            />
          </div>

          <DeliveryProcess />
        </div>
      </div>
    </div>
  );
}

function DeliveryProcess(props) {
  return <div className={`flex-1 bg-red-300 h-full rounded-lg p-4`}>d</div>;
}

export default DeliveryProcesses;
