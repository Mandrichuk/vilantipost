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

function TrackParcel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const orderBoxData = useSelector((state) => state.orderBox.orderBox);
  const orderBoxInfo = homePage.orderBox;
  const trackPackage =
    language === "en" ? homePage.trackPackage.en : homePage.trackPackage.ru;
  const wideScreen = 650;
  const [packageNumber, setPackageNumber] = useState("");

  const windowWidth = useWindowWidth();
  function getPackageNumber(field, value) {
    setPackageNumber(value);
  }

  return (
    <div className={`w-full flex flex-col justify-center items-center`}>
      <div className={`flex-1 w-full max-w-[750px] ${windowWidth < 1300 ? "mb-10 mt-2" : "mb-5"}`}>
        <div className={`articleText mb-1`}>{trackPackage.labelText}</div>
        <div className={`relative`}>
          <TextInput
            getValue={getPackageNumber}
            placeholder={trackPackage.trackInput.placeholder}
            field={trackPackage.trackInput.field}
          />
          <button
            type="submit"
            className={`px-3 py-[5px] bg-dark-gray-color-500 rounded-md absolute right-[-1px] top-0`}
          >
            <motion.div whileTap={motions.whileTap}>
              <BiSolidBinoculars className={`text-white text-[2rem] `} />
            </motion.div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrackParcel;
