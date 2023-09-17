import React, { useState } from "react";
import Link from "next/link";
import { TopTrack } from "@/ts/types/TopTrack";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

type props = {
	track: TopTrack;
	rank: number;
	audio: HTMLAudioElement | undefined;
	startPreviewAudio: () => void;
	stopPreviewAudio: () => void;
};

const TopFiveTrack = ({
	track,
	rank,
	audio,
	startPreviewAudio,
	stopPreviewAudio,
}: props) => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	const handleAudio = () => {
		audio!.src = track.preview_url;

		if (isPlaying) {
			setIsPlaying(false);
			stopPreviewAudio();
		} else {
			setIsPlaying(true);
			startPreviewAudio();
		}
	};
	return (
		<div className="text-sm md:w-32 w-20 flex flex-col gap-4">
			<div className="md:w-32 md:h-32 w-20 h-20 overflow-hidden hover:opacity-80 transition-opacity duration-300 relative">
				<div
					className="w-full h-full absolute top-0 left-0 opacity-0 hover:opacity-100 bg-black/50 flex items-center justify-center cursor-pointer transition-opacity duration-300"
					onClick={() => handleAudio()}
				>
					{" "}
					{isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
				</div>
				<img src={track.album.images[0].url} alt="" className="object-cover" />
			</div>
			<Link href="" target="_blank" className="flex flex-col gap-4">
				<div className="sm:text-sm text-xs">
					<p>{`${rank}. ${track.name}`}</p>
					<p className="text-text-secondary">{track.artists[0].name}</p>
				</div>
			</Link>
		</div>
	);
};

export default TopFiveTrack;
