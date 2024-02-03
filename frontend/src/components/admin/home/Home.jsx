import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import axios from "axios";
import { domens } from "../../../constants";

function Home() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get(`${domens.backend}/api/get-all-forms`);
        setForms(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchForms();
  }, []);

  const formTitles = [
    "id",
    "sender",
    "sender_country",
    "sender_city",
    "sender_street",
    "sender_houseNumber",
    "sender_zipCode",
    "sender_email",
    "sender_phoneNumber",
    "recipient",
    "recipient_country",
    "recipient_city",
    "recipient_street",
    "recipient_houseNumber",
    "recipient_zipCode",
    "recipient_email",
    "recipient_phoneNumber",
    "Delivery address",
    "contactAfter",
    "acceptRules",
    "FedEx_number",
  ];

  return (
    <div className={`flex flex-col`}>
      <div className={`titleText w-full flex items-center justify-center mb-8`}>
        Forms
      </div>

      <div className={`flex flex-row min-w-[200px] font-bold`}>
        {formTitles.map((title, index) => (
          <div
            key={index}
            className={`border px-2 min-w-[200px] text-nowrap overflow-hidden text-ellipsis`}
          >
            {title}
          </div>
        ))}
      </div>

      <div className={`${styles.nowrap}`}>
        {forms.map((form, index) => (
          <Form key={index} form={form} />
        ))}
      </div>
    </div>
  );
}

function Form({ form }) {
  return (
    <div className={`flex flex-row min-w-[200px]`}>
      {form.map((item, index) => (
        <div
          key={index}
          className={`border px-2 min-w-[200px] text-nowrap overflow-hidden text-ellipsis`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Home;
