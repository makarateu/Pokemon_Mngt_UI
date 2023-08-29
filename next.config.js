/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: ['platform-lookaside.fbsbx.com', 'pixabay.com', 'scrapeme.live'],
  },
};

module.exports = nextConfig;
