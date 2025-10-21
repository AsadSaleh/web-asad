import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRightIcon,
	ArrowUpRightIcon,
	CheckIcon,
	CopyIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return <HomeEntryPoint />;
}

export default function HomeEntryPoint({
	defaultScramble,
}: {
	defaultScramble?: string;
}) {
	const [showAnimation, setShowAnimation] = useState<{
		icon: "fire" | "hammer";
		show: boolean;
	}>({ icon: "fire", show: false });

	const [scrambleStatus, setScrambleStatus] = useState<
		"pending" | "tidy" | "scrambled"
	>(defaultScramble as "pending" | "tidy" | "scrambled");

	// Set cookie to store scramble status
	// useEffect(() => {
	// 	document.cookie = `web:asad:scramble=${scrambleStatus}; path=/; max-age=31536000`;
	// }, [scrambleStatus]);

	const scrambled =
		scrambleStatus === "pending" || scrambleStatus === "scrambled";

	const handleClick = () => {
		if (scrambled) {
			setShowAnimation({ icon: "hammer", show: true });
			setTimeout(() => {
				setScrambleStatus("tidy");
			}, 300);
			setTimeout(() => setShowAnimation({ icon: "hammer", show: false }), 1000);
		} else {
			setShowAnimation({ icon: "fire", show: true });
			setTimeout(() => {
				setScrambleStatus("scrambled");
			}, 300);
			setTimeout(() => setShowAnimation({ icon: "fire", show: false }), 1000);
		}
	};

	return (
		<div className="background-grid">
			<main className="mx-auto max-w-lg py-8 md:max-w-2xl md:py-20">
				{/* Fullscreen hammer animation */}
				<AnimatePresence>
					{showAnimation.show && (
						<motion.div
							className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							{/* Hammer itself */}
							<motion.div
								animate={
									showAnimation.icon === "hammer"
										? { rotate: [-90, 20, -10, 0] }
										: {
												rotate: [-5, 5, -5], // wiggle
												scale: [1, 1.2, 1], // pulse
											}
								}
								transition={
									showAnimation.icon === "hammer"
										? {
												duration: 0.6,
												repeat: Infinity,
												ease: "easeInOut",
											}
										: {
												duration: 1,
												repeat: Infinity,
												ease: "easeInOut",
											}
								}
								className="origin-center text-8xl" // origin-center makes it swing from the center
							>
								{showAnimation.icon === "fire" ? "🔥" : "🔨"}
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* spacer */}
				<div className="h-16" />

				<div className="absolute inset-x-0 top-0 mr-4 mt-4 flex h-10 items-center justify-center">
					<button
						type="button"
						className="bg-slate-200 px-4 py-2 text-slate-800 transition-all duration-300 active:scale-90 dark:bg-slate-800 dark:text-white"
						onClick={handleClick}
					>
						{scrambled ? "Fix it! 🔨" : "Break it 🔥"}
					</button>
				</div>

				<SocialLinks scrambled={scrambled} />

				<section className="mt-20 flex flex-col items-center justify-center gap-4 md:flex-row">
					<img
						src="/images/profile_pixelized_square.jpeg"
						width={130}
						height={130}
						alt="Pixelized of As'ad"
						className="rounded-3xl transition data-[scrambled=true]:blur-md"
						data-scrambled={scrambled}
					/>
					<div className="text-center md:text-left">
						<p className="text-sm italic text-stone-400 md:text-xl">
							Hello there!
							<br />
						</p>
						<p className="text-2xl md:text-4xl dark:text-white">
							<span>I&apos;m&nbsp;</span>
							<span className="font-semibold">As&apos;ad Ghanim</span>
						</p>
						<p className="text-xl md:text-3xl dark:text-white">
							A{" "}
							<span className="bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text font-semibold text-transparent">
								Pro Max Ultra
							</span>{" "}
							software engineer.
						</p>
						<div className="flex items-center justify-center gap-2 md:justify-start">
							<p
								className="text-stone-500 data-[hide=true]:hidden dark:text-stone-400"
								data-hide={!scrambled}
							>
								Please fix this site 😢
							</p>
						</div>
					</div>
				</section>

				<section className="mt-20 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:px-0">
					<Link
						to="/porto"
						data-scrambled={scrambled}
						className="block animate-none data-[scrambled=true]:mt-40 data-[scrambled=true]:animate-float-2"
					>
						<div
							data-scrambled={scrambled}
							className="group block h-full rotate-0 rounded-lg bg-gradient-to-r from-violet-700 to-blue-600 p-1 transition-all active:scale-95 data-[scrambled=true]:rotate-6"
						>
							<div className="h-full w-full rounded-lg p-4 transition-all group-hover:bg-transparent md:px-6 md:py-4 dark:bg-black">
								<div className="flex items-center justify-between gap-2 text-white dark:text-white">
									<h4 className="text-xl md:text-2xl">Portfolio</h4>
									<ArrowRightIcon className="transition-all group-hover:translate-x-1 dark:text-white" />
								</div>
								<p className="text-sm text-slate-200 md:text-base dark:text-slate-300">
									Let&apos;s see As&apos;ad&apos;s playing cards
								</p>
							</div>
						</div>
					</Link>

					<Link
						to="/about"
						data-scrambled={scrambled}
						className="block animate-none data-[scrambled=true]:mt-10 data-[scrambled=true]:animate-float"
						style={{ animationDelay: "0.75s" }}
					>
						<div
							data-scrambled={scrambled}
							className="group block h-full rotate-0 rounded-lg bg-gradient-to-r from-red-700 to-orange-600 p-1 transition active:scale-95 data-[scrambled=true]:-rotate-3"
						>
							<div className="h-full w-full rounded-lg p-4 transition-all group-hover:bg-transparent md:px-6 md:py-4 dark:bg-black">
								<div className="flex items-center justify-between gap-2 text-white dark:text-white">
									<h4 className="text-xl md:text-2xl">About</h4>
									<ArrowRightIcon className="transition-all group-hover:translate-x-1 dark:text-white" />
								</div>
								<p className="text-sm text-slate-200 md:text-base dark:text-slate-300">
									Read story about my journey
								</p>
							</div>
						</div>
					</Link>

					<a
						href="https://asadghanim.notion.site/be2974dfd64245ae9d0023d947d296ef?v=d9bffec2c5c541218f9df5cba411bae5"
						target="_blank"
						rel="noopener noreferrer"
						data-scrambled={scrambled}
						className="block animate-none data-[scrambled=true]:mt-14 data-[scrambled=true]:animate-float"
						style={{ animationDelay: "1.5s" }}
					>
						<div
							data-scrambled={scrambled}
							className="group h-full rotate-0 rounded-lg bg-gradient-to-r from-green-600 to-teal-800 p-1 transition active:scale-95 data-[scrambled=true]:rotate-[160deg]"
						>
							<div className="h-full w-full rounded-lg p-4 transition-all group-hover:bg-transparent md:px-6 md:py-4 dark:bg-black">
								<div className="flex items-center justify-between gap-2 text-white dark:text-white">
									<h4 className="text-xl md:text-2xl">Blogs</h4>
									<ArrowUpRightIcon className="transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
								</div>
								<p className="text-sm text-slate-200 md:text-base dark:text-slate-300">
									Discover what&apos;s inside my head
								</p>
							</div>
						</div>
					</a>
				</section>

				<h3 className="mt-20 text-2xl font-bold tracking-wide text-purple-700 text-center">
					Apps
				</h3>

				<section className="mt-4 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:px-0">
					<a
						data-scrambled={scrambled}
						href="https://www.tanggabelajar.id/"
						target="_blank"
						rel="noopener noreferrer"
						className="block animate-none data-[scrambled=true]:animate-float"
						style={{ animationDelay: "2.2s" }}
					>
						<div
							data-scrambled={scrambled}
							className="group h-full rotate-0 rounded-lg bg-gradient-to-r from-orange-600 to-yellow-600 p-1 transition active:scale-95 data-[scrambled=true]:rotate-[45deg]"
						>
							<div className="h-full w-full rounded-lg p-4 transition-all group-hover:bg-transparent md:px-6 md:py-4 dark:bg-black">
								<div className="flex items-center justify-between gap-2 text-white dark:text-white">
									<h4 className="text-xl md:text-2xl">Tangga Belajar</h4>
									<ArrowUpRightIcon className="transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
								</div>
								<p className="text-sm text-slate-200 md:text-base dark:text-slate-300">
									Jadi jago &lt;Koding/&gt; dalam waktu 7 hari. Belajar koding
									gratis!
								</p>
							</div>
						</div>
					</a>

					{/* timetosync.netlify.app */}
					<a
						href="https://timetosync.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
						data-scrambled={scrambled}
						className="block animate-none data-[scrambled=true]:mt-20 data-[scrambled=true]:animate-float-2"
						style={{ animationDelay: "1s" }}
					>
						<div
							data-scrambled={scrambled}
							className="group block h-full rotate-0 rounded-lg bg-gradient-to-r from-pink-700 to-purple-600 p-1 transition active:scale-95 data-[scrambled=true]:-rotate-12"
						>
							<div className="h-full w-full rounded-lg p-4 transition-all group-hover:bg-transparent md:px-6 md:py-4 dark:bg-black">
								<div className="flex items-center justify-between gap-2 text-white dark:text-white">
									<h4 className="text-xl md:text-2xl">Time to Sync!</h4>
									<ArrowRightIcon className="transition-all group-hover:translate-x-1" />
								</div>
								<p className="text-sm text-slate-200 md:text-base dark:text-slate-300">
									Find the best time to meet with friends across timezones
								</p>
							</div>
						</div>
					</a>

					<Link
						to="/app/pajakin"
						data-scrambled={scrambled}
						className="block animate-none data-[scrambled=true]:mt-20 data-[scrambled=true]:animate-float-2"
						style={{ animationDelay: "1s" }}
					>
						<div
							data-scrambled={scrambled}
							className="group block h-full rotate-0 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 p-1 transition active:scale-95 data-[scrambled=true]:-rotate-12"
						>
							<div className="h-full w-full rounded-lg p-4 transition-all group-hover:bg-transparent md:px-6 md:py-4 dark:bg-black">
								<div className="flex items-center justify-between gap-2 text-white dark:text-white">
									<h4 className="text-xl md:text-2xl">Pajakin</h4>
									<ArrowRightIcon className="transition-all group-hover:translate-x-1" />
								</div>
								<p className="text-sm text-slate-200 md:text-base dark:text-slate-300">
									Tax calculation app for Indonesian employees
								</p>
							</div>
						</div>
					</Link>

					<Link
						to="/app/retina"
						data-scrambled={scrambled}
						className="block animate-none data-[scrambled=true]:mt-20 data-[scrambled=true]:animate-float-2"
						style={{ animationDelay: "0.7s" }}
					>
						<div
							data-scrambled={scrambled}
							className="group block h-full rotate-0 rounded-lg bg-gradient-to-r from-indigo-700 to-purple-600 p-1 transition active:scale-95 data-[scrambled=true]:rotate-45"
						>
							<div className="h-full w-full rounded-lg p-4 transition-all group-hover:bg-transparent md:px-6 md:py-4 dark:bg-black">
								<div className="flex items-center justify-between gap-2 text-white dark:text-white">
									<h4 className="text-xl md:text-2xl">Is it Retina Display?</h4>
									<ArrowRightIcon className="transition-all group-hover:translate-x-1" />
								</div>
								<p className="text-sm text-slate-200 md:text-base dark:text-slate-300">
									Find out if your device has a Retina display
								</p>
							</div>
						</div>
					</Link>

					{/* jadwalpupu.netlify.app */}
					<a
						href="https://jadwalpupu.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
						data-scrambled={scrambled}
						className="block animate-none data-[scrambled=true]:mt-20 data-[scrambled=true]:animate-float-2"
						style={{ animationDelay: "0.2s" }}
					>
						<div
							data-scrambled={scrambled}
							className="group block h-full rotate-0 rounded-lg bg-gradient-to-r from-indigo-700 to-purple-600 p-1 transition active:scale-95 data-[scrambled=true]:-rotate-90 data-[scrambled=true]:py-10"
						>
							<div className="h-full w-full rounded-lg p-4 transition-all group-hover:bg-transparent md:px-6 md:py-4 dark:bg-black">
								<div className="flex items-center justify-between gap-2 text-white dark:text-white">
									<h4 className="text-xl md:text-2xl">Jadwal pu-pu</h4>
									<ArrowUpRightIcon className="transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
								</div>
								<p className="text-sm text-slate-200 md:text-base dark:text-slate-300">
									Track your digestive system health!
								</p>
							</div>
						</div>
					</a>
				</section>

				{/* spacer */}
				<div className="h-16" />

				{/* Footer */}

				<footer className="mt-32 px-2">
					<p className="text-center text-xs text-stone-400 dark:text-stone-500">
						© {new Date().getFullYear()} As&apos;ad Ghanim. All rights reserved.
					</p>
				</footer>
			</main>
		</div>
	);
}

function SocialLinks({ scrambled }: { scrambled: boolean }) {
	return (
		<div className="flex flex-wrap items-start justify-center gap-2 md:gap-4">
			<div className={scrambled ? "animate-float-2" : ""}>
				<a
					href="https://github.com/AsadSaleh"
					target="_blank"
					rel="noopener noreferrer"
					data-scramble={scrambled}
					className="flex h-min items-center rounded-xl bg-slate-800 p-4 font-mono text-xs text-white transition-all duration-150 hover:scale-110 active:scale-95 data-[scramble=true]:mt-10 data-[scramble=true]:-rotate-12"
				>
					<p>GitHub</p>
				</a>
			</div>
			<div
				className={scrambled ? "animate-float-2" : ""}
				style={{ animationDelay: "0.5s" }}
			>
				<a
					href="https://www.linkedin.com/in/as-ad-saleh-umar-876608a4/"
					target="_blank"
					rel="noopener noreferrer"
					data-scramble={scrambled}
					className="flex h-min items-center rounded-xl bg-[#0077b5] p-4 font-mono text-xs text-white transition-all duration-150 hover:scale-110 active:scale-95 data-[scramble=true]:mt-20 data-[scramble=true]:rotate-6"
				>
					<p>LinkedIn</p>
				</a>
			</div>
			<div
				className={scrambled ? "animate-float-2" : ""}
				style={{ animationDelay: "1s" }}
			>
				<a
					href="https://stackoverflow.com/users/9844546/asad-s"
					target="_blank"
					rel="noopener noreferrer"
					data-scramble={scrambled}
					className="data-[scramble=true]:mb-15 flex h-min items-center rounded-xl bg-[#F48024] p-4 font-mono text-xs text-white transition-all duration-150 hover:scale-110 active:scale-95 data-[scramble=true]:rotate-12"
				>
					<p>StackOverflow</p>
				</a>
			</div>
			<EmailWithCopy scrambled={scrambled} />
			<div
				className={scrambled ? "animate-float-2" : ""}
				style={{ animationDelay: "2s" }}
			>
				<a
					href="/documents/CV_Asad_Saleh_Umar.pdf"
					target="_blank"
					rel="noopener noreferrer"
					data-scramble={scrambled}
					className="flex h-min items-center gap-1 rounded-xl bg-green-700 p-4 font-mono text-xs text-white transition-all duration-150 hover:scale-110 active:scale-95 data-[scramble=true]:-ml-10 data-[scramble=true]:-mt-10 data-[scramble=true]:-rotate-3"
				>
					Latest CV
				</a>
			</div>
		</div>
	);
}

function EmailWithCopy({ scrambled = false }: { scrambled?: boolean }) {
	const [coppied, setCoppied] = useState(false);

	async function copyEmailToClipboard() {
		try {
			const emailAddress = "azzzad.s@gmail.com";
			await navigator.clipboard.writeText(emailAddress);
			setCoppied(true);
		} catch {
			console.log("failed to copy text");
		}
	}

	useEffect(() => {
		if (coppied) {
			setTimeout(() => {
				setCoppied(false);
			}, 2000);
		}
	}, [coppied]);

	return (
		<div
			className={scrambled ? "animate-float-2" : ""}
			style={{ animationDelay: "1.5s" }}
		>
			<button
				onClick={copyEmailToClipboard}
				data-scramble={scrambled}
				className="flex h-min items-center cursor-pointer gap-2 rounded-xl bg-red-700 p-4 font-mono text-xs text-white transition-all duration-150 hover:scale-110 active:scale-95 data-[scramble=true]:mt-10 data-[scramble=true]:rotate-[-20deg]"
				type="button"
			>
				Email
				{coppied ? (
					<CheckIcon className="h-4 w-4 font-bold text-white" />
				) : (
					<CopyIcon className="h-4 w-4" />
				)}
			</button>
		</div>
	);
}
