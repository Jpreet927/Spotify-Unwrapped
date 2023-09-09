import React from "react";
import Image from "next/image";
import spotifyLogo from "@/assets/spotify logo.png";
import Avatar from "./Avatar";

const Header = () => {
    return (
        <div className="w-full flex justify-between py-12 px-60 absolute top-0 left-0">
            <Image
                src={spotifyLogo}
                alt="Spotify Logo"
                height={36}
                style={{ objectFit: "contain" }}
            />
            <Avatar />
        </div>
    );
};

export default Header;
