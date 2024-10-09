/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  
    async rewrites() {
      return [
        {
            source: '/final',
            destination: '/pages/main',
          },
        {
            source: '/porfolio',
            destination: '/pages/port',
          },
        {
            source: '/porfolio2',
            destination: '/pages/sec',
          },
        {
            source: '/porfolio3',
            destination: '/pages/third',
          },
      
      ];
    },
  };
  
  export default nextConfig;
  