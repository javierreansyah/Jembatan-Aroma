import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Close } from "../assets/svg/svgindex.js";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed h-screen w-screen backdrop-blur-lg ${
        !isSidebarOpen ? "hidden" : ""
      }`}
    >
      <div className="fixed right-0 z-50 h-screen w-3/4 border-l-2 border-wb-lightgray bg-wb-white">
        <div className="m-8">
          <div className="my-4 flex justify-between border-b-2 border-gray-200 pb-4">
            <Link>
              <img src={Logo} alt="Logo" className="h-8" />
            </Link>
            <button
              className="flex items-center rounded-full border-2 border-wb-redorange px-4 py-1 text-sm font-semibold text-wb-redorange"
              onClick={toggleSidebar}
            >
              <p className="mr-2">Tutup</p>
              <Close />
            </button>
          </div>
          <div>
            <Link className="my-3 block text-wb-gray">Masuk</Link>
            <Link className="my-3 block">Bergabung</Link>
            <Link className="my-3 block">Halaman Utama</Link>
            <div className="w-full border-b-2 border-gray-200 text-wb-gray"></div>
            <Link className="my-3 block text-wb-gray">Tentang</Link>
            <Link className="my-3 block text-wb-gray">Donatur</Link>
            <Link className="my-3 block">Pusat Bantuan</Link>
            <div className="w-full border-b-2 border-gray-200 text-wb-gray"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
