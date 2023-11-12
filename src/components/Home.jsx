import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../assets/images/home.jpg";
import Description from "../assets/images/deskripsi.png";
import { Triangle } from "../assets/svg/svgindex.js";
import donationPhoto from "../assets/images/home-process/donation.png";
import loginPhoto from "../assets/images/home-process/login.png";
import regPhoto from "../assets/images/home-process/reg.png";
import verificationPhoto from "../assets/images/home-process/verification.png";

const Home = () => {
  const testimonies = [
    {
      text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare",
      sender: "Ibu Hajah",
      org: "Warung Padang Sholehah",
    },
    {
      text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare",
      sender: "Pak Wo Klaten",
      org: "Sop Ayam Pak Wo",
    },
    {
      text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare ",
      sender: "Ibu Suhartatik",
      org: "RM. Suhartatik",
    },
  ];
  return (
    <>
      <div className="container mb-8 py-24 md:py-0 lg:mb-0">
        <div className="md:py-32 lg:flex lg:h-screen lg:items-center lg:justify-between lg:gap-20">
          <div className="flex w-full items-center lg:pb-32">
            <div className="w-full">
              <h1 className="md:max-w-xl/[72px] max-w-md text-4xl font-bold text-wb-orangeyellow md:text-5xl lg:max-w-2xl xl:text-6xl/[72px]">
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
            <div className="hidden lg:block lg:w-full">
              <img src={HomeImage} alt="HomeImage" className="max-h-wb-30" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex h-80 w-full items-center justify-center overflow-x-clip bg-gradient-to-r from-wb-orangeyellow to-wb-redorange">
        <div>
          <Triangle className="rotate-75 scale:50 absolute -left-16  -top-16 md:scale-125" />
          <Triangle className="rotate-15 absolute left-32 top-20 hidden scale-75 sm:block" />
          <Triangle className="absolute -bottom-10 -right-16 -rotate-90 sm:scale-125" />
          <Triangle className="absolute bottom-36 right-20 hidden rotate-90 scale-90 sm:block" />
        </div>
        <div className="container relative w-full p-12">
          <h1 className="text-center text-4xl font-bold text-wb-white">
            "Donasikan Sekarang dan Buat Dunia Lebih Baik"
          </h1>
          <p className="mt-2 text-center text-xl text-wb-white">
            Donasimu memberikan manfaat kepada sesama dan juga turut merawat
            lingkungan
          </p>
        </div>
      </div>
      <div className="container">
        <div className="items-center justify-between gap-20 space-y-8 py-32 md:flex md:space-y-0">
          <div className="">
            <img src={Description} alt="" />
          </div>
          <div className="w-full space-y-5">
            <h1 className="text-4xl font-bold text-wb-redorange">
              Apa itu Jembatan Aroma?
            </h1>
            <p>
              Jembatan Aroma adalah platform yang bertujuan mengurangi
              pemborosan makanan dan memberdayakan restoran, rumah makan, serta
              bisnis kuliner lainnya untuk berpartisipasi dalam kegiatan
              filantropi dengan menyumbangkan makanan berlebih kepada yayasan
              amal dan lembaga kemanusiaan yang membutuhkan.
            </p>
            <Link
              to="/tentang"
              className="block w-full rounded-full border-2 border-wb-redorange bg-wb-redorange 
                px-4 py-3 text-center text-sm font-semibold text-wb-white sm:w-fit"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-x-clip bg-gradient-to-r from-wb-orange to-wb-red">
        <div>
          <Triangle className="rotate-75 absolute -left-16 -top-16 scale-125" />
          <Triangle className="rotate-15 absolute left-32 top-20 hidden scale-75 sm:block" />
          <Triangle className="absolute -bottom-10 -right-16 -rotate-90 scale-125" />
          <Triangle className="absolute bottom-36 right-20 hidden rotate-90 scale-90 sm:block" />
        </div>

        <div className="container relative w-full py-32">
          <h1 className="mb-8 text-center text-4xl font-bold text-wb-white xl:text-5xl">
            Apa Kata Mereka
          </h1>
          <div className="space-y-10 xl:flex xl:w-full xl:gap-10 xl:space-y-0">
            {testimonies.map((testimony, index) => (
              <div key={index} className="flex justify-center">
                <div className="max-w-2xl rounded-2xl bg-wb-white p-8 shadow-2xl">
                  <p className="mb-6">{testimony.text}</p>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 flex-none rounded-full bg-wb-red"></div>
                    <div>
                      <p className="font-bold">{testimony.sender}</p>
                      <p>{testimony.org}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-wb-lightgray">
        <div className="container space-y-10 py-32">
          <h1 className="text-center text-5xl font-bold ">Langkah Donasi</h1>
          <div className="flex flex-wrap justify-center gap-20 2xl:gap-32">
            <div className="flex flex-wrap justify-center gap-20 2xl:gap-32">
              <div className="space-y-2 rounded-2xl bg-wb-white p-8 shadow-xl">
                <div className="flex h-fit items-center sm:h-[200px]">
                  <img
                    src={regPhoto}
                    alt=""
                    className="min-w-[96px] max-w-[150px]"
                  />
                </div>
                <h2 className="text-center text-2xl font-bold">Registrasi</h2>
              </div>

              <div className="space-y-2 rounded-2xl bg-wb-white p-8 shadow-xl">
                <div className="flex h-fit items-center sm:h-[200px]">
                  <img
                    src={loginPhoto}
                    alt=""
                    className="relative -inset-x-6 min-w-[100px] max-w-[150px]"
                  />
                </div>
                <h2 className="text-center text-2xl font-bold">Masuk</h2>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-20 2xl:gap-32">
              <div className="space-y-2 rounded-2xl bg-wb-white p-8 shadow-xl">
                <div className="flex h-fit items-center sm:h-[200px]">
                  <img
                    src={verificationPhoto}
                    alt=""
                    className="relative inset-x-6 min-w-[100px] max-w-[150px]"
                  />
                </div>
                <h2 className="text-center text-2xl font-bold">Verifikasi</h2>
              </div>

              <div className="space-y-2 rounded-2xl bg-wb-white p-8 shadow-xl">
                <div className="flex h-fit items-center sm:h-[200px]">
                  <img
                    src={donationPhoto}
                    alt=""
                    className="min-w-[100px] max-w-[150px]"
                  />
                </div>
                <h2 className="text-center text-2xl font-bold">Donasi</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen"></div>
    </>
  );
};

export default Home;
