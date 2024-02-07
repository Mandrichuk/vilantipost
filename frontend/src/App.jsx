import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { HistoryProvider, usePreviousURL } from "./utils/HIstoryContext";

// common
import ScrollToTop from "./components/common/ScrollToTop";

// client
import ClientHome from "./components/client/home/Home";
import ClientForm from "./components/client/form/Form";
import isObjNotEmpty from "./utils/isObjNotEmpty";
import ClientTrack from "./components/client/track/Track";

// admin
import AdminLogin from "./components/admin/login/Login";
import AdminHome from "./components/admin/home/Home";

function AppWrapper() {
  return (
    <Router>
      <HistoryProvider>
        <App />
      </HistoryProvider>
    </Router>
  );
}

function App() {
  const orderBox = useSelector((state) => state.orderBox.orderBox);

  const { updateHistory } = usePreviousURL();
  let location = useLocation();

  useEffect(() => {
    updateHistory(location.pathname);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* client */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<ClientHome />} />
        <Route path="/track-parcel/*" element={<ClientTrack />} />

        {isObjNotEmpty(orderBox.departure) &&
          isObjNotEmpty(orderBox.destination) && (
            <Route path="/form" element={<ClientForm />} />
          )}

        {/* admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/*" element={<AdminHome />} />
      </Routes>
    </>
  );
}

export default AppWrapper;
