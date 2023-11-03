import React from "react";

const SafetyForm = ({ display }) => {
  return <div className={`${display ? "block" : "hidden"}`}>SafetyForm</div>;
};

export default SafetyForm;
