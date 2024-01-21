import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import useWindowWidth from "../../../utils/useWindowWidth";
import images from "../../../constants/index";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const windowWidth = useWindowWidth();
  const [fullScreenNav, setFullScreenNav] = useState(false);

  function handleFullScreenNav() {
    setFullScreenNav(!fullScreenNav);
  }

  // useEffect(() => {
  //   if (fullScreenNav) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [fullScreenNav]);

  return (
    <div className={`${styles.navbarCover}`}>
      <div className={`${styles.navbar} bg-custom-color-50 py-3 px-6  w-full `}>
        <div className={`flex flex-row items-center justify-between h-[30px]`}>
          <div className={`text-[2.4rem]`}>
            <GiHamburgerMenu
              onClick={handleFullScreenNav}
              className={` text-custom-color-900 rounded-md cursor-pointer ${styles.navIcon}`}
            />
          </div>
          <div>name</div>
          {fullScreenNav && <FullScreenNavbar handleFullScreenNav={handleFullScreenNav} />}
        </div>
      </div>
    </div>
  );
}

function FullScreenNavbar(props) {
  return (
    <div className={`${styles.fullScreenNavbar}`}>
      <div className={`${styles.navbar} bg-white py-4 px-6  w-full h-[100vh]`}>
        <div className={`flex flex-row items-center justify-between h-[30px]`}>
          <div className={`text-[3rem]`}>
            <IoClose
              onClick={props.handleFullScreenNav}
              className={` text-custom-color-900 rounded-md cursor-pointer ${styles.navIcon}`}
            />
          </div>
          <div>name</div>

        </div>
          <div className={`w-full h-full bg-red-300`}>
            <div className={`uw-full bg-red-400`}>
            
            </div>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
