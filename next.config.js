/** @type {import('next').NextConfig} */
/**  @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
const nextConfig = {
    plugins: [require("daisyui")],
    plugins: [
        require('flowbite/plugin')
    ],
    content: [
        "./node_modules/flowbite/**/*.js"
    ],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./public/**/*.html",
      ],
      plugins: [],
      theme: {},
    }
module.exports = nextConfig
