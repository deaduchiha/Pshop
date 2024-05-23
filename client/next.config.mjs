/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { hostname: 's100.divarcdn.com' },
    ],
  },
};

export default nextConfig;
