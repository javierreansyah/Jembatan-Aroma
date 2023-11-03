import React from "react";
import { Input, Select } from "../index";

const OrgCertificate = ({ display }) => {
  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-2xl bg-wb-lightgray p-8">
        <h1 className="text-3xl font-bold text-wb-gray">Sertifikat Lembaga</h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <form>
          <Input
            id="org-name"
            type="text"
            placeholder="Nama Lembaga"
            label="Nama Lembaga"
          />
        </form>
      </div>
    </div>
  );
};

export default OrgCertificate;
