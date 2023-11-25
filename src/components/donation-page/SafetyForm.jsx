import React from "react";
import { Clickable } from "../index.js";

const SafetyForm = ({ display, handleNextPage }) => {
  const labelSafety = {
    pisah:
      "Apakah makanan sudah dipisahkan berdasarkan  ketahanan makanan yang memiliki masa simpan singkat dengan yang lama?",
    bersih: "Apakah  makanan dalam keadaan bersih dan layak konsumsi?",
    kemasan: "Apakah kemasan makanan sudah aman dan sesuai standar?",
    keamanan: "Apakah makanan sudah dikonfirmasi aman untuk dikonsumsi?",
  };

  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-wb-gray sm:text-3xl">
          Keamanan Makanan
        </h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <form onSubmit={handleNextPage}>
          <Clickable id="pisah" type="checkbox" label={labelSafety.pisah} />
          <Clickable id="bersih" type="checkbox" label={labelSafety.bersih} />
          <Clickable id="kemasan" type="checkbox" label={labelSafety.kemasan} />
          <Clickable
            id="keamanan"
            type="checkbox"
            label={labelSafety.keamanan}
          />
        </form>
        <button
          onClick={handleNextPage}
          className="mt-4 rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red"
        >
          Lanjutkan
        </button>
      </div>
    </div>
  );
};

export default SafetyForm;
