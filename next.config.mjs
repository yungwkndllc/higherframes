/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["arweave.net"],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

export default nextConfig;
