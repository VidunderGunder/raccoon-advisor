const path = require("path");
const styledConfig = require(path.join(__dirname, "styled.config.js"));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  compiler: {
    styledComponents: styledConfig,
  },
  // webpack: (config) => {
  //   return config;
  // },
};

module.exports = nextConfig;
