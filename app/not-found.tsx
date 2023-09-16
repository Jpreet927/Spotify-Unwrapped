import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-login bg-cover">
            <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-12 gap-4 z-10 xl:w-[33%] lg:w-[50%] md:w-[66%] w-[75%]">
                <h1 className="text-8xl font-bold">404</h1>
                <div className="h-[125px] w-[1px] bg-white/50 sm:block hidden"></div>
                <div className="flex flex-col gap-4 sm:items-start items-center">
                    <p className="sm:text-left text-center">
                        Hey, you might be lost. The page you're looking for
                        doesn't exist.
                    </p>
                    <Link href="/">
                        <button className="px-4 py-3 bg-white rounded-full text-black font-bold text-xs hover:bg-gray-200 hover:-translate-y-1 transition ease-in-out duration-300">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
