import React from "react";
import { Input, Select } from "./index";

const SignUp = () => {
  const orgSelectOption = [
    { value: "restoran", label: "Restoran" },
    { value: "yayasan", label: "Yayasan" },
  ];
  return (
    <div className="container">
      <div className="xl:flex xl:gap-10">
        <div className="my-4 flex w-full justify-between gap-3 rounded-2xl bg-wb-lightgray p-2 xl:my-0 xl:block xl:w-96 xl:p-8">
          <h1 className="hidden text-3xl font-bold text-wb-gray xl:block">
            Alur
          </h1>
          <hr className="my-4 hidden w-full border-t border-gray-200 xl:block" />
          <div className="flex-1 rounded-xl bg-wb-red px-2 py-2 text-center text-xs font-bold text-wb-white lg:text-sm xl:mb-4">
            Informasi Lembaga
          </div>
          <div className="flex-1 rounded-xl bg-wb-lightgray2 px-2 py-2 text-center text-xs font-bold text-wb-gray lg:text-sm xl:mb-4">
            Identitas Pengelola
          </div>
          <div className="flex-1 rounded-xl bg-wb-lightgray2 px-2 py-2 text-center text-xs font-bold text-wb-gray lg:text-sm xl:mb-4">
            Sertifikat
          </div>
        </div>

        <div className="h-screen w-full rounded-2xl bg-wb-lightgray p-8">
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
    </div>
  );
};

export default SignUp;
