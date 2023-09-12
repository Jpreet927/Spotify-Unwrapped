import { Image } from "@/ts/types/TopArtist";
import React from "react";

const Banner = ({ images }: { images: Image[][] | undefined }) => {
    console.log(images);

    return (
        <div className="w-full h-[400px] bg-black relative flex overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-black/0"></div>
            <div className="absolute top-0 left-0 h-full w-[50%] bg-gradient-to-r from-black/25 to-black/0"></div>
            <div className="absolute top-0 right-0 h-full w-[50%] bg-gradient-to-l from-black/25 to-black/0"></div>
            {images?.map((img: Image[]) => (
                <img
                    src={img[0].url}
                    className="w-[20%] object-cover select-none"
                />
            ))}
        </div>
    );
};

export default Banner;
