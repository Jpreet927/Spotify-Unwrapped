"use client";

import { useEffect, useState } from "react";
import { getTopItems } from "../lib/spotify";
// import { useRouter } from "next/router";
// import { useSession } from "next-auth/react";
// import { Session } from "next-auth";

type SpotifySession = Session & {
    accessToken: string;
};

export default function Home() {
    const [topItems, setTopItems] = useState([]);
    const { data: session, status }: any = useSession();
    const TYPE = "artists";
    const URL = `https://api.spotify.com/v1/me/top/${TYPE}`;

    const getTopItems = async () => {
        if (session && session.accessToken) {
            try {
                await getTopItems();
            } catch (error) {}
        }
    };

    useEffect(() => {
        console.log(session, status);
        getTopItems();
    }, []);

    return <main className="">{/* <p>{JSON.stringify(session)}</p> */}</main>;
}
