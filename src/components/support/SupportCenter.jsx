import React from "react";
import { useState } from "react";
import { IconContext } from "react-icons";
import { HiArrowCircleRight } from "react-icons/hi";

const SupportCenter = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const flowBox = [
    { label: "FAQ", selected: currentPage === 1 },
    { label: "Kontak Bantuan", selected: currentPage === 2 },
  ];

  const SupportCenter = {
    1: {
      question: "Apa itu Jembatan Aroma?",
      answer:
        "Jembatan Aroma adalah sebuah platform yang bertujuan untuk mengurangi pemborosan makanan dan memberdayakan restoran, rumah makan, dan bisnis kuliner lainnya untuk berpartisipasi dalam kegiatan filantropi dengan cara menyumbangkan makanan berlebih kepada yayasan amal dan lembaga kemanusiaan yang membutuhkan.",
    },
    2: {
      question: "Untuk apa Jembatan Aroma dibuat?",
      answer:
        "Jembatan Aroma dibuat untuk mengatasi masalah pemborosan makanan, ketidaksetaraan dalam akses pangan, dan pengelolaan sampah makanan. Platform ini bertujuan untuk membangun jembatan antara sumber makanan berlebih dari restoran dan bisnis kuliner dengan komunitas yang membutuhkan.",
    },
    3: {
      question: "Bagaimana Jembatan Aroma mengurangi pemborosan makanan?",
      answer:
        "Jembatan Aroma membantu mengurangi pemborosan makanan dengan menghubungkan restoran dengan yayasan yang membutuhkan makanan. Restoran dapat menyumbangkan makanan berlebih kepada yayasan amal melalui platform ini, sehingga makanan yang seharusnya terbuang dapat dimanfaatkan oleh mereka yang membutuhkan.",
    },
    4: {
      question: "Siapa yang dapat menggunakan Jembatan Aroma?",
      answer:
        "Restoran, rumah makan, dan bisnis kuliner lainnya dapat menggunakan Jembatan Aroma untuk menyumbangkan makanan berlebih. Yayasan amal dan lembaga-lembaga lainnya yang membutuhkan makanan juga dapat mendaftar dan berpartisipasi di dalam platform ini.",
    },
    5: {
      question:
        "Apa langkah-langkah dalam SOP Keamanan Makanan di Jembatan Aroma?",
      answer:
        "Langkah-langkah melibatkan identifikasi makanan berlebih, penyortiran untuk penyimpanan, memastikan kebersihan makanan dan alat makan, pengemasan yang aman, koordinasi pengambilan atau pengantaran, dan konfirmasi dengan pihak yayasan.",
    },
    6: {
      question:
        "Apakah ada biaya yang harus dibayar untuk menggunakan Jembatan Aroma?",
      answer:
        "Tidak, menggunakan Jembatan Aroma tidak memerlukan biaya. Platform ini dirancang untuk memfasilitasi donasi makanan berlebih dengan tujuan sosial dan lingkungan yang positif.",
    },
    7: {
      question:
        "Bagaimana cara restoran atau yayasan bergabung dengan Jembatan Aroma?",
      answer:
        "Restoran atau yayasan dapat membuat akun di Jembatan Aroma melalui website ini. Lalu perlu melakukan proses login dan mengisi informasi yang diperlukan. Setelah itu, restoran dapat mulai menyumbangkan makanan dan yayasan dapat memperbarui status mereka tentang kebutuhan donasi.",
    },
    8: {
      question:
        "Apa saja keuntungan bagi restoran yang berpartisipasi dalam Jembatan Aroma?",
      answer:
        "Restoran yang berpartisipasi dalam Jembatan Aroma dapat meningkatkan tanggung jawab sosial dan lingkungan mereka. Selain itu, mereka dapat mengurangi pemborosan makanan dan berkontribusi pada upaya mengatasi ketidaksetaraan dalam akses pangan di Indonesia. Melalui platform ini, restoran juga dapat memperluas jaringan mereka.",
    },
  };
  return (
    <section className="container min-h-screen">
      <div className="xl:flex xl:gap-10">
        <div className="my-4 flex h-fit w-full justify-between gap-3 rounded-2xl bg-wb-lightgray p-4  xl:my-0 xl:block xl:w-96 xl:p-8">
          <h1 className="hidden text-3xl font-bold text-wb-gray xl:block">
            Pusat Bantuan
          </h1>
          <hr className="my-4 hidden w-full border-t border-gray-200 xl:block" />
          <div className="w-full space-y-2 md:flex md:gap-3 md:space-y-0 xl:block xl:space-y-3">
            {flowBox.map((flow, index) => (
              <div
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`${
                  flow.selected
                    ? "bg-wb-red text-wb-white"
                    : "hover: bg-wb-lightgray2 text-wb-gray hover:bg-wb-lightergray hover:text-wb-white"
                }  flex-1 cursor-pointer rounded-full px-2 py-2 text-center text-xs font-semibold lg:text-sm xl:mb-4`}
              >
                <div className="flex items-center justify-between">
                  <p className="mr-1 pl-2">{flow.label}</p>
                  <IconContext.Provider
                    value={{
                      size: "24px",
                    }}
                  >
                    <div>
                      <HiArrowCircleRight />
                    </div>
                  </IconContext.Provider>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          {currentPage === 1 && (
            <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-8">
              <h1 className="text-3xl font-bold text-wb-gray">FAQ</h1>
              <hr className="my-4 w-full border-t border-gray-200" />
              <h2 className="text-xl font-bold text-wb-gray">
                {SupportCenter[1].question}
              </h2>
              <p className="my-3 text-sm font-medium text-wb-gray">
                {SupportCenter[1].answer}
              </p>

              <hr className="my-4 w-full border-t border-gray-200" />
              <h2 className="text-xl font-bold text-wb-gray">
                {SupportCenter[2].question}
              </h2>
              <p className="my-3 text-sm font-medium text-wb-gray">
                {SupportCenter[2].answer}
              </p>

              <hr className="my-4 w-full border-t border-gray-200" />
              <h2 className="text-xl font-bold text-wb-gray">
                {SupportCenter[3].question}
              </h2>
              <p className="my-3 text-sm font-medium text-wb-gray">
                {SupportCenter[3].answer}
              </p>

              <hr className="my-4 w-full border-t border-gray-200" />
              <h2 className="text-xl font-bold text-wb-gray">
                {SupportCenter[4].question}
              </h2>
              <p className="my-3 text-sm font-medium text-wb-gray">
                {SupportCenter[4].answer}
              </p>

              <hr className="my-4 w-full border-t border-gray-200" />
              <h2 className="text-xl font-bold text-wb-gray">
                {SupportCenter[5].question}
              </h2>
              <p className="my-3 text-sm font-medium text-wb-gray">
                {SupportCenter[5].answer}
              </p>

              <hr className="my-4 w-full border-t border-gray-200" />
              <h2 className="text-xl font-bold text-wb-gray">
                {SupportCenter[6].question}
              </h2>
              <p className="my-3 text-sm font-medium text-wb-gray">
                {SupportCenter[6].answer}
              </p>

              <hr className="my-4 w-full border-t border-gray-200" />
              <h2 className="text-xl font-bold text-wb-gray">
                {SupportCenter[7].question}
              </h2>
              <p className="my-3 text-sm font-medium text-wb-gray">
                {SupportCenter[7].answer}
              </p>

              <hr className="my-4 w-full border-t border-gray-200" />
              <h2 className="text-xl font-bold text-wb-gray">
                {SupportCenter[8].question}
              </h2>
              <p className="my-3 text-sm font-medium text-wb-gray">
                {SupportCenter[8].answer}
              </p>
            </div>
          )}
          {currentPage === 2 && (
            <div className="mb-8 h-fit w-full rounded-3xl bg-wb-lightgray p-8">
              <h1 className="text-3xl font-bold text-wb-gray">
                Hubungi Kontak Bantuan
              </h1>
              <hr className="my-4 w-full border-t border-gray-200" />
              <h2 className="my-3 text-xl font-bold text-wb-gray">Email</h2>
              <div className="my-3 block w-full rounded-2xl bg-wb-lightgray2 px-6 py-3 font-normal text-wb-gray">
                jembatanaroma@hotmail.com
              </div>
              <h2 className="my-3 text-xl font-bold text-wb-gray">
                Nomor Telepon
              </h2>
              <div className="my-3 block w-full rounded-2xl bg-wb-lightgray2 px-6 py-3 font-normal text-wb-gray">
                0812 3456 7890
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SupportCenter;
