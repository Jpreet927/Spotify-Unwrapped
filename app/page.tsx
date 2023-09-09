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
            <div className="flex flex-col items-center justify-center text-center text-white gap-4 w-[50%] h-full">
                <h1 className="text-8xl font-bold">WELCOME TO UNWRAPPED</h1>
                <p className="">
                    Where you can view your Spotify listening habits without
                    having to wait for the end of the year.
                </p>
                <div className="flex gap-16 mt-8">
                    <Link href="/artists">
                        <ArrowOutwardIcon /> View Top Artists
                    </Link>
                    <Link href="/tracks">
                        <ArrowOutwardIcon /> View Top Tracks
                    </Link>
                </div>
            </div>
        </main>
    );
}
