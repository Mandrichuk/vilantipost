import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./home.module.css";
import ChoiseInput from "../../common/ChoiseInput";
import { countries } from "../../../constants/index";
import ImgTitleContainer from "../../common/ImgTitleContainer";
import { homePage } from "../../../constants/index";
import images from "../../../constants/index";
import { links } from "../../../constants/index";
import useWindowWidth from "../../../utils/useWindowWidth";
import { setOrderBoxData } from "../../../features/orderBox";
import { RussiaData } from "../../../constants/index";
import { annulData } from "../../../features/orderBox";
import Slider from "../../common/Slider";
import Poster from "./Poster";
import TrackParcelInput from "./TrackParcelInput";
import { navId } from "../../../constants/index";
import { notifySuccess } from "../../../constants/index";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const orderBoxData = useSelector((state) => state.orderBox.orderBox);
  const orderBoxInfo = homePage.orderBox;
  const trackPackage =
    language === "en" ? homePage.trackPackage.en : homePage.trackPackage.ru;
  const wideScreen = 650;

  const windowWidth = useWindowWidth();
  const [formData, setFormData] = useState({
    fromWhere: "to",
    inputCountry: {},
    weight: 250,
  });
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    dispatch(annulData());
  }, []);

  function submitForm() {
    const formValid = isFormValid(formData);
    if (formValid) {
      const departure =
        formData.fromWhere === "from" ? RussiaData : formData.inputCountry;
      const destination =
        formData.fromWhere === "to" ? RussiaData : formData.inputCountry;
      const newOrderBoxData = {
        departure: departure,
        destination: destination,
        weight: formData.weight,
      };
      dispatch(setOrderBoxData(newOrderBoxData));
      navigate(links.form);
    } else {
      setInputError(true);
    }
  }

  function isFormValid(formData) {
    return (
      formData.fromWhere &&
      formData.inputCountry &&
      formData.weight &&
      !isObjectEmpty(formData.inputCountry)
    );
  }

  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  function handleFromWhereChange(value) {
    setFormData((prevData) => ({ ...prevData, fromWhere: value }));
  }

  function getInputCountry(value) {
    setFormData((prevData) => ({ ...prevData, inputCountry: value }));
  }

  function getWeightValue(field, weight) {
    setFormData((prevData) => ({ ...prevData, weight: weight }));
  }

  return (
    <>
      <div
        className={`${styles.backgroundCover} w-full flex flex-col items-center bg-custom-color-50 mb-[20px]`}
      >
        <div
          className={`wrapper ${styles.orderContainer} ${
            windowWidth > 1300 && "my-2"
          }`}
        >
          {windowWidth >= 1300 ? (
            <div className={`flex-1 h-[680px] mr-5`}>
              <TrackParcelInput />
              <Poster />
            </div>
          ) : (
            <div className={`w-full flex flex-col justify-center`}>
              <Poster />
              <TrackParcelInput />
            </div>
          )}

          <div
            id={navId.form}
            className={`${styles.orderBox}  ${
              windowWidth < 1300 ? "flex-1" : "flex-[0.85]"
            }  text-custom-color-600 bg-dark-gray-color-500 w-full ${
              windowWidth > 400 ? "p-6" : "p-3"
            } rounded-lg shadow-xl max-w-[750px]`}
          >
            <div
              className={`${styles.titleContainer} titleText my-3 text-center text-custom-color-400"`}
            >
              {language === "en"
                ? orderBoxInfo.en.title
                : orderBoxInfo.ru.title}
            </div>

            <div className={`separator my-4 text-white`} />

            <div className={`${styles.deliveryInputs} w-full flex flex-col`}>
              <div className={`${styles.firstSection} flex-1`}>
                <div className={`${styles.fromWhereInputs} flex flex-col`}>
                  <button
                    onClick={() => {
                      handleFromWhereChange("to");
                    }}
                    className={`${
                      formData.fromWhere === "to" ? "selectedButton" : "button"
                    } flex-1 mb-3`}
                  >
                    {language === "en"
                      ? orderBoxInfo.en.fromWhereInputs[0]
                      : orderBoxInfo.ru.fromWhereInputs[0]}
                  </button>
                  <button
                    onClick={() => {
                      handleFromWhereChange("from");
                    }}
                    className={`${
                      formData.fromWhere === "from"
                        ? "selectedButton"
                        : "button"
                    } flex-1 mb-3`}
                  >
                    {language === "en"
                      ? orderBoxInfo.en.fromWhereInputs[1]
                      : orderBoxInfo.ru.fromWhereInputs[1]}
                  </button>
                </div>

                <div className={`${styles.fromToInputs}`}>
                  {formData.fromWhere === "to" ? (
                    <div className={`mb-1`}>
                      <div className={`labelText mb-2`}>
                        {language === "en"
                          ? orderBoxInfo.en.fromInput
                          : orderBoxInfo.ru.fromInput}
                      </div>
                      <ChoiseInput
                        arr={countries}
                        getCountry={getInputCountry}
                        error={inputError}
                        errorMessage={
                          language === "en"
                            ? orderBoxInfo.en.errorMessage
                            : orderBoxInfo.ru.errorMessage
                        }
                      />
                    </div>
                  ) : (
                    <div className={`mb-1`}>
                      <div className={`labelText mb-2`}>
                        {language === "en"
                          ? orderBoxInfo.en.toInput
                          : orderBoxInfo.ru.toInput}
                      </div>
                      <ChoiseInput
                        arr={countries}
                        getCountry={getInputCountry}
                        error={inputError}
                        errorMessage={
                          language === "en"
                            ? orderBoxInfo.en.errorMessage
                            : orderBoxInfo.ru.errorMessage
                        }
                      />
                    </div>
                  )}
                </div>
              </div>

              {windowWidth < wideScreen && (
                <div className={`separator my-4 text-white`} />
              )}
              {windowWidth > wideScreen && (
                <div className={`w-[1px] bg-white mx-3`} />
              )}

              <div className={`${styles.secondSection} flex-1`}>
                <div className={` w-full`}>
                  <label className={`labelText`}>
                    {language === "en"
                      ? orderBoxInfo.en.youSend.label
                      : orderBoxInfo.ru.youSend.label}
                  </label>
                  <div className={`mt-2`}>
                    <ImgTitleContainer
                      direction="row"
                      bgColor={"#57c3bb"}
                      shadow={false}
                      title={
                        language === "en"
                          ? orderBoxInfo.en.youSend.name
                          : orderBoxInfo.ru.youSend.name
                      }
                      article={
                        language === "en"
                          ? orderBoxInfo.en.youSend.article
                          : orderBoxInfo.ru.youSend.article
                      }
                      img={images.envelope}
                    />
                  </div>
                </div>

                <div className={`${styles.weightChoice}} w-full mt-4`}>
                  <label className={`labelText`}>
                    {language === "en"
                      ? orderBoxInfo.en.amountInput
                      : orderBoxInfo.ru.amountInput}
                  </label>
                  <div className={`${styles.choiceGrid} w-full mt-2`}>
                    <Slider
                      initialValue={formData.weight}
                      minValue={150}
                      maxValue={300}
                      units={
                        language === "en"
                          ? orderBoxInfo.en.units
                          : orderBoxInfo.ru.units
                      }
                      getData={getWeightValue}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`separator my-4 text-white`} />

            <div className={`flex flex-row items-center justify-center`}>
              <button
                onClick={() => {
                  submitForm();
                }}
                className={`flex-1 mb-3 regularButton`}
              >
                {language === "en"
                  ? orderBoxInfo.en.buttonSubmit
                  : orderBoxInfo.ru.buttonSubmit}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default HomePage;
