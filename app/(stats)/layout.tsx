"use client";

import Footer from "@/components/footer";
import Header from "@/components/home/Header";
import Sidebar from "@/components/stats/Sidebar";
import React from "react";

const StatsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex bg-black w-screen">
            <Sidebar />
            <div className="relative w-full">
                <Header />
                {children}
                <Footer />
            </div>
            ;
        </div>
    );
};

export default StatsLayout;
