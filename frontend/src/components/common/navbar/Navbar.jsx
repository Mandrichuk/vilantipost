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

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

function Navbar(props) {
  const windowWidth = useWindowWidth();
  const [fullScreenNav, setFullScreenNav] = useState(false);

  const handleFullScreenNav = () => {
    setFullScreenNav(!fullScreenNav);
  };

  useEffect(() => {
    if (fullScreenNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [fullScreenNav]);

  useEffect(() => {
    if (windowWidth > 1000) {
      setFullScreenNav(false);
    }
  }, [windowWidth]);

  return (
    <div className={`${styles.navbarCover} w-full ${fullScreenNav && "overlay"}`}>
      <div
        className={`${styles.navbar} py-3 px-6 w-full ${
          props.customColor ? "bg-custom-color-50" : "bg-white"
        }`}
      >
        <div className={`flex flex-row items-center justify-between h-[30px]`}>
          <motion.div whileTap={{ scale: 0.8 }}>
            <GiHamburgerMenu
              onClick={handleFullScreenNav}
              className={` text-custom-color-900 text-[2rem] rounded-md cursor-pointer ${styles.navIcon}`}
            />
          </motion.div>
          <Link to="/">
            <FaRegPaperPlane className={`text-[2rem] text-custom-color-900`} />
          </Link>
          <AnimatePresence>
            {fullScreenNav && (
              <motion.div
                key="fullscreen"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sidebarVariants}
                transition={{ duration: 0.3 }}
                className={`${styles.fullScreenNavbar}`}
              >
                <div
                  className={`${styles.fullScreenNavbar} bg-white py-4 px-2 w-full h-[100vh]`}
                >
                  <div
                    className={`flex flex-row items-center justify-between h-[30px]`}
                  >
                    <div />
                    <div className={`text-[2.4rem]`}>
                      <motion.div whileTap={{ scale: 0.8 }}>
                        <IoClose
                          onClick={handleFullScreenNav}
                          className={` text-custom-color-900 rounded-md cursor-pointer ${styles.navIcon}`}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div className={`w-full h-full mt-6 px-3`}>
                    {navbar.nav.map((item, index) => (
                      <NavList {...item} key={index} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function NavList(props) {
  const language = useSelector((state) => state.language.language);
  return (
    <Link to={props.link}>
      <div
        className={`w-full bg-custom-color-50 rounded-md px-3 py-[8px] shadow-md labelText my-3 transition-all hover:text-custom-color-700`}
      >
        <h1>{language === "en" ? props.en.name : props.ru.name}</h1>
      </div>
    </Link>
  );
}

export default Navbar;
