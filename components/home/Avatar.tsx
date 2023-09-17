import React from "react";
import { useSession } from "next-auth/react";

const Avatar = () => {
	const { data: session }: any = useSession();

	return (
		<div className="rounded-full w-12 h-12 bg-black overflow-hidden">
			<img
				src={session?.user.image}
				alt=""
				className="w-full h-full object-cover opacity-100 hover:opacity-80 transition-opacity cursor-pointer"
			/>
		</div>
	);
};

export default Avatar;
