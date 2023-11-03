import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Menu } from "../assets/svg/svgindex.js";
import { Sidebar } from "./index.js";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <nav className="fixed top-0 w-full bg-white">
        <div className="container flex h-20 items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-8" />
          </Link>

          <div className="flex items-center">
            <ul className="hidden lg:block">
              <Link to="/tentang" className="mr-6 text-sm text-wb-gray">
                Tentang Kami
              </Link>
              <Link to="/bantuan" className="mr-6 text-sm text-wb-gray">
                Pusat Bantuan
              </Link>
              <Link to="/donatur" className="mr-6 text-sm text-wb-gray">
                Donatur Kami
              </Link>
              <Link to="/yayasan" className="mr-6 text-sm text-wb-gray">
                Yayasan
              </Link>
              <Link to="/donasi" className="mr-6 text-sm text-wb-gray">
                Donasi
              </Link>
            </ul>
            <Link
              to="/masuk"
              className="mr-3 rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white lg:mr-0"
            >
              Masuk
            </Link>
            <button
              className="flex items-center rounded-full border-2 border-wb-redorange px-4 py-1 text-sm font-semibold text-wb-redorange lg:hidden"
              onClick={toggleSidebar}
            >
              <p className="mr-2">Menu</p>
              <Menu />
            </button>
          </div>
        </div>
      </nav>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
