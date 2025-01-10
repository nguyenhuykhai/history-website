import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https' as const,
                hostname: '*',
            },
        ],
    },
    // experimental: {
    //     ppr: true,
    // },
    devIndicators: {
        appIsrStatus: true,
        buildActivity: true,
        buildActivityPosition: 'bottom-right'
    }
};
 
export default withNextIntl(nextConfig);