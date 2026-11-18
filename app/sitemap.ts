import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";
import { AREA_SLUGS } from "@/models/constants/areas";
import { areaRoute, ROUTES } from "@/models/constants/routes";

const LEGAL_PATHS: readonly string[] = [
	ROUTES.privacy,
	ROUTES.cookies,
	ROUTES.terms,
];

function priorityOf(path: string) {
	if (path === ROUTES.home) return 1;
	if (LEGAL_PATHS.includes(path)) return 0.2;
	return 0.8;
}

export default function sitemap(): MetadataRoute.Sitemap {
	const paths = [
		...Object.values(ROUTES),
		...AREA_SLUGS.map((slug) => areaRoute(slug)),
	];

	return paths.map((path) => ({
		url: `${SITE_CONFIG.url}${path === ROUTES.home ? "" : path}`,
		changeFrequency: LEGAL_PATHS.includes(path) ? "yearly" : "monthly",
		priority: priorityOf(path),
	}));
}
