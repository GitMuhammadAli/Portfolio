/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  
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
  