import React from "react";

const ChoosePhilantrophy = ({
  display,
  filteredOrgs,
  handleChoose,
  handleNextPage,
}) => {
  const handleChooseOrg = (index) => {
    handleChoose(index);
    handleNextPage();
  };
  return (
    <div className={`${display ? "block" : "hidden"} w-full`}>
      {filteredOrgs.length === 0 ? (
        <div className="h-fit rounded-3xl bg-wb-lightgray p-8 xl:w-full">
          <h1 className="text-3xl font-bold">Tidak Ada Yayasan</h1>
        </div>
      ) : (
        <ul className="h-fit space-y-8 rounded-3xl bg-wb-lightgray p-8 xl:w-full">
          {filteredOrgs.map((org, index) => (
            <li
              key={org.id}
              className="rounded-2xl bg-wb-white p-6 shadow-xl sm:flex sm:gap-6"
            >
              <img
                src={org.img}
                alt=""
                className="mb-4 w-full rounded-xl sm:mb-0 sm:w-48"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{org.name}</h2>
                  <p>Alamat: {org.alamat}</p>
                  <p>Kategori: {org.kategori}</p>
                  <p>Status: {org.status}</p>
                  <p>Halal: {org.halal}</p>
                </div>
                <button
                  className="w-fit rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white hover:bg-wb-red"
                  onClick={() => handleChooseOrg(index)}
                >
                  Pilih
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChoosePhilantrophy;
