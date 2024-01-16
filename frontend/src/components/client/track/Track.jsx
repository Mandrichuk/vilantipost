import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import styles from "./track.module.css";
import Navbar from "../../common/navbar/Navbar";
import useWindowWidth from "../../../utils/useWindowWidth";
import Footer from "../../common/footer/Footer";
import { trackPage } from "../../../constants/index";
import TextInput from "../../common/TextInput";

const Track = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const trackPageText = language === "en" ? trackPage.en : trackPage.ru;
  const windowWidth = useWindowWidth();
  const [trackNumber, setTrackNumber] = useState("");
  const [buttonSubmit, setButtonSubmit] = useState(false);
  const [data, setData] = useState("");


  function trackNumberHandleChange(field, value) {
    setTrackNumber(value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/track-parcel/${trackNumber}`
        );
        setData(response.data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [buttonSubmit]);

  console.log(data);

  return (
    <>
      <Navbar />
      <div
        className={`${styles.backgroundCover} w-full h-[100vh] flex flex-col items-center`}
      >
        <div className={`wrapper`}>
          <div className={`titleText`}>{trackPageText.title}</div>
          <div
            className={`${styles.trackInputs} mt-[30px] w-full flex ${
              windowWidth < 650 ? "flex-col" : "flex-row"
            }`}
          >
            <TextInput
              placeholder={trackPageText.input.placeholder}
              value={trackPageText.input.value}
              field={trackPageText.input.field}
              type={trackPageText.input.type}
              getValue={trackNumberHandleChange}
            />
            <button
              className={`darkerButton`}
              onClick={() => setButtonSubmit((prevValue) => !prevValue)}
            >
              {trackPageText.buttonSubmit}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Track;
