import React from "react";
import Solaria from "../assets/images/DonorIMG/solaria.png";
import Grab from "../assets/images/DonorIMG/Grab.png";
import JCO from "../assets/images/DonorIMG/JCO.png";
import KFC from "../assets/images/DonorIMG/KFC.png";
import filkom from "../assets/images/DonorIMG/filkom.png";
import UB from "../assets/images/DonorIMG/UniversitasBrawijaya.png";
import tehBotol from "../assets/images/DonorIMG/TehBotol.png";
import preksu from "../assets/images/DonorIMG/preksu.png";
import BCA from "../assets/images/DonorIMG/BCA.png";
import dunkinDonut from "../assets/images/DonorIMG/dunkindonut.png";

const Donor = () => {
  return (
    <div className="container min-h-screen">
      <div className="mb-8 h-fit w-full rounded-3xl bg-transparent p-8">
        <h1 className="mb-10 text-center text-3xl font-bold text-wb-gray">
          Donatur Kami
        </h1>
        <div className=" columns-1 gap-10 space-y-10 sm:columns-2 lg:columns-3 xl:columns-4">
          <img src={Solaria} />
          <img src={Grab} />
          <img src={JCO} />
          <img src={KFC} />
          <img src={filkom} />
          <img className="scale-50" src={UB} />
          <img src={tehBotol} />
          <img src={preksu} />
          <img src={BCA} />
          <img src={dunkinDonut} />
        </div>
      </div>
    </div>
  );
};

export default Donor;
