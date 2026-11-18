import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
	requestConfig: "./i18n/request.ts",
	experimental: {
		createMessagesDeclaration: [
			"./locales/pt/common.json",
			"./locales/pt/home.json",
			"./locales/pt/about.json",
			"./locales/pt/services.json",
			"./locales/pt/method.json",
			"./locales/pt/tour.json",
			"./locales/pt/team.json",
			"./locales/pt/faq.json",
			"./locales/pt/careers.json",
			"./locales/pt/contact.json",
			"./locales/pt/legal.json",
		],
	},
});

const nextConfig: NextConfig = {
	cacheComponents: true,
	partialPrefetching: true,
	turbopack: {
		rules: {
			"*.css": {
				loaders: ["@tailwindcss/turbopack"],
				as: "*.css",
			},
		},
	},
};

export default withNextIntl(nextConfig);
