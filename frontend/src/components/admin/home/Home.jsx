import React, { useEffect, useState } from "react";
import axios from "axios";
import { domens } from "../../../constants";


function Home() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get(`${domens.backend}/api/get-all-forms`);
        console.log(response)
        // setForms(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchForms();
  }, []);

  return (
    <div className={`w-full flex flex-col items-center`}>
      <div className={`wrapper`}>
        hello
      </div>
    </div>
  );
}

export default Home;
