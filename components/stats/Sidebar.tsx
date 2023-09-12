import Link from "next/link";
import React from "react";

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-8 py-12 px-8 w-[18%] h-screen sticky top-0 border-r border-r-white/10">
            <h3 className="text-2xl font-bold">SPOTIFY UNWRAPPED</h3>
            <div className="flex flex-col gap-4 text-text-secondary">
                <Link
                    href="/"
                    className="hover:text-text-primary transition-all"
                >
                    Home
                </Link>
                <Link
                    href="/artists"
                    className="hover:text-text-primary transition-all"
                >
                    Top Artists
                </Link>
                <Link
                    href="/tracks"
                    className="hover:text-text-primary transition-all"
                >
                    Top Tracks
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
