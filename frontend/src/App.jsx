import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// common
import ScrollToTop from "./components/common/ScrollToTop";

// client
import ClientHome from "./components/client/home/Home";
import ClientForm from "./components/client/form/Form";
import isObjNotEmpty from "./utils/isObjNotEmpty";
import ClientTrack from "./components/client/track/Track";
import ClientPayment from "./components/client/payment/Payment";

// admin
import AdminLogin from "./components/admin/login/Login";
import AdminHome from "./components/admin/home/Home";

function App() {
  const orderBox = useSelector((state) => state.orderBox.orderBox);

  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* client */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<ClientHome />} />
        <Route path="/track-parcel/*" element={<ClientTrack />} />
        <Route path="/payment" element={<ClientPayment />} />

        {isObjNotEmpty(orderBox.departure) &&
          isObjNotEmpty(orderBox.destination) && (
            <Route path="/form" element={<ClientForm />} />
          )}


        {/* admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/*" element={<AdminHome />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
