/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'cdn.pixabay.com', 'pixabay.com', 'picsum.photos'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ]
  }
};

module.exports = nextConfig;