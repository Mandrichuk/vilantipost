import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { homePage } from "../../../constants/index";
import useWindowWidth from "../../../utils/useWindowWidth";
import TextInput from "../../common/TextInput";
import { BiSolidBinoculars } from "react-icons/bi";
import { motion } from "framer-motion";
import { motions } from "../../../constants/index";
import styles from "./home.module.css";
import images from "../../../constants/index";

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

  console.log(prohibtedGoodsText);

  return (
    <>
      <div
        className={`${styles.backgroundCover} w-full flex flex-col mb-[20px] sectionMargin`}
      >
        <div className={`containerTitleText`}>Prohibited goods</div>

        <div
          className={`${styles.goodsGrid} w-full grid grid-cols-1 gap-3 mt-3`}
        >
          {prohibtedGoodsText.goods.map((item, index) => (
            <div
              key={`goods-items-${index}`}
              className={`${styles.goodsContainer} rounded-md w-full max-h-[230px] shadow-md px-6 py-1 flex flex-row items-center transition-all`}
            >
              <div
                className={`${styles.goodsImgContainer} h-[80px] w-[80px] flex flex-row items-center`}
              >
                <img
                  src={item.image}
                  alt=""
                  className={`object-cover transition-all`}
                />
              </div>
              <div
                className={`${styles.goodsName} labelText font-bold mt-4 ml-[30px] mb-3`}
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
