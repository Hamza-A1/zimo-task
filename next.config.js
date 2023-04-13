/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.dummyjson.com',
        port: '',
        pathname: '/docs/products/**',
      },
    ],
  },
};

module.exports = nextConfig;
