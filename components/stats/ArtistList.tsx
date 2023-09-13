import React from "react";
import ArtistRow from "./ArtistRow";
import TopFiveArtist from "./TopFiveArtist";
import { TopItemsTimeframe } from "@/ts/enums/TopItemsTimeframe";
import { TopArtist } from "@/ts/types/TopArtist";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type props = {
    topArtists: TopArtist[] | undefined;
    setTimeframe: React.Dispatch<React.SetStateAction<string>>;
};

const ArtistList = ({ topArtists, setTimeframe }: props) => {
    const LIST_OFFSET = 5; // top 5 listed as boxes, remaining 15 as list

    return (
        <div className="w-full flex flex-col items-center gap-16">
            <Tabs defaultValue="month">
                <TabsList>
                    <TabsTrigger
                        value="month"
                        onClick={() => setTimeframe(TopItemsTimeframe.SHORT)}
                        className="sm:text-sm text-xs"
                    >
                        Last Month
                    </TabsTrigger>
                    <TabsTrigger
                        value="sixmonths"
                        onClick={() => setTimeframe(TopItemsTimeframe.MEDIUM)}
                        className="sm:text-sm text-xs"
                    >
                        Last 6 Months
                    </TabsTrigger>
                    <TabsTrigger
                        value="alltime"
                        onClick={() => setTimeframe(TopItemsTimeframe.LONG)}
                        className="sm:text-sm text-xs"
                    >
                        All Time
                    </TabsTrigger>
                </TabsList>
            </Tabs>
            <div className="flex justify-center sm:flex-nowrap flex-wrap gap-4 xl:w-[50%] lg:w-[90%] w-[90%]">
                {topArtists
                    ?.slice(0, LIST_OFFSET)
                    .map((artist: TopArtist, index: number) => (
                        <TopFiveArtist artist={artist} rank={index + 1} />
                    ))}
            </div>
            <div className="xl:w-[50%] lg:w-[70%] w-[90%] mb-24">
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
    );
};

export default ArtistList;
