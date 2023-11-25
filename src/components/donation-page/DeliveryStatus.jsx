import React, { useState } from "react";
import orgData from "../../constants/OrgData.js";
import { Link } from "react-router-dom";

const DeliveryStatus = ({ display, orgIndex, foodList }) => {
  const [showDetail, setShowDetails] = useState(false);
  const handleToggleDetails = () => {
    setShowDetails((prevShowDetail) => !prevShowDetail);
  };
  const org = orgData[orgIndex];
  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-wb-gray">Status Pengiriman</h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <div>
          <div className="rounded-xl bg-wb-white shadow-xl lg:flex">
            <div className="rounded-t-xl bg-wb-orange px-8 pb-4 pt-6 lg:rounded-l-xl lg:rounded-tr-none">
              <h2 className="text-2xl font-semibold text-wb-white">
                #23110001
              </h2>
              <h2 className="text-normal font-semibold text-wb-white">
                Berjalan
              </h2>
            </div>
            {}
            <div className="w-full px-8 pb-8 pt-4 md:pt-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold md:text-2xl">{org.name}</h2>
                <p className="text-sm ">{org.alamat}</p>
              </div>

              <div className="md:flex md:items-end md:justify-between md:pt-8">
                <div>
                  <div className="mb-2 mt-1 flex gap-4 md:m-0">
                    <p className="text-sm font-semibold md:text-base">
                      13/11/2023
                    </p>
                    <p className="text-sm font-semibold md:text-base">01:25</p>
                  </div>
                </div>

                <div className="space-y-2 md:flex md:gap-1 md:space-y-0">
                  <div>
                    <button
                      onClick={() => handleToggleDetails()}
                      className="rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red"
                    >
                      {showDetail ? "Sembunyikan" : "Tampilkan Makanan"}
                    </button>
                  </div>
                </div>
              </div>

              {showDetail && (
                <div>
                  {foodList.map((food, index) => (
                    <div key={index}>
                      <hr className="my-4 w-full border-t border-gray-200" />
                      <div className="flex w-full">
                        <div className="w-10 text-lg font-semibold sm:text-xl">
                          {food.id}.
                        </div>
                        <div className="w-full">
                          <p className="text-lg font-semibold sm:text-xl">
                            {food.foodName}
                          </p>
                          <div className="text-xs sm:text-base">
                            <div className="flex gap-2">
                              <p className="w-16 flex-none sm:w-24">Porsi</p>
                              <p>:</p>
                              <p>{food.portion}</p>
                            </div>
                            <div className="flex gap-2">
                              <p className="w-16 flex-none sm:w-24">
                                Simpan Di
                              </p>
                              <p>:</p>
                              <p>{food.storing}</p>
                            </div>
                            <div className="flex gap-2">
                              <p className="w-16 flex-none sm:w-24">
                                Hangatkan
                              </p>
                              <p>:</p>
                              <p>{food.reheat}</p>
                            </div>
                            <div className="flex gap-2">
                              <p className="w-16 flex-none sm:w-24">
                                Ketahanan
                              </p>
                              <p>:</p>
                              <p>{food.lastingPeriod} hari</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <hr className="my-4 w-full border-t border-gray-200" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Link
            to="/"
            className="rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red"
          >
            Ke Halaman Utama
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatus;
