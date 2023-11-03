import React from "react";

const FoodForm = ({ display }) => {
  return <div className={`${display ? "block" : "hidden"}`}>FoodForm</div>;
};

export default FoodForm;
