/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		minimumCacheTTL: process.env.NODE_ENV === 'production' ? 60 * 60 * 24 * 30 : 0,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'unsplash.it',
				// port: '',
				// pathname: '/**',
			},
			// {
			// 	protocol: 'https',
			// 	hostname: 'example.com',
			// 	port: '',
			// 	pathname: '/account123/**',
			// },
		],
	},
}

module.exports = nextConfig
