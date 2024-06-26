/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
		domains: ['localhost']
	},
	output: "standalone"
};

module.exports = nextConfig;

