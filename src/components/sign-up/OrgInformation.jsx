import React from "react";
import { Input, Select } from "../index";
import { IconContext } from "react-icons";
import { HiArrowCircleRight } from "react-icons/hi";

const OrgInformation = ({ display, handleNextPage }) => {
  const orgSelectOption = [
    { value: "restoran", label: "Restoran" },
    { value: "yayasan", label: "Yayasan" },
  ];
  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-2xl bg-wb-lightgray p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-wb-gray sm:text-3xl">
          Isikan Informasi Lembaga Anda
        </h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <form className="space-y-3">
          <Input
            id="org-name"
            type="text"
            placeholder="Nama Lembaga"
            label="Nama Lembaga"
          />
          <Select
            id="jenis-lembaga"
            label="Daftar Sebagai"
            options={orgSelectOption}
          />
          <Input
            id="org-email"
            type="email"
            placeholder="Email Lembaga"
            label="Email Lembaga"
          />
          <Input
            id="org-username"
            type="text"
            placeholder="Username Lembaga"
            label="Username Lembaga"
          />
          <Input
            id="org-password"
            type="password"
            placeholder="Password Lembaga"
            label="Password Lembaga"
          />
          <Input
            id="org-phone-number"
            type="number"
            placeholder="Nomor Telepon Lembaga"
            label="Nomor Telepon Lembaga"
          />
          <Input
            id="org-address"
            type="text"
            placeholder="Alamat Lembaga"
            label="Alamat Lembaga"
          />
        </form>
        <button
          className={`mt-6 rounded-full border-2 border-wb-redorange 
                bg-wb-redorange px-1 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red disabled:border-wb-lightgray2 disabled:bg-wb-lightgray2 disabled:text-wb-black`}
          onClick={handleNextPage}
        >
          <div className="flex">
            <p className="mr-1 pl-2">Lanjutkan</p>
            <IconContext.Provider
              value={{
                size: "20px",
              }}
            >
              <div>
                <HiArrowCircleRight />
              </div>
            </IconContext.Provider>
          </div>
        </button>
      </div>
    </div>
  );
};

export default OrgInformation;
