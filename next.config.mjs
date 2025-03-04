/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true ,
  
    async rewrites() {
      return [
        // {
        //     source: '/',
        //     destination: '/pages/main',
        //   },
      ];
    },
  };
  
  export default nextConfig;
  
