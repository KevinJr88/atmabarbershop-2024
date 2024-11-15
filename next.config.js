/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: process.env.BASE_PATH,
};

module.exports = nextConfig;
