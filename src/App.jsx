import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
  Donation,
  Account,
  SupportCenter,
  Footer,
} from "./components/index.js";

const App = () => {
  const [userType, setUserType] = useState("guest");
  const handleUserTypeChange = (newUserType) => {
    setUserType(newUserType);
  };

  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return null; // This component doesn't render anything
  };
  return (
    <>
      <ScrollToTop />
      <Navbar userType={userType} />
      <Routes>
        <Route path="/" element={<Home userType={userType} />} />
        <Route
          path="/masuk"
          element={<Login setUserType={handleUserTypeChange} />}
        />
        <Route path="/bergabung" element={<SignUp />} />
        <Route path="/yayasan" element={<OrgList />} />
        <Route path="/tentang" element={<About />} />/
        <Route path="/donatur" element={<Donor />} />
        <Route path="/pusat-bantuan" element={<SupportCenter />} />
        <Route path="/donasi" element={<Donation />} />
        <Route
          path="/akun"
          element={
            <Account userType={userType} setUserType={handleUserTypeChange} />
          }
        />
      </Routes>
      <Footer />
      <ResponsiveHelper />
    </>
  );
};

export default App;
