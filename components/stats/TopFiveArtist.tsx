import { TopArtist } from "@/ts/types/TopArtist";
import Link from "next/link";
import React from "react";

const TopFiveArtist = ({
    artist,
    rank,
}: {
    artist: TopArtist;
    rank: number;
}) => {
    return (
        <div className="text-sm md:w-32 w-20">
            <Link
                href={artist.external_urls.spotify}
                target="_blank"
                className="flex flex-col gap-4"
            >
                <div className="md:w-32 md:h-32 w-20 h-20 overflow-hidden hover:opacity-80 transition-opacity duration-300">
                    <img
                        src={artist.images[0].url}
                        alt={`Image of ${artist.name}`}
                        className="object-cover"
                    />
                </div>
                <span className="sm:text-sm text-xs">{`${rank}. ${artist.name}`}</span>
            </Link>
        </div>
    );
};

export default TopFiveArtist;
