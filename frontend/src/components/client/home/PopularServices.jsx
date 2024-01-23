import React from "react";
import styles from "./home.module.css";
import images from "../../../constants/index";
import { Link } from "react-router-dom";

function PopularServices() {
  return (
    <div className={`${styles.popularServices} w-full items-center`}>
      <div className={`titleText my-4`}>Popular Services</div>
      <div className={`grid grid-cols-3 gap-4`}>
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
}

function Service(props) {
  return (
    <Link
      to="/form"
      className={`${styles.service} items-center bg-red-100 max-w-[200px]  min-h-[250px] rounded-lg overflow-hidden cursor-pointer`}
    >
      <div
        className={`${styles.serviceImgContainer} flex flex-col items-centere justify-center h-[75%] bg-gray-200`}
      >
        <img
          alt=""
          src={images.whiteEnvelope}
          className={`w-full h-full object-cover opacity-[0.2]`}
        />
      </div>

      <div className={`px-2 py-2`}>
        <div className={`aritcleText flex flex-row items-center`}>
          {/* {props.fromCountryName} */}
          {/* - */}
          {/* {props.toCountryName} */}
          Croatia - Russia
        </div>
        <p
          className={`labelText whitespace-no-wrap overflow-hidden text-ellipsis`}
        >
          {props.deliveryTime}
          Доставка: 5 дней
        </p>
      </div>
    </Link>
  );
}

export default PopularServices;
