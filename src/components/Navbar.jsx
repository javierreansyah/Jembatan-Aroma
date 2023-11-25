import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Menu } from "../assets/svg/svgindex.js";
import { Sidebar } from "./index.js";
import { useState, useEffect } from "react";
import { HiMenu, HiUserCircle } from "react-icons/hi";
import { IconContext } from "react-icons";

const Navbar = ({ userType }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  //user type
  const guestNabvar = [
    { label: "Tentang Kami", to: "/tentang" },
    { label: "Pusat Bantuan", to: "/pusat-bantuan" },
    { label: "Donatur Kami", to: "/donatur" },
  ];
  const restaurantNabvar = [
    { label: "Tentang Kami", to: "/tentang" },
    { label: "Pusat Bantuan", to: "/pusat-bantuan" },
    { label: "Donatur Kami", to: "/donatur" },
    { label: "Donasi Makanan", to: "/donasi" },
    { label: "Daftar Yayasan", to: "/yayasan" },
  ];
  const foundationNabvar = [
    { label: "Tentang Kami", to: "/tentang" },
    { label: "Pusat Bantuan", to: "/pusat-bantuan" },
    { label: "Donatur Kami", to: "/donatur" },
    { label: "Sejarah Donasi", to: "/akun" },
  ];

  const currentNavbar = () => {
    if (userType === "restoran") return restaurantNabvar;
    if (userType === "yayasan") return foundationNabvar;
    else return guestNabvar;
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white">
        <div className="container flex h-16 items-center justify-between sm:h-20">
          <Link to="/" className="flex-none">
            <img src={Logo} alt="Logo" className="h-7 sm:h-8" />
          </Link>

          <div className="flex items-center">
            <ul className="hidden lg:block">
              {currentNavbar().map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="mr-6 text-sm hover:text-wb-red"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
            {userType === "guest" && (
              <div className="flex">
                <Link
                  to="/masuk"
                  className="mr-2 hidden rounded-full border-2 border-wb-redorange bg-wb-redorange px-3 py-1 text-xs font-semibold text-wb-white hover:bg-wb-red sm:mr-3 sm:block sm:px-4 sm:text-sm"
                >
                  Masuk
                </Link>
                <Link
                  to="/bergabung"
                  className="mr-2 hidden rounded-full border-2 border-wb-redorange bg-wb-white px-3 py-1 text-xs font-semibold text-wb-redorange hover:border-wb-red hover:text-wb-red sm:mr-3 sm:px-4 sm:text-sm lg:mr-0 lg:block"
                >
                  Bergabung
                </Link>
              </div>
            )}
            {(userType === "restoran" || userType === "yayasan") && (
              <Link
                to="/akun"
                className="mr-2 hidden rounded-full border-2 border-wb-redorange bg-wb-redorange px-3 py-1 text-xs font-semibold text-wb-white hover:bg-wb-red sm:mr-3 sm:block sm:px-4 sm:text-sm"
              >
                <div className="flex">
                  <p className="mr-1">Akun</p>
                  <IconContext.Provider
                    value={{
                      size: "18px",
                    }}
                  >
                    <div>
                      <HiUserCircle />
                    </div>
                  </IconContext.Provider>
                </div>
              </Link>
            )}
            <button
              className="flex items-center rounded-full border-2 border-wb-redorange px-3 py-1 text-xs font-semibold text-wb-redorange hover:border-wb-red hover:text-wb-red sm:px-4 sm:text-sm lg:hidden"
              onClick={toggleSidebar}
            >
              <p className="mr-1">Menu</p>
              <IconContext.Provider
                value={{
                  size: "18px",
                }}
              >
                <div>
                  <HiMenu />
                </div>
              </IconContext.Provider>
            </button>
          </div>
        </div>
      </nav>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        userType={userType}
        links={currentNavbar}
      />
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
