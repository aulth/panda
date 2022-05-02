/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    mongodburl:process.env.mongodburl,
    key:process.env.key
  }
}

module.exports = nextConfig
