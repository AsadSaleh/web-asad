import Image from "next/image";

export default function PortoCard(props: {
  imageUrl?: string;
  desc: string;
  title: string;
  links: { app?: string; github?: string };
  year?: string;
}) {
  return (
    <div className="flex flex-col justify-between gap-2 rounded-xl border border-stone-200 bg-white p-4 md:p-6 dark:border-stone-700 dark:bg-slate-900">
      <div>
        {/* Image */}
        <div className="flex items-center justify-center">
          {props.imageUrl ? (
            <Image
              src={props.imageUrl}
              alt={props.title}
              width={400}
              height={200}
            />
          ) : (
            <div className="flex h-[180px] w-full items-center justify-center rounded-md bg-slate-200 text-sm dark:bg-slate-800">
              <p className="text-center font-light text-slate-400">No Image</p>
            </div>
          )}
        </div>

        {/* Title & Desc */}
        <div className="mt-2">
          <p className="text-xl font-semibold tracking-wide dark:text-white">
            {props.title}
          </p>
          <p className="text-md text-stone-500 dark:text-stone-400">
            {props.desc}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {/* Link */}
        <div className="mt-2 flex items-start justify-start gap-2">
          {Object.entries(props.links).map(([type, url]) => {
            if (type === "github") {
              return (
                <a
                  key={type}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-stone-200 px-3 py-2 font-mono text-xs text-slate-800 transition hover:bg-stone-300 active:scale-90 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
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
                className="rounded-xl bg-stone-200 px-3 py-2 font-mono text-xs text-slate-800 transition hover:bg-stone-300 active:scale-90 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
              >
                Open App
              </a>
            );
          })}
        </div>

        {/* Date */}
        <p className="text-xs font-light text-stone-500 dark:text-stone-400">
          {props.year}
        </p>
      </div>
    </div>
  );
}
