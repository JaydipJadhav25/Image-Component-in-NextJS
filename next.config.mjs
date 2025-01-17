/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images :{
    remotePatterns :[
      {
        protocol : 'https',
        hostname : 'res.cloudinary.com'
      },
      {
        protocol : 'https',
        hostname : '*.google.com'
      }
    ]
  }
};

export default nextConfig;
