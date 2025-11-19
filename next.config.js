const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    // includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import '~@/styles/init.scss';`,
  },
};

module.exports = nextConfig;
