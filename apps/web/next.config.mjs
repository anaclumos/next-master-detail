/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.namu.wiki',
      },
    ],
  },
  // experimental: {
  //   ppr: true,
  // },
}

export default nextConfig
