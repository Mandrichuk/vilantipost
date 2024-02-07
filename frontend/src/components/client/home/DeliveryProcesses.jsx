import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import images, { navId } from "../../../constants/index";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowWidth from "../../../utils/useWindowWidth";
import { homePage } from "../../../constants/index";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { motions } from "../../../constants/index";

function DeliveryProcesses() {
  const language = useSelector((state) => state.language.language);
  const deliveryProcessesText =
    language === "en"
      ? homePage.deliveryProcesses.en
      : homePage.deliveryProcesses.ru;
  const windowWidth = useWindowWidth();
  const [currentProgress, setCurrentProgress] = useState(0);
  const progressFillerHeight = `${currentProgress * 25}%`;
  const stages =
    language === "en"
      ? homePage.deliveryProcesses.en.steps
      : homePage.deliveryProcesses.ru.steps;
  const numberStages = homePage.deliveryProcesses.numberStages;

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
      <div id={navId.deliveryProcesses} className={`containerTitleText`}>
        {deliveryProcessesText.titleText}
        <div
          className={`w-full flex flex-row items-center justify-between p-3 h-[550px]`}
        >
          {windowWidth > 1000 && (
            <div className={`mr-10 text-[7rem] h-full text-custom-color-600 ${windowWidth > 1300 && "mr-[100px]" }`}>
              {deliveryProcessesText.stepText} {currentProgress + 1}
            </div>
          )}
          <div
            className={`h-full w-[10px] bg-custom-color-700 mr-6 rounded-full relative flex flex-col justify-between items-center`}
          >
            <div
              className={`${styles.progressFiller} w-[10px]  bg-custom-color-800 mr-6 rounded-full absolute inset-0`}
              style={{ height: progressFillerHeight }}
            />

            {numberStages.map((stage, index) => (
              <motion.div
                whileTap={motions.whileTap}
                key={`stage-${index}`}
                className={`z-10 relative`}
              >
                <stage.icon
                  onClick={() => handlePointChange(stage.value)}
                  className={`${styles.stageIcon} ${
                    isStagePassed(stage.value)
                      ? "bg-custom-color-800 text-white"
                      : "bg-custom-color-700 text-gray-300"
                  } rounded-full text-[2rem] cursor-pointer ${styles.stepIcon}`}
                />
                {windowWidth > 650 && (
                  <div
                    className={`w-full flex flex-row items-center justify-center text-white p-2 px-4 bg-custom-color-800 rounded-lg absolute top-[2px] left-[45px] min-w-[150px] flex-1 text-align text-[0.8rem] transition-all opacity-0 ${styles.hoverLabel}`}
                  >
                    {language === "en" ? stage.name.en : stage.name.ru}
                  </div>
                )}
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
  const windowWidth = useWindowWidth();

  return (
    <div className={`${windowWidth > 1300 && "ml-[10px]"} flex-1 bg-gray-50 rounded-sm h-full p-4`}>
      <div
        className={`${styles.imgTitleContainer} w-full flex flex-row items-center justify-start`}
      >
        <img
          src={props.image}
          alt=""
          className={`w-[110px] h-[110px] object-cover rounded-sm`}
        />
        <div className={`flex flex-col ml-4`}>
          {windowWidth < 1000 && (
            <div className={`labelText text-custom-color-600`}>
              {props.stepNumber}
            </div>
          )}
          <div className={`text-[1.8rem]`}>{props.title}</div>
        </div>
      </div>
      <div className={`mt-2 labelText`}>{props.label}</div>
      <div className={`articleText font-normal mt-4`}>
        {props.article}
      </div>
    </div>
  );
}

export default DeliveryProcesses;
