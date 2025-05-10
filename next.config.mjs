/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['placehold.co'],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'placehold.co',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;