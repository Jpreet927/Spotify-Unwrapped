import React from "react";
import { Image } from "@/ts/types/TopArtist";
import { motion } from "framer-motion";
import { bannerContainer, bannerItem } from "@/lib/framer";

const Banner = ({ images }: { images: Image[][] | undefined }) => {
	return (
		<div className="w-full h-[400px] bg-black relative flex overflow-hidden">
			<div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-black/0 z-10"></div>
			{images && (
				<motion.div
					key={images[0][0].url}
					className="flex"
					variants={bannerContainer}
					initial="initial"
					animate="animate"
				>
					{images?.map((img: Image[]) => (
						<motion.img
							key={img[0].url}
							variants={bannerItem}
							src={img[0].url}
							className="w-[20%] object-cover select-none"
						/>
					))}
				</motion.div>
			)}
		</div>
	);
};

export default Banner;
