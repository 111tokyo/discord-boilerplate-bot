/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_ID: process.env.APP_ID,
    APP_SECRET: process.env.APP_SECRET,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
