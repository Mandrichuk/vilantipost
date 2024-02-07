import React, { useState, useRef } from "react";
import { MdMessage } from "react-icons/md";
import useWindowWidth from "../../../utils/useWindowWidth";
import Lottie from "react-lottie";
import animationData from "../../../assets/lotties/animatedMessage.json";
import { sosialMedias } from "../../../constants/index";
import motion from "framer-motion";
import styles from "./aisupport.module.css";
import TextInput from "../TextInput";
import { IoSend } from "react-icons/io5";
import TextArea from "../TextArea";

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
      {messangersOpened && <AiSupport />}

      <div
        onClick={toggleMessangersHandle}
        className={` h-[60px] w-[60px]  bg-custom-color-900 text-white rounded-lg mt-2`}
      >
        <div className={`w-full h-full p-2.5`}>
          <Lottie lottieRef={ref} options={defaultOptions} />
        </div>
      </div>
    </div>
  );
}

function AiSupport() {
  const windowWidth = useWindowWidth();

  const userMessages = [
    { isHumanMessage: true, message: "Hello" },
    {
      isHumanMessage: true,
      message: "How can i send the package using this website",
    },
    { isHumanMessage: true, message: "Thanks a lot" },
    { isHumanMessage: true, message: "Hello" },
    {
      isHumanMessage: true,
      message: "How can i send the package using this website",
    },
    { isHumanMessage: true, message: "Thanks a lot" },
  ];
  const AiResponses = [
    { isHumanMessage: false, message: "Hi! How can i help you?" },
    {
      isHumanMessage: false,
      message:
        "Sure, you can find the whole instruction on the main page, this block is called: 'Delivery Process'",
    },
    { isHumanMessage: false, message: "Any time, human :)" },
    { isHumanMessage: false, message: "Hi! How can i help you?" },
    {
      isHumanMessage: false,
      message:
        "Sure, you can find the whole instruction on the main page, this block is called: 'Delivery Process'",
    },
    { isHumanMessage: false, message: "Any time, human :)" },
  ];

  const combinedMessages = [];

  for (let i = 0; i < userMessages.length; i++) {
    combinedMessages.push(userMessages[i]);
    if (i < AiResponses.length) {
      combinedMessages.push(AiResponses[i]);
    }
  }

  return (
    <div
      className={`${styles.aiSupport} bg-gray-50 w-[370px] h-[550px] overflow-hidden rounded-lg flex flex-col items-center`}
    >
      <div
        className={`flex flex-col items-center justify-center border-b-2 bg-custom-color-900 w-full py-3 text-white`}
      >
        <div className={`text-[.8rem] text-gray-300 `}>
          Ask any question about our services
        </div>
        <div className={`text-[1.4rem] font-bold mb-1`}>AI Support</div>
      </div>

      <div className={`w-full flex flex-col h-full`}>
        <div className={`flex-1 max-h-[400px] w-full p-2.5 overflow-y-auto overflow-x-hidden ${styles.hideScrollbar}`}>
          {combinedMessages.map((item, index) =>
            item.isHumanMessage ? (
              <div
                key={index}
                className={`${styles.humanMessage} w-full flex flex-col items-end justify-end my-2`}
              >
                  <p className={`tinyText font-bold flex items-end justify-end pr-1`}>You:</p>
                <div className={`max-w-[330px] bg-custom-color-300  px-4 py-2 rounded-md`}>
                  {item.message}
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={`${styles.AiResponse} w-full flex flex-col items-start justify-end my-2`}
              >
                  <p className={`tinyText font-bold flex items-end justify-start pl-1`}>Support:</p>
                <div className={`max-w-[330px] bg-gray-200  px-4 py-2 rounded-md`}>
                  {item.message}
                </div>
              </div>
            )
          )}
        </div>

        <div className={`${styles.input} w-full relative`}>
          <AutoResizedTextArea />
        </div>
      </div>
    </div>
  );
}

function AutoResizedTextArea() {
  const [text, setText] = useState("");
  const maxSymbols = 300;

  const handleChange = (event) => {
    const textarea = event.target;

    const currentText = event.target.value;

    if (currentText.length <= maxSymbols) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
      setText(currentText);
    } else {
      setText((prev) => prev.substr(0, maxSymbols));
    }
  };

  return (
    <>
      <div className={`flex flex-row items-end bg-white px-2.5 py-4 relative`}>
        <textarea
          className={`${styles.aiSupportInput} w-full resize-none h-[40px] text-[1rem] p-2`}
          value={text}
          onChange={handleChange}
          style={{ height: "auto", overflowY: "hidden" }}
          rows={1}
          placeholder="Enter your message.."
        />
        <IoSend
          onClick={() => console.log("aisupport submit message")}
          className={` text-[1.6rem] text-custom-color-900 cursor-pointer h-full mb-1.5`}
        />
      </div>
      <div
        className={`absolute right-1.5 bottom-0.5 tinyText ${
          text.length === maxSymbols ? "text-red-500" : "text-gray-400"
        }`}
      >
        {text.length} / {maxSymbols}
      </div>
    </>
  );
}

export default ContactUsButton;
