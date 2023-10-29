import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Home, ResponsiveHelper, SignUp } from "./components/index.js";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bergabung" element={<SignUp />} />
    </Routes>
    <ResponsiveHelper />
  </>
);

export default App;
