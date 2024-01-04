import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/client/home/Home";
import Form from "./components/client/form/Form";
import { useSelector } from "react-redux";
import { orderBox } from "./features/orderBox";
import isObjNotEmpty from "./utils/isObjNotEmpty";

function App() {
  const orderBox = useSelector((state) => state.orderBox.orderBox);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />

        {
          isObjNotEmpty(orderBox.departure) &&
          isObjNotEmpty(orderBox.destination) && (
          <Route path="/form" element={<Form />} />)
        }

      </Routes>
    </BrowserRouter>
  );
}

export default App;
