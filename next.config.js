/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    distDir: "dist",
    images: {
        unoptimized: true,
    },
    experimental: {
        images: true, // Add this line if you want to enable the experimental images feature
    },
}

module.exports = nextConfig
