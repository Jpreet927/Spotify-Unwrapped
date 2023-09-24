import AuthProvider from "@/app/providers";
import React from "react";

const LayoutClient = ({ children }: { children: React.ReactNode }) => {
    return <AuthProvider>{children}</AuthProvider>;
};

export default LayoutClient;
