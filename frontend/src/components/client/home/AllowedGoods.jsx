import React from "react";
import images from "../../../constants/index";
import useWindowWidth from "../../../utils/useWindowWidth";
import styles from "./home.module.css";
import { homePage } from "../../../constants/index";
import { useSelector } from "react-redux";

function AllowedGoods() {
  const language = useSelector((state) => state.language.language);
  const AllowedGoods = language === "en" ? homePage.allowedGoods.en : homePage.allowedGoods.ru;
  const windowWidth = useWindowWidth();
  const arr = [
    {
      title: "Документы для офисной работы:",
      article: "Приглашения, конверты, корреспонденция",
    },
    {
      title: "Юридические документы:",
      article: "Договоры, контракты, претензии, доверенности",
    },
    {
      title: "Финансовые документы:",
      article: " Бухгалтерские и нотариальные документы, счета, отчеты, акты",
    },
    {
      title: " Личные документы:",
      article:
        " Паспорта, визы, свидетельства о разводе, о рождении детей, дипломы",
    },
    {
      title: " Прочие документы:",
      article: " Сертификаты, свидетельства, документы с апостилем",
    },
  ];

  return (
    <div
      className={`bg-custom-color-700 ${
        styles.gradientContainer
      } w-full rounded-lg pt-6 ${
        windowWidth > 900 ? "px-10" : "px-3"
      } sectionMargin text-custom-color-100`}
    >
      <div className={`containerTitleText mb-3`}>{AllowedGoods.titleText}</div>
      <div
        className={`flex ${
          windowWidth > 900 ? "flex-row" : "flex-col"
        } justify-between 
      ${windowWidth > 1700 && "mx-[8%]"} 
      px-[10px]`}
      >
        <div className={`flex flex-col w-full ${windowWidth > 900 && "mb-10 pr-5"}`}>
          {AllowedGoods.goods.map((item, index) => (
            <div key={`goods-items-${index}`} className={`text-white articleText`}>
              <li className={`articleText font-bold`}>{item.title}</li>
              <p>{item.article}</p>
            </div>
          ))}
        </div>
        <div className={`flex items-end justify-center mt-6`}>
          <img
            src={images.delivery}
            alt={`documents`}
            className={`object-cover ${
              styles.deliveryImg}`}
          />
        </div>
      </div>
    </div>
  );
}

export default AllowedGoods;
