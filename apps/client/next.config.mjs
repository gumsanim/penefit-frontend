/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true, // Allows Next.js to process files outside the app's root
  },
};

export default nextConfig;
