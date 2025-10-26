import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Add support for YAML files
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader'
    });
    return config;
  },
};

export default nextConfig;
