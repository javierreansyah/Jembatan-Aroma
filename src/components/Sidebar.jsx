import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Close } from "../assets/svg/svgindex.js";

const Sidebar = ({ isOpen, toggleIsOpen }) => {
  return (
    <div
      className={`fixed h-screen w-screen backdrop-blur-lg ${
        !isOpen ? "hidden" : ""
      }`}
    >
      <div className="bg-wb-white border-wb-lightgray fixed right-0 z-50 h-screen w-3/4 border-l-2">
        <div className="m-8">
          <div className="my-4 flex justify-between border-b-2 border-gray-200 pb-4">
            <Link>
              <img src={Logo} alt="Logo" className="h-8" />
            </Link>
            <button
              className="border-wb-redorange text-wb-redorange flex items-center rounded-full border-2 px-4 py-1 text-sm font-semibold"
              onClick={toggleIsOpen}
            >
              <p className="mr-2">Tutup</p>
              <Close />
            </button>
          </div>
          <div>
            <Link className="text-wb-gray my-3 block">Masuk</Link>
            <Link className="my-3 block">Bergabung</Link>
            <Link className="my-3 block">Halaman Utama</Link>
            <div className="text-wb-gray w-full border-b-2 border-gray-200"></div>
            <Link className="text-wb-gray my-3 block">Tentang</Link>
            <Link className="text-wb-gray my-3 block">Donatur</Link>
            <Link className="my-3 block">Pusat Bantuan</Link>
            <div className="text-wb-gray w-full border-b-2 border-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
