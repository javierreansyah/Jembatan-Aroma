import React from "react";
import { Input, Select } from "./index";

const SignUp = () => {
  const orgSelectOption = [
    { value: "restoran", label: "Restoran" },
    { value: "yayasan", label: "Yayasan" },
  ];
  return (
    <div className="container h-44">
      <div className="my-4 flex justify-between gap-3 rounded-2xl bg-wb-lightgray p-2">
        <div className="flex-1 rounded-xl bg-wb-red px-2 py-2 text-center text-xs font-bold text-wb-white lg:text-sm">
          Informasi Lembaga
        </div>
        <div className="bg-wb-lightgray2 flex-1 rounded-xl px-2 py-2 text-center text-xs font-bold text-wb-gray lg:text-sm">
          Identitas Pengelola
        </div>
        <div className="bg-wb-lightgray2 flex-1 rounded-xl px-2 py-2 text-center text-xs font-bold text-wb-gray lg:text-sm">
          Sertifikat
        </div>
      </div>

      <div className="h-screen rounded-2xl bg-wb-lightgray p-8">
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

export default SignUp;
