import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  const showMenu = () => {
    document.getElementById("toggle-nav")?.classList.toggle("hidden");
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow border-b">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto px-8 lg:px-0">
            <div className="flex items-center justify-between h-20">
              <div className="w-full justify-between flex items-center">
                <Link href="/">
                  <a className="flex-shrink-0">
                    <img
                      className="h-8 w-full"
                      src="http://hammercode.org/h-logo.svg"
                      alt="Workflow"
                    />
                  </a>
                </Link>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/#who-we-are">
                      <a className="hover:text-primary dark:hover:text-white px-3 py-2 rounded-md font-medium">
                        Who We Are
                      </a>
                    </Link>
                    <Link href="/#partners">
                      <a className="hover:text-primary dark:hover:text-white px-3 py-2 rounded-md font-medium">
                        Partners
                      </a>
                    </Link>
                    <Link href="/#testimonial">
                      <a className="hover:text-primary dark:hover:text-white px-3 py-2 rounded-md font-medium">
                        Testimonial
                      </a>
                    </Link>
                    <Link href="/#contact">
                      <a className="hover:text-primary dark:hover:text-white px-3 py-2 rounded-md font-medium">
                        Contact
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="ml-4 flex items-center md:ml-6"></div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  className="text-gray-800 dark:text-white hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                  onClick={showMenu}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-8 w-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div id="toggle-nav" className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/#who-we-are">
                <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Who We Are
                </a>
              </Link>
              <Link href="/#partners">
                <a className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Partners
                </a>
              </Link>
              <Link href="/#testimonial">
                <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Testimonial
                </a>
              </Link>
              <Link href="/#contact">
                <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-primary py-16">
        <div className="container mx-auto dark:bg-gray-800 overflow-hidden relative px-4 md:px-0">
          <div className="text-start md:w-1/2 py-16 pr-4 sm:pr-6 lg:py-16 lg:pr-8 z-20">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block text-white">Talenta Teknologi Lokal</span>
              <span className="block text-white">
                Yang Berdaya Saing Global
              </span>
            </h2>
            <p className="text-xl mt-4 text-white">
              Mulai karirmu di bidang teknologi sebagai programmer, web atau
              mobile developer
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <button
                  type="button"
                  className="py-4 px-6  bg-secondary hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Gabung Sekarang
                </button>
              </div>
            </div>
          </div>
          <img
            src="/build-website.svg"
            className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"
          />
        </div>
      </div>

      {/* Intro */}
      <section id="who-we-are" className="container mx-auto py-16 px-4 md:px-0">
        <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800">
          <div className="flex flex-wrap md:-mx-8">
            <div className="w-full lg:w-1/2 md:px-8">
              <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white">
                  Komunitas Untuk Memajukan Daerah
                </h2>
                <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                  Hammercode adalah sebuah komunitas teknologi yang diinisiasi
                  sebagai wadah berkumpulnya para pembelajar, programmer,
                  web/mobile developer, dan pelaku industri teknologi lainnya
                  yang berada di kota Palu dan sekitarnya. Kegiatan yang Kami
                  selenggarakan berorientasi pada knowledge-transfer yang
                  diharapkan dapat mempercepat pemerataan keterampilan di bidang
                  teknologi informasi serta mencetak talenta teknologi yang siap
                  kerja. Hammercode tempat yang cocok untukmu yang ingin belajar
                  tentang coding/pemograman dan software engineering.
                </p>
                <div className="w-full md:w-1/3">
                  <button
                    type="button"
                    className="py-4 px-6  bg-secondary hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Lebih Lanjut
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 md:px-8">
              <ul className="space-y-12">
                <li className="flex md:-mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50">
                      1
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold dark:text-white">
                      Mentoring
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-loose">
                      Teman-teman anggota komunitas dari berbagai perusahaan
                      teknologi siap membantu Kamu untuk persiapan aplikasi
                      internship dan full-time job
                    </p>
                  </div>
                </li>
                <li className="flex md:-mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50">
                      2
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold dark:text-white">
                      Kelas & Workshop
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-loose">
                      Tersedia kelas dan workshop untuk berbagai bidang, seperti
                      web, mobile apps hingga data. Tingakat materi yang
                      disampaikan bervariasi, mulai dari beginner hingga
                      advanced.
                    </p>
                  </div>
                </li>
                <li className="flex md:-mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50">
                      3
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold dark:text-white">
                      Tech Talk
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-loose">
                      Acara knowledge-sharing bulanan yang diisi oleh pemateri
                      dari pelaku industri dan teman-teman komunitas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="bg-primary">
        <div className="container mx-auto py-6 dark:bg-gray-800 md:py-16 lg:py-16">
          <div className="text-center">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
              Belajar Dari Ekspert Teknologi
            </h2>
            <p className="mt-3 text-lg leading-6 text-white">
              Ambil kesempatan untuk belajar dari ekspert dari perusahaan
              teknologi
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimonial" className="container mx-auto py-16">
        <div className="w-full flex flex-col md:flex-row mb-8 md:mb-0 justify-center items-center">
          <div className="bg-white dark:bg-gray-800 w-72 h-72 border shadow-lg m-4 rounded-xl p-6">
            <p className="text-gray-600 dark:text-white">
              <span className="font-bold text-primary text-lg">“</span>
              Hammercode komunitas nya friendly banget, baik mentor, dan peserta
              pelajarnya. Kelas di hammercode jg itu sangat seru, metode
              mengajar para mentornya sangat membntu, dijamin paham 1000%
              <span className="font-bold text-primary text-lg">”</span>
            </p>
            <div className="flex items-center mt-4">
              <div className="flex flex-col justify-between">
                <span className="font-semibold text-primary text-sm">Agi</span>
                <span className="dark:text-gray-400 text-xs flex items-center">
                  Universitas Tadulako 17
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 w-72 border shadow-lg m-4 rounded-xl p-6">
            <p className="text-gray-600 dark:text-white">
              <span className="font-bold text-primary text-lg">“</span>
              As a software engineer or who wants to, prepare yourself to face
              the real IT industry. Since studying from college is not enough,
              you have to find your mentor. In hammercode you can find it, and
              expand your network. Because your network is your net worth
              <span className="font-bold text-primary text-lg">”</span>
            </p>
            <div className="flex items-center mt-4">
              <div className="flex flex-col justify-between">
                <span className="font-semibold text-primary text-sm">
                  Zulnabil
                </span>
                <span className="dark:text-gray-400 text-xs flex items-center">
                  Frontend Engineer @ 99.co
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 w-72 h-72 border shadow-lg m-4 rounded-xl p-6">
            <p className="text-gray-600 dark:text-white">
              <span className="font-bold text-primary text-lg">“</span>
              Dengan bantuan dan dorongan teman-teman dan mentor yg ada di
              komunitas, saya berhasil mendapatkan kesempatan magang di tahun
              pertama dan kedua kuliah
              <span className="font-bold text-primary text-lg">”</span>
            </p>
            <div className="flex items-center mt-4">
              <div className="flex flex-col justify-between">
                <span className="font-semibold text-primary text-sm">
                  Akwan Maroso
                </span>
                <span className="dark:text-gray-400 text-xs flex items-center">
                  Backend Engineer Intern @ Bareksa
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <div id="contact" className="bg-white dark:bg-gray-800 px-4">
        <div className="text-center w-full mx-auto py-16 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Punya Pertanyaan</span>
            <span className="block text-primary">
              Atau Ingin Sekedar Ngobrol ?
            </span>
          </h2>
          <p className="text-xl mt-4 max-w-md mx-auto">
            Kami dengan senang hati terhubung dengan Anda. Cukup klik tombol di
            bawah
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-4 px-6  bg-secondary hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-6 xl:pt-8 border-t">
        <div className="max-w-screen-lg xl:max-w-screen-xl flex flex-col md:flex-row md:justify-between mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
          <div className="flex border-gray-200 items-center justify-between mb-6 md:mb-0">
            <a href="#">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mx-2 text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mx-2 text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="mx-2 text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
              >
                <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mx-2 text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mx-2 text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
              </svg>
            </a>
          </div>
          <div className="text-center font-light flex items-center justify-center">
            Komunitas Hammercode 2021
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
