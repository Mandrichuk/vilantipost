import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import styles from "./track.module.css";
import Navbar from "../../common/navbar/Navbar";
import useWindowWidth from "../../../utils/useWindowWidth";
import Footer from "../../common/footer/Footer";
import { trackPage } from "../../../constants/index";
import TextInput from "../../common/TextInput";
import { useNavigate } from "react-router-dom";
import { links } from "../../../constants/index";

const Track = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const trackPageText = language === "en" ? trackPage.en : trackPage.ru;
  const windowWidth = useWindowWidth();
  const [windowPath, setWindowPath] = useState(
    window.location.pathname.split("/").slice(2).join("/")
  );
  const [trackNumber, setTrackNumber] = useState("");
  const [data, setData] = useState("");

  function trackNumberHandleChange(field, value) {
    setTrackNumber(value);
  }

  function pathHandleChange(event) {
    event.preventDefault();
    navigate(`${links.trackParcel}/${trackNumber}`);
    handleRefresh();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/track-parcel/${windowPath}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [windowPath]);

  const handleRefresh = () => {
    window.location.reload();
  };

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
              field={trackPageText.input.field}
              type={trackPageText.input.type}
              getValue={trackNumberHandleChange}
            />
            <button
              className={`darkerButton`}
              onClick={(event) => pathHandleChange(event)}
            >
              {trackPageText.buttonSubmit}
            </button>
          </div>

          {data && (
            <div
              className={`${styles.parcelFoundContainer} w-full flex-col items-center justify-start my-[30px]`}
            >
              <div
                className={`${styles.foundParcelText} labelText flex flex-row items-center`}
              >
                {trackPageText.foundParcelText}#{windowPath}
              </div>
              <p className={`articleText`}>
                {trackPageText.parcelData.sender}&nbsp;
                {data.sender}
              </p>
              <p className={`articleText`}>
                {trackPageText.parcelData.sender_country}&nbsp;
                {data.sender_country}
              </p>
              <p className={`articleText`}>
                {trackPageText.parcelData.recipient}&nbsp;
                {data.recipient}
              </p>
              <p className={`articleText`}>
                {trackPageText.parcelData.recipient_country}&nbsp;
                {data.recipient_country}
              </p>
              <p className={`articleText`}>
                {trackPageText.parcelData.delivery_adress}&nbsp;
                {data.shippingForm_address}
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Track;
