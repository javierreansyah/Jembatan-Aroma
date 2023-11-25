import React from "react";
import Logo from "../assets/images/logoHigh.png";
import { Triangle } from "../assets/svg/svgindex.js";
import LatarBelakang from "../assets/images/latarBelakang.png";
import Tujuan from "../assets/images/tujuan.png";
import Javier from "../assets/images/member/javier.jpg";
import Haikal from "../assets/images/member/haikal.jpg";
import Fauzi from "../assets/images/member/fauzi.jpg";
import Herdi from "../assets/images/member/herdi.jpg";

const About = () => {
  const members = [
    { name: "Javier Aahmes Reansyah", title: "Direktur", img: Javier },
    { name: "Haikal Thoriq Athaya", title: "Front End Developer", img: Haikal },
    { name: "Achmad Fauzi Aranda", title: "Direktur Kreatif", img: Fauzi },
    { name: "Muhammad Herdi Adam", title: "Editor Konten", img: Herdi },
  ];
  return (
    <div className="min-h-screen">
      <div className="relative overflow-x-clip py-40">
        <div>
          <Triangle className="scale:50 absolute -left-16 -top-16  rotate-75 md:scale-125" />
          <Triangle className="absolute left-32 top-20 hidden rotate-15 scale-75 xl:block" />
          <Triangle className="absolute -bottom-20 -right-16 -rotate-90 sm:scale-125" />
          <Triangle className="absolute bottom-40 right-0 hidden rotate-90 scale-90 xl:block" />
        </div>
        <div className="container relative space-y-10">
          <div className="flex justify-center">
            <img src={Logo} alt="Logo Images" className="md:max-w-xl" />
          </div>
          <div className="flex justify-center">
            <p className="max-w-2xl text-center">
              Jembatan Aroma adalah platform yang bertujuan mengurangi
              pemborosan makanan dan memberdayakan restoran, rumah makan, serta
              bisnis kuliner lainnya untuk berpartisipasi dalam kegiatan
              filantropi dengan menyumbangkan makanan berlebih kepada yayasan
              dan lembaga kemanusiaan yang membutuhkan.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-wb-orangeyellow to-wb-redorange shadow-xl">
        <div className="container py-12">
          <h1 className="text-center text-4xl font-bold text-wb-white md:text-5xl">
            Tentang Kami
          </h1>
        </div>
      </div>

      <div className="container items-center space-y-8 py-24 lg:flex lg:justify-between lg:gap-20 lg:space-y-0">
        <div className="flex w-full justify-center">
          <img
            src={LatarBelakang}
            alt="latar belakang"
            className="w-96 lg:w-full"
          />
        </div>
        <div className="flex w-full justify-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-wb-redorange">
              Apa itu Jembatan Aroma?
            </h1>
            <p className="max-w-xl">
              Jembatan Aroma adalah platform yang bertujuan mengurangi
              pemborosan makanan dan memberdayakan restoran, rumah makan, serta
              bisnis kuliner lainnya untuk berpartisipasi dalam kegiatan
              filantropi dengan menyumbangkan makanan berlebih kepada yayasan
              amal dan lembaga kemanusiaan yang membutuhkan.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-wb-lightgray">
        <div className="container items-center space-y-8 py-24 lg:flex lg:justify-between lg:gap-20 lg:space-y-0">
          <div className="flex w-full justify-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-wb-redorange">Tujuan</h1>
              <p className="max-w-xl">
                Jembatan Aroma mempunyai tujuan dalam membangun jembatan antara
                sumber makanan berlebih dari restoran dan bisnis kuliner dengan
                komunitas yang membutuhkan. Website ini mempromosikan tanggung
                jawab sosial dan lingkungan serta berperan dalam mengedukasi
                publik tentang isu penting mengenai pemborosan makanan.
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <img src={Tujuan} alt="latar belakang" className="w-96 lg:w-full" />
          </div>
        </div>
      </div>
      <div className="container space-y-4 py-24">
        <h1 className="text-4xl font-bold text-wb-redorange">Keamanan</h1>
        <div className="space-y-4 lg:flex lg:gap-28 lg:space-y-0">
          <p className="w-full max-w-xl">
            Kami menjalankan SOP yang ketat untuk memastikan makanan berlebih
            yang disalurkan memenuhi standar kualitas tertinggi. Langkah-langkah
            ini mencakup identifikasi dan pencatatan makanan berlebih,
            penyortiran untuk penyimpanan jangka panjang, pemastian kebersihan
            makanan dan peralatan, pengemasan yang aman dan sesuai standar,
            serta koordinasi yang efisien untuk pengambilan dan pengantaran
            makanan.
          </p>
          <p className="w-full max-w-xl">
            Kami juga selalu melakukan konfirmasi dengan pihak yayasan yang kami
            bantu untuk memastikan bahwa kebutuhan makanan mereka terpenuhi
            dengan baik. Dengan SOP yang kami jalankan, kami berkomitmen untuk
            mengurangi pemborosan makanan dan memberikan manfaat nyata bagi
            masyarakat.
          </p>
        </div>
      </div>
      <div className="relative overflow-x-clip bg-gradient-to-r from-wb-orange to-wb-redorange">
        <div>
          <Triangle className="absolute -left-16 -top-16 rotate-75 scale-125" />
          <Triangle className="absolute left-32 top-20 hidden rotate-15 scale-75 sm:block" />
          <Triangle className="absolute -bottom-10 -right-16 -rotate-90 scale-125" />
          <Triangle className="absolute bottom-36 right-20 hidden rotate-90 scale-90 sm:block" />
        </div>
        <div className="container relative space-y-10 py-24">
          <h1 className="text-center text-5xl font-bold text-wb-white">
            Tim Developer
          </h1>
          <div className="flex flex-wrap justify-center gap-20">
            {members.map((member, index) => (
              <div
                key={index}
                className="w-[300px] flex-none rounded-2xl bg-wb-white shadow-xl xl:w-[210px] 2xl:w-[270px]"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-t-2xl"
                />
                <div className="px-6 pb-7 pt-5">
                  <h2 className="font-bold">{member.name}</h2>
                  <p className="text-gray-500">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
