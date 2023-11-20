import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Close } from "../assets/svg/svgindex.js";
import { HiX } from "react-icons/hi";
import { IconContext } from "react-icons";

const Sidebar = ({ isSidebarOpen, toggleSidebar, userType, links }) => {
  const SidebarLink = ({ to, label }) => {
    return (
      <Link
        to={to}
        onClick={toggleSidebar}
        className="my-3 block text-wb-gray hover:text-wb-yellow md:text-lg"
      >
        {label}
      </Link>
    );
  };
  return (
    <div
      className={`fixed z-50 h-screen w-screen backdrop-blur-lg ${
        !isSidebarOpen ? "hidden" : ""
      }`}
    >
      <div className="fixed right-0 z-50 h-screen w-3/4 border-l-2 border-wb-lightgray bg-wb-white">
        <div className="m-8">
          <div className="my-4 flex justify-between pb-4">
            <Link to="/" onClick={toggleSidebar}>
              <img src={Logo} alt="Logo" className="h-8" />
            </Link>
            <button
              className="flex items-center rounded-full border-2 border-wb-redorange px-4 py-1 text-sm font-semibold text-wb-redorange"
              onClick={toggleSidebar}
            >
              <p className="mr-1">Tutup</p>
              <IconContext.Provider
                value={{
                  size: "20px",
                }}
              >
                <div>
                  <HiX />
                </div>
              </IconContext.Provider>
            </button>
          </div>
          <hr className="my-4 w-full border-t border-gray-200 xl:block" />
          <div>
            {userType === "guest" && (
              <div>
                <SidebarLink to="/masuk" label="Masuk" />
                <SidebarLink to="/bergabung" label="Bergabung" />
              </div>
            )}
            {(userType === "restoran" || userType === "yayasan") && (
              <SidebarLink to="/akun" label="Akun" />
            )}
            <SidebarLink to="/" label="Halaman Utama" />
            <hr className="my-4 w-full border-t border-gray-200 xl:block" />
            {links().map((link, index) => (
              <SidebarLink key={index} to={link.to} label={link.label} />
            ))}
            <hr className="my-4 w-full border-t border-gray-200 xl:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
