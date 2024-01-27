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
import { motion } from "framer-motion";
import { motions } from "../../../constants/index";

function DeliveryProcesses() {
  const language = useSelector((state) => state.language.language);
  // const deliveryProcessesText = language === "en" ? homePage.deliveryProcesses.en : homePage.deliveryProcesses.ru;
  const windowWidth = useWindowWidth();
  const [currentProgress, setCurrentProgress] = useState(0);
  const progressFillerHeight = `${currentProgress * 25}%`;
  const stages = language === "en" ? homePage.deliveryProcesses.en.steps : homePage.deliveryProcesses.ru.steps;

  const numberStages = [
    { name: "Заполнение формы", icon: TbCircleNumber1, value: 0 },
    { name: "Отправка на склад", icon: TbCircleNumber2, value: 1 },
    { name: "Доставка в ЕС", icon: TbCircleNumber3, value: 2 },
    { name: "Доставка курьером", icon: TbCircleNumber4, value: 3 },
    { name: "Получение", icon: TbCircleNumber5, value: 4 },
  ];

  function handlePointChange(currentPoint) {
    setCurrentProgress(currentPoint);
  }

  function isStagePassed(value) {
    if (currentProgress >= value) {
      return true;
    }
  }
  

  return (
    <div className={`${styles.deliveryProcesses} w-full sectionMargin`}>
      <div className={`titleText`}>
        Процесс отправки
        <div
          className={`w-full flex flex-row items-center justify-between p-3 h-[550px]`}
        >
          <div
            className={`h-full w-[10px] bg-custom-color-700 mr-6 rounded-full relative flex flex-col justify-between items-center`}
          >
            <div
              className={`${styles.progressFiller} w-[10px] bg-custom-color-800 mr-6 rounded-full absolute inset-0`}
              style={{ height: progressFillerHeight }}
            />

            {numberStages.map((stage, index) => (
              <motion.div
                whileTap={motions.whileTap}
                key={`stage-${index}`}
                className={`z-20`}
              >
                <stage.icon
                  onClick={() => handlePointChange(stage.value)}
                  className={`${styles.stageIcon} ${
                    isStagePassed(stage.value)
                      ? "bg-custom-color-800 text-white"
                      : "bg-custom-color-700 text-gray-300"
                  } rounded-full text-[2rem] cursor-pointer`}
                />
              </motion.div>
            ))}
          </div>

          <DeliveryProcess {...stages[currentProgress]} />
        </div>
      </div>
    </div>
  );
}

function DeliveryProcess(props) {
  return (
    <div className={`flex-1 bg-gray-50 rounded-sm h-full p-4`}>
      <div
        className={`${styles.imgTitleContainer} w-full flex flex-row items-center justify-start`}
      >
        <img
          src={images.peopleRating}
          alt=""
          className={`w-[100px] h-[100px] object-cover rounded-sm`}
        />
        <div className={`flex flex-col ml-4`}>
          <div className={`labelText text-custom-color-600`}>{props.stepNumber}</div>
          <div className={`titleText`}>{props.title}</div>
        </div>
      </div>
      <div className={`mt-2 labelText`}>
        {props.label}
      </div>
      <div className={`${styles.normalText} articleText mt-4`}>
        {props.article}
      </div>
    </div>
  );
}

export default DeliveryProcesses;
