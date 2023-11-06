import React from "react";
import { Input, Select } from "../index";

const OrgCertificate = ({ display }) => {
  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-2xl bg-wb-lightgray p-8">
        <h1 className="text-3xl font-bold text-wb-gray">Sertifikat Lembaga</h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <form>
          <div className={`${display ? "block" : "hidden"}`}>
            <Input id="cer-photo" type="file" label="Upload Foto Lembaga" />
          </div>
          <div>
            <Input
              id="cer-owner"
              type="file"
              label="Upload Sertifikat Lembaga"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrgCertificate;
