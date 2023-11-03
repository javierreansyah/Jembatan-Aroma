import React from "react";

const FoodList = ({ display }) => {
  return <div className={`${display ? "block" : "hidden"}`}>FoodList</div>;
};

export default FoodList;
