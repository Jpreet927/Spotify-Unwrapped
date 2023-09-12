import { TopTrack } from "@/ts/types/TopTrack";
import Link from "next/link";
import React from "react";

const TopFiveTrack = ({ track, rank }: { track: TopTrack; rank: number }) => {
    return (
        <div className="text-sm">
            <Link href="" target="_blank" className="flex flex-col gap-4">
                <div className="w-32 h-32 overflow-hidden hover:opacity-80 transition-opacity duration-300">
                    <img
                        src={track.album.images[0].url}
                        alt=""
                        className="object-cover"
                    />
                </div>
                <div>
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
