import React, { useState } from "react";
import { Input } from "../index";
import { IconContext } from "react-icons";
import { HiArrowCircleRight } from "react-icons/hi";

const AdminIdentity = ({ display, handleNextPage }) => {
  const [admScanKTP, setAdmScanKTP] = useState(null);

  const handleScanKTPChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAdmScanKTP(file);
    }
  };

  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-2xl bg-wb-lightgray p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-wb-gray sm:text-3xl">
          Identitas Pengelola
        </h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <form className="space-y-3">
          <Input
            id="adm-name"
            type="text"
            placeholder="Nama Pengelola"
            label="Nama Pengelola"
          />
          <Input
            id="adm-NIK"
            type="number"
            placeholder="NIK Pengelola"
            label="NIK Pengelola"
          />
          <Input
            id="adm-phoneNumber"
            type="number"
            placeholder="Telepon Pengelola"
            label="Telepon Pengelola"
          />
          <Input
            id="adm-address"
            type="text"
            placeholder="Alamat Pengelola"
            label="Alamat Pengelola"
          />
          <div className="my-3">
            <h3 className="text-base font-bold text-wb-gray">
              Upload Foto KTP
            </h3>
            <div className="my-3 flex items-center">
              <label
                htmlFor="adm-scanKTP"
                className="cursor-pointer rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red"
              >
                Upload Foto KTP
              </label>
              <input
                id="adm-scanKTP"
                type="file"
                className="hidden"
                onChange={handleScanKTPChange}
              />
              {admScanKTP && (
                <div className="ml-3">
                  <p className="font-semibold">{admScanKTP.name}</p>
                </div>
              )}
            </div>
          </div>
        </form>
        <button
          className={`mt-4 rounded-full border-2 border-wb-redorange 
                bg-wb-redorange px-1 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red disabled:border-wb-lightgray2 disabled:bg-wb-lightgray2 disabled:text-wb-black`}
          onClick={handleNextPage}
        >
          <div className="flex">
            <p className="mr-1 pl-2">Lanjutkan</p>
            <IconContext.Provider
              value={{
                size: "20px",
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
  );
};

export default AdminIdentity;
