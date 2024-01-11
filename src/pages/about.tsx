import ArrowLeftIcon from "@/icon/arrow-left";
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About - As&apos;ad Personal Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-screen p-6 bg-white dark:bg-black">
        <nav className="flex">
          <Link
            href="/"
            className="my-4 px-4 py-2 transition flex items-center gap-2 rounded active:scale-95 bg-slate-200 hover:bg-slate-300 dark:bg-stone-500 dark:hover:bg-stone-400"
          >
            <ArrowLeftIcon />
            To Home
          </Link>
        </nav>

        <section className="max-w-3xl mx-auto">
          <h1 className="text-3xl dark:text-white">About me</h1>
          <h4 className="mb-4 text-xl dark:text-slate-500">
            Not much, but quite a story ain&apos;t it?
          </h4>
          <div className="mt-10 text-3xl tracking-wider dark:text-white">
            <p>
              Nama lengkap saya <br className="block md:hidden" />
              <span className="text-orange-500">[</span>As&apos;ad Saleh Umar
              <span className="text-orange-500">]</span>
            </p>
          </div>
          <div className="mt-4 text-lg tracking-wide dark:text-slate-300">
            I started my journey as a Bachelor of Physics, but now I&apos;m in
            love with software engineering. I started coding using Fortran in
            university, but I kickstarted my journey in computer science by
            taking a &quot;6 months unofficial bootcamp&quot; course of ReactJS
            with my mentor.
          </div>
          <p className="mt-3 text-lg tracking-wide dark:text-slate-300">
            I mainly do front-end and mobile development, using ReactJS,
            ReactNative, and Flutter; but I am also interested in the backend
            technology, NodeJS, Golang, Rust, etc. Currently, my go-to stack is
            NextJS/Remix/CRA, TailwindCSS, React Query, and Prisma. All done
            --mostly-- in TypeScript.
          </p>

          <div className="mt-10 bg-stone-400 dark:bg-stone-800 dark:text-slate-300 p-4 rounded">
            <h4 className="text-4xl font-mono">
              Chapter0: Titik Balik Perjuangan 🇮🇩
            </h4>
            <code>
              Gue lulusan Fisika, pernah ngoding dikit pake bahasa Fortran untuk
              skripsi. Habis itu gue nganggur setahun lebih setelah gue lulus
              kuliah. Nah, dari situ gue belajar ngoding. 5 hari seminggu, 8 jam
              sehari. Selama 6 bulan. Yang gue pelajari mulai dari HTML, CSS,
              JavaScript, dan terakhir React. Setelah gue bisa React, gue coba
              bikin 3 website sederhana. 1 buat nampilin informasi cuaca, 1
              untuk nampilin infographics, 1 lagi lupa buat apa. Ini kayaknya
              gue kerjain dalam waktu 1 bulan. Ini disebut portofolio ternyata.
              Dulu gue belum tau. Tapi dengan gue buat ini, temen gue cukup
              yakin gue bisa mulai kerja. Nah, setelah itu gue mulai internship
              di kantor temen gue selama 2 bulan. Setelah internship dan cocok,
              gue mulai kerja sebagai Junior Frontend Developer. Alhamdulillah.
              <br />
              <br />
              Jujur waktu jeda kuliah sampai kerja gue cukup lama. 1 tahun lebih
              dan belum jelas arah mau ngapain. Itu rasanya bangun tidur males
              banget gak tau mau ngapain. Tapi pas udah ada kegiatan belajar
              ngoding rutin tersebut, gue kayak punya semangat baru. Walaupun
              belum tau bakal kerja sebagai software engineer, tapi dulu seneng
              aja waktu mempelajari JavaScript, React, cara kerja internet, API,
              dsb.
            </code>
          </div>

          <h4 className="mt-10 text-3xl dark:text-slate-300 font-mono">
            Chapter1: A late bachelor degree, RubyH
          </h4>
          <p className="mt-3 text-lg tracking-wide dark:text-slate-300">
            As a self-taught software engineer, I started my journey in RubyH.
            It&apos;s a place where I learned so much about software development
            itself. RubyH itself is a software house, so the majority of code I
            write is for a client somewhere, but there is also one internal
            product. As this is the first time I worked, I put myself as
            &quot;the dumbest person&quot; in the room, I asked a lot of things!
            And it helped me to grow really quickly as a software engineer.
          </p>
          <p className="mt-3 text-lg tracking-wide dark:text-slate-300">
            Here, I worked on React project in my first year, and React Native
            in my second year. My role at the start is just as a developer, but
            at the time I leave, I mentor 2 junior react devs and was helping to
            make decisions on front-end technology that was going to be used in
            projects. The product called Moodah --one of the products I loved
            the most here-- is a web and mobile app we sell as a SaaS which
            provides low-cost ERP for Indonesian UMKM ( SMEs). Here I worked on
            the React Native client-side app which interacts with the GraphQL
            backend using Apollo Client.
          </p>

          <h4 className="mt-10 text-3xl dark:text-slate-300 font-mono">
            Chapter2: A place called home, IDN
          </h4>
          <p className="mt-3 text-lg tracking-wide dark:text-slate-300">
            Even though I’m enjoying my time at RubyH, I&apos;m hungry. I&apos;m
            not learning enough. I know my potential is limitless. Then I
            decided that I need to move to a new company: IDN. I came to IDN as
            a mobile developer. But right now I&apos;m happy to call myself just
            a software engineer. This is because, during my time here, I had to
            switch between product teams and technologies several times.
            I&apos;ll try to highlight the most important ones here, as the full
            summary of my journey is available on my CV.
          </p>

          <p className="mt-3 text-lg tracking-wide dark:text-slate-300">
            At IDN, I was given a chance to lead a Flutter mobile app
            development called &quot;Pelajar&quot;. I was always curious to try
            Flutter, but this is the first time that I really had the chance to
            use it. As the lead developer, I need to make quick decisions
            because the deadline is short. My prior knowledge from RubyH really
            helped me here as I already understand the hard concept, e.g., state
            managers, route management, and so on. Alhamdulillah, I managed to
            release the app to Google Play Store, and not only that, being a
            good communicator between Engineering, Product, and Customer Support
            team. The team consists of 3 mobile devs, 2 backend devs, a QA, and
            a product lead.
          </p>
          <p className="mt-3 text-lg tracking-wide dark:text-slate-300">
            The second role I wanted to highlight is when I was asked to help
            the Pordi team. It&apos;s a difficult decision to leave a product
            that I raised like my own child, but I also understand the impact of
            this product on IDN, thus I decided to move. Here, I meet ReactJS
            again, one of my loved frameworks, and help the team to meet the
            release date of the revamped Pordi web apps. I learned NextJS and
            React Query here while also working on a lot of features and bugs. I
            also started to use git rebase daily. At the end of the day, the web
            app is released.
          </p>

          <h4 className="mt-10 text-3xl dark:text-slate-300 font-mono">
            Chapter3: A far-far away journey, Mainstream
          </h4>
          <p className="mt-3 text-lg tracking-wide dark:text-slate-300">
            At 6 am in the morning, I got a phone call from a recruiter. He ask
            why I haven&apos;t got into the zoom meeting with the potential
            employer. Ouch! Right, I was scheduled for an early meeting to
            discuss the potential of me joining the team. I quickly got ready
            and joined the meeting. The meeting went well, and I was asked to
            join the team. I was excited, but I also need to think about it.
            I&apos;m happy at IDN, but I&apos;m also curious about the new
            opportunity.
          </p>
          <p className="mt-3 text-lg tracking-wide dark:text-slate-300">
            Couple of weeks later, I got laid off from IDN. I was sad, but I
            also not too sad as I already have a new opportunity. I joined
            Mainstream as a Fullstack Engineer. Here, I&apos;m working on a
            NextJS project for web3 applications. I&apos;m learning new things
            here and I&apos; have a fair amount of control of the project.
          </p>

          <h4 className="mt-10 text-3xl dark:text-slate-300 font-mono">
            The story continues...
          </h4>
        </section>
      </main>
    </>
  );
}
