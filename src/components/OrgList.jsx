import React from "react";
import orgData from "../constants/orgData.js";
import poto from "../assets/images/org-photos/yayasanabdulbari.jpg";

const OrgList = () => {
  return (
    <div>
      <h1>Organization List</h1>
      <ul>
        {orgData.map((org) => (
          <li key={org.id}>
            <h2>{org.name}</h2>
            <p>Alamat: {org.alamat}</p>
            <p>Kategori: {org.kategori}</p>
            <p>Status: {org.status}</p>
            <p>Halal: {org.halal}</p>
            <img src={org.img} alt="" className="h-wb30" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrgList;
