import React from "react";

const DeliveryForm = ({ display }) => {
  return <div className={`${display ? "block" : "hidden"}`}>DeliveryForm</div>;
};

export default DeliveryForm;
