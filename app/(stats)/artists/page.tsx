"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getTopItems } from "@/lib/spotify";
import { TopItems } from "@/ts/enums/TopItemsType";
import { TopItemsTimeframe } from "@/ts/enums/TopItemsTimeframe";
import { TopArtist } from "@/ts/types/TopArtist";
import Banner from "@/components/stats/Banner";
import ArtistList from "@/components/stats/ArtistList";

const TopArtistsPage = () => {
    const { data: session }: any = useSession();
    const [topArtists, setTopArtists] = useState<TopArtist[]>();
    const [timeframe, setTimeframe] = useState<string>(TopItemsTimeframe.SHORT);
    const LIST_OFFSET = 5; // top 5 listed as boxes, remaining 15 as list

    useEffect(() => {
        const fetchData = async () => {
            if (session && session.accessToken) {
                const data = await getTopItems(
                    TopItems.ARTISTS,
                    timeframe,
                    session?.accessToken
                );
                setTopArtists(data.items);
                console.log(data.items);
            }
        };

        fetchData();
    }, [session, timeframe]);

    return (
        <div className="w-full min-h-screen bg-black">
            <Banner
                images={topArtists
                    ?.slice(0, LIST_OFFSET)
                    .map((artist) => artist.images)}
            />
            <h1 className="lg:text-8xl sm:text-7xl text-6xl font-bold lg:ml-[15%] ml-0 -translate-y-16 lg:text-left text-center">
                Your Top Artists
            </h1>
            <ArtistList topArtists={topArtists} setTimeframe={setTimeframe} />
        </div>
    );
};

export default TopArtistsPage;
