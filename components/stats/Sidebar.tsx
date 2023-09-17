"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";

const Sidebar = () => {
	const path: String = usePathname();
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

	return (
		<div
			className={`flex flex-col gap-8 lg:py-12 py-4 lg:px-8 lg:w-[18%] bg-black ${
				sidebarOpen
					? "w-screen absolute top-0 left-0 z-20 px-8"
					: "w-[50px] sticky top-0 px-2"
			} h-screen border-r border-r-white/10 transition-all`}
		>
			<h3 className="xl:text-2xl text-xl lg:block hidden font-bold">
				SPOTIFY UNWRAPPED
			</h3>
			<div
				className={`flex flex-col lg:gap-4 gap-12 lg:items-start ${
					sidebarOpen ? "items-start" : "items-center"
				}`}
			>
				<button
					className="lg:hidden block hover:text-text-primary transition-all"
					onClick={() => setSidebarOpen(!sidebarOpen)}
				>
					{sidebarOpen ? <CloseIcon /> : <MenuIcon />}
				</button>
				<Link
					href="/"
					className={`hover:text-text-primary transition-all flex gap-4 items-center ${
						path === "/" ? "text-text-primary" : "text-text-secondary"
					}`}
				>
					<HomeOutlinedIcon />
					<p className={`lg:block ${sidebarOpen ? "block" : "hidden"}`}>Home</p>
				</Link>
				<div
					className={`h-[1px] w-full bg-white/10 ${
						sidebarOpen ? "block" : "hidden"
					}`}
				></div>
				<Link
					href="/artists"
					className={`hover:text-text-primary transition-all flex gap-4 items-center ${
						path === "/artists" ? "text-text-primary" : "text-text-secondary"
					}`}
				>
					<PersonOutlineOutlinedIcon />
					<p className={`lg:block ${sidebarOpen ? "block" : "hidden"}`}>
						Top Artists
					</p>
				</Link>
				<div
					className={`h-[1px] w-full bg-white/10 ${
						sidebarOpen ? "block" : "hidden"
					}`}
				></div>
				<Link
					href="/tracks"
					className={`hover:text-text-primary transition-all flex gap-4 items-center ${
						path === "/tracks" ? "text-text-primary" : "text-text-secondary"
					}`}
				>
					<AlbumOutlinedIcon />
					<p className={`lg:block ${sidebarOpen ? "block" : "hidden"}`}>
						Top Tracks
					</p>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
