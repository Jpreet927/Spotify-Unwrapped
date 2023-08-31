"use client";

import React from "react";
import { signIn } from "next-auth/react";

const LoginButton = () => {
    const handleSignIn = () => {
        signIn("spotify", { callbackUrl: "/" });
    };

    return <button onClick={() => handleSignIn()}>Login</button>;
};

export default LoginButton;
