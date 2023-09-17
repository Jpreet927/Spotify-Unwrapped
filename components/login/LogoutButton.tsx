"use client";

import React from "react";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
	const handleSignIn = () => {
		signOut();
	};

	return <button onClick={() => handleSignIn()}>Log Out</button>;
};

export default LogoutButton;
