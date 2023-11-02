import React from "react";
import orgData from "../constants/orgData.js";

const OrgList = () => {
  return (
    <div className="container">
      <h1 className="my-4 text-4xl font-bold">Daftar Yayasan</h1>
      <ul>
        {orgData.map((org) => (
          <li
            key={org.id}
            className="my-4 rounded-2xl bg-wb-lightgray p-6 sm:flex sm:gap-6"
          >
            <img
              src={org.img}
              alt=""
              className="mb-4 w-full rounded-xl sm:mb-0 sm:w-48"
            />
            <div>
              <h2 className="text-xl font-semibold">{org.name}</h2>
              <p>Alamat: {org.alamat}</p>
              <p>Kategori: {org.kategori}</p>
              <p>Status: {org.status}</p>
              <p>Halal: {org.halal}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrgList;
