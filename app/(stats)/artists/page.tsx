"use client";

import Banner from "@/components/stats/Banner";
import React, { useState, useEffect } from "react";
import { getTopItems } from "@/lib/spotify";
import { TopItems } from "@/ts/enums/TopItemsType";
import { TopItemsTimeframe } from "@/ts/enums/TopItemsTimeframe";
import { useSession } from "next-auth/react";

const TopArtistsPage = () => {
    const { data: session }: any = useSession();
    const [topArtists, setTopArtists] = useState();

    const getTopArtists = async () => {};

    useEffect(() => {
        const fetchData = async () => {
            if (session && session.accessToken) {
                const data = await getTopItems(
                    TopItems.ARTISTS,
                    TopItemsTimeframe.SHORT,
                    session?.accessToken
                );
                console.log(data);
                setTopArtists(data);
            }
        };

        fetchData();
    }, [session]);

    return (
        <div className="w-screen min-h-screen bg-black">
            <Banner />
            <h1 className="text-7xl font-bold">Your Top Artists</h1>
        </div>
    );
};

export default TopArtistsPage;
