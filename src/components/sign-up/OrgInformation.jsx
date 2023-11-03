import React from "react";
import { Input, Select } from "../index";

const OrgInformation = ({ display }) => {
  const orgSelectOption = [
    { value: "restoran", label: "Restoran" },
    { value: "yayasan", label: "Yayasan" },
  ];
  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-2xl bg-wb-lightgray p-8">
        <h1 className="text-3xl font-bold text-wb-gray">
          Isikan Informasi Lembaga Anda
        </h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default OrgInformation;
