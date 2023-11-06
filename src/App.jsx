import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
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
} from "./components/index.js";

const App = () => {
  const [userType, setUserType] = useState("guest");
  const handleUserTypeChange = (newUserType) => {
    setUserType(newUserType);
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/masuk" element={<Login setUserType={setUserType} />} />
        <Route path="/bergabung" element={<SignUp />} />
        <Route path="/yayasan" element={<OrgList />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/donatur" element={<Donor />} />
        <Route path="/bantuan" element={<Support />} />
        <Route path="/donasi" element={<Donation />} />
      </Routes>
      <ResponsiveHelper />
    </>
  );
};

export default App;
