import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "flagcdn.com" },
            { hostname: 'primervehicles.blr1.digitaloceanspaces.com' },
            { hostname: 'primervehicles.blr1.cdn.digitaloceanspaces.com' },
            { hostname: 'lh3.googleusercontent.com' },
        ],
    },
};

export default withNextIntl(nextConfig);