/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_ID: process.env.APP_ID,
    APP_SECRET: process.env.APP_SECRET,
  },
};

export default nextConfig;
