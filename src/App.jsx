import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Navbar,
  Home,
  ResponsiveHelper,
  SignUp,
  Login,
  OrgList,
  About,
  Donor,
  Support,
  Donation,
  Account,
} from "./components/index.js";

const App = () => {
  const [userType, setUserType] = useState("yayasan");
  const handleUserTypeChange = (newUserType) => {
    setUserType(newUserType);
  };
  return (
    <>
      <Navbar userType={userType} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/masuk"
          element={<Login setUserType={handleUserTypeChange} />}
        />
        <Route path="/bergabung" element={<SignUp />} />
        <Route path="/yayasan" element={<OrgList />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/donatur" element={<Donor />} />
        <Route path="/bantuan" element={<Support />} />
        <Route path="/donasi" element={<Donation />} />
        <Route path="/akun" element={<Account userType={userType} />} />
      </Routes>
      <ResponsiveHelper />
    </>
  );
};

export default App;
