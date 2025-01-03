/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io'], // Add the hostname of the external image
  },
  experimental: {
    appDir: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
