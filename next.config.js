/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Since the site is exposted statically, the fancy Next.js image opts need
  // to be turned off.
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
  output: "export",
};

module.exports = nextConfig;
