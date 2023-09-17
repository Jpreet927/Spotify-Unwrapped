import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div className="xl:px-48 lg:px-32 md:px-16 px-8 py-12 flex justify-between sm:flex-row flex-col gap-6 bg-black border-t border-t-white/10">
			<div className="sm:w-[66%] w-full">
				<h3 className="text-2xl">
					<b>© 2023 JAIPREET SINGH</b>
				</h3>
			</div>
			<div className="flex justify-between sm:w-[33%] w-full">
				<div className="flex flex-col gap-1.5 sm:w-auto w-[50%]">
					<p className="mb-4">
						<b>Built With</b>
					</p>
					<p className="text-text-secondary hover:text-text-primary transition ease-in delay-400">
						Next.js
					</p>
					<p className="text-text-secondary hover:text-text-primary transition ease-in delay-400">
						Next Auth
					</p>
					<p className="text-text-secondary hover:text-text-primary transition ease-in delay-400">
						Tailwind
					</p>
					<p className="text-text-secondary hover:text-text-primary transition ease-in delay-400">
						Framer Motion
					</p>
					<p className="text-text-secondary hover:text-text-primary transition ease-in delay-400">
						Spotify API
					</p>
				</div>
				<div className="flex flex-col gap-1.5 sm:w-auto w-[50%]">
					<p className="mb-4">
						<b>Menu</b>
					</p>
					<Link
						href="/"
						className="text-text-secondary hover:text-text-primary transition ease-in delay-400"
					>
						Home
					</Link>
					<Link
						href="/artists"
						className="text-text-secondary hover:text-text-primary transition ease-in delay-400"
					>
						Top Artists
					</Link>
					<Link
						href="/tracks"
						className="text-text-secondary hover:text-text-primary transition ease-in delay-400"
					>
						Top Tracks
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
