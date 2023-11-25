import React from "react";
import { useState } from "react";
import { Input, Select } from "../index";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { IconContext } from "react-icons";

const FoodForm = ({ display, foodList, setFoodList, handleNextPage }) => {
  const [foodName, setFoodName] = useState("");
  const [portion, setPortion] = useState("");
  const [storing, setStoring] = useState("");
  const [reheat, setReheat] = useState("");
  const [lastingPeriod, setLastingPeriod] = useState("");

  const handleFoodSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      id: foodList.length === 0 ? 1 : foodList[foodList.length - 1].id + 1,
      foodName: foodName,
      portion: portion,
      storing: storing,
      reheat: reheat,
      lastingPeriod: lastingPeriod,
    };
    setFoodList([...foodList, newFood]);
    setFoodName("");
    setPortion("");
    setStoring("");
    setReheat("");
    setLastingPeriod("");
  };

  const handleDelete = (index) => {
    const updatedFoodList = [...foodList];
    updatedFoodList.splice(index, 1);
    setFoodList(updatedFoodList);
  };

  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-wb-gray sm:text-3xl">
          Tambahkan Makanan
        </h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <form onSubmit={handleFoodSubmit} className="space-y-4">
          <Input
            id="food-name"
            type="text"
            placeholder="Nama Makanan"
            label="Nama Makanan"
            value={foodName}
            handle={setFoodName}
          />
          <Input
            id="portion"
            type="number"
            placeholder="Jumlah Porsi"
            label="Jumlah Porsi"
            value={portion}
            handle={setPortion}
          />
          <Input
            id="storing"
            type="text"
            placeholder="Cara Menyimpan"
            label="Cara Menyimpan"
            value={storing}
            handle={setStoring}
          />
          <Input
            id="reheat"
            type="text"
            placeholder="Cara Menghangatkan"
            label="Cara Menghangatkan"
            value={reheat}
            handle={setReheat}
          />
          <Input
            id="lasting-period"
            type="number"
            placeholder="Jangka Waktu Ketahanan"
            label="Jangka Waktu Ketahanan (hari)"
            value={lastingPeriod}
            handle={setLastingPeriod}
          />
          <div className="pt-3">
            <button
              type="submit"
              className="rounded-full border-2 border-wb-redorange bg-wb-redorange px-2 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red"
            >
              <div className="flex">
                <p className="mr-1 pl-1">Tambah</p>
                <IconContext.Provider
                  value={{
                    size: "20px",
                  }}
                >
                  <div>
                    <HiMiniPlusCircle />
                  </div>
                </IconContext.Provider>
              </div>
            </button>
          </div>
        </form>
      </div>
      <div className="h-fit w-full rounded-3xl bg-wb-lightgray p-6 sm:p-8">
        {foodList.length === 0 ? (
          <h1 className="text-3xl font-bold">Daftar Makanan Kosong</h1>
        ) : (
          <>
            <h1 className="text-2xl font-bold sm:text-3xl">Daftar Makanan</h1>
            <hr className="my-4 w-full border-t border-gray-200 xl:block" />
            <div className="space-y-6">
              {foodList.map((food, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-wb-white p-6 shadow-xl sm:flex sm:p-8"
                >
                  <div className="flex w-full">
                    <div className="w-10 text-xl font-semibold">{food.id}.</div>
                    <div className="w-full">
                      <p className="text-xl font-semibold">{food.foodName}</p>
                      <div className="text-xs sm:text-base">
                        <div className="flex gap-2">
                          <p className="w-16 flex-none sm:w-24">Porsi</p>
                          <p>:</p>
                          <p>{food.portion}</p>
                        </div>
                        <div className="flex gap-2">
                          <p className="w-16 flex-none sm:w-24">Simpan Di</p>
                          <p>:</p>
                          <p>{food.storing}</p>
                        </div>
                        <div className="flex gap-2">
                          <p className="w-16 flex-none sm:w-24">Hangatkan</p>
                          <p>:</p>
                          <p>{food.reheat}</p>
                        </div>
                        <div className="flex gap-2">
                          <p className="w-16 flex-none sm:w-24">Ketahanan</p>
                          <p>:</p>
                          <p>{food.lastingPeriod} hari</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 sm:w-28 sm:pt-0 sm:text-right">
                    <button
                      onClick={() => handleDelete(index)}
                      className="rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleNextPage}
              className="mt-4 rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red"
            >
              Lanjutkan
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FoodForm;
