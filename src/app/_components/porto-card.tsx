import Image from "next/image";

export default function PortoCard(props: {
  imageUrl?: string;
  desc: string;
  title: string;
  links: { app?: string; github?: string };
  year?: string;
}) {
  return (
    <div className="p-4 md:p-6 flex flex-col justify-between gap-2 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-slate-900">
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
            <div className="flex h-[180px] w-full items-center text-sm justify-center bg-slate-200 dark:bg-slate-800 rounded-md">
              <p className="font-light text-center text-slate-400">No Image</p>
            </div>
          )}
        </div>

        {/* Title & Desc */}
        <div className="mt-2">
          <p className="text-xl tracking-wide font-semibold dark:text-white">
            {props.title}
          </p>
          <p className="text-md text-stone-500 dark:text-stone-400">
            {props.desc}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {/* Link */}
        <div className="mt-2 flex justify-start items-start gap-2">
          {Object.entries(props.links).map(([type, url]) => {
            if (type === "github") {
              return (
                <a
                  key={type}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs py-2 px-3 rounded-xl transition active:scale-90 text-slate-800 bg-stone-200 hover:bg-stone-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
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
                className="font-mono text-xs py-2 px-3 rounded-xl transition active:scale-90 text-slate-800 bg-stone-200 hover:bg-stone-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
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
