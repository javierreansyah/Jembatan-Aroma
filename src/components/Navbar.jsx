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
    <div className="">
      <nav className="fixed flex h-16 w-full items-center justify-between bg-white shadow-lg">
        <Link className="ml-4">
          <img src={Logo} alt="Logo" className="h-8" />
        </Link>

        <div className="mr-4 flex items-center">
          <Link className="text-wb-white border-wb-redorange bg-wb-redorange mr-3 rounded-full border-2 px-4 py-1 text-sm font-semibold">
            Masuk
          </Link>
          <button
            className="border-wb-redorange text-wb-redorange flex items-center rounded-full border-2 px-4 py-1 text-sm font-semibold"
            onClick={toggleSidebar}
          >
            <p className="mr-2">Menu</p>
            <Menu />
          </button>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleIsOpen={toggleSidebar} />

      <div className="h-16"></div>
    </div>
  );
};

export default Navbar;
