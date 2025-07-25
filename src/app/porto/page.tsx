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

        <h3 className="mt-10 text-xl dark:text-white">Proud Projects</h3>
        <h4 className="text-slate-700 dark:text-slate-400">
          This is the latest project that I worked on and I'm really proud of
          it.
        </h4>
        <div className="mt-4 grid grid-cols-1 gap-4">
          <PortoCard
            title="PALMS"
            subtitle="Pascal Montessori's Academic & Learning Management System"
            desc="This application is quite complex and feature-rich. It connects to the Backend API, OpenAI API, and S3 API. On the frontend side, it includes drag-and-drop file input, drag-and-drop table sorting, light & dark mode, and an Excel-like editable table.\n\nThe repository is really well structured. Errors are never thrown, instead it is treated as values and quite strongly typed. I used a combination of RSC and client-side data fetching: RSC with Server Action and also Tanstack Query & Mutation."
            imageUrl="/images/palms.png"
            links={{}}
            technologies={[
              "Next.js",
              "Tailwind & Shadcn",
              "Tanstack Query",
              "Zod",
              "Open AI API",
              "S3 API",
              "Vercel",
            ]}
            year="2024"
          />
          <PortoCard
            title="Tangga Belajar"
            subtitle="Next-Gen Indonesia's Coding Learning Platform"
            // desc="Ini web app super keren. Udah bikin *almost sendiri dari awal. Dari design, coding, sampe deploy, ngurus docker, VPS, bikin kurikulumnya juga lagi. Gak sampe kurikulum doang, bikin gambarnya juga buat soal-soal yang rada kompleks. Terus bikin pamflet marketing. wkwkw. Aku juga bikin fitur 'Code Playground' buat belajar langsung di web app ini. Mobile responsive pula. Pake Next.js app directory dan Server Action. Pake Drizzle ORM. Pake Postgres di Neon (free wkwk). Dibantuin influencer Indo ternama. Terus campaign ke sekolah-sekolah biar pake. wkwk. Gils, seru!"
            desc="This is a super cool web app. I built *almost everything myself from scratch. From design, coding, to deployment, handling Docker, VPS, and even working on the curriculum. Not just the curriculum—I also made the illustrations for some of the more complex questions. Then I made a marketing pamphlet too. lol. I also built a 'Code Playground' feature so people can learn directly on the web app. It's mobile responsive as well. \n\nBuilt with Next.js app directory and Server Actions. Using Drizzle ORM. Postgres is hosted on Neon (the free tier lol). Got help from a well-known Indonesian influencer. Also running a campaign to get schools to use it. lol. Crazy fun!"
            imageUrl="/images/tangga_belajar.png"
            links={{ app: "https://tanggabelajar.id/" }}
            technologies={[
              "Next.js",
              "Tailwind",
              "Dockerode",
              "Fastify",
              "Self-hosted VPS",
              "Vercel",
            ]}
            year="2024"
          />

          <PortoCard
            title="Pelajar"
            subtitle="Pelajar mobile app is a centralized place for parents to manage their student's school needs."
            desc="Pelajar helps parents by providing an application to manage student's data, pay for schools tuition, and see personalized new from school.\n\nThe app was built using Flutter. As the lead engineer, I built the app from the ground up, setting up things like, e.g., repository structure, data fetching pattern, and error handling. One of the cool feature of the app is that it supports offline usage, and we build it manually from scratch."
            imageUrl="/images/pelajar.png"
            links={{
              app: "https://play.google.com/store/apps/details?id=io.infradigital.app.pelajar&hl=en_US",
            }}
            technologies={["Flutter", "Dart"]}
            year="2021"
          />
        </div>

        <h3 className="mt-10 text-xl dark:text-white">Other Projects</h3>
        <h4 className="text-slate-700 dark:text-slate-400">
          This projects help me shape my knowledge and test my skills.
        </h4>
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
          <PortoCard
            title="Mainstream Pager"
            subtitle="A SaaS web app selling personalized notifications for DAOs."
            imageUrl="/images/pager.png"
            links={{
              app: "https://app.getpager.xyz/onboarding",
            }}
            technologies={[
              "Next.js",
              "Tailwind",
              "Tanstack Query",
              "Supabase",
              "Stripe",
              "Vercel",
            ]}
            year="2023"
          />
          <PortoCard
            title="Personal site"
            subtitle="My personal website built with Next.js and TailwindCSS"
            // desc="Banyak bercerita, banyak teman."
            links={{
              github: "https://github.com/AsadSaleh/web-asad",
            }}
            imageUrl="/images/web-asad.png"
            technologies={["Next.js", "Tailwind", "Vercel"]}
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
            technologies={["Vite", "React.js", "Tailwind", "Netlify"]}
            year="2023"
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
            technologies={["Next.js", "Tailwind", "Vercel"]}
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
            technologies={["Next.js", "Tailwind", "Vercel"]}
            year="2023"
          />
          {/* <PortoCard
            title="Flip mobile app (ui only)"
            subtitle="A sample React Native app which follows Flip's delightful UI"
            desc="Waktu interview di Flip nyoba bikin UI nya. Seru juga sih, karena aku suka UI nya Flip ❤️"
            imageUrl=""
            links={{
              github: "https://github.com/AsadSaleh/flip_react_native_app",
            }}
            year="2022"
          /> */}
          {/* <PortoCard
            title="Drop Em"
            subtitle="Component example for creating Drag & Drop file in React"
            desc="Ini apa ya? Aku sendiri sampe lupa. Ooh, kayaknya ini nyoba bikin alternatif dari Dropzone. Tapi gak jadi. wkwk"
            links={{ github: "https://github.com/AsadSaleh/drop-em" }}
            imageUrl=""
            year="2021"
          /> */}
          <PortoCard
            title="Portal Digital web app"
            subtitle="Aplikasi web untuk staf sekolah mengelola seluruh keperluan digital sekolahnya"
            desc="Ini juga seru. Pake Next.js, Axios, dan Go. Web app untuk input data sekolah, guru, murid, dll."
            imageUrl="/images/pordi.png"
            links={{
              app: "https://pordi.infradigital.io/",
            }}
            technologies={["Next.js", "Tailwind", "Tanstack Query", "AWS"]}
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
            title="Transfez mobile app"
            subtitle="Aplikasi Android & iOS untuk mengirim uang ke luar negeri (Sudah direvamp dari iterasi awal)"
            desc="Mobile app ini seru, karena aku jadi belajar banyak tentang payment service. Aku jadi pengalaman bikin step-by-step verifikasi muka dan KTP loh. Juga bikin kalkulator currency. Keren deh! Dibuat dengan React Native."
            links={{
              app: "https://play.google.com/store/apps/details?id=com.indokoala.transfez&hl=id&gl=US",
            }}
            year="2019"
          />
          <PortoCard
            title="Moodah mobile app"
            subtitle="Aplikasi Android & iOS untuk mengelola ERP perusahaan yang terhubung ke sistem Moodah (Service Discontinued)"
            desc="Mobile app ERP yang lumayan kompleks, selain manage data ada scanner nya loh. Dibuat dengan React Native dan dirilis menjadi app Android dan iOS."
            links={{}}
            technologies={[""]}
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
            technologies={[
              "React.js",
              "Create React App",
              "CSS (plain)",
              "Axios",
              "Redux",
              "Redux-form",
            ]}
            year="2018"
          />
        </div>
      </section>
    </main>
  );
}
