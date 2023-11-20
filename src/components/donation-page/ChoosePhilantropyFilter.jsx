import React from "react";
import { useState } from "react";
import { Clickable } from "../index.js";

const ChoosePhilantropyFilter = ({ display, filters, setFilters }) => {
  const [isFilterOpen, setisFilterOpe] = useState(false);
  const toggleFilter = () => {
    setisFilterOpe(!isFilterOpen);
  };

  const handleCategoryChange = (category) => {
    if (filters.categories.includes(category)) {
      setFilters({
        ...filters,
        categories: filters.categories.filter((c) => c !== category),
      });
    } else {
      setFilters({
        ...filters,
        categories: [...filters.categories, category],
      });
    }
  };

  const handleStatusChange = (status) => {
    if (filters.status.includes(status)) {
      setFilters({
        ...filters,
        status: filters.status.filter((s) => s !== status),
      });
    } else {
      setFilters({
        ...filters,
        status: [...filters.status, status],
      });
    }
  };

  const handleHalalChange = (value) => {
    setFilters({
      ...filters,
      halal: value,
    });
  };

  return (
    <>
      <div className={`${display ? "block" : "hidden"}`}>
        <div className="h-fit w-full rounded-3xl bg-wb-lightgray p-6 xl:mb-0">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Filter</h1>
            <button
              onClick={toggleFilter}
              className="rounded-2xl bg-wb-redorange px-4 py-1 text-wb-white xl:hidden"
            >
              {isFilterOpen ? "Tutup" : "Tampilkan"}
            </button>
          </div>
          <div className={`${!isFilterOpen ? "hidden" : ""} xl:block`}>
            <hr className="my-4 w-full border-t border-gray-200" />
            <h1 className="text-md font-bold">Kategori</h1>
            <hr className="my-2 w-full border-t border-gray-300" />
            <Clickable
              id="panti-asuhan"
              type="checkbox"
              label="Panti Asuhan"
              onChange={handleCategoryChange}
            />
            <hr className="my-2 w-full border-t border-gray-300" />
            <Clickable
              id="panti-jompo"
              type="checkbox"
              label="Panti Jompo"
              onChange={handleCategoryChange}
            />
            <hr className="my-2 w-full border-t border-gray-300" />
            <Clickable
              id="lembaga-permasyarakatan"
              type="checkbox"
              label="Lembaga Permasyarakatan"
              onChange={handleCategoryChange}
            />
            <hr className="my-2 w-full border-t border-gray-300" />
            <Clickable
              id="lain-lain"
              type="checkbox"
              label="Lain-Lain"
              onChange={handleCategoryChange}
            />

            <h1 className="text-md mt-4 font-bold">Status</h1>
            <Clickable
              id="membutuhkan"
              type="checkbox"
              label="Membutuhkan"
              onChange={handleStatusChange}
            />
            <hr className="my-2 w-full border-t border-gray-300" />
            <Clickable
              id="tidak-membutuhkan"
              type="checkbox"
              label="Tidak Membutuhkan"
              onChange={handleStatusChange}
            />

            <h1 className="text-md mt-4 font-bold">Menerima Makanan</h1>
            <Clickable
              id="halal"
              name="menerima-makanan"
              type="radio"
              label="Halal"
              onChange={handleHalalChange}
            />
            <hr className="my-2 w-full border-t border-gray-300" />
            <Clickable
              id="non-halal"
              name="menerima-makanan"
              type="radio"
              label="Non Halal"
              onChange={handleHalalChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoosePhilantropyFilter;
