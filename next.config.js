/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["yourdomain.com", "vercel.app"], // Add domains you're using images from
  },
};

module.exports = nextConfig;
