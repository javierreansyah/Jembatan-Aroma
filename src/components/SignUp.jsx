import React from "react";
import { useState } from "react";
import {
  Input,
  Select,
  OrgInformation,
  AdminIdentity,
  OrgCertificate,
} from "./index";

const SignUp = () => {
  const [currentPage, setCurrentPage] = useState(1);

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
    <div className="container">
      <div className="xl:flex xl:gap-10">
        <div className="my-4 flex h-fit w-full justify-between gap-3 rounded-2xl bg-wb-lightgray p-2 xl:my-0 xl:block xl:w-96 xl:p-8">
          <h1 className="hidden text-3xl font-bold text-wb-gray xl:block">
            Alur
          </h1>
          <hr className="my-4 hidden w-full border-t border-gray-200 xl:block" />
          <div>
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
          <OrgInformation display={currentPage === 1 ? true : false} />
          <AdminIdentity display={currentPage === 2 ? true : false} />
          <OrgCertificate display={currentPage === 3 ? true : false} />

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

export default SignUp;
