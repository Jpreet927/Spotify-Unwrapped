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
            className="w-48 grow-0 px-8 py-3 border-white border rounded-full text-white bg-black/10 hover:bg-white hover:text-black font-semibold backdrop-blur-md transition-all"
        >
            Get Started
        </button>
    );
};

export default LoginButton;
