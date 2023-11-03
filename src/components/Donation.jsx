import { useState } from "react";
import React from "react";
import { Input, Select } from "./index";

const Donation = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 5));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const flowBox = [
    { label: "Daftar Makanan", selected: currentPage === 1 },
    { label: "Keamanan Makanan", selected: currentPage === 2 },
    { label: "Yayasan Tujuan", selected: currentPage === 3 },
    { label: "Kontak", selected: currentPage === 4 },
    { label: "Status", selected: currentPage === 5 },
  ];

  const orgSelectOption = [
    { value: "restoran", label: "Restoran" },
    { value: "yayasan", label: "Yayasan" },
  ];
  return (
    <div className="container">
      <div className="xl:flex xl:gap-10">
        <div className="my-4 h-fit w-full justify-between gap-3 rounded-2xl bg-wb-lightgray p-4 md:p-2 xl:my-0 xl:w-96 xl:p-8">
          <h1 className="hidden text-3xl font-bold text-wb-gray xl:block">
            Alur
          </h1>
          <hr className="my-4 hidden w-full border-t border-gray-200 xl:block" />
          <div className="space-y-2 md:flex md:gap-3 md:space-y-0 xl:block xl:space-y-3">
            {flowBox.map((flow, index) => (
              <div
                key={index}
                className={`${
                  flow.selected
                    ? "bg-wb-red text-wb-white"
                    : "bg-wb-lightgray2 text-wb-gray"
                } flex-1 rounded-xl px-2 py-2 text-center text-xs font-semibold lg:text-sm xl:mb-4`}
              >
                {flow.label}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
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
          <div className="flex h-fit w-full justify-between rounded-2xl bg-wb-lightgray p-8">
            <button
              className="mr-3 rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white lg:mr-0"
              onClick={goToPreviousPage}
            >
              Back
            </button>
            <button
              className="mr-3 rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white lg:mr-0"
              onClick={goToNextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
