import React from "react";
import { useState } from "react";
import donationData from "../../constants/donationData.js";

const DonationHistory = ({ display, userType }) => {
  const [historyOption, setHistoryoption] = useState("berjalan");
  const data = donationData;
  const filteredData = donationData.filter(
    (data) => data.status === historyOption,
  );

  const [showDetails, setShowDetails] = useState([]);
  const handleToggleDetails = (index) => {
    setShowDetails((prevShowDetails) => {
      const newShowDetails = [...prevShowDetails];
      newShowDetails[index] = !newShowDetails[index];
      return newShowDetails;
    });
  };
  const handleHistoryOptionChange = (option) => {
    setHistoryoption(option);
    setShowDetails([]);
  };

  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-wb-gray">Sejarah Donasi</h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <div className="mb-4 w-full space-y-2 sm:flex sm:gap-4 sm:space-y-0">
          <button
            onClick={() => handleHistoryOptionChange("berjalan")}
            className={`${
              historyOption === "berjalan"
                ? "bg-wb-red text-wb-white"
                : "bg-wb-lightgray2 text-wb-gray hover:bg-wb-orange hover:text-wb-white"
            }  flex w-full flex-1 justify-center rounded-full px-2 py-3 text-center text-xs font-semibold md:py-4 lg:text-sm xl:py-2`}
          >
            Donasi Berjalan
          </button>

          <button
            onClick={() => handleHistoryOptionChange("diterima")}
            className={`${
              historyOption === "diterima"
                ? "bg-wb-red text-wb-white"
                : "bg-wb-lightgray2 text-wb-gray hover:bg-wb-orangeyellow hover:text-wb-white"
            }  flex w-full flex-1 justify-center rounded-full px-2 py-3 text-center text-xs font-semibold md:py-4 lg:text-sm xl:py-2`}
          >
            Donasi Selesai
          </button>
        </div>
        <div className="space-y-8">
          {filteredData.map((current, index) => (
            <div
              key={index}
              className="rounded-xl bg-wb-white shadow-xl lg:flex"
            >
              <div
                className={`${
                  historyOption === "berjalan" ? "bg-wb-orange" : "bg-wb-green"
                } rounded-t-xl px-8 pb-4 pt-6 lg:rounded-l-xl lg:rounded-tr-none`}
              >
                <h2 className="text-2xl font-semibold text-wb-white">
                  #{current.id}
                </h2>
                <h2 className="text-normal font-semibold text-wb-white">
                  {current.status === "berjalan" ? "Berjalan" : "Diterima"}
                </h2>
              </div>

              <div className="w-full px-8 pb-8 pt-4 md:pt-6">
                {userType === "restoran" && (
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold md:text-2xl">
                      {current.penerima}
                    </h2>
                    <p className="text-sm ">{current.alamatPenerima}</p>
                  </div>
                )}

                {userType === "yayasan" && (
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold md:text-2xl">
                      {current.pengirim}
                    </h2>
                    <p className="text-sm md:text-base">
                      {current.alamatPengirim}
                    </p>
                  </div>
                )}

                <div className="md:flex md:items-end md:justify-between md:pt-8">
                  <div>
                    <div className="mb-2 mt-1 flex gap-4 md:m-0">
                      <p className="text-sm font-semibold md:text-base">
                        {current.tanggal}
                      </p>
                      <p className="text-sm font-semibold md:text-base">
                        {current.jam}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 md:flex md:gap-1 md:space-y-0">
                    <div>
                      <button
                        onClick={() => handleToggleDetails(index)}
                        className="rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red"
                      >
                        {showDetails[index] ? "Sembunyikan" : "Nota"}
                      </button>
                    </div>
                    <div>
                      {userType === "restoran" &&
                        current.status === "diterima" && (
                          <button className="rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red">
                            Lihat Ulasan
                          </button>
                        )}
                    </div>
                    <div>
                      {userType === "yayasan" &&
                        current.status === "berjalan" && (
                          <button className="rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white">
                            Terima Pesanan
                          </button>
                        )}
                    </div>
                    <div>
                      {userType === "yayasan" &&
                        current.status === "diterima" && (
                          <button className="rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white">
                            Beri Ulasan
                          </button>
                        )}
                    </div>
                  </div>
                </div>

                {showDetails[index] && (
                  <div>
                    {current.daftarMakanan.map((food, index) => (
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
                            <div className="text-xs sm:text-sm md:text-base">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;
