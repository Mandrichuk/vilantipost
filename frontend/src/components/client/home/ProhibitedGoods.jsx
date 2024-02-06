import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { homePage } from "../../../constants/index";
import useWindowWidth from "../../../utils/useWindowWidth";
import styles from "./home.module.css";


function ProhibitedGoods() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const wideScreen = 650;
  const windowWidth = useWindowWidth();
  const prohibtedGoodsText =
    language === "en"
      ? homePage.prohibitedGoods.en
      : homePage.prohibitedGoods.ru;

  return (
    <>
      <div
        className={`${styles.backgroundCover} w-full flex flex-col mb-[20px] sectionMargin`}
      >
        <div className={`containerTitleText`}>{prohibtedGoodsText.titleText}</div>

        <div
          className={`${styles.goodsGrid} w-full grid grid-cols-1 gap-3 mt-3`}
        >
          {prohibtedGoodsText.goods.map((item, index) => (
            <div
              key={`goods-items-${index}`}
              className={`${
                styles.goodsContainer
              } rounded-md w-full shadow-md px-6 py-1 flex ${
                windowWidth < 800 ? "flex-row" : "flex-col"
              } items-center transition-all`}
            >
              <div
                className={`${styles.goodsImgContainer} 
                  flex flex-row items-center justify-center  h-[110px] w-[110px]`}
              >
                <img
                  src={item.image}
                  alt=""
                  className={`w-full object-cover transition-all`}
                />
              </div>
              <div
                className={`${styles.goodsName} labelText font-bold ${windowWidth < 800 && "ml-[30px]"} mt-4 mb-3`}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProhibitedGoods;
