import React from "react";
import { convertLowerCaseToPascalCase } from "@/lib/helpers";
import { TopArtist } from "@/ts/types/TopArtist";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";

const ArtistRow = ({ artist, rank }: { artist: TopArtist; rank: number }) => {
    return (
        <>
            <div className="flex w-full items-center gap-4 text-sm">
                <div className="w-10 h-10 overflow-hidden">
                    <img
                        src={artist.images[0].url}
                        alt={`Image of ${artist.name}`}
                        className="object-cover"
                    />
                </div>
                <div className="flex w-full items-center">
                    <div className="w-[33%]">
                        <p>{rank + ". " + artist.name}</p>
                    </div>
                    <div className="w-[33%]">
                        {artist.genres
                            .slice(0, 3)
                            .map((genre: string, index: number) => {
                                if (
                                    index === artist.genres.length - 1 ||
                                    index === 2
                                ) {
                                    return (
                                        <span key={index}>
                                            {convertLowerCaseToPascalCase(
                                                genre
                                            )}
                                        </span>
                                    );
                                } else {
                                    return (
                                        <span key={index}>
                                            {convertLowerCaseToPascalCase(
                                                genre
                                            ) + ", "}
                                        </span>
                                    );
                                }
                            })}
                    </div>
                    <Link
                        href={artist.external_urls.spotify}
                        target="_blank"
                        className="flex gap-1 w-[33%] justify-end items-center"
                    >
                        <ArrowOutwardIcon />
                        Visit Artist
                    </Link>
                </div>
            </div>
            <div className="w-full h-[1px] bg-white/20 my-4"></div>
        </>
    );
};

export default ArtistRow;
