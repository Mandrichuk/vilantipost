import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/client/home/Home";
import Form from "./components/client/form/Form";
import isObjNotEmpty from "./utils/isObjNotEmpty";
import ScrollToTop from "./components/common/ScrollToTop";
import Shipments from "./components/client/shipments/Shipments";

function App() {
  const orderBox = useSelector((state) => state.orderBox.orderBox);

  

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/shipments" element={<Shipments />} />


        {isObjNotEmpty(orderBox.departure) &&
          isObjNotEmpty(orderBox.destination) && (
            <Route path="/form" element={<Form />} />
          )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
