import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";
import { AREA_SLUGS } from "@/models/constants/areas";
import { areaRoute, ROUTES } from "@/models/constants/routes";

export default function sitemap(): MetadataRoute.Sitemap {
	const paths = [
		...Object.values(ROUTES),
		...AREA_SLUGS.map((slug) => areaRoute(slug)),
	];

	return paths.map((path) => ({
		url: `${SITE_CONFIG.url}${path === "/" ? "" : path}`,
		priority: path === "/" ? 1 : 0.7,
	}));
}
