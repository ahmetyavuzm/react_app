/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    distDir: "dist",
    images: {
        unoptimized: true,
    },

    //basePath: '/next_app', // GitHub repository adınız
    //assetPrefix: '/next_app/', // 

    async headers() {
        return [
            {
                // Tüm kaynaklara erişime izin ver
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig
