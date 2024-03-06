import Link from "next/link";
import ArrowLeftIcon from "@/app/_icon/arrow-left";
import PortoCard from "@/app/_components/porto-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Porto - As'ad Personal Site",
  description: "A portfolio of As'ad's work and hobby projects.",
};

export default function Porto() {
  return (
    <main className="mx-auto w-screen p-4 md:p-6">
      <nav className="flex">
        <Link
          href="/"
          className="my-4 px-4 py-2 transition flex items-center gap-2 rounded border-2 active:scale-95 bg-transparent border-stone-400 hover:bg-stone-200 dark:text-white dark:border-stone-200 dark:hover:bg-stone-100 dark:hover:text-black"
        >
          <ArrowLeftIcon />
          To Home
        </Link>
      </nav>

      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl dark:text-white">Portfolio</h1>
        <h4 className="text-xl text-slate-700 dark:text-slate-500">
          My work & hobby projects are listed here
        </h4>

        <h5 className="mt-10 text-xl dark:text-white">
          Selected Work Projects
        </h5>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Lumbung Dana */}
          <PortoCard
            title="Lumbung Dana web app"
            desc="Aplikasi web untuk mengelola dana pinjaman peer-to-peer"
            imageUrl="/images/lumbung_dana.png"
            links={{
              app: "https://lumbungdana.co.id/",
            }}
            year="2018"
          />

          {/* Moodah */}
          {/* <PortoCard
              title="Moodah mobile app"
              desc="Aplikasi Android & iOS untuk mengelola ERP perusahaan yang terhubung ke sistem Moodah"
              links={{}}
            /> */}

          {/* Transfez */}
          <PortoCard
            title="Transfez mobile app"
            desc="Aplikasi Android & iOS untuk mengirim uang ke luar negeri"
            links={{
              app: "https://play.google.com/store/apps/details?id=com.indokoala.transfez&hl=id&gl=US",
            }}
            year="2019"
          />

          {/* IDF */}
          <PortoCard
            title="Yayasan IDF site"
            desc="Website untuk mengenalkan Yayasan IDF kepada masyarakat"
            imageUrl="/images/idf.png"
            links={{ app: "https://infradigitalfoundation.netlify.app/" }}
            year="2020"
          />

          {/* Iyada */}
          <PortoCard
            title="PT Iyada company profile site"
            desc="Website untuk mengenalkan PT Iyada kepada masyarakat"
            imageUrl="/images/iyada.png"
            links={{ app: "https://iyada.id/" }}
            year="2020"
          />

          {/* Pelajar */}
          <PortoCard
            title="Pelajar mobile app"
            desc="Aplikasi mobile untuk wali murid mengelola seluruh keperluan digital siswa"
            imageUrl="/images/pelajar.png"
            links={{
              app: "https://play.google.com/store/apps/details?id=io.infradigital.app.pelajar&hl=en_US",
            }}
            year="2021"
          />

          {/* Pordi */}
          <PortoCard
            title="Portal Digital web app"
            desc="Aplikasi web untuk staf sekolah mengelola seluruh keperluan digital sekolahnya"
            imageUrl="/images/pordi.png"
            links={{
              app: "https://pordi.infradigital.io/",
            }}
            year="2021"
          />

          {/* Pager */}
          <PortoCard
            title="Pager web app"
            desc="Aplikasi web SaaS untuk mengelola notifikasi aplikasi web3"
            imageUrl="/images/pager.png"
            links={{
              app: "https://app.getpager.xyz/onboarding",
            }}
            year="2023"
          />
        </div>

        <h5 className="mt-10 text-xl dark:text-white">Hobby Projects</h5>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {/* GlobalTimeDetector */}
          <PortoCard
            title="Global Time Detector"
            desc="A simple app to detect a random time and convert it to your timezone"
            imageUrl="/images/global-time-detector.png"
            links={{
              app: "https://globaltimedetector.vercel.app/",
              github: "https://github.com/AsadSaleh/detect-time",
            }}
            year="2023"
          />

          {/* TimeToSync */}
          <PortoCard
            title="TimeToSync"
            desc="A beatiful clock app for team sync across the globe"
            imageUrl="/images/timetosync.png"
            links={{
              app: "https://timetosync.netlify.app/",
              github: "https://github.com/AsadSaleh/time-ui",
            }}
            year="2022"
          />

          {/* Pajakin */}
          <PortoCard
            title="Pajakin"
            desc="Free tax calculator for Indonesian worker (Pph 21)"
            imageUrl="/images/pajakin.png"
            links={{
              app: "https://pajakin.vercel.app/",
              github: "https://github.com/AsadSaleh/pajakin",
            }}
            year="2023"
          />

          {/* Is it Retina? */}
          <PortoCard
            title="Is it Retina?"
            desc="Apakah layar kamu 'Retina Display'?"
            imageUrl="/images/isitretina.png"
            links={{
              app: "https://is-it-retina.vercel.app/",
              github: "https://github.com/AsadSaleh/is_it_retina",
            }}
            year="2023"
          />

          {/* React native */}
          <PortoCard
            title="Flip mobile app (ui only)"
            desc="A sample React Native app which follows Flip's delightful UI"
            imageUrl=""
            links={{
              github: "https://github.com/AsadSaleh/flip_react_native_app",
            }}
            year="2022"
          />

          {/* Drop em */}
          <PortoCard
            title="Drop Em"
            desc="Component example for creating Drag & Drop file in React"
            links={{ github: "https://github.com/AsadSaleh/drop-em" }}
            imageUrl=""
            year="2021"
          />

          {/* This website */}
          <PortoCard
            title="This website"
            desc="My personal website built with Next.js and TailwindCSS"
            links={{
              github: "https://github.com/AsadSaleh/web-asad",
            }}
            imageUrl="/images/web-asad.png"
            year="2023"
          />
        </div>
      </section>
    </main>
  );
}
