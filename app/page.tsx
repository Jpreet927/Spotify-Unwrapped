"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import Header from "@/components/home/Header";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

type SpotifySession = Session & {
    accessToken: string;
};

export default function Home() {
    const { data: session, status }: any = useSession();
    const router = useRouter();
    const TYPE = "artists";
    const URL = `https://api.spotify.com/v1/me/top/${TYPE}`;

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
        console.log(session, status);
    }, [status]);

    return (
        <main className="bg-home bg-cover bg-center h-screen w-screen items-center flex flex-col">
            <Header />
            <div className="flex flex-col items-center justify-center text-center text-white gap-4 md:w-[50%] w-[80%] h-full">
                <h1 className="md:text-8xl sm:text-6xl text-5xl font-bold">
                    WELCOME TO UNWRAPPED
                </h1>
                <p className="md:text-md text-sm text-text-secondary">
                    Where you can view your Spotify listening habits without
                    having to wait for the end of the year.
                </p>
                <div className="flex sm:gap-16 gap-4 mt-8">
                    <Link href="/artists" className="md:text-md text-sm">
                        <ArrowOutwardIcon /> View Top Artists
                    </Link>
                    <Link href="/tracks" className="md:text-md text-sm">
                        <ArrowOutwardIcon /> View Top Tracks
                    </Link>
                </div>
            </div>
        </main>
    );
}
