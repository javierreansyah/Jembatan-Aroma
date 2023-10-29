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
    <div>
      <nav className="fixed top-0 w-full bg-white shadow-md">
        <div className="container flex h-16 items-center justify-between px-8">
          <Link>
            <img src={Logo} alt="Logo" className="h-8" />
          </Link>

          <div className="flex items-center">
            <Link className="mr-3 rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white">
              Masuk
            </Link>
            <button
              className="flex items-center rounded-full border-2 border-wb-redorange px-4 py-1 text-sm font-semibold text-wb-redorange"
              onClick={toggleSidebar}
            >
              <p className="mr-2">Menu</p>
              <Menu />
            </button>
          </div>
        </div>
      </nav>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="h-16"></div>
    </div>
  );
};

export default Navbar;
