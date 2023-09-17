"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Header from "@/components/home/Header";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Loading from "@/components/Loading";

export default function Home() {
	const { data: session, status }: any = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/login");
		}
	}, [status]);

	if (status === "loading") {
		return <Loading />;
	}

	return (
		<main className="bg-home bg-cover bg-center h-screen w-screen items-center flex flex-col">
			<Header />
			<div className="flex flex-col items-center justify-center text-center text-white gap-4 md:w-[50%] w-[80%] h-full">
				<h1 className="md:text-8xl sm:text-6xl text-5xl font-bold">
					WELCOME TO UNWRAPPED
				</h1>
				<p className="md:text-md text-sm text-text-secondary">
					Where you can view your Spotify listening habits without having to
					wait for the end of the year.
				</p>
				<div className="flex sm:gap-16 gap-4 mt-8">
					<Link
						href="/artists"
						className="md:text-md text-sm after:bg-white relative after:absolute after:h-[1px] after:w-0 after:-bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-500"
					>
						<ArrowOutwardIcon /> View Top Artists
					</Link>
					<Link
						href="/tracks"
						className="md:text-md text-sm after:bg-white relative after:absolute after:h-[1px] after:w-0 after:-bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-500"
					>
						<ArrowOutwardIcon /> View Top Tracks
					</Link>
				</div>
			</div>
		</main>
	);
}
