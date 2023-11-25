import React from "react";
import { Clickable } from "../index.js";

const DeliveryForm = ({ display, handleNextPage }) => {
  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-wb-gray sm:text-3xl">
          Metode Pengiriman
        </h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <h3 className="text-base font-bold text-wb-gray">
          Pilih metode penganataran :
        </h3>
        <form>
          <Clickable
            id="diantar"
            type="radio"
            label="Diantar ke Alamat"
            name="deliveryMethod"
          />
          <Clickable
            id="ambil"
            type="radio"
            label="Ambil Sendiri"
            name="deliveryMethod"
          />
        </form>
        <button
          onClick={handleNextPage}
          className="mt-4 rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red"
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default DeliveryForm;
