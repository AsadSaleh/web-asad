import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/app/retina/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <RetinaEntryPoint />;
}

export default function RetinaEntryPoint() {
	// const [isRetina, setIsRetina] = useState(false);
	const [result, setResult] = useState<
		| { status: "idle"; retinaDistance: 0; ppi: 0 }
		| { status: "success"; retinaDistance: number; ppi: number }
		| { status: "error"; retinaDistance: number; ppi: number }
	>({ status: "idle", retinaDistance: 0, ppi: 0 });

	// Input handlers.
	const [screenDiagonal, setScreenDiagonal] = useState("");
	const [aspectRatio, setAspectRatio] = useState("");
	const [screenResolution, setScreenResolution] = useState("");
	const [screenResolutionWidth, setScreenResolutionWidth] = useState("");
	const [screenResolutionHeight, setScreenResolutionHeight] = useState("");
	const [distance, setDistance] = useState("");

	useEffect(() => {
		const [widthRatio, heightRatio] = aspectRatio.split(":");

		const [width] = calculateScreenWidthAndHeight(
			getNumber(screenDiagonal),
			getNumber(widthRatio),
			getNumber(heightRatio),
		);

		// Validate inputs.
		if (width === 0 || getNumber(distance) === 0) {
			setResult({ status: "idle", retinaDistance: 0, ppi: 0 });
			return;
		}

		const pixelWidthAmount =
			screenResolution === "custom"
				? getNumber(screenResolutionWidth)
				: getNumber(screenResolution.split("x")[0]);

		const [retinaDistance, ppi] = calculateRetinaDistance(
			pixelWidthAmount,
			width,
		);

		const isRetina = getNumber(distance) >= retinaDistance;

		if (!Number.isFinite(retinaDistance)) {
			setResult({ status: "idle", retinaDistance: 0, ppi: 0 });
			return;
		}
		if (isRetina) {
			setResult({ status: "success", retinaDistance, ppi });
			return;
		}
		setResult({ status: "error", retinaDistance, ppi });
		return;
	}, [
		aspectRatio,
		screenDiagonal,
		screenResolutionWidth,
		distance,
		screenResolution,
	]);

	const retinaDistanceInInch = result.retinaDistance.toFixed(2);
	const retinaDistanceInCm = (result.retinaDistance * 2.54).toFixed(2);

	return (
		<main className="md:w-11/12 lg:w-10/12 xl:w-4/6 mx-auto p-4 md:p-0">
			{/* Title Section */}
			<div className="mt-4 lg:mt-10 lg:mb-4 flex flex-col gap-1">
				<h1 className="text-2xl">Is your display Retina?</h1>
				<p className="text-md text-gray-200">
					Retina display is a condition where a screen is super sharp that your
					eyes cannot see individual pixels.
				</p>
				<p className="text-sm text-gray-400 mb-4">
					We usually want to achieve this metric so that our monitor or laptops
					are looking sharp.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2">
				{/* 1. Ukuran layar */}
				<div className=" w-full rounded-md p-2 border-gray-600 border-solid border-2">
					<h4>Ukuran Layar</h4>
					<p className="italic text-gray-500 mb-2">
						Ukuran diagonal layar (angka)
					</p>
					<input
						className="bg-gray-600 p-1 rounded-md placeholder:italic w-28"
						placeholder="0"
						value={screenDiagonal}
						onChange={(e) => setScreenDiagonal(e.target.value)}
					/>
					<span>&nbsp;inch</span>
				</div>

				{/* 2. Aspect ratio */}
				<div className=" w-full rounded-md p-2 border-gray-600 border-solid border-2">
					<h4>Aspect Ratio</h4>
					<p className="italic text-gray-500 mb-2">
						Perbandingan lebar:tinggi layar
					</p>
					<select
						className="bg-gray-600 p-1 rounded-md"
						value={aspectRatio}
						onChange={(e) => setAspectRatio(e.target.value)}
					>
						<option value="">-Pilih-</option>
						<option value="4:3">4 : 3</option>
						<option value="16:9">16 : 9</option>
						<option value="21:9">21 : 9</option>
						<option value="32:9">32 : 9</option>
					</select>
				</div>

				{/* 3. Resolusi layar */}
				<div className="gap-1 w-full rounded-md p-2 border-gray-600 border-solid border-2">
					<h4>Resolusi Layar</h4>
					<p className="italic text-gray-500 mb-2">
						Banyaknya pixel (lebar x tinggi) pada layar
					</p>
					<div className="mb-1">
						<div className="mb-2">
							<select
								className="bg-gray-600 p-1 rounded-md"
								value={screenResolution}
								onChange={(e) => setScreenResolution(e.target.value)}
							>
								<option value="">-Pilih-</option>
								<option value="1280x720">HD</option>
								<option value="1920x1080">Full HD</option>
								<option value="2560x1440">2K, QHD</option>
								<option value="3840x2160">4K, UHD</option>
								<option value="custom">custom</option>
							</select>
						</div>
						{screenResolution === "custom" && (
							<div>
								<div className="flex gap-1 items-center justify-start mb-1">
									<span>Lebar</span>
									<input
										className="bg-gray-600 p-1 rounded-md w-24 placeholder:italic"
										placeholder="1920"
										value={screenResolutionWidth}
										onChange={(e) => setScreenResolutionWidth(e.target.value)}
									/>
									<span>px</span>
								</div>
								<div className="flex gap-1 items-center justify-start">
									<span>Tinggi</span>
									<input
										className="bg-gray-600 p-1 rounded-md w-24 placeholder:italic"
										placeholder="1080"
										value={screenResolutionHeight}
										onChange={(e) => setScreenResolutionHeight(e.target.value)}
									/>
									<span>px</span>
								</div>
							</div>
						)}
					</div>
				</div>

				{/* 4. Jarak penggunaan */}
				<div className=" w-full rounded-md p-2 border-gray-600 border-solid border-2">
					<h4>Jarak Penggunaan</h4>
					<p className="italic text-gray-500 mb-1">
						Jarak antara mata ke layar (angka)
					</p>
					<p className="text-xs text-gray-500 mb-2">
						Avg. eyes to monitor: 21 inch
						<br />
						Avg. eyes to smartphone: 15 inch
					</p>
					<input
						value={distance}
						onChange={(e) => setDistance(e.target.value)}
						className="bg-gray-600 p-1 rounded-md placeholder:italic w-28"
						placeholder="0"
					/>
					<span>&nbsp;inch</span>
				</div>

				{/* RESULT */}
				<div
					className={`border-solid border-2 p-2 rounded-md col-span-1 md:col-span-2 lg:col-span-4 ${
						result.status === "success"
							? "border-green-700"
							: result.status === "error"
								? "border-red-800"
								: "border-gray-500"
					}`}
				>
					<h4 className="text-md">Result</h4>
					<p className="text-xl mb-1">
						Is Retina:{" "}
						{result.status === "success" ? (
							<span className="bg-green-800 text-white p-1 rounded-md">
								YES
							</span>
						) : result.status === "error" ? (
							<span className="bg-red-800 text-white p-1 rounded-md">NO</span>
						) : (
							<span className="italic text-gray-500">(Not Available)</span>
						)}
					</p>
					{result.status !== "idle" && (
						<>
							<p className="text-md text-gray-300">
								Retina distance: {retinaDistanceInInch} inch (
								{retinaDistanceInCm} cm)
							</p>
							<p className="text-md text-gray-300 mb-1">
								PPI: {result.ppi.toFixed(0)}
							</p>
							<p className="text-sm text-gray-400">
								Penjelasan: <br />
								<span>
									&quot;Retina Distance&quot; adalah jarak terdekat dimana layar
									kamu akan mulai menjadi retina. Apabila kamu menggunakan
									device dengan jarak lebih dekat dari angka di atas, maka
									sensasi &apos;Retina Display&apos; tidak akan didapatkan.
									Sebaliknya, apabila kamu menggunakan device dengan jarak &gt;={" "}
									{retinaDistanceInInch} in, maka layar akan menjadi
									&apos;Retina Display&apos;.
								</span>
								<br />
								<span>
									&quot;PPI&quot; adalah Pixel per Inch, atau banyaknya jumlah
									pixel dalam jarak 1 inchi.
								</span>
							</p>
						</>
					)}
				</div>
			</div>

			{/* Footer */}
			<footer className="text-xs fixed right-2 bottom-2 bg-black px-2 py-1 rounded-lg">
				By{" "}
				<a
					href="https://twitter.com/asaduala"
					className="hover:bg-slate-200 p-1 rounded-md dark:hover:bg-slate-800"
				>
					As&apos;ad Ghanim
				</a>
			</footer>
		</main>
	);
}

function getNumber(input: string) {
	const number = Number(input);

	if (Number.isNaN(number)) {
		return 0;
	}
	return number;
}

function calculateScreenWidthAndHeight(
	diagonal: number,
	widthRatio: number,
	heightRatio: number,
) {
	// Calculate width and height using the ratios
	const width = diagonal / Math.sqrt(1 + (heightRatio / widthRatio) ** 2);
	const height = width * (heightRatio / widthRatio);
	return [width, height];
}

function calculateRetinaDistance(
	pixelWidthAmount: number,
	screenWidthInInces: number,
) {
	const ppi = pixelWidthAmount / screenWidthInInces;
	console.log({ ppi });

	const minimumDistance = 3450 / ppi;

	return [minimumDistance, ppi];
}
