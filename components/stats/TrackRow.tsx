import React from "react";
import { millisecondsToMinutesAndSeconds } from "@/lib/helpers";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
import { Artist, TopTrack } from "@/ts/types/TopTrack";
import { Badge } from "@/components/ui/badge";

const TrackRow = ({ track, rank }: { track: TopTrack; rank: number }) => {
    return (
        <div className="bg-white/0 hover:bg-white/5 transition-colors">
            <div className="flex w-full items-center gap-4 text-sm py-4 px-4">
                <div className="w-10 h-10 overflow-hidden">
                    <img
                        src={track.album.images[0].url}
                        alt={`${track.name} album cover.`}
                        className="object-cover"
                    />
                </div>
                <div className="flex w-full items-center">
                    <div className="w-[60%]">
                        <div className="flex gap-2 items-center">
                            <p>{rank + ". " + track.name}</p>
                            {track.explicit && (
                                <Badge variant="outline">Explicit</Badge>
                            )}
                        </div>
                        {track.artists.map((artist: Artist, index: number) => {
                            if (index === track.artists.length - 1) {
                                return (
                                    <span className="text-text-secondary">
                                        {artist.name}
                                    </span>
                                );
                            } else {
                                return (
                                    <span className="text-text-secondary">
                                        {artist.name + ", "}
                                    </span>
                                );
                            }
                        })}
                    </div>
                    <div className="w-[20%] text-text-secondary">
                        {millisecondsToMinutesAndSeconds(track.duration_ms)}
                    </div>
                    <Link
                        href={track.external_urls.spotify}
                        target="_blank"
                        className="flex gap-1 w-[20%] justify-end items-center text-text-secondary hover:text-text-primary transition-all"
                    >
                        <ArrowOutwardIcon />
                        Go To Track
                    </Link>
                </div>
            </div>
            <div className="w-full h-[1px] bg-white/20"></div>
        </div>
    );
};

export default TrackRow;
