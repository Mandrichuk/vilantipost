import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/client/home/Home";
import Form from "./components/client/form/Form";
import isObjNotEmpty from "./utils/isObjNotEmpty";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  const orderBox = useSelector((state) => state.orderBox.orderBox);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />

        {isObjNotEmpty(orderBox.departure) &&
          isObjNotEmpty(orderBox.destination) && (
            <Route path="/form" element={<Form />} />
          )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
