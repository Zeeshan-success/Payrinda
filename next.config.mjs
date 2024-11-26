/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.payrinda.io",
      },
    ],
  },
};

export default nextConfig;
