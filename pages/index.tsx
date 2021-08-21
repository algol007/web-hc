import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  const showMenu = () => {
    document.getElementById("toggle-nav")?.classList.toggle("hidden");
  };

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Talenta Teknologi Lokal Yang Berdaya Saing Global"
        />
        <meta property="og:title" content="Hammercode" key="ogtitle" />
        <meta
          property="og:description"
          content="Talenta Teknologi Lokal Yang Berdaya Saing Global"
          key="ogdesc"
        />
        <title>Hammercode</title>
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="Hammercode" key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content="http://hammercode.org/" key="ogurl" />
        <meta
          property="og:image"
          content="http://hammercode.org/h-logo.svg"
          key="ogimage"
        />
        <meta property="og:site_name" content="Hammercode" key="ogsitename" />
        <meta property="og:title" content="Hammercode" key="ogtitle" />
        <meta
          property="og:description"
          content="Talenta Teknologi Lokal Yang Berdaya Saing Global"
          key="ogdesc"
        />
      </Head>
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
                <Link href="https://discord.com/invite/M9mNK6MBbu">
                  <a className="py-4 px-6  bg-secondary hover:bg-white focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white hover:text-secondary w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Gabung Sekarang
                  </a>
                </Link>
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
                  <Link href="/#partners">
                    <a className="py-4 px-6  bg-secondary hover:bg-primary focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                      Lebih Lanjut
                    </a>
                  </Link>
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
              <Link href="https://discord.com/invite/M9mNK6MBbu">
                <a className="py-4 px-6  bg-secondary hover:bg-primary focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Hubungi Kami
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-6 xl:pt-8 border-t">
        <div className="max-w-screen-lg xl:max-w-screen-xl flex flex-col md:flex-row md:justify-between mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
          <div className="flex border-gray-200 items-center justify-between mb-6 md:mb-0">
            <Link href="https://www.facebook.com/groups/695578487303771/">
              <a className="w-8 h-8 mx-2 text-gray-500">
                <img src="/facebook.svg" alt="facebook" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/hmrcode/">
              <a className="w-8 h-8 mx-2 text-gray-500">
                <img src="/instagram.svg" alt="instagram" />
              </a>
            </Link>
            <Link href="https://discord.com/invite/M9mNK6MBbu">
              <a className="w-8 h-8 mx-2 text-gray-500">
                <img src="/discord.svg" alt="discord" />
              </a>
            </Link>
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
