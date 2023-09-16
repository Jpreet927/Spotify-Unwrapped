"use client";

import { useEffect, useState } from "react";
import { TopItemsTimeframe } from "@/ts/enums/TopItemsTimeframe";
import { TopTrack } from "@/ts/types/TopTrack";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import TopFiveTrack from "./TopFiveTrack";
import TrackRow from "./TrackRow";
import { topFiveContainer, topFiveItem } from "@/lib/framer";

type props = {
    topTracks: TopTrack[] | undefined;
    setTimeframe: React.Dispatch<React.SetStateAction<string>>;
};

const TrackList = ({ topTracks, setTimeframe }: props) => {
    const LIST_OFFSET = 5; // top 5 listed as boxes, remaining 15 as list
    const [audio, setAudio] = useState<HTMLAudioElement>();

    useEffect(() => {
        setAudio(new Audio()); // only call client
    }, []);

    const startPreviewAudio = () => {
        audio!.play();
    };

    const stopPreviewAudio = () => {
        audio!.pause();
    };

    return (
        <div className="w-full flex flex-col items-center gap-16 mt-20">
            <Tabs defaultValue="month" className="">
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
            {topTracks && (
                <motion.div
                    className="flex justify-center sm:flex-nowrap flex-wrap gap-4 xl:w-[50%] lg:w-[90%] w-[90%]"
                    variants={topFiveContainer}
                    initial="initial"
                    animate="animate"
                >
                    {topTracks
                        ?.slice(0, LIST_OFFSET)
                        .map((track: TopTrack, index: number) => (
                            <motion.div
                                variants={topFiveItem}
                                key={track.uri}
                                initial="initial"
                                animate="animate"
                            >
                                <TopFiveTrack
                                    key={index}
                                    track={track}
                                    rank={index + 1}
                                    startPreviewAudio={startPreviewAudio}
                                    stopPreviewAudio={stopPreviewAudio}
                                    audio={audio}
                                />
                            </motion.div>
                        ))}
                </motion.div>
            )}
            <div className="xl:w-[50%] lg:w-[70%] w-[90%] mb-24">
                {topTracks
                    ?.slice(LIST_OFFSET)
                    .map((track: TopTrack, index: number) => (
                        <TrackRow
                            key={track.id}
                            track={track}
                            startPreviewAudio={startPreviewAudio}
                            stopPreviewAudio={stopPreviewAudio}
                            audio={audio}
                            rank={index + LIST_OFFSET + 1}
                        />
                    ))}
            </div>
        </div>
    );
};

export default TrackList;
