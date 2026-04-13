/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
// https://i.ibb.co.com/cSBhwLzm/image.png
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },

};

export default nextConfig;
