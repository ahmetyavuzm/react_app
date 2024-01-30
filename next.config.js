/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    distDir: "dist",
    images: {
        unoptimized: true,
    },

    //basePath: '/next_app', // GitHub repository adınız
    //assetPrefix: '/next_app/', // 
}

module.exports = nextConfig
