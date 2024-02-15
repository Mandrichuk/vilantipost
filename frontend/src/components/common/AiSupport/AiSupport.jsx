import React, { useState, useRef, useEffect, useCallback } from "react";
import { MdMessage } from "react-icons/md";
import useWindowWidth from "../../../utils/useWindowWidth";
import Lottie from "react-lottie";
import animationData from "../../../assets/lotties/animatedMessage.json";
import { sosialMedias } from "../../../constants/index";
import { motion } from "framer-motion";
import styles from "./aisupport.module.css";
import TextInput from "../TextInput";
import { IoSend } from "react-icons/io5";
import TextArea from "../TextArea";
import axios from "axios";
import { domens } from "../../../constants";
import { IoClose } from "react-icons/io5";
import { motions } from "../../../constants";

function ContactUsButton() {
  const windowWidth = useWindowWidth();
  const ref = useRef(null);
  const [messangersOpened, setMessangersOpened] = useState(false);
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const toggleMessangersHandle = () => {
    setMessangersOpened((prevValue) => !prevValue);
  };

  return (
    <div
      className={`${styles.contactUsButton} fixed flex flex-col items-end justify-end`}
    >
      {messangersOpened && (
        <AiSupport toggleMessangersHandle={toggleMessangersHandle} />
      )}

      <div
        onClick={toggleMessangersHandle}
        className={` h-[60px] w-[60px]  bg-custom-color-900 text-white rounded-lg mt-2 cursor-pointer`}
      >
        <div className={`w-full h-full p-2.5`}>
          <Lottie lottieRef={ref} options={defaultOptions} />
        </div>
      </div>
    </div>
  );
}

function AiSupport(props) {
  const windowWidth = useWindowWidth();
  const [userMessages, setUserMessages] = useState([]);
  const [AiResponses, setAiResponses] = useState([]);
  const [dialoge, setDialogue] = useState([]);

  function getAIResponse(userMessage) {
    setUserMessages((prev) => [
      ...prev,
      { message: userMessage, isHumanMessage: true },
    ]);

    axios
      .post(`${domens.backend}/api/chatbot`, {
        message: userMessage,
      })
      .then((response) => {
        setAiResponses((prev) => [
          ...prev,
          { message: response.data, isHumanMessage: false },
        ]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    setDialogue([]);
    for (let i = 0; i < userMessages.length; i++) {
      setDialogue((prev) => [...prev, userMessages[i]]);
      if (i < AiResponses.length) {
        setDialogue((prev) => [...prev, AiResponses[i]]);
      }
    }
  }, [userMessages, AiResponses]);
  const message =
    "The website allows you to send parcels, envelopes, and documents globally. You can track your parcel using the FedEx number. The website only allows certain types of documents to be sent, such as <<office documents>>, <<legal documents>>, <<financial documents>>, and <<personal documents>>. However, there are also prohibited items, such as <<bank cards>> and <<money>>, that cannot be sent. You can contact us through <<Telegram>>, <<Whatsapp>>, <<Facebook>>, or <<email>> for any further questions or assistance.";

  return (
    <div
      className={`${styles.aiSupport} bg-gray-50 w-[370px] h-[570px] overflow-hidden rounded-lg flex flex-col items-center relative`}
    >
      <div
        className={`absolute flex flex-col items-center justify-center border-b-2 bg-custom-color-900 w-full py-3 text-white z-10 top-0`}
      >
        <div className={`relative w-full`}>
          <IoClose
            onClick={props.toggleMessangersHandle}
            className={`text-white absolute right-2 top-[-5px] text-[1.5rem] cursor-pointer`}
          />
        </div>
        <div className={`text-[.8rem] text-gray-300 `}>
          Ask any question about our services
        </div>
        <div className={`text-[1.4rem] font-bold mb-1`}>AI Support</div>
      </div>

      <div className={`w-full flex flex-col h-full mt-[70px]`}>
        <div
          className={`flex-1 max-h-[440px] w-full px-2.5 py-5 overflow-y-auto overflow-x-hidden ${styles.hideScrollbar}`}
        >
          <div
            className={`${styles.AiResponse} w-full flex flex-col items-start justify-end my-3 relative`}
          >
            <p
              className={`tinyText font-bold flex items-end justify-start pl-1`}
            >
              Support:
            </p>
            <div
              className={`max-w-[330px] bg-gray-200  px-2.5 py-1.5 rounded-md break-words`}
            >
              Hello 👋 today i will be your AI assistant! How can i help you? 🙂
            </div>
            <div
              className={`${styles.triangle} ${styles.AiTriangle} absolute left-2 bottom-[-7px]`}
            />
          </div>

          {dialoge.map((item, index) =>
            item.isHumanMessage ? (
              <div
                key={index}
                className={`${styles.humanMessage} w-full flex flex-col items-end justify-end my-3 relative`}
              >
                <p
                  className={`tinyText font-bold flex items-end justify-end pr-1`}
                >
                  You:
                </p>
                <div
                  className={`max-w-[330px] bg-custom-color-300  px-2.5 py-1.5 rounded-md break-words`}
                >
                  {item.message}
                </div>
                <div
                  className={`${styles.triangle} ${styles.HumanTriangle} absolute right-2 bottom-[-7px]`}
                />
              </div>
            ) : (
              <div
                key={index}
                className={`${styles.AiResponse}  w-full flex flex-col items-start justify-end my-3 relative`}
              >
                <p
                  className={`tinyText font-bold flex items-end justify-start pl-1`}
                >
                  Support:
                </p>
                <div
                  className={`max-w-[330px] bg-gray-200  px-2.5 py-1.5 rounded-md break-words`}
                >
                  <HighlightText text={item.message} />
                </div>
                <div
                  className={`${styles.triangle} ${styles.AiTriangle} absolute left-2 bottom-[-7px]`}
                />
              </div>
            )
          )}
        </div>

        <div
          className={`${styles.input} w-full absolute bg-white bottom-0 h-[65px]`}
        >
          <AutoResizedTextArea getAIResponse={getAIResponse} />
        </div>
      </div>
    </div>
  );
}

const HighlightText = ({ text }) => {
  const regex = /<<([^>>]+)>>/g;

  const parts = text.split(regex).map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span key={index} style={{ fontWeight: "bold", color: "#419088" }}>
          {part}
        </span>
      );
    }
    return part;
  });

  return <div>{parts}</div>;
};


