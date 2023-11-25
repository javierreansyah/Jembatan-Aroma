import React from "react";

const Profile = ({ display, userType }) => {
  return (
    <div className={`${display ? "block" : "hidden"}`}>
      <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-wb-gray sm:text-3xl">Profil</h1>
        <hr className="my-4 w-full border-t border-gray-200" />
        <div className="min-h-80 flex w-full flex-wrap items-center justify-center gap-10 rounded-2xl bg-wb-white p-8 shadow-xl lg:justify-start lg:p-16">
          <div className="h-32 w-32 rounded-full bg-wb-red sm:h-40 sm:w-40 lg:h-60 lg:w-60"></div>
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-wb-gray sm:text-3xl">
              {userType === "restoran" ? "Restoran" : "Yayasan"}
            </h1>
            <h1 className="text-lg font-normal text-wb-gray sm:text-xl">
              {userType === "restoran" ? "@restoran" : "@yayasan"}
            </h1>
          </div>
        </div>
      </div>
      <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-6 sm:p-8">
        <h3 className="mt-3 text-base font-bold text-wb-gray">Nama Lembaga</h3>
        <p className="mt-2 w-full rounded-2xl bg-wb-lightgray2 px-4 py-3">
          {userType === "restoran" ? "Restoran" : "Yayasan"}
        </p>
        <h3 className="mt-3 text-base font-bold text-wb-gray">Email</h3>
        <p className="mt-2 w-full rounded-2xl bg-wb-lightgray2 px-4 py-3">
          {userType === "restoran" ? "restoran@gmail.com" : "yayasan@gmail.com"}
        </p>
        <h3 className="mt-3 text-base font-bold text-wb-gray">Nomor Telepon</h3>
        <p className="mt-2 w-full rounded-2xl bg-wb-lightgray2 px-4 py-3">
          081234567891
        </p>
      </div>
    </div>
  );
};

export default Profile;
