import React, { useContext, createContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  IoIosSettings,
  IoIosArrowForward,
  IoIosArrowBack,
  IoMdHelpCircleOutline,
} from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaLanguage } from "react-icons/fa6";
import { PiPackageFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import styles from "./sidebar.module.css";
import { sidebar } from "../../../constants/index";
import images from "../../../constants/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../../features/language";

const SidebarContext = createContext();
const iconSize = 25;
const iconMapping = {
  IoHome: <IoHome size={iconSize} />,
  PiPackageFill: <PiPackageFill size={iconSize} />,
  IoIosSettings: <IoIosSettings size={iconSize} />,
  FaInstagram: <FaInstagram size={iconSize} />,
  FaLanguage: <FaLanguage size={iconSize} />,
};

export default function Sidebar() {
  const language = useSelector((state) => state.language.language);
  const [wideScreen, setWideScreen] = useState(true);
  const [expanded, setExpanded] = useState(wideScreen);

  useEffect(() => {
    const handleResize = () => {
      setWideScreen(window.innerWidth > 1024);
      setExpanded(window.innerWidth > 1024);

      const root = document.getElementById('root');
      if (window.innerWidth > 1024) {
        root.style.setProperty('--navbar-width', '293px');
      } else {
        root.style.setProperty('--navbar-width', '73px');
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside className={`${styles.sidebar} h-full fixed`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={images.fullLogo}
            className={`overflow-hidden transition-all ${
              expanded ? "h-[25px]" : "w-0"
            }`}
            alt=""
          />
          {!wideScreen && (
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? (
                <IoIosArrowBack size={iconSize} />
              ) : (
                <IoIosArrowForward size={iconSize} />
              )}
            </button>
          )}
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            <hr className={`my-3`} />
            {sidebar.nav.map((item, index) => (
              <SidebarItem
                key={`sidebar-item-${index}`}
                icon={item.icon}
                enText={item.en.name}
                ruText={item.ru.name}
                type={item.type}
                link={item.link}
              />
            ))}

            <hr className={`my-3`} />

            {sidebar.socials.map((item, index) => (
              <SidebarItem
                key={`sidebar-item-${index}`}
                icon={item.icon}
                enText={item.en.name}
                ruText={item.ru.name}
                type={item.type}
                link={item.link}
              />
            ))}
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 h-[58.4px]">
          <div
            className={`
              overflow-hidden transition-all ${
                expanded
                  ? "w-52 ml-3 flex justify-between items-center"
                  : "w-full flex items-center justify-center"
              }
          `}
          >
            <div
              className={`leading-4 ${
                expanded ? "block" : "flex items-center justify-center"
              }`}
            >
              {expanded ? (
                <>
                  {language === "en" ? (
                    <h4 className="font-semibold">Support</h4>
                  ) : (
                    <h4 className="font-semibold">Поддержка</h4>
                  )}
                  <Link to="/help" className="text-xs text-gray-600">
                    /helpme
                  </Link>
                </>
              ) : (
                <IoMdHelpCircleOutline
                  size={iconSize}
                  className="text-gray-600 cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, ruText, enText, type, link }) {
  const language = useSelector((state) => state.language.language);
  const { expanded } = useContext(SidebarContext);
  const renderedIcon = iconMapping[icon];
  const dispatch = useDispatch();

  return (
    <Link to={link}>
      <li
        className={`
          relative flex items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${
            type === "active"
              ? "bg-gradient-to-tr from-custom-color-200 to-custom-color-100 bg-custom-color-800"
              : "hover:bg-custom-color-50 text-gray-600"
          }
      `}
      >
        {renderedIcon}
        <span
          className={`overflow-hidden transition-all flex flex-row items-center justify-between ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {language === "en" ? enText : ruText}

          {ruText === "Язык" && enText === "Language" && (
            <div className={`2 h-full`}>
              <span
                className={`mr-2 ${
                  language === "ru" ? "chosenElement" : ""
                } px-2`}
                onClick={() => dispatch(setLanguage("ru"))}
              >
                RU
              </span>
              <span
                className={` ${language === "en" ? "chosenElement" : ""} px-2`}
                onClick={() => dispatch(setLanguage("en"))}
              >
                EN
              </span>
            </div>
          )}
        </span>
        {type === "alert" && (
          <div
            className={`absolute right-3 w-2 h-2 rounded bg-custom-color-400 ${
              expanded ? "" : "top-2 right-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-custom-color-100 custom-color-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
          >
            {language === "en" ? enText : ruText}
          </div>
        )}
      </li>
    </Link>
  );
}
