import React from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import spotifyLogo from "@/assets/spotify logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
	const { data: session }: any = useSession();

	return (
		<div className="w-full flex justify-between py-12 md:px-24 px-8 absolute top-0 left-0 z-10">
			<Image
				src={spotifyLogo}
				alt="Spotify Logo"
				height={36}
				style={{ objectFit: "contain" }}
			/>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Avatar>
						<AvatarImage src={session?.user.image} />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="flex gap-1 items-center">
						<PersonOutlineOutlinedIcon className="h-[18px]" />
						Profile
					</DropdownMenuItem>
					<DropdownMenuItem
						className="flex gap-1 items-center"
						onClick={() =>
							signOut({
								callbackUrl: "/login",
							})
						}
					>
						<LogoutIcon className="h-[18px]" />
						Logout
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default Header;
