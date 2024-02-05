import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { homePage } from "../../../constants/index";
import useWindowWidth from "../../../utils/useWindowWidth";
import TextInput from "../../common/TextInput";
import { BiSolidBinoculars } from "react-icons/bi";
import { motion } from "framer-motion";
import { motions } from "../../../constants/index";
import images from "../../../constants/index";
import { navId } from "../../../constants/index";

function TrackParcel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const trackPackage =
    language === "en" ? homePage.trackPackage.en : homePage.trackPackage.ru;
  const trackParcelText =
    language === "en" ? homePage.trackParcel.en : homePage.trackParcel.ru;
  const wideScreen = 650;
  const [packageNumber, setPackageNumber] = useState("");
  const windowWidth = useWindowWidth();
  const [fedExNumber, setFedExNumber] = useState(null); 
  const [packageData, setPackageData] = useState(null);
  const [notFoundError, setNotFoundError] = useState(false);
  function getPackageNumber(field, value) {
    setPackageNumber(value);
  }


  const fetchData = async () => {
    setPackageData(null);
    setFedExNumber(null);
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/track-parcel/${packageNumber}`
      );
      setFedExNumber(response.data.parcel_fedExNumber);
      setPackageData(response.data);
      setNotFoundError(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setNotFoundError(true);
    }
  };

  return (
    <div className={`w-full flex flex-col justify-center sectionMargin`}>
      <div id={navId.trackParcel} className={`containerTitleText`}>{trackParcelText.titleText}</div>

      <div className={`articleText mb-1`}>
        {trackParcelText.firstArticleText} <span className={`text-purple-600 font-bold`}>Fed</span>
        <span className={`text-orange-600 font-bold`}>Ex</span> {trackParcelText.secondArticleText}
      </div>
      <div className={`relative mt-4`}>
        <TextInput
          getValue={getPackageNumber}
          placeholder={trackPackage.trackInput.placeholder}
          field={trackPackage.trackInput.field}
          whiteInputBox={true}
          error={notFoundError}
        />
        <button
          type="submit"
          className={`px-3 py-[5px] bg-dark-gray-color-500 rounded-md absolute right-[-1px] top-0`}
          onClick={fetchData}
        >
          <motion.div whileTap={motions.whileTap}>
            <BiSolidBinoculars className={`text-white text-[2rem] `} />
          </motion.div>
        </button>
      </div>

      {notFoundError && (
        <div className={`text-red-500 tinyText`}>{trackParcelText.notFound}</div>
      )}

      <div className={`bg-gray-50 p-6 w-full rounded-sm mt-4`}>
        <div className={`flex flex-row mb-5`}>
          <div className={`w-[70px] h-[70px] mr-6 mb-2`}>
          <img
            src={images.deliveryBox}
            alt=""
            className={`object-cover`}
          />
          </div>

          <div>
            <div className={`labelText text-dark-gray-color-100`}>
              {trackParcelText.packageData.packageData}
            </div>
            <div className={`titleText`}>{trackParcelText.packageData.packageNumber} {fedExNumber}</div>
          </div>
        </div>

        <div className={`flex flex-col articleText text-gray-500`}>
          <p>{trackParcelText.packageData.sender}<span className={`ml-3 text-black font-bold`}>{packageData && packageData.sender}</span></p>
          <p>{trackParcelText.packageData.recipient}<span className={`ml-3 text-black font-bold`}>{packageData && packageData.recipient}</span></p>
          <p>{trackParcelText.packageData.sender_country}<span className={`ml-3 text-black font-bold`}>{packageData && packageData.sender_country}</span></p>
          <p>{trackParcelText.packageData.recipient_country}<span className={`ml-3 text-black font-bold`}>{packageData && packageData.recipient_country}</span></p>
          {/* <p>{trackParcelText.packageData.status}<span className={`ml-3 text-black font-bold`}>{packageData && packageData.status}</span>!!!</p> */}
        </div>
      </div>
    </div>
  );
}

export default TrackParcel;
