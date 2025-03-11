/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["x.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com", // Twitter's image CDN
      },
    ],
  },
};

export default nextConfig;
