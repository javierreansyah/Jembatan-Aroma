import React from "react";
import { Route, Routes } from "react-router-dom";
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
} from "./components/index.js";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/masuk" element={<Login />} />
      <Route path="/bergabung" element={<SignUp />} />
      <Route path="/yayasan" element={<OrgList />} />
      <Route path="/tentang" element={<About />} />
      <Route path="/donatur" element={<Donor />} />
      <Route path="/bantuan" element={<Support />} />
    </Routes>
    <ResponsiveHelper />
  </>
);

export default App;
