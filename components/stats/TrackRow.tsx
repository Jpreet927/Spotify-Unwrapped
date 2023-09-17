"use client";

import React, { useEffect, useState } from "react";
import { millisecondsToMinutesAndSeconds } from "@/lib/helpers";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Link from "next/link";
import { Artist, TopTrack } from "@/ts/types/TopTrack";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { row } from "@/lib/framer";

type props = {
    track: TopTrack;
    rank: number;
    audio: HTMLAudioElement | undefined;
    startPreviewAudio: () => void;
    stopPreviewAudio: () => void;
};

const TrackRow = ({
    track,
    rank,
    audio,
    startPreviewAudio,
    stopPreviewAudio,
}: props) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const handleAudio = () => {
        audio!.src = track.preview_url;

        if (isPlaying) {
            setIsPlaying(false);
            stopPreviewAudio();
        } else {
            setIsPlaying(true);
            startPreviewAudio();
        }
    };

    return (
        <motion.div
            className="bg-white/0 hover:bg-white/5 transition-colors"
            variants={row}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="flex w-full items-center gap-4 sm:text-sm text-xs py-4 px-4">
                <div className="w-10 h-10 overflow-hidden relative">
                    <div
                        className="w-full h-full absolute top-0 left-0 opacity-0 hover:opacity-100 bg-black/50 flex items-center justify-center cursor-pointer transition-opacity duration-300"
                        onClick={() => handleAudio()}
                    >
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </div>
                    <img
                        src={track.album.images[0].url}
                        alt={`${track.name} album cover.`}
                        className="object-cover"
                    />
                </div>
                <div className="flex w-full items-center">
                    <div className="sm:w-[60%] w-[66%]">
                        <div className="flex gap-2 items-center">
                            <p>{rank + ". " + track.name}</p>
                            {track.explicit && (
                                <Badge
                                    variant="outline"
                                    className="sm:block hidden"
                                >
                                    Explicit
                                </Badge>
                            )}
                        </div>
                        {track.artists.map((artist: Artist, index: number) => {
                            if (index === track.artists.length - 1) {
                                return (
                                    <span className="text-text-secondary" key="artist">
                                        {artist.name}
                                    </span>
                                );
                            } else {
                                return (
                                    <span className="text-text-secondary" key="artist">
                                        {artist.name + ", "}
                                    </span>
                                );
                            }
                        })}
                    </div>
                    <div className="w-[20%] text-text-secondary sm:block hidden">
                        {millisecondsToMinutesAndSeconds(track.duration_ms)}
                    </div>
                    <Link
                        href={track.external_urls.spotify}
                        target="_blank"
                        className="flex gap-1 sm:w-[20%] w-[33%] justify-end items-center text-text-secondary hover:text-text-primary transition-all"
                    >
                        <ArrowOutwardIcon />
                        Go To Track
                    </Link>
                </div>
            </div>
            <div className="w-full h-[1px] bg-white/20"></div>
        </motion.div>
    );
};

export default TrackRow;
