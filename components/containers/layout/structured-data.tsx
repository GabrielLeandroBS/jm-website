import { getTranslations } from "next-intl/server";
import { SITE_CONFIG } from "@/config/site";

export async function StructuredData() {
	const t = await getTranslations("common.meta");
	const schema = {
		"@context": "https://schema.org",
		"@type": "HousekeepingService",
		name: SITE_CONFIG.name,
		legalName: SITE_CONFIG.legalName,
		description: t("description"),
		url: SITE_CONFIG.url,
		telephone: SITE_CONFIG.phone,
		email: SITE_CONFIG.email,
		foundingDate: String(SITE_CONFIG.foundingYear),
		areaServed: { "@type": "Country", name: "Portugal" },
		founder: { "@type": "Person", name: "José Miguel", jobTitle: "CEO" },
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD built from constants
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}
