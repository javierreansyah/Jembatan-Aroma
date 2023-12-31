import React from "react";
import { Profile, DonationHistory, Certificate } from "./index.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { HiArrowCircleRight } from "react-icons/hi";

const Account = ({ userType, setUserType }) => {
  const [currentPage, setCurrentPage] = useState("profil");
  const sidebarOption = [
    {
      label: "Profil",
      selected: currentPage === "profil",
      handleClick: () => setCurrentPage("profil"),
    },
    {
      label: "Riwayat Donasi",
      selected: currentPage === "riwayat-donasi",
      handleClick: () => setCurrentPage("riwayat-donasi"),
    },
    {
      label: "Sertifikat",
      selected: currentPage === "sertifikat",
      handleClick: () => setCurrentPage("sertifikat"),
    },
  ];
  const navigate = useNavigate();
  const handleLogout = () => {
    setUserType("guest");
    navigate("/");
  };
  return (
    <div className="container min-h-screen xl:flex xl:gap-10">
      <div className="mb-8 w-full space-y-8 xl:w-96">
        <div className="h-fit w-full justify-between gap-3 rounded-3xl bg-wb-lightgray p-4 lg:p-8">
          <h1 className="hidden text-3xl font-bold text-wb-gray xl:block">
            Akun
          </h1>
          <hr className="my-4 hidden w-full border-t border-gray-200 xl:block" />
          <div className="space-y-2 xl:block xl:space-y-3">
            {sidebarOption.map((option, index) => (
              <button
                key={index}
                onClick={option.handleClick}
                className={`${
                  option.selected
                    ? "bg-wb-red text-wb-white"
                    : " bg-wb-lightgray2 text-wb-gray hover:bg-wb-lightergray  hover:text-wb-white"
                }  flex w-full flex-1 justify-center rounded-full px-2 py-3 text-center text-xs font-semibold md:py-4 md:text-sm xl:mb-4 xl:py-2`}
              >
                <div className="flex w-full items-center justify-between md:px-4 xl:px-0">
                  <p className="mr-1 pl-2">{option.label}</p>
                  <IconContext.Provider
                    value={{
                      size: "24px",
                    }}
                  >
                    <div>
                      <HiArrowCircleRight />
                    </div>
                  </IconContext.Provider>
                </div>
              </button>
            ))}
            <button
              onClick={handleLogout}
              className="xl:py- flex w-full  flex-1 justify-center rounded-full bg-wb-lightgray2 px-2 
              py-3 text-center text-xs font-semibold text-wb-gray hover:bg-wb-lightergray hover:text-wb-white md:py-4 md:text-sm xl:mb-4 xl:py-2"
            >
              <div className="flex w-full items-center justify-between md:px-4 xl:px-0">
                <p className="mr-1 pl-2">Keluar</p>
                <IconContext.Provider
                  value={{
                    size: "24px",
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
      <div className="w-full">
        <Profile display={currentPage === "profil"} userType={userType} />
        <DonationHistory
          display={currentPage === "riwayat-donasi"}
          userType={userType}
        />
        <Certificate
          display={currentPage === "sertifikat"}
          userType={userType}
        />
      </div>
    </div>
  );
};

export default Account;
