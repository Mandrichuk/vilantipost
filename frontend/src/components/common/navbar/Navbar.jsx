import React, { useContext, createContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoMdHelpCircleOutline,
} from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaLanguage, FaViber, FaTelegram } from "react-icons/fa6";
import { PiPackageFill } from "react-icons/pi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";
import styles from "./navbar.module.css";
import { navbar } from "../../../constants/index";
import images from "../../../constants/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FaSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { setLanguage } from "../../../features/language";
import { RiPhoneFindFill } from "react-icons/ri";

const NavbarContext = createContext();
const iconSize = 25;
const iconMapping = {
  IoHome: <IoHome size={iconSize} />,
  PiPackageFill: <PiPackageFill size={iconSize} />,
  RiPhoneFindFill: <RiPhoneFindFill size={iconSize} />,
  FaInstagram: <FaInstagram size={iconSize} />,
  FaLanguage: <FaLanguage size={iconSize} />,
  MdColorLens: <MdColorLens size={iconSize} />,
  FaTelegram: <FaTelegram size={iconSize} />,
  FaViber: <FaViber size={iconSize} />,
  FaWhatsapp: <FaWhatsapp size={iconSize} />,
};

export default function Sidebar() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const [wideScreen, setWideScreen] = useState(true);
  const [expanded, setExpanded] = useState(wideScreen);

  useEffect(() => {
    const handleResize = () => {
      setWideScreen(window.innerWidth > 1024);
      setExpanded(window.innerWidth > 1024);

      const root = document.getElementById("root");
      if (window.innerWidth > 1024) {
        root.style.setProperty("--navbar-width", "293px");
      } else {
        root.style.setProperty("--navbar-width", "73px");
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
      <nav
        className={`h-full flex flex-col bg-dark-gray-color-500 border-r shadow-sm`}
      >
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
              className={`p-1.5 rounded-lg bg-dark-gray-color-300 hover:bg-dark-gray-color-200`}
            >
              {expanded ? (
                <IoIosArrowBack size={iconSize} className={`fill-white`} />
              ) : (
                <IoIosArrowForward size={iconSize} className={`fill-white`} />
              )}
            </button>
          )}
        </div>

        <NavbarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            <hr className={`my-3`} />
            {navbar.nav.map((item, index) => (
              <SidebarItem
                key={`sidebar-item-${index}`}
                icon={item.icon}
                enText={item.en.name}
                ruText={item.ru.name}
                link={item.link}
                withinSite={item.withinSite}
              />
            ))}

            <hr className={`my-3`} />

            {navbar.socials.map((item, index) => (
              <SidebarItem
                key={`sidebar-item-${index}`}
                icon={item.icon}
                enText={item.en.name}
                ruText={item.ru.name}
                link={item.link}
                withinSite={item.withinSite}
              />
            ))}
          </ul>
        </NavbarContext.Provider>

        <div className="border-t mx-3 flex p-3 h-[58.4px]">
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
              } text-white`}
            >
              {expanded ? (
                <>
                  {language === "en" ? (
                    <h4 className="font-semibold">Support</h4>
                  ) : (
                    <h4 className="font-semibold">Поддержка</h4>
                  )}
                  <Link
                    to="/help"
                    className={`
                      text-gray-300
                    text-xs`}
                  >
                    /helpme
                  </Link>
                </>
              ) : (
                <IoMdHelpCircleOutline
                  size={iconSize}
                  className={`
                    text-white
                  cursor-pointer`}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, ruText, enText, link, withinSite }) {
  const language = useSelector((state) => state.language.language);
  const { expanded } = useContext(NavbarContext);
  const renderedIcon = iconMapping[icon];
  const dispatch = useDispatch();
  const type = link === window.location.pathname ? "active" : "";
  const toggleLanguage = () => {
    if (language === "en") {
      dispatch(setLanguage("ru"));
    } else {
      dispatch(setLanguage("en"));
    }
  };


  return (
    <Link to={link} target={withinSite ? "" : "_blank"}>
      <li
        {...(!expanded &&
          ruText === "Язык" &&
          enText === "Language" && { onClick: toggleLanguage })}
        className={`
          relative flex items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${
            type === "active"
              ? `${"bg-gradient-to-tr from-custom-color-500 to-custom-color-300 bg-custom-color-800"}`
              : `${"hover:bg-custom-color-700 text-white"}`
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
            <div className={`h-full flex flex-row items-center`}>
              <span
                className={`mr-2 ${
                  language === "ru" ? "chosenElement" : ""
                } px-[5.4px] py-1`}
                onClick={() => dispatch(setLanguage("ru"))}
              >
                RU
              </span>
              <span
                className={` ${
                  language === "en" ? "chosenElement" : ""
                } px-[5.4px] py-1`}
                onClick={() => dispatch(setLanguage("en"))}
              >
                EN
              </span>
            </div>
          )}

        </span>
        {type === "alert" && (
          <div
            className={`${
              styles.alertIndicator
            } absolute right-3 w-2 h-2 rounded bg-custom-color-400 ${
              expanded ? "" : "top-2 right-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`                 bg-custom-color-700 custom-color-800
          
            absolute left-full rounded-md px-2 py-1 ml-6 text-sm
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
