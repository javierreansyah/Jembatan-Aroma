import React from "react";
import { Input, Select } from "../index";

const AdminIdentity = ({ display }) => {
  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-2xl bg-wb-lightgray p-8">
        <h1 className="text-3xl font-bold text-wb-gray">Identitas Pengelola</h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <form>
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
          <div className={`${display ? "block" : "hidden"}`}>
            <Input
              id="adm-scanKTP"
              type="file"
              placeholder="KTP Pengelola"
              label="KTP Pengelola"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminIdentity;
