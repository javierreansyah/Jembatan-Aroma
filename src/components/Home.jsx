import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../assets/images/home.jpg";

const Home = () => {
  return (
    <div>
      <div className="container bg-slate-300 px-8 md:px-12">
        <div className="items-center py-10 md:py-32 lg:flex lg:justify-between lg:gap-20">
          <div>
            <h1 className="md:max-w-xl/[72px] max-w-md text-4xl font-bold text-wb-yellow md:text-5xl lg:max-w-2xl xl:text-6xl/[72px]">
              Berbagi Bersama Kepada Yang Membutuhkan
            </h1>
            <p className="mt-4 max-w-md text-base text-wb-gray">
              Tugas kami adalah menjembatani usaha donasi makanan anda kepada
              yang membutuhkan.
            </p>
            <div className="mt-8 sm:flex sm:gap-4">
              <Link
                className="my-4 block w-full rounded-full border-2 border-wb-redorange bg-wb-redorange 
                px-4 py-3 text-center text-sm font-semibold text-wb-white sm:my-0 sm:w-32"
              >
                Masuk
              </Link>
              <Link
                className="block w-full rounded-full border-2 border-wb-redorange 
              bg-wb-white px-4 py-3 text-center text-sm font-semibold text-wb-redorange sm:w-32"
                to="/bergabung"
              >
                Bergabung
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={HomeImage} alt="HomeImage" className="max-h-wb-30" />
          </div>
        </div>
      </div>

      <div className="h-wb-42 bg-deskripsi bg-cover bg-center">
        <div className="container px-8 py-8">
          <h1 className="max-w-md text-4xl font-bold text-wb-white">
            Berbagi Sangat Berharga Bagi Mereka
          </h1>
        </div>
      </div>
      <div className="h-wb-screen"></div>
    </div>
  );
};

export default Home;
