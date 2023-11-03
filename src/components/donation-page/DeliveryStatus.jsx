import React from "react";

const DeliveryStatus = ({ display }) => {
  return (
    <div className={`${display ? "block" : "hidden"}`}>DeliveryStatus</div>
  );
};

export default DeliveryStatus;
