import React from "react";

const Profile = ({ display }) => {
  return <div className={`${display ? "block" : "hidden"}`}>Profile</div>;
};

export default Profile;
