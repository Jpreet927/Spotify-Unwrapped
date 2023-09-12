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
            <Tabs defaultValue="month" className="">
                <TabsList>
                    <TabsTrigger
                        value="month"
                        onClick={() => setTimeframe(TopItemsTimeframe.SHORT)}
                    >
                        Last Month
                    </TabsTrigger>
                    <TabsTrigger
                        value="sixmonths"
                        onClick={() => setTimeframe(TopItemsTimeframe.MEDIUM)}
                    >
                        Last 6 Months
                    </TabsTrigger>
                    <TabsTrigger
                        value="alltime"
                        onClick={() => setTimeframe(TopItemsTimeframe.LONG)}
                    >
                        All Time
                    </TabsTrigger>
                </TabsList>
            </Tabs>
            <div className="flex justify-between w-[50%]">
                {topArtists
                    ?.slice(0, LIST_OFFSET)
                    .map((artist: TopArtist, index: number) => (
                        <TopFiveArtist artist={artist} rank={index + 1} />
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
    );
};

export default ArtistList;
