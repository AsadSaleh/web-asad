import ArrowLeftIcon from "@/app/_icon/arrow-left";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - As'ad Personal Site",
  description: "A programming journey story about As'ad Ghanim.",
};

export default function About() {
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
        <h1 className="text-3xl dark:text-white">About me</h1>
        <h4 className="mb-4 text-xl text-slate-700 dark:text-slate-500">
          A not so organized story about me
        </h4>

        <div className="mt-10 text-3xl dark:text-white">
          <p>
            <span>Nama saya&nbsp;</span>
            <span className="text-orange-600 font-semibold">
              As&apos;ad Saleh Umar Ghanim
            </span>
          </p>
        </div>
        <div className="mt-4 text-lg dark:text-slate-300">
          Saya adalah seorang profesional di bidang kayasa perangkat lunak
          (RPL), dengan spesialisasi di bidang pengembangan aplikasi web dan
          mobile.
        </div>
        <p className="mt-3 text-lg dark:text-slate-300">
          Utamanya, teknologi yang saya kuasai adalah di bidang front-end
          development; tetapi saya juga tertarik pada teknologi backend, seperti
          NodeJS, Golang, Rust. Saat ini, teknologi yang biasa saya gunakan
          hari-hari adalah ReactJS (Vite) atau NextJS, TailwindCSS, dan
          TanStack&apos;s (terutama Query dan Router).
        </p>

        {/* Tech Stack */}
        <div className="mt-4 bg-stone-200 dark:bg-stone-800 dark:text-slate-300 p-4 rounded">
          <h4 className="md:text-3xl font-semibold tracking-wider dark:text-white text-left">
            Teknologi yang dikuasai
          </h4>
          <div className="mt-2 flex gap-x-4 gap-y-2 flex-wrap items-center justify-start text-slate-600 dark:text-slate-300">
            <p>Git</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>ReactJS</p>
            <p>NextJS</p>
            <p>Remix</p>
            <p>SASS</p>
            <p>TailwindCSS</p>
            <p>NodeJS</p>
            <p>Express</p>
            <p>Postgres</p>
            <p>MongoDB</p>
            <p>Redis</p>
            <p>Vite</p>
            <p>TanStack</p>
            <p>React Native</p>
            <p>Dart</p>
            <p>Flutter</p>
            <p>Android</p>
          </div>

          <h5 className="mt-4 md:text-2xl font-semibold tracking-wider">
            Alat lainnya
          </h5>
          <div className="mt-2 flex gap-x-4 gap-y-2 flex-wrap items-center justify-start text-slate-600 dark:text-slate-300">
            <p>Vercel</p>
            <p>Supabase</p>
            <p>Docker</p>
            <p>Prisma ORM</p>
            <p>Firebase</p>
            <p>Microsoft App Center</p>
            <p>Google Play Console</p>
          </div>
        </div>

        <h4 className="mt-60  text-center md:text-left md:text-3xl font-semibold dark:text-slate-300 font-mono underline underline-offset-2 md:no-underline">
          Chapter0: Titik Balik Perjuangan 🇮🇩
        </h4>
        <p className="mt-3 text-lg tracking-wider dark:text-slate-300">
          Gue lulusan fisika.
        </p>
        <p className="mt-3 text-lg dark:text-slate-300">
          Yup, bukan anak ilmu komputer. Pernah ngoding dikit pake bahasa
          Fortran untuk skripsi. Habis itu gue nganggur setahun lebih setelah
          gue lulus kuliah. Nah, dari situ gue belajar ngoding. 5 hari seminggu,
          8 jam sehari. Selama 6 bulan. Yang gue pelajari mulai dari HTML, CSS,
          JavaScript, dan terakhir React. Setelah gue bisa React, gue bikin 3
          website sederhana. 1 buat nampilin informasi cuaca, 1 untuk nampilin
          infographics, 1 lagi lupa buat apa. Ini kayaknya gue kerjain dalam
          waktu 1 bulan. Ini disebut portofolio ternyata.
        </p>
        <p className="mt-3 text-lg dark:text-slate-300">
          Dulu gue belum tau, tapi dengan portofolio, mentor gue cukup yakin gue
          bisa mulai kerja. Nah, setelah itu gue mulai internship di kantor
          mentor gue selama 2 bulan. Setelah internship dan cocok, gue mulai
          kerja sebagai Junior Frontend Developer. Alhamdulillah. Ternyata
          selama ini gue dikader untuk menjadi programmer,&nbsp;
          <span className="italic">
            that&apos;s my realization after 3 years working
          </span>
          .
        </p>
        <p className="mt-3 text-lg dark:text-slate-300">
          Jujur kalau dilihat kebelakang, waktu jeda kuliah sampai kerja gue
          cukup lama. 1 tahun lebih dan belum jelas arah mau ngapain. Itu
          rasanya bangun tidur males banget gak tau mau ngapain. Tapi pas udah
          ada kegiatan belajar ngoding rutin tersebut, gue kayak punya semangat
          baru. Walaupun belum tau bakal kerja sebagai software engineer, tapi
          dulu seneng aja waktu mempelajari JavaScript, React, cara kerja
          internet, client-server, API, dan sebagainya.
        </p>

        <h4 className="mt-60 text-center md:text-left md:text-3xl font-semibold dark:text-slate-300 font-mono underline underline-offset-2 md:no-underline">
          Chapter1: A late bachelor degree, RubyH
        </h4>
        <div className="mt-4 bg-stone-200 dark:bg-stone-800 dark:text-stone-200 rounded-md px-6 py-4">
          Jakarta, Indonesia. Full time. RubyH is an Indonesian software house
          that helps startups/companies outsource their tech needs. We work with
          clients including PwC, Midtrans, Akseleran, Transfez, etc. Tech stack
          includes: React, Redux, ReduxForm, React Native, TypeScript, Apollo
          GraphQL.
        </div>
        <p className="mt-3 text-lg dark:text-slate-300">
          Sebagai seorang software engineer yang belajar sendiri, perjalanan
          karir saya dimulai di RubyH. Ini adalah tempat dimana saya belajar
          banyak tentang software development itu sendiri. RubyH sendiri adalah
          software house, jadi mayoritas kode yang saya tulis adalah untuk klien
          pihak ketiga, tapi ada juga satu produk internal. Karena ini pertama
          kalinya saya kerja, saya memposisikan diri sebagai &quot;orang paling
          bodoh&quot; di ruangan, jadi saya banyak bertanya tentang banyak hal!
          Dan itu membantu saya untuk tumbuh dengan cepat sebagai seorang
          software engineer.
        </p>
        <p className="mt-3 text-lg dark:text-slate-300">
          Tahun pertama di RubyH, kerjaan saya kebanyakan pegang ReactJS (web).
          Lalu React Native di tahun kedua. Peran saya di awal hanya sebagai
          developer, tapi waktu saya keluar, saya sudah menjadi mentor untuk 2
          junior react devs dan membantu membuat keputusan teknologi front-end
          yang akan digunakan di proyek. Salah satu produk yang kami kerjakan
          adalah ERP untuk SMEs. Dibungkus menjadi solusi web dan mobile app
          yang dijual sebagai SaaS yang menyediakan ERP dengan harga terjangkau
          untuk UMKM Indonesia. Di sini saya pegang aplikasinya menggunakan
          React Native, yang berinteraksi dengan backend GraphQL menggunakan
          Apollo Client.
        </p>

        <h4 className="mt-60 text-center md:text-left md:text-3xl font-semibold dark:text-slate-300 font-mono underline underline-offset-2 md:no-underline">
          Chapter2: A place called home, IDN
        </h4>
        <div className="mt-4 bg-stone-200 dark:bg-stone-800 dark:text-stone-200 rounded-md px-6 py-4">
          Jakarta, Indonesia. Full time. Infradigital is a B2B Edtech Startup
          providing financial, compliance & supply chain services to over 20,000
          low-income schools. I was a part of the engineering team, tasked with
          developing & maintaining the apps & services. Tech stack including:
          Flutter, React, NextJS, Go, NodeJS, Android (Java), and Redis.
          <p className="font-bold mt-4">Key achievements:</p>
          <ol className="list-decimal list-inside">
            <li>
              I maintain an existing Android and NodeJS app for student payment.
              We successfully decreased the number of crashes significantly.
            </li>
            <li>
              Lead the mobile team to build a new cross-platform (Flutter)
              mobile app from scratch with main features: online payment,
              student&apos;s records & file uploads, student financing, and
              newsfeed. I act as a mobile lead &ndash; leading a team of 3. We
              develop the app to 100K downloads in Google Play Store.
            </li>
            <li>
              Assist my company in obtaining PTD (Penyelenggara Transfer Dana)
              certification from Bank Indonesia
            </li>
            <li>
              Build internal web-based tools to help the sales team generate MoU
              documents on the fly.
            </li>
            <li>
              Promoted to engineering manager and technical leader for the
              Frontend and Mobile development teams. Leading a total of 5
              software engineers across 2 teams.
            </li>
          </ol>
        </div>
        <p className="mt-3 text-lg dark:text-slate-300">
          Even though I&apos;m enjoying my time at RubyH, I&apos;m hungry.
          I&apos;m not learning enough. I know my potential is limitless. Then I
          decided that I need to move to a new company: IDN. I came to IDN as a
          mobile developer. But right now I&apos;m happy to call myself just a
          software engineer. This is because, during my time here, I had to
          switch between product teams and technologies several times. I&apos;ll
          try to highlight the most important ones here, as the full summary of
          my journey is available on my CV.
        </p>

        <p className="mt-3 text-lg dark:text-slate-300">
          At IDN, I was given a chance to lead a Flutter mobile app development
          called &quot;Pelajar&quot;. I was always curious to try Flutter, but
          this is the first time that I really had the chance to use it. As the
          lead developer, I need to make quick decisions because the deadline is
          short. My prior knowledge from RubyH really helped me here as I
          already understand the hard concept, e.g., state managers, route
          management, and so on. Alhamdulillah, I managed to release the app to
          Google Play Store, and not only that, being a good communicator
          between Engineering, Product, and Customer Support team. The team
          consists of 3 mobile devs, 2 backend devs, a QA, and a product lead.
        </p>

        <p className="mt-3 text-lg dark:text-slate-300">
          My most challenging problems is when I implement offline-support for
          Pelajar&apos;s Flutter app. I write a local store which allows form
          data to be saved even though there is no internet connection, then it
          will automatically sync to our DB when the connection is back online.
          The experience is really thrilling because our boss wanted this
          feature in MVP, but we&apos;re clueless at that time, because Flutter
          is new to all of us. With extensive discussion with peers, we managed
          to pull it off in like 3 weeks time. The first 2 weeks is like banging
          my head around the wall. Everything seems too hard to work. However,
          after several iteration, it clicked and we can write the simple yet
          effective implementation. We tested it, it worked, and deployed it to
          production.
        </p>

        <p className="mt-3 text-lg dark:text-slate-300">
          The second role I wanted to highlight is when I was asked to help the
          Pordi team. It&apos;s a difficult decision to leave a product that I
          raised like my own child, but I also understand the impact of this
          product on IDN, thus I decided to move. Here, I meet ReactJS again,
          one of my loved frameworks, and help the team to meet the release date
          of the revamped Pordi web apps. I learned NextJS and React Query here
          while also working on a lot of features and bugs. I also started to
          use git rebase daily. At the end of the day, the web app is released.
        </p>

        <h4 className="mt-60 text-center md:text-left md:text-3xl font-semibold dark:text-slate-300 font-mono underline underline-offset-2 md:no-underline">
          Chapter2.2: Introduction to teaching
        </h4>
        <p className="mt-3 text-lg dark:text-slate-300">
          Lecturer & mentor at DigiTalent Scholarship&apos;s Frontend Class
        </p>
        <p className="mt-3 text-lg dark:text-slate-300">
          Jakarta, Indonesia. Part time. We teach JavaScript & React in a
          3-months online course to 20+ students in Digitalent Scholarship (DTS)
          2021, a program held by Indonesia&apos;s Ministry of Communication &
          Informatics. Course material consists of delivering theory through
          online class & mentoring student&apos;s final project.
        </p>

        <h4 className="mt-60 text-center md:text-left md:text-3xl font-semibold dark:text-slate-300 font-mono underline underline-offset-2 md:no-underline">
          Chapter2.7: More teaching
        </h4>
        <p className="mt-3 text-lg dark:text-slate-300">
          Lecturer & mentor at Binar Academy&apos;s
        </p>
        <p className="mt-3 text-lg dark:text-slate-300">
          Jakarta, Indonesia. Part time. We facilitate a class (10-person,
          6-months program) to be excellent at full-stack web development by
          delivering course material accompanied by live coding examples &
          mentoring student&apos;s final project.
        </p>

        <h4 className="mt-60 text-center md:text-left md:text-3xl font-semibold dark:text-slate-300 font-mono underline underline-offset-2 md:no-underline">
          Chapter3: A far-far away journey, Mainstream
        </h4>
        <div className="mt-4 bg-stone-200 dark:bg-stone-800 dark:text-stone-200 rounded-md px-6 py-4">
          US, Remote. MainstreamLabs is a startup with a vision to provide a
          governance platform for web3 organizations. Tech stack includes:
          NextJS 14 (RSC), Stripe API, NodeJS, Supabase. As a Full-Stack
          Developer, I helped the team to polish the previous app, which is a
          twitter-like web3 app for users to manage & follow their interest in
          available DAOs. I also helped the team develop a new app -a
          notification service SaaS- from scratch to production in record time.
        </div>
        <p className="mt-3 text-lg dark:text-slate-300">
          At 6 am in the morning, I got a phone call from a recruiter. He ask
          why I haven&apos;t got into the zoom meeting with the potential
          employer. Ouch! Right, I was scheduled for an early meeting to discuss
          the potential of me joining the team. I quickly got ready and joined
          the meeting. The meeting went well, and I was asked to join the team.
          I was excited, but I also need to think about it. I&apos;m happy at
          IDN, but I&apos;m also curious about the new opportunity.
        </p>
        <p className="mt-3 text-lg dark:text-slate-300">
          Couple of weeks later, I got laid off from IDN. I was sad, but
          thankfully I have a next place to go. I joined Mainstream as a
          Fullstack Engineer. Here, I&apos;m working on a NextJS project for
          web3 applications. I&apos;m learning new things here and I have a fair
          amount of control of the project.
        </p>
        <p className="mt-3 text-lg dark:text-slate-300">
          In this role, I lerned new technologies, such as Web3 itself, Supabase
          and Stripe. I feel just like my time in early careers, when everything
          is new and the world is a vast unknown place. I also learned a lot
          about the blockchain, the terms used in crypto world, and basic things
          in blockchain that I think I know, but turns out I don&apos;t know.
          Overall, I&apos;m happy with my time here.
        </p>
        <p className="mt-3 text-lg dark:text-slate-300">
          However, 8 months later, Mainstream and I can&apos;t go toghether
          anymore (the L word). It was hard, however I respect their decision.
          In the end, it has been a good experience and I met good friends
          there.
        </p>

        <h4 className="mt-60 text-center md:text-left md:text-3xl font-semibold dark:text-slate-300 font-mono underline underline-offset-2 md:no-underline">
          Chapter4: Alone in the dark
        </h4>
        <p className="mt-3 text-lg dark:text-slate-300">
          It&apos;s been a month since I left Mainstream. To be without a job is
          hard. How do we keep our head sharp?
        </p>
        <p className="mt-3 text-lg dark:text-slate-300">
          Maybe I need to grind LeetCode?
        </p>
        <p className="mt-3 text-lg dark:text-slate-300">
          Or maybe, should I re-create LeetCode?
        </p>
        <p className="mt-3 text-lg dark:text-slate-300">Thus....</p>
        <p className="mt-3 text-lg dark:text-slate-300">
          2 months later I created an online learning course from scratch called{" "}
          <a className="text-orange-500" href="https://tanggabelajar.id">
            Tangga Belajar
          </a>
          &nbsp;which focuses on self-paced code learning, similar to LeetCode.
          The site is up and running. It focuses on helping fellow Indonesians
          so all content is in Bahasa Indonesia. It has a generous free course
          with 100 topics and questions, and a paid course coming soon.
        </p>
        <p className="mt-3 text-lg dark:text-slate-300">
          It&apos;s created with NextJs, NodeJs (Fastify), Docker, Neon
          Postgres. Hosted in Vercel and Contabo. The platform is 100%
          completed, but I am still working on inserting reading materials and
          questions.
        </p>
        <p className="mt-3 text-lg dark:text-slate-300">
          Go check it out! And make sure to tell people about it 😊
        </p>

        <h4 className="mt-60 text-3xl dark:text-slate-300 font-mono">
          The story continues...
        </h4>
      </section>
    </main>
  );
}
