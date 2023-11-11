import React from "react";

const DonationHistory = ({ display }) => {
  return (
    <div className={`${display ? "block" : "hidden"}`}>DonationHistory</div>
  );
};

export default DonationHistory;
