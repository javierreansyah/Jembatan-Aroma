import React from "react";
import restaurantCertificate from "../../assets/images/sertifikatRestoran.png";
import philantrophyCertificate from "../../assets/images/philantrophyCertificate.jpg";

const Certificate = ({ display, userType }) => {
  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-wb-gray sm:text-3xl">
          Sertifikat {userType === "restoran" ? "Restoran" : "Yayasan"}
        </h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        {userType === "restoran" && (
          <div>
            <img
              src={restaurantCertificate}
              alt="Restaurant Certificate"
              className="my-4"
            />
          </div>
        )}
        {userType === "yayasan" && (
          <div>
            <img
              src={philantrophyCertificate}
              alt="Philantrophy Certificate"
              className="my-4"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
