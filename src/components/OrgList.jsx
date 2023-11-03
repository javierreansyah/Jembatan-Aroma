import React from "react";
import orgData from "../constants/orgData.js";
import { Clickable } from "./index.js";
import { check } from "prettier";
import { useState } from "react";

const OrgList = () => {
  const [isFilterOpen, setisFilterOpe] = useState(false);
  const toggleFilter = () => {
    setisFilterOpe(!isFilterOpen);
  };
  const [filters, setFilters] = useState({
    categories: [],
    status: [],
    halal: null,
  });

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

  const filteredOrgs = orgData.filter((org) => {
    const categoryFilter =
      filters.categories.length === 0 ||
      filters.categories.includes(org.kategori);
    const statusFilter =
      filters.status.length === 0 || filters.status.includes(org.status);
    const halalFilter =
      filters.halal === null ||
      filters.halal === "Halal" ||
      (filters.halal === "Non Halal" && org.halal === "Non Halal");

    return categoryFilter && statusFilter && halalFilter;
  });

  const printFilters = () => {
    console.log(filters);
  };

  return (
    <div className="container">
      <h1 className="my-4 text-4xl font-bold">Daftar Yayasan</h1>

      <div className="xl:flex xl:gap-10">
        <div className="mb-6 h-fit w-full rounded-3xl bg-wb-lightgray2 p-6 xl:mb-0 xl:w-96">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Filter</h1>
            <button
              onClick={toggleFilter}
              className="rounded-2xl bg-wb-redorange px-4 py-1 text-wb-white xl:hidden"
            >
              {isFilterOpen ? "Tutup" : "Tampilkan"}
            </button>
          </div>

          <div className={`${!isFilterOpen ? "hidden" : ""} xl:block`}>
            <h1 className="text-md mt-6 font-bold">Kategori</h1>
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
            <button
              className="mt-4 rounded-2xl bg-wb-redorange px-4 py-1 text-wb-white xl:hidden"
              onClick={(toggleFilter, printFilters)}
            >
              Terapkan
            </button>
            <button
              className="mt-4 hidden rounded-2xl bg-wb-redorange px-4 py-1 text-wb-white xl:block"
              onClick={printFilters}
            >
              Terapkan
            </button>
          </div>
        </div>
        <ul className="h-fit rounded-3xl bg-wb-lightgray2 px-8 py-1 xl:w-full">
          {filteredOrgs.map((org) => (
            <li
              key={org.id}
              className="my-8 rounded-2xl bg-wb-white p-6 shadow-md sm:flex sm:gap-6"
            >
              <img
                src={org.img}
                alt=""
                className="mb-4 w-full rounded-xl sm:mb-0 sm:w-48"
              />
              <div>
                <h2 className="text-xl font-semibold">{org.name}</h2>
                <p>Alamat: {org.alamat}</p>
                <p>Kategori: {org.kategori}</p>
                <p>Status: {org.status}</p>
                <p>Halal: {org.halal}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrgList;
