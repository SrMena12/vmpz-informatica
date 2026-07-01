/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90, 95, 100],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
