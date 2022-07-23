/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: false,
    },
  },
}
module.exports = nextConfig
