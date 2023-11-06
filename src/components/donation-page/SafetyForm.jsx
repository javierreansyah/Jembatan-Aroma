import React from "react";
import { Clickable } from "../index.js";

const SafetyForm = ({ display }) => {
  const labelSafety = {
    pisah:
      "Apakah makanan sudah dipisahkan berdasarkan  ketahanan makanan yang memiliki masa simpan singkat dengan yang lama?",
    bersih: "Apakah  makanan dalam keadaan bersih dan layak konsumsi?",
    kemasan: "Apakah kemasan makanan sudah aman dan sesuai standar?",
    keamanan: "Apakah makanan sudah dikonfirmasi aman untuk dikonsumsi?",
  };

  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-8">
        <h1 className="text-3xl font-bold text-wb-gray">Keamanan Makanan</h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <form>
          <Clickable id="pisah" type="checkbox" label={labelSafety.pisah} />
          <Clickable id="bersih" type="checkbox" label={labelSafety.bersih} />
          <Clickable
            id="bersih"
            type="checkbox"
            label={labelSafety.kemasan}
          />
          <Clickable id="bersih" type="checkbox" label={labelSafety.keamanan} />
        </form>
      </div>
    </div>
  );
};

export default SafetyForm;
