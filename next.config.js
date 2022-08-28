module.exports = {
  reactStrictMode: true,
  // Since the site is exposted statically, the fancy Next.js image opts need
  // to be turned off.
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};
