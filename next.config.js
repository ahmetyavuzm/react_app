/** @type {import('next').NextConfig} */
const nextConfig = {
    //output:"export",
    distDir: "dist",
    images: {
        unoptimized: true,
    },
    apiRequestBodyParse: true,
}

module.exports = nextConfig
