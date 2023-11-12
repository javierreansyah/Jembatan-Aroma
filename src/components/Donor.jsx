import React from "react";
import Solaria from "../assets/images/DonorIMG/solaria.png";
import Grab from "../assets/images/DonorIMG/Grab.png";
import JCO from "../assets/images/DonorIMG/JCO.png";

const Donor = () => {
  return (
    <div className="container">
      <div className="mb-8 h-fit w-full rounded-3xl bg-transparent p-8">
        <h1 className="text-center text-3xl font-bold text-wb-gray">
          Donatur Kami
        </h1>
        <div className="my-4 columns-1 gap-10 px-8 py-8 md:columns-2 lg:columns-3 xl:columns-4">
          <img src={Solaria} />
          <img src={Grab} />
          <img src={JCO} />
        </div>
      </div>
    </div>
  );
};

export default Donor;
