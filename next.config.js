/** @type {import('next').NextConfig} */
/**  @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.hangoverhops.com",
        port: "",
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "ae01.alicdn.com",
        port: "",
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "www.2tall.com",
        port: "",
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },
};
module.exports = nextConfig;
