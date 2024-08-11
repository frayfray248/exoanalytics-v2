/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains; preload',
                    },
                    // {
                    //     key: 'Content-Security-Policy',
                    //     value: "default-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; frame-ancestors 'none';",
                    // },
                    {
                        key: 'X-Robots-Tag',
                        value: 'index, follow',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'no-referrer-when-downgrade',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'max-age=3600, public',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
