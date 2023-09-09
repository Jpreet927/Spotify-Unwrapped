import React from "react";
import LoginButton from "@/components/login/LoginButton";
import Image from "next/image";
import spotifyLogo from "@/assets/spotify logo.png";
import jpreetLogo from "@/assets/JpreetLogo.png";

const LoginPage = () => {
    return (
        <div className="h-screen w-screen bg-login bg-cover bg-center py-16 px-48 relative flex items-center">
            <div className="flex justify-between w-full absolute top-0 left-0 py-16 px-48">
                <Image
                    src={spotifyLogo}
                    alt="Spotify Logo"
                    height={36}
                    style={{ objectFit: "contain" }}
                />
                <Image
                    src={jpreetLogo}
                    alt="Jpreet Logo"
                    height={60}
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div className="flex flex-col gap-6">
                <h1 className="text-8xl font-bold text-white">
                    Spotify Unwrapped
                </h1>
                <LoginButton />
            </div>
        </div>
    );
};

export default LoginPage;
