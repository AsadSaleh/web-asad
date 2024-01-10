import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ArrowLeftIcon from "@/icon/arrow-left";

export default function Porto() {
  return (
    <>
      <Head>
        <title>Porto - As&apos;ad Personal Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto w-screen p-6 bg-white dark:bg-black">
        <nav className="flex">
          <Link
            href="/"
            className="my-4 px-4 py-2 rounded hover:bg-stone-400 bg-stone-700 transition flex items-center gap-2"
          >
            <ArrowLeftIcon />
            To Home
          </Link>
        </nav>

        <section className="max-w-3xl mx-auto">
          <h1 className="text-3xl dark:text-white">Portfolio</h1>
          <h4 className="mb-4 text-xl dark:text-slate-500">
            Some of my public / hobby works are listed here
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* GlobalTimeDetector */}
            <Card
              title="Global Time Detector"
              desc="A simple app to detect a time and convert it to your timezone"
              imageUrl="/images/global-time-detector.png"
              links={{
                app: "https://globaltimedetector.vercel.app/",
                github: "https://github.com/AsadSaleh/detect-time",
              }}
            />

            {/* TimeToSync */}
            <Card
              title="TimeToSync"
              desc="A beatiful clock app for team sync across the globe"
              imageUrl="/images/timetosync.png"
              links={{
                app: "https://timetosync.netlify.app/",
                github: "https://github.com/AsadSaleh/time-ui",
              }}
            />

            {/* Drop em */}
            <Card
              title="Drop Em"
              desc="Component example for creating Drag & Drop file in React"
              links={{ github: "https://github.com/AsadSaleh/drop-em" }}
              imageUrl=""
            />

            {/* Pajakin */}
            <Card
              title="Pajakin"
              desc="Free tax calculator for Indonesian worker (Pph 21)"
              imageUrl="/images/pajakin.png"
              links={{
                app: "https://pajakin.vercel.app/",
                github: "https://github.com/AsadSaleh/pajakin",
              }}
            />

            {/* Is it Retina? */}
            <Card
              title="Is it Retina?"
              desc="Apakah layar kamu 'Retina Display'?"
              imageUrl="/images/isitretina.png"
              links={{
                app: "https://is-it-retina.vercel.app/",
                github: "https://github.com/AsadSaleh/is_it_retina",
              }}
            />

            {/* IDF */}
            <Card
              title="Yayasan IDF company profile"
              desc=""
              imageUrl="/images/idf.png"
              links={{ app: "https://infradigitalfoundation.netlify.app/" }}
            />

            {/* Iyada */}
            <Card
              title="PT Iyada company profile"
              desc=""
              imageUrl="/images/iyada.png"
              links={{ app: "https://iyada.id/" }}
            />

            {/* React native */}
            <Card
              title="Flip mobile app (ui only)"
              desc="A sample React Native app which follows Flip's delightful UI"
              imageUrl=""
              links={{
                github: "https://github.com/AsadSaleh/flip_react_native_app",
              }}
            />

            {/* This website */}
            <Card
              title="This website"
              desc=""
              imageUrl="/images/website.png"
              links={{
                github: "https://github.com/AsadSaleh/web-asad",
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
}

function Card(props: {
  imageUrl: string;
  desc: string;
  title: string;
  links: { app?: string; github?: string };
}) {
  return (
    <div className="p-6  gap-4 rounded-xl border flex flex-col items-center justify-between border-stone-200 dark:border-stone-600 bg-white dark:bg-slate-700">
      {/* Image */}
      {props.imageUrl ? (
        <Image
          src={props.imageUrl}
          width={400}
          height={400}
          alt="As'ad"
          className=""
        />
      ) : (
        <div className="flex h-[200px] w-full items-center text-sm justify-center bg-slate-800 rounded-md">
          {" "}
          <p className="font-light italic text-center">No Image</p>
        </div>
      )}

      {/* Title & Desc */}
      <div>
        <p className="text-xl tracking-wide font-semibold dark:text-white">
          {props.title}
        </p>
        <p className="text-md text-stone-400">{props.desc}</p>
      </div>

      {/* Link */}
      <div className="flex justify-start items-start gap-2">
        {Object.entries(props.links).map(([type, url]) => {
          if (type === "github") {
            return (
              <a
                key={type}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] py-2 px-3 border-[0.5px] border-[#6C6C6C] rounded-xl bg-white text-slate-800 dark:bg-slate-900 dark:text-white"
              >
                GitHub
              </a>
            );
          }
          return (
            <a
              key={type}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] py-2 px-3 border-[0.5px] border-[#6C6C6C] rounded-xl bg-white text-slate-800 dark:bg-stone-900 dark:text-white"
            >
              Open App
            </a>
          );
        })}
      </div>
    </div>
  );
}
