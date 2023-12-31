import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { OrgInformation, AdminIdentity, OrgCertificate } from "./index";
import { IconContext } from "react-icons";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";

const SignUp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const continuePage = () => {
    if (currentPage === 3) return;
    if (currentPage < maxPage) {
      goToNextPage();
      return;
    }
    goToNextPage();
    setMaxPage((prev) => prev + 1);
  };

  const canNext = () => {
    if (currentPage === 6) return false;
    return currentPage === maxPage ? false : true;
  };

  const canBack = () => {
    return currentPage === 1 ? false : true;
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 3));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const flowBox = [
    { label: "Informasi Lembaga", selected: currentPage === 1 },
    { label: "Identitas Pengelola", selected: currentPage === 2 },
    { label: "Sertifikat", selected: currentPage === 3 },
  ];

  return (
    <div className="container min-h-screen">
      <div className="xl:flex xl:gap-10">
        <div className="my-4 flex h-fit w-full justify-between gap-3 rounded-2xl bg-wb-lightgray p-2 xl:my-0 xl:block xl:w-96 xl:p-8">
          <h1 className="hidden text-3xl font-bold text-wb-gray xl:block">
            Alur
          </h1>
          <hr className="my-4 hidden w-full border-t border-gray-200 xl:block" />
          <div className="w-full space-y-2 md:flex md:gap-3 md:space-y-0 xl:block xl:space-y-3">
            {flowBox.map((flow, index) => (
              <div
                key={index}
                className={`${
                  flow.selected
                    ? "bg-wb-red text-wb-white"
                    : "bg-wb-lightgray2 text-wb-gray"
                }  flex-1 rounded-xl px-2 py-2 text-center text-xs font-semibold lg:text-sm xl:mb-4`}
              >
                {flow.label}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <OrgInformation
            display={currentPage === 1}
            handleNextPage={continuePage}
          />
          <AdminIdentity
            display={currentPage === 2}
            handleNextPage={continuePage}
          />
          <OrgCertificate
            display={currentPage === 3}
            handleNextPage={continuePage}
          />

          <div className="flex h-fit w-full justify-between rounded-2xl bg-wb-lightgray p-4 sm:p-8">
            <button
              disabled={!canBack()}
              className={`rounded-full border-2 border-wb-redorange bg-wb-redorange 
              px-1 py-1 text-xs font-semibold text-wb-white hover:bg-wb-red disabled:border-wb-lightgray2 disabled:bg-wb-lightgray2 disabled:text-wb-black sm:text-sm`}
              onClick={goToPreviousPage}
            >
              <div className="flex">
                <IconContext.Provider
                  value={{
                    size: "18px",
                  }}
                >
                  <div>
                    <HiArrowCircleLeft />
                  </div>
                </IconContext.Provider>
                <p className="ml-1 pr-2">Kembali</p>
              </div>
            </button>

            <button
              disabled={!canNext()}
              className={`rounded-full border-2 border-wb-redorange bg-wb-redorange 
                px-1 py-1 text-xs font-semibold text-wb-white hover:bg-wb-red disabled:border-wb-lightgray2 disabled:bg-wb-lightgray2 disabled:text-wb-black sm:text-sm`}
              onClick={goToNextPage}
            >
              <div className="flex">
                <p className="mr-1 pl-2">Berikutnya</p>
                <IconContext.Provider
                  value={{
                    size: "18px",
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
      </div>
    </div>
  );
};

export default SignUp;