function AutoResizedTextArea(props) {
  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const maxSymbols = 300;

  const handleChange = (event) => {
    const currentText = event.target.value;
    if (currentText.length <= maxSymbols) {
      setTextareaHeight("auto");
      setText(currentText);
    } else {
      setText((prev) => prev.substr(0, maxSymbols));
    }
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      text.length > 0 &&
      text.trim().length > 0
    ) {
      e.preventDefault();
      props.getAIResponse(text);
      setText("");
      setTextareaHeight("auto");
    }
  };

  const textareaRef = useRef(null);
  const setTextareaRef = (element) => {
    textareaRef.current = element;
    if (element) {
      updateHeight();
    }
  };

  const updateHeight = () => {
    if (textareaHeight === "auto" && textareaRef.current) {
      setTimeout(() => {
        setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
      }, 0);
    }
  };

  return (
    <>
      <div className={`flex flex-row items-end w-full`}>
        <textarea
          className={`${styles.aiSupportInput} absolute w-full resize-none h-full text-[1rem] left-0 bottom-4 max-h-[100px]`}
          value={text}
          onChange={handleChange}
          style={{ height: textareaHeight, overflowY: "hidden" }}
          rows={1}
          placeholder="Enter your message.."
          onKeyDown={handleKeyDown}
          ref={setTextareaRef}
        />
      </div>
      <div className={`absolute right-2.5 bottom-6`}>
        <IoSend
          onClick={() => {
            if (text.length > 0) {
              props.getAIResponse(text);
            }
            setText("");
            setTextareaHeight("auto");
          }}
          className={` text-[1.6rem] text-custom-color-900 cursor-pointer h-full relative`}
        />
        <div
          className={`absolute ${
            text.length >= 10 ? "right-[-11px]" : "right-[-17px]"
          } bottom-[-18px] tinyText w-[50px] ${
            text.length === maxSymbols ? "text-red-500" : "text-gray-400"
          }`}
        >
          {text.length} / {maxSymbols}
        </div>
      </div>
    </>
  );
}

export default ContactUsButton;
