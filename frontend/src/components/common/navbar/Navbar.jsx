import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { navbar } from "../../../constants/index";
import { useSelector } from "react-redux";
import styles from "./navbar.module.css";
import useWindowWidth from "../../../utils/useWindowWidth";
import { motions } from "../../../constants/index";
import images from "../../../constants/index";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../../features/language";

function Navbar(props) {
  const dispatch = useDispatch();
  const windowWidth = useWindowWidth();
  const [fullScreenNav, setFullScreenNav] = useState(false);

  const handleFullScreenNav = () => {
    setFullScreenNav(!fullScreenNav);
  };

  return (
    <div
      className={`${styles.navbarCover} w-full ${fullScreenNav && "overlay"}`}
    >
      <div
        className={`${styles.navbar} ${
          props.bottomShadow && `${styles.bottomShadow}`
        }  py-3 px-6 w-full ${
          props.customColor ? "bg-custom-color-50" : "bg-white"
        }`}
      >
        <div
          className={`flex flex-row items-center justify-between h-[30px] text-custom-color-900`}
        >
          <div className={`flex flex-row items-center justify-center`}>
            <div
              onClick={() => dispatch(setLanguage("ru"))}
              className={`text-[1.5rem] font-bold h-[27px] w-[35px] rounded-md bg-custom-color-900 overflow-hidden cursor-pointer`}
            >
              <img src={images.RussianFlag} alt="logo" className={`w-full h-full`}/>
            </div>
            <div
              onClick={() => dispatch(setLanguage("en"))}
              className={`ml-2 text-[1.5rem] font-bold h-[27px] w-[35px] rounded-md bg-custom-color-900 overflow-hidden cursor-pointer`}
            >
              <img src={images.UnitedKingdomFlag} alt="logo" className={`w-full h-full`}/>
            </div>
          </div>
          <Link to="/" className={`flex flex-row items-center justify-center`}>
            <FaRegPaperPlane className={`text-[2rem] ml-3`} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
