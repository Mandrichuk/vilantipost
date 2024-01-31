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

function TrackParcel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const trackPackage =
    language === "en" ? homePage.trackPackage.en : homePage.trackPackage.ru;
  const wideScreen = 650;
  const [packageNumber, setPackageNumber] = useState("");
  const windowWidth = useWindowWidth();
  const [fedExNumber, setFedExNumber] = useState(null); 
  const [packageData, setPackageData] = useState(null);
  const [notFoundError, setNotFoundError] = useState(false);
  function getPackageNumber(field, value) {
    setPackageNumber(value);
  }

  // console.log(packageData);

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
      <div className={`containerTitleText`}>Track parcel</div>

      <div className={`articleText mb-1`}>
        Enter the <span className={`text-purple-600 font-bold`}>Fed</span>
        <span className={`text-orange-600 font-bold`}>Ex</span> package number
      </div>
      <div className={`relative mt-4`}>
        <TextInput
          getValue={getPackageNumber}
          placeholder={trackPackage.trackInput.placeholder}
          field={trackPackage.trackInput.field}
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
        <div className={`text-red-500 tinyText`}>Package is not found</div>
      )}

      <div className={`bg-gray-50 p-4 w-full rounded-sm mt-4`}>
        <div className={`flex flex-row mb-5`}>
          <img
            src={images.deliveryBox}
            alt=""
            className={`w-[100px] h-[100px] mr-4`}
          />

          <div>
            <div className={`labelText text-dark-gray-color-100`}>
              Package data
            </div>
            <div className={`titleText`}>Number: {fedExNumber}</div>
          </div>
        </div>

        <div className={`flex flex-col articleText`}>
          <p className={`text-gray-500`}>Sender: <span className={`text-black font-bold`}>{packageData && packageData.sender}</span></p>
          <p className={`text-gray-500`}>Recipient: <span className={`text-black font-bold`}>{packageData && packageData.recipient}</span></p>
          <p className={`text-gray-500`}>Country from: <span className={`text-black font-bold`}>{packageData && packageData.sender_country}</span></p>
          <p className={`text-gray-500`}>Country to: <span className={`text-black font-bold`}>{packageData && packageData.recipient_country}</span></p>
        </div>
      </div>
    </div>
  );
}

export default TrackParcel;
