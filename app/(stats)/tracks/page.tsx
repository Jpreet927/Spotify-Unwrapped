"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getTopItems } from "@/lib/spotify";
import { TopItems } from "@/ts/enums/TopItemsType";
import { TopItemsTimeframe } from "@/ts/enums/TopItemsTimeframe";
import { TopArtist } from "@/ts/types/TopArtist";
import { TopTrack } from "@/ts/types/TopTrack";
import Banner from "@/components/stats/Banner";
import TrackList from "@/components/stats/TrackList";

const TopTracksPage = () => {
    const { data: session }: any = useSession();
    const [topTracks, setTopTracks] = useState<TopTrack[]>();
    const [timeframe, setTimeframe] = useState<string>(TopItemsTimeframe.SHORT);
    const LIST_OFFSET = 5; // top 5 listed as boxes, remaining 15 as list

    useEffect(() => {
        const fetchData = async () => {
            if (session && session.accessToken) {
                const data = await getTopItems(
                    TopItems.TRACKS,
                    timeframe,
                    session?.accessToken
                );
                setTopTracks(data.items);
                console.log(data.items);
            }
        };

        fetchData();
    }, [session, timeframe]);

    return (
        <div className="w-full min-h-screen bg-black">
            <Banner
                images={topTracks
                    ?.slice(0, LIST_OFFSET)
                    .map((track) => track.album.images)}
            />
            <h1 className="lg:text-8xl sm:text-7xl text-6xl font-bold lg:ml-[15%] ml-0 -translate-y-16 lg:text-left text-center">
                Your Top Tracks
            </h1>
            <TrackList topTracks={topTracks} setTimeframe={setTimeframe} />
        </div>
    );
};

export default TopTracksPage;
