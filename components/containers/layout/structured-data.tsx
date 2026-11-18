import { getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/containers/seo/json-ld";
import { SITE_CONFIG } from "@/config/site";
import { AREA_SLUGS } from "@/models/constants/areas";
import { areaRoute } from "@/models/constants/routes";

export async function StructuredData() {
	const [t, tServices] = await Promise.all([
		getTranslations("common"),
		getTranslations("services.areas"),
	]);
	const businessId = `${SITE_CONFIG.url}/#empresa`;
	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "HousekeepingService",
				"@id": businessId,
				name: SITE_CONFIG.name,
				legalName: SITE_CONFIG.legalName,
				description: t("meta.description"),
				slogan: `${t("brand.signature")} ${t("brand.signatureNuance")}`,
				url: SITE_CONFIG.url,
				logo: `${SITE_CONFIG.url}/icon.svg`,
				image: `${SITE_CONFIG.url}/og.jpg`,
				telephone: SITE_CONFIG.phone,
				email: SITE_CONFIG.email,
				foundingDate: String(SITE_CONFIG.foundingYear),
				areaServed: { "@type": "Country", name: "Portugal" },
				founder: { "@type": "Person", name: "José Miguel", jobTitle: "CEO" },
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: t("nav.services"),
					itemListElement: AREA_SLUGS.map((slug) => ({
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: tServices(`${slug}.title`),
							description: tServices(`${slug}.intro`),
							url: `${SITE_CONFIG.url}${areaRoute(slug)}`,
						},
					})),
				},
			},
			{
				"@type": "WebSite",
				"@id": `${SITE_CONFIG.url}/#site`,
				name: SITE_CONFIG.name,
				url: SITE_CONFIG.url,
				inLanguage: "pt-PT",
				publisher: { "@id": businessId },
			},
		],
	};

	return <JsonLd data={schema} />;
}
