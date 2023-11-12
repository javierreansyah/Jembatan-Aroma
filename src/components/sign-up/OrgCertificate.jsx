import React, { useState } from "react";

const OrgCertificate = ({ display }) => {
  const [cerPhoto, setCerPhoto] = useState(null);
  const [cerOwner, setCerOwner] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCerPhoto(file);
    }
  };

  const handleOwnerChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCerOwner(file);
    }
  };

  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-2xl bg-wb-lightgray p-8">
        <h1 className="text-3xl font-bold text-wb-gray">Sertifikat Lembaga</h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <form>
          <div className="my-3">
            <h3 className="text-base font-bold text-wb-gray">
              Upload Foto Lembaga
            </h3>
            <div className="flex items-center">
              <label
                htmlFor="cer-photo"
                className="my-3 cursor-pointer rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red"
              >
                Upload Foto Lembaga
              </label>
              <input
                id="cer-photo"
                type="file"
                className="hidden"
                onChange={handlePhotoChange}
              />
              {cerPhoto && (
                <div className="ml-3">
                  <p className="text-sm font-medium text-wb-gray">
                    Nama File:{" "}
                    <span className="my-3 font-bold"> {cerPhoto.name}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="my-3">
            <h3 className="text-base font-bold text-wb-gray">
              Upload Sertifikat Lembaga
            </h3>
            <div className="flex items-center">
              <label
                htmlFor="cer-owner"
                className="hover-bg-wb-red my-3 cursor-pointer rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red"
              >
                Upload Sertifikat Lembaga
              </label>
              <input
                id="cer-owner"
                type="file"
                className="hidden"
                onChange={handleOwnerChange}
              />
              {cerOwner && (
                <div className="ml-3">
                  <p className="my-3 text-sm font-medium text-wb-gray">
                    Nama File:
                    <span className="my-3 font-bold"> {cerOwner.name}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrgCertificate;
