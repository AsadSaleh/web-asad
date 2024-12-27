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
          className="my-4 flex items-center gap-2 rounded border-2 border-stone-400 bg-transparent px-4 py-2 transition hover:bg-stone-200 active:scale-95 dark:border-stone-200 dark:text-white dark:hover:bg-stone-100 dark:hover:text-black"
        >
          <ArrowLeftIcon />
          To Home
        </Link>
      </nav>

      <section className="mx-auto max-w-3xl">
        <h1 className="text-3xl dark:text-white">Portfolio</h1>
        <h2 className="text-xl text-slate-700 dark:text-slate-500">
          My work & hobby projects are listed here
        </h2>

        <h3 className="mt-10 text-xl dark:text-white">
          Selected Work Projects
        </h3>
        <h4 className="text-slate-700 dark:text-slate-400">
          Ini adalah beberapa kerjaan kantor pilihan. Aplikasi yang saya
          cantumkan disini biasanya saya ngerti 100% flownya. Oiya, beberapa
          saya buat bersama tim. Tapi ada juga beberapa yang buat sendiri{" "}
          <span className="italic">from scratch</span>, baru{" "}
          <span className="italic">later</span> dikerjakan bersama tim.
        </h4>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <PortoCard
            title="PALMS"
            subtitle="Pascal Montessori Academic & Learning Management System"
            desc="Aplikasi ini lumayan kompleks dan kaya fitur. Mulai dari connect ke API Backend, API Open AI, dan API S3. Terus dari sisi FE nya ada input file drag&drop, sorting table drag&drop, light & dark mode, dan editable table kayak excel."
            imageUrl="/images/palms.png"
            links={{}}
            year="2024"
          />
          <PortoCard
            title="Pager web app"
            subtitle="Aplikasi web SaaS untuk mengelola notifikasi aplikasi web3"
            imageUrl="/images/pager.png"
            desc="Cukup simpel, cuma Next.js, Supabase dan Stripe"
            links={{
              app: "https://app.getpager.xyz/onboarding",
            }}
            year="2023"
          />
          <PortoCard
            title="Pelajar mobile app"
            subtitle="Aplikasi mobile untuk wali murid mengelola seluruh keperluan digital siswa"
            desc="Ini seru sih, ngerjain ini hampir 1,5 tahun. Dari gak ngerti Flutter sampe bisa bikin app yang di download ratusan ribu kali. Ada offline supportnya pula, keren kan?"
            imageUrl="/images/pelajar.png"
            links={{
              app: "https://play.google.com/store/apps/details?id=io.infradigital.app.pelajar&hl=en_US",
            }}
            year="2021"
          />
          <PortoCard
            title="Portal Digital web app"
            subtitle="Aplikasi web untuk staf sekolah mengelola seluruh keperluan digital sekolahnya"
            desc="Ini juga seru. Pake Next.js, Axios, dan Go lang (backend). Web app untuk input data sekolah, guru, murid, dll."
            imageUrl="/images/pordi.png"
            links={{
              app: "https://pordi.infradigital.io/",
            }}
            year="2021"
          />
          <PortoCard
            title="Yayasan IDF site"
            subtitle="Website untuk mengenalkan Yayasan IDF kepada masyarakat"
            desc="Hanya sebuah website statis."
            imageUrl="/images/idf.png"
            links={{ app: "https://infradigitalfoundation.netlify.app/" }}
            year="2020"
          />
          <PortoCard
            title="PT Iyada company profile site"
            subtitle="Website untuk mengenalkan PT Iyada kepada masyarakat"
            desc="Hanya sebuah website statis."
            imageUrl="/images/iyada.png"
            links={{ app: "https://iyada.id/" }}
            year="2020"
          />
          <PortoCard
            title="Moodah mobile app"
            subtitle="Aplikasi Android & iOS untuk mengelola ERP perusahaan yang terhubung ke sistem Moodah (Service Discontinued)"
            desc="Mobile app ERP yang lumayan kompleks, selain manage data ada scanner nya loh. Dibuat dengan React Native dan dirilis menjadi app Android dan iOS."
            links={{}}
            year="2019"
          />
          <PortoCard
            title="Transfez mobile app"
            subtitle="Aplikasi Android & iOS untuk mengirim uang ke luar negeri (Sudah direvamp dari iterasi awal)"
            desc="Mobile app ini seru, karena aku jadi belajar banyak tentang payment service. Aku jadi pengalaman bikin step-by-step verifikasi muka dan KTP loh. Juga bikin kalkulator currency. Keren deh! Dibuat dengan React Native."
            links={{
              app: "https://play.google.com/store/apps/details?id=com.indokoala.transfez&hl=id&gl=US",
            }}
            year="2019"
          />
          <PortoCard
            title="Lumbung Dana web app"
            subtitle="Aplikasi web untuk mengelola dana pinjaman peer-to-peer"
            desc="Web app pertama. Belajar React.js, Redux, Redux-Form, Axios. Dari sini aku memulai segalanya. Jadi nostalgia banget."
            imageUrl="/images/lumbung_dana.png"
            links={{
              app: "https://lumbungdana.co.id/",
            }}
            year="2018"
          />
        </div>

        <h3 className="mt-10 text-xl dark:text-white">Hobby Projects</h3>
        <h4 className="text-slate-700 dark:text-slate-400">
          Ini adalah kerjaan yang saya buat sendiri, biasanya saya buat karena
          keresahan atas suatu masalah. Misal{" "}
          <span className="font-semibold">Tangga Belajar</span>: Biar bisa
          ngajar ngoding buat pemula secara masif.{" "}
          <span className="font-semibold">Pajakin</span>: karena ngitung pajak
          susah. Atau <span className="font-semibold">TimeToSync</span>, untuk
          tau dengan cepet waktu temen kantor ketika kerja remote.
        </h4>
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
          <PortoCard
            title="Tangga Belajar"
            subtitle="Next-Gen Indonesia's Coding Learning Platform"
            desc="Ini web app super keren. Udah bikin *almost sendiri dari awal. Dari design, coding, sampe deploy, ngurus docker, VPS, bikin kurikulumnya juga lagi. Gak sampe kurikulum doang, bikin gambarnya juga buat soal-soal yang rada kompleks. Terus bikin pamflet marketing. wkwkw. Aku juga bikin fitur 'Code Playground' buat belajar langsung di web app ini. Mobile responsive pula. Pake Next.js app directory dan Server Action. Pake Drizzle ORM. Pake Postgres di Neon (free wkwk). Dibantuin influencer Indo ternama. Terus campaign ke sekolah-sekolah biar pake. wkwk. Gils, seru!"
            imageUrl="/images/tangga_belajar.png"
            links={{ app: "https://tanggabelajar.id/" }}
            year="2024"
          />
          <PortoCard
            title="Personal site"
            subtitle="My personal website built with Next.js and TailwindCSS"
            desc="Banyak bercerita, banyak teman."
            links={{
              github: "https://github.com/AsadSaleh/web-asad",
            }}
            imageUrl="/images/web-asad.png"
            year="2023"
          />
          <PortoCard
            title="TimeToSync"
            subtitle="A beatiful clock app for team sync across the globe"
            desc="Jadi awalnya bikin ini karena iseng. Bikin jam yang bisa sync dengan teman kantor yang notabene remote worker. Ternyata ada beberapa orang yang suka, akhirnya aku rapihin deh. Plus ada tambahan fitur 'Time Detector' buat ngecek waktu ke timezone kita."
            imageUrl="/images/timetosync.png"
            links={{
              app: "https://timetosync.netlify.app/",
              github: "https://github.com/AsadSaleh/time-ui",
            }}
            year="2022 & 2023"
          />
          <PortoCard
            title="Pajakin"
            subtitle="Free tax calculator for Indonesian worker (Pph 21)"
            desc="Ini juga karena iseng. Kayaknya ngitung pajak Pph tuh perasaan susah banget yaa. Ternyata gak susah-susah amat kok. Dan enaknya pake Pajakin (tidak seperti excel) bisa dibuka dari mana aja (HP, Laptop, dll)."
            imageUrl="/images/pajakin.png"
            links={{
              app: "https://pajakin.vercel.app/",
              github: "https://github.com/AsadSaleh/pajakin",
            }}
            year="2023"
          />
          <PortoCard
            title="Is it Retina?"
            subtitle="Apakah layar kamu 'Retina Display'?"
            desc="Cuma kalkulasi sederhana. Nothing too fancy."
            imageUrl="/images/isitretina.png"
            links={{
              app: "https://is-it-retina.vercel.app/",
              github: "https://github.com/AsadSaleh/is_it_retina",
            }}
            year="2023"
          />
          <PortoCard
            title="Flip mobile app (ui only)"
            subtitle="A sample React Native app which follows Flip's delightful UI"
            desc="Waktu interview di Flip nyoba bikin UI nya. Seru juga sih, karena aku suka UI nya Flip ❤️"
            imageUrl=""
            links={{
              github: "https://github.com/AsadSaleh/flip_react_native_app",
            }}
            year="2022"
          />
          <PortoCard
            title="Drop Em"
            subtitle="Component example for creating Drag & Drop file in React"
            desc="Ini apa ya? Aku sendiri sampe lupa. Ooh, kayaknya ini nyoba bikin alternatif dari Dropzone. Tapi gak jadi. wkwk"
            links={{ github: "https://github.com/AsadSaleh/drop-em" }}
            imageUrl=""
            year="2021"
          />
        </div>
      </section>
    </main>
  );
}
