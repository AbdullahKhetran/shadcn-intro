/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.rawg.io',
                // port: '',
                // pathname: '/account123/**',
            },
        ],
    },
}

module.exports = nextConfig
