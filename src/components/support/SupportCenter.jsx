import React from "react";
import { useState } from "react";

const SupportCenter = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const flowBox = [
    { label: "FAQ", selected: currentPage === 1 },
    { label: "Kontak Bantuan", selected: currentPage === 2 },
  ];

  const SupportCenter = {
    1: {
      question: "Lorem Ipsum Dolor Sis Asmet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    2: {
      question: "Lorem Ipsum Dolor Sis Asmet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    3: {
      question: "Lorem Ipsum Dolor Sis Asmet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  };
  return (
    <section className="container">
      <div className="xl:flex xl:gap-10">
        <div className="my-4 flex h-fit w-96 justify-between gap-3 rounded-2xl bg-wb-lightgray p-2 xl:my-0 xl:block xl:w-96 xl:p-8">
          <h1 className="hidden text-3xl font-bold text-wb-gray xl:block">
            Pusat Bantuan
          </h1>
          <hr className="my-4 hidden w-full border-t border-gray-200 xl:block" />
          <div className="w-full space-y-2 md:flex md:gap-3 md:space-y-0 xl:block xl:space-y-3">
            {flowBox.map((flow, index) => (
              <div
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`${
                  flow.selected
                    ? "bg-wb-red text-wb-white"
                    : "bg-wb-lightgray2 text-wb-gray"
                }  flex-1 cursor-pointer rounded-xl px-2 py-2 text-center text-xs font-semibold lg:text-sm xl:mb-4`}
              >
                {flow.label}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          {currentPage === 1 && (
            <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-8">
              <h1 className="text-3xl font-bold text-wb-gray">FAQ</h1>
              <hr className="my-4 w-full border-t border-gray-200" />
              <h2 className="text-xl font-bold text-wb-gray">
                {SupportCenter[1].question}
              </h2>
              <p className="my-3 text-sm font-medium text-wb-gray">
                {SupportCenter[1].answer}
              </p>

              <hr className="my-4 w-full border-t border-gray-200" />
              <h2 className="text-xl font-bold text-wb-gray">
                {SupportCenter[2].question}
              </h2>
              <p className="my-3 text-sm font-medium text-wb-gray">
                {SupportCenter[2].answer}
              </p>

              <hr className="my-4 w-full border-t border-gray-200" />
              <h2 className="text-xl font-bold text-wb-gray">
                {SupportCenter[3].question}
              </h2>
              <p className="my-3 text-sm font-medium text-wb-gray">
                {SupportCenter[3].answer}
              </p>
            </div>
          )}
          {currentPage === 2 && (
            <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-8">
              <h1 className="text-3xl font-bold text-wb-gray">
                Hubungi Kontak Bantuan
              </h1>
              <hr className="my-4 w-full border-t border-gray-200" />
              <h2 className="my-3 text-xl font-bold text-wb-gray">Email</h2>
              <div className="my-3 block w-full rounded-2xl bg-wb-lightgray2 px-6 py-3 font-normal text-wb-gray">
                jembatanaroma@hotmail.com
              </div>
              <h2 className="my-3 text-xl font-bold text-wb-gray">
                Nomor Telepon
              </h2>
              <div className="my-3 block w-full rounded-2xl bg-wb-lightgray2 px-6 py-3 font-normal text-wb-gray">
                0812 3456 7890
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SupportCenter;
