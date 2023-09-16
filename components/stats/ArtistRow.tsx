import React from "react";
import Link from "next/link";
import { convertLowerCaseToPascalCase } from "@/lib/helpers";
import { TopArtist } from "@/ts/types/TopArtist";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";
import { row } from "@/lib/framer";

const ArtistRow = ({ artist, rank }: { artist: TopArtist; rank: number }) => {
    return (
        <motion.div
            className="bg-white/0 hover:bg-white/5 transition-colors w-full"
            variants={row}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="flex w-full items-center gap-4 py-4 px-4 sm:text-sm text-xs">
                <div className="w-10 h-10 overflow-hidden">
                    <img
                        src={artist.images[0].url}
                        alt={`Image of ${artist.name}`}
                        className="object-cover"
                    />
                </div>
                <div className="flex w-full items-center">
                    <div className="sm:w-[33%] w-[66%]">
                        <p>{rank + ". " + artist.name}</p>
                    </div>
                    <div className="sm:w-[33%] w-0 sm:block hidden text-text-secondary">
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
                        className="flex gap-1 w-[33%] justify-end items-center text-text-secondary hover:text-text-primary transition-all"
                    >
                        <ArrowOutwardIcon />
                        Visit Artist
                    </Link>
                </div>
            </div>
            <div className="w-full h-[1px] bg-white/20"></div>
        </motion.div>
    );
};

export default ArtistRow;
