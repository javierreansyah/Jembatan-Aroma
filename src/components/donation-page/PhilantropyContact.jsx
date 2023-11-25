import React from "react";
import orgData from "../../constants/OrgData.js";

const PhilantropyContact = ({ display, orgIndex, handleNextPage }) => {
  const selectedOrg = orgData[orgIndex];
  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-8">
        <h1 className="text-3xl font-bold text-wb-gray">Kontak Yayasan</h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <h2 className="text-xl font-bold text-wb-gray">{selectedOrg.name}</h2>
        <h3 className="mt-3 text-base font-bold text-wb-gray">Whatsapp</h3>
        <p className="mt-3 w-full rounded-2xl bg-wb-lightgray2 p-4">
          {selectedOrg.noHp}
        </p>
        <h3 className="mt-3 text-base font-bold text-wb-gray">Email</h3>
        <p className="mt-3 w-full rounded-2xl bg-wb-lightgray2 p-4">
          {selectedOrg.email}
        </p>
        <button
          onClick={handleNextPage}
          className="mt-4 rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red"
        >
          Kontak Selesai
        </button>
      </div>
    </div>
  );
};

export default PhilantropyContact;
