import type { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";
import { SITE_CONFIG } from "@/config/site";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
	const t = await getTranslations("common.meta");

	return {
		name: t("title"),
		short_name: SITE_CONFIG.name,
		description: t("description"),
		start_url: "/",
		display: "standalone",
		lang: "pt-PT",
		background_color: SITE_CONFIG.backgroundColor,
		theme_color: SITE_CONFIG.themeColor,
		icons: [
			{ src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
			{ src: "/apple-icon", type: "image/png", sizes: "180x180" },
		],
	};
}
