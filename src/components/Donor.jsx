import React from "react";
import Solaria from "../assets/images/DonorIMG/solaria.png";
import Grab from "../assets/images/DonorIMG/Grab.png";
import Jco from "../assets/images/DonorIMG/jco.png";
import filkom from "../assets/images/DonorIMG/filkom.png";
import Ub from "../assets/images/DonorIMG/UniversitasBrawijaya.png";
import tehBotol from "../assets/images/DonorIMG/TehBotol.png";
import preksu from "../assets/images/DonorIMG/preksu.png";
import Bca from "../assets/images/DonorIMG/BCA.png";
import dunkinDonut from "../assets/images/DonorIMG/dunkindonut.png";

const Donor = () => {
  return (
    <div className="container min-h-screen">
      <div className="mb-8 h-fit w-full rounded-3xl bg-transparent p-8">
        <h1 className="mb-10 text-center text-3xl font-bold text-wb-gray">
          Donatur Kami
        </h1>
        <div className="grid grid-cols-3 items-center gap-20">
          <img className="h-auto max-w-full scale-75" src={Ub} alt="UB Logo" />
          <img className="h-auto max-w-full" src={filkom} alt="FILKOM Logo" />
          <img
            className="h-auto max-w-full scale-75"
            src={Solaria}
            alt="Solaria Logo"
          />
          <img className="h-auto max-w-full" src={Grab} alt="Grab Logo" />
          <img className="h-auto max-w-full" src={Jco} alt="JCO Logo" />
          <img
            className="h-auto max-w-full"
            src={tehBotol}
            alt="Teh Botol Logo"
          />
          <img className="h-auto max-w-full" src={preksu} alt="Preksu Logo" />
          <img className="h-auto max-w-full" src={Bca} alt="BCA Logo" />
          <img
            className="h-auto max-w-full"
            src={dunkinDonut}
            alt="Dunkin Donut Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Donor;
