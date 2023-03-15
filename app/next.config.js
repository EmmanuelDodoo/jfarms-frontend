/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com',],
    loader: 'default',
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
