import React, { useState } from "react";
import { Input } from "../index";

const AdminIdentity = ({ display }) => {
  const [admScanKTP, setAdmScanKTP] = useState(null);

  const handleScanKTPChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAdmScanKTP(file);
    }
  };

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
          <div>
            <h3 className="my-3 text-base font-bold text-wb-gray">
              Upload Foto KTP
            </h3>
            <label
              htmlFor="adm-scanKTP"
              className="cursor-pointer rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red"
            >
              Upload Foto KTP
            </label>
            <input
              id="adm-scanKTP"
              type="file"
              className="hidden"
              onChange={handleScanKTPChange}
            />
            {admScanKTP && (
              <div>
                <p className="my-3 text-base font-medium text-wb-gray">
                  Nama File: {admScanKTP.name}
                </p>
                {admScanKTP.type.startsWith("image/") && (
                  <img
                    src={URL.createObjectURL(admScanKTP)}
                    alt="Preview KTP"
                    className="my-2"
                  />
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminIdentity;
