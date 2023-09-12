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
        <div className="text-sm">
            <Link
                href={artist.external_urls.spotify}
                target="_blank"
                className="flex flex-col gap-4"
            >
                <div className="w-32 h-32 overflow-hidden hover:opacity-80 transition-opacity duration-300">
                    <img
                        src={artist.images[0].url}
                        alt={`Image of ${artist.name}`}
                        className="object-cover"
                    />
                </div>
                <span>{`${rank}. ${artist.name}`}</span>
            </Link>
        </div>
    );
};

export default TopFiveArtist;
