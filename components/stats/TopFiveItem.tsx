import { TopArtist } from "@/ts/types/TopArtist";
import React from "react";

const TopFiveItem = ({ artist, rank }: { artist: TopArtist; rank: number }) => {
    return (
        <div className="text-sm flex flex-col gap-4">
            <div className="w-32 h-32 overflow-hidden">
                <img
                    src={artist.images[0].url}
                    alt={`Image of ${artist.name}`}
                    className="object-cover"
                />
            </div>
            <span>{`${rank}. ${artist.name}`}</span>
        </div>
    );
};

export default TopFiveItem;
