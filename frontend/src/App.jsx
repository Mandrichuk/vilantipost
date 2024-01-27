import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// client
import Home from "./components/client/home/Home";
import Form from "./components/client/form/Form";
import isObjNotEmpty from "./utils/isObjNotEmpty";
import ScrollToTop from "./components/common/ScrollToTop";
import Track from "./components/client/track/Track";
import Payment from "./components/client/payment/Payment";

// admin
import Login from "./components/admin/login/Login";


function App() {
  const orderBox = useSelector((state) => state.orderBox.orderBox);

  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* client */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/track-parcel/*" element={<Track />} />
        <Route path="/payment" element={<Payment />} />

        {isObjNotEmpty(orderBox.departure) &&
          isObjNotEmpty(orderBox.destination) && (
            <Route path="/form" element={<Form />} />
          )}


        {/* admin */}
        <Route path="/admin/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
