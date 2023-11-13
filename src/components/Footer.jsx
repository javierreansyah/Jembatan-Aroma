import React from "react";
import WhiteLogo from "../assets/images/logoWhite.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import whatsapp from "../assets/images/whatsapp.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-wb-darkred">
      <div className="container">
        <div className="items-end space-y-12 py-10 sm:justify-between lg:flex lg:space-y-0">
          <div className="space-y-4">
            <img src={WhiteLogo} alt="Logo Images" className="w-64" />
            <p className="max-w-md text-wb-white">
              Tugas kami adalah menjembatani usaha donasi makanan anda kepada
              yang membutuhkan.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 text-wb-white lg:justify-end">
              <Link to="/tentang">Tentang Kami</Link>
              <Link to="/pusat-bantuan">Pusat Bantuan</Link>
              <Link to="/donatur">Donatur Kami</Link>
            </div>
            <div className="flex gap-4 lg:justify-end">
              <Link
                to="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram Icon" className="w-12" />
              </Link>
              <Link
                to="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whatsapp} alt="Whatsapp Icon" className="w-12" />
              </Link>

              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook Icon" className="w-12" />
              </Link>

              <Link
                to="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="X Logo" className="w-12" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
