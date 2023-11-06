import React from "react";

const DeliveryStatus = ({ display }) => {
  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-8">
        <h1 className="text-3xl font-bold text-wb-gray">Status Pengiriman</h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <section className="flex w-full rounded-2xl bg-wb-white shadow-xl">
          <div className="h-24 w-40 rounded-2xl bg-wb-yellow p-4">halo</div>
          <div className="w-full"></div>
        </section>
      </div>
    </div>
  );
};

export default DeliveryStatus;
