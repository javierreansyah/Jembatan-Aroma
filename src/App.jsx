import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Home, ResponsiveHelper } from "./components/index.js";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <ResponsiveHelper />
  </>
);

export default App;
