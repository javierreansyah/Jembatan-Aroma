import { useState } from "react";
import React from "react";
import orgData from "../constants/orgData.js";
import { Clickable, ChoosePhilantropyFilter } from "./index.js";
import {
  ChoosePhilantrophy,
  DeliveryForm,
  DeliveryStatus,
  FoodForm,
  PhilantropyContact,
  SafetyForm,
} from "./index";

const Donation = () => {
  //paging
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 6));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  //flow
  const flowBox = [
    { label: "Daftar Makanan", selected: currentPage === 1 },
    { label: "Keamanan Makanan", selected: currentPage === 2 },
    { label: "Yayasan Tujuan", selected: currentPage === 3 },
    { label: "Kontak", selected: currentPage === 4 },
    { label: "Metode Pengiriman", selected: currentPage === 5 },
    { label: "Status", selected: currentPage === 6 },
  ];

  //food list
  const [foodList, setFoodList] = useState([
    {
      id: 1,
      foodName: "Nasi Goreng Bari",
      portion: 20,
      storing: "Kulkas",
      reheat: "Wajan",
      lastingPeriod: 2,
    },
  ]);

  //filtering
  const [filters, setFilters] = useState({
    categories: [],
    status: [],
    halal: null,
  });

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

  // choose org
  const [chosenOrg, setChosenOrg] = useState(0);
  const handleChooseOrg = (index) => {
    setChosenOrg(index);
  };

  return (
    <div className="container min-h-screen">
      <div className="xl:flex xl:gap-10">
        <div className="mb-8 w-full space-y-8 xl:w-96">
          <div className="h-fit w-full justify-between gap-3 rounded-3xl bg-wb-lightgray p-4 md:p-2 xl:p-8">
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
                  } flex-1 rounded-2xl px-2 py-2 text-center text-xs font-semibold lg:text-sm xl:mb-4`}
                >
                  {flow.label}
                </div>
              ))}
            </div>
          </div>

          <ChoosePhilantropyFilter
            display={currentPage === 3}
            filters={filters}
            setFilters={setFilters}
          />
        </div>

        <div className="w-full">
          <FoodForm
            display={currentPage === 1}
            foodList={foodList}
            setFoodList={setFoodList}
          />
          <SafetyForm display={currentPage === 2} />
          <ChoosePhilantrophy
            display={currentPage === 3}
            filteredOrgs={filteredOrgs}
            handleChooseOrg={handleChooseOrg}
          />
          <PhilantropyContact
            display={currentPage === 4}
            orgIndex={chosenOrg}
          />
          <DeliveryForm display={currentPage === 5} />
          <DeliveryStatus display={currentPage === 6} />

          <div className="mt-8 flex h-fit w-full justify-between rounded-3xl bg-wb-lightgray p-8">
            <button
              className="rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white"
              onClick={goToPreviousPage}
            >
              Back
            </button>
            <button
              className="rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white"
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
