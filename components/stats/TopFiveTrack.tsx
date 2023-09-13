import { TopTrack } from "@/ts/types/TopTrack";
import Link from "next/link";
import React from "react";

const TopFiveTrack = ({ track, rank }: { track: TopTrack; rank: number }) => {
    return (
        <div className="text-sm md:w-32 w-20">
            <Link href="" target="_blank" className="flex flex-col gap-4">
                <div className="md:w-32 md:h-32 w-20 h-20 overflow-hidden hover:opacity-80 transition-opacity duration-300">
                    <img
                        src={track.album.images[0].url}
                        alt=""
                        className="object-cover"
                    />
                </div>
                <div className="sm:text-sm text-xs">
                    <p>{`${rank}. ${track.name}`}</p>
                    <p className="text-text-secondary">
                        {track.artists[0].name}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default TopFiveTrack;
