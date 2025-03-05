import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["api.amalys.pro"], // Add the allowed hostname
    },
};

export default nextConfig;
