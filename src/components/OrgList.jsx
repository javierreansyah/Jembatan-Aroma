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
  return (
    <div className="container">
      <h1 className="my-4 text-4xl font-bold">Daftar Yayasan</h1>

      <div className="xl:flex xl:gap-10">
        <div className="mb-6 w-full rounded-3xl bg-wb-lightgray2 p-6 xl:mb-0 xl:w-96">
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
            <Clickable id="panti-asuhan" type="checkbox" label="Panti Asuhan" />
            <hr className="my-2 w-full border-t border-gray-300" />
            <Clickable id="panti-jompo" type="checkbox" label="Panti Jompo" />
            <hr className="my-2 w-full border-t border-gray-300" />
            <Clickable
              id="lembaga-permasyarakatan"
              type="checkbox"
              label="Lembaga Permasyarakatan"
            />
            <hr className="my-2 w-full border-t border-gray-300" />
            <Clickable id="lain-lain" type="checkbox" label="Lain-Lain" />

            <h1 className="text-md mt-4 font-bold">Status</h1>
            <Clickable id="membutuhkan" type="checkbox" label="Membutuhkan" />
            <hr className="my-2 w-full border-t border-gray-300" />
            <Clickable
              id="tidak-membutuhkan"
              type="checkbox"
              label="Tidak Membutuhkan"
            />

            <h1 className="text-md mt-4 font-bold">Menerima Makanan</h1>
            <Clickable
              id="halal"
              name="menerima-makanan"
              type="radio"
              label="Halal"
            />
            <hr className="my-2 w-full border-t border-gray-300" />
            <Clickable
              id="non-halal"
              name="menerima-makanan"
              type="radio"
              label="Non Halal"
            />
            <button
              className="mt-4 rounded-2xl bg-wb-redorange px-4 py-1 text-wb-white xl:hidden"
              onClick={toggleFilter}
            >
              Terapkan
            </button>
            <button className="mt-4 hidden rounded-2xl bg-wb-redorange px-4 py-1 text-wb-white xl:block">
              Terapkan
            </button>
          </div>
        </div>
        <ul className="rounded-3xl bg-wb-lightgray2 px-8 py-1 xl:w-full">
          {orgData.map((org) => (
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
