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
      {
        protocol: "https",
        hostname: "www.coursera.org",
      },
      {
        protocol: "https",
        hostname: "www.udemy.com",
      },
      {
        protocol: "https",
        hostname: "codedamn.com",
      },
      {
        protocol: "https",
        hostname: "www.freecodecamp.org",
      },
      {
        protocol: "https",
        hostname: "coursera.org",
      },
    ],
  },
};

export default nextConfig;
