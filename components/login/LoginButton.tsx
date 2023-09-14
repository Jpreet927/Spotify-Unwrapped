"use client";

import React from "react";
import { signIn } from "next-auth/react";

const LoginButton = () => {
    const handleSignIn = () => {
        signIn("spotify", { callbackUrl: "/" });
    };

    return (
        <button
            onClick={() => handleSignIn()}
            className="md:w-48 w-36 grow-0 md:px-8 px-2 py-3 md:text-sm text-xs border-white border rounded-full text-white bg-black/10 hover:bg-white hover:text-black font-semibold backdrop-blur-md transition-all"
        >
            Get Started
        </button>
    );
};

export default LoginButton;
