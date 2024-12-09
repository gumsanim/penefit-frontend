/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true, // Allows Next.js to process files outside the app's root
    turbo: {},
  },
  transpilePackages: ["@repo/components", "@repo/styles"],
  webpack: (config) => {
    if (config.module?.rules) {
      config.module = config.module || {};
      config.module.rules = config.module.rules || [];

      const imageRule = config.module.rules.find((rule) =>
        rule?.["test"]?.test(".svg"),
      );
      if (imageRule) {
        imageRule["exclude"] = /\.svg$/;
      }

      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    }

    return config;
  },
};

export default nextConfig;
