/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [{ hostname: "s100.divarcdn.com" }],
  },
  async rewrites() {
    return [
      {
        source: "/auth/send-otp", // Matches requests to /auth/send-otp on frontend
        destination: "http://localhost:3000/auth/send-otp", // Forwards them to backend
      },
    ];
  },
};

export default nextConfig;
