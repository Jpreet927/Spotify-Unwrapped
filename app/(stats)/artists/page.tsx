"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getTopItems } from "@/lib/spotify";
import { TopItems } from "@/ts/enums/TopItemsType";
import { TopItemsTimeframe } from "@/ts/enums/TopItemsTimeframe";
import { TopArtist } from "@/ts/types/TopArtist";
import Banner from "@/components/stats/Banner";
import ArtistRow from "@/components/stats/ArtistRow";
import TopFiveItem from "@/components/stats/TopFiveItem";

const TopArtistsPage = () => {
    const { data: session }: any = useSession();
    const [topArtists, setTopArtists] = useState<TopArtist[]>();
    const LIST_OFFSET = 5; // top 5 listed as boxes, remaining 15 as list

    useEffect(() => {
        const fetchData = async () => {
            if (session && session.accessToken) {
                const data = await getTopItems(
                    TopItems.ARTISTS,
                    TopItemsTimeframe.SHORT,
                    session?.accessToken
                );
                setTopArtists(data.items);
                console.log(data.items);
            }
        };

        fetchData();
    }, [session]);

    return (
        <div className="w-screen min-h-screen bg-black">
            <Banner
                images={topArtists?.slice(0, 5).map((artist) => artist.images)}
            />
            <h1 className="text-8xl font-bold ml-[15%] -translate-y-16">
                Your Top Artists
            </h1>
            <div className="w-full flex flex-col items-center gap-16">
                <div className="flex justify-between w-[50%]">
                    {topArtists
                        ?.slice(0, 5)
                        .map((artist: TopArtist, index: number) => (
                            <TopFiveItem artist={artist} rank={index + 1} />
                        ))}
                </div>
                <div className="w-[50%] mb-24">
                    {topArtists
                        ?.slice(LIST_OFFSET)
                        .map((artist: TopArtist, index: number) => (
                            <ArtistRow
                                key={artist.id}
                                artist={artist}
                                rank={index + LIST_OFFSET + 1}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default TopArtistsPage;
