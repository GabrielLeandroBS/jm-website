import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/containers/common/cta-band";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { JsonLd } from "@/components/containers/seo/json-ld";
import { AreaApproach } from "@/components/containers/services/area-approach";
import { AreaChallenge } from "@/components/containers/services/area-challenge";
import { AreaDetail } from "@/components/containers/services/area-detail";
import { AreaFaq } from "@/components/containers/services/area-faq";
import { AreaGrid } from "@/components/containers/services/area-grid";
import { AreaHero } from "@/components/containers/services/area-hero";
import { IncludedSection } from "@/components/containers/services/included-section";
import { SITE_CONFIG } from "@/config/site";
import { isAreaSlug } from "@/lib/utils/area";
import { getOgAlt } from "@/lib/utils/og-alt";
import { buildPageMetadata } from "@/lib/utils/page-metadata";
import { buildBreadcrumbList, buildFaqPage } from "@/lib/utils/structured-data";
import { AREA_SLUGS } from "@/models/constants/areas";
import { AREA_FAQ_KEYS } from "@/models/constants/content-keys";
import { areaRoute, ROUTES } from "@/models/constants/routes";
import type { AreaPageProps } from "@/models/interfaces/services";

export function generateStaticParams() {
	return AREA_SLUGS.map((area) => ({ area }));
}

export async function generateMetadata({
	params,
}: AreaPageProps): Promise<Metadata> {
	const { area } = await params;
	if (!isAreaSlug(area)) return {};
	const t = await getTranslations("services");
	return buildPageMetadata({
		title: t("labels.metaTitle", {
			area: t(`areas.${area}.name`),
			title: t(`areas.${area}.title`),
		}),
		description: t(`areas.${area}.intro`),
		path: areaRoute(area),
		imageAlt: await getOgAlt(),
	});
}

export default async function AreaPage({ params }: AreaPageProps) {
	const { area } = await params;
	if (!isAreaSlug(area)) notFound();

	const [t, tCommon, tCta] = await Promise.all([
		getTranslations("services"),
		getTranslations("common"),
		getTranslations("home.cta"),
	]);

	const areaUrl = `${SITE_CONFIG.url}${areaRoute(area)}`;
	const areaName = `j&m. ${t(`areas.${area}.name`)}`;
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				name: t(`areas.${area}.title`),
				alternateName: areaName,
				description: t(`areas.${area}.intro`),
				url: areaUrl,
				areaServed: { "@type": "Country", name: "Portugal" },
				provider: { "@id": `${SITE_CONFIG.url}/#empresa` },
			},
			buildBreadcrumbList([
				{ name: tCommon("nav.home"), url: SITE_CONFIG.url },
				{
					name: tCommon("nav.services"),
					url: `${SITE_CONFIG.url}${ROUTES.services}`,
				},
				{ name: areaName, url: areaUrl },
			]),
			buildFaqPage(
				AREA_FAQ_KEYS.map((key) => ({
					key,
					question: t(`areas.${area}.faq.${key}.question`),
					answer: t(`areas.${area}.faq.${key}.answer`),
				})),
			),
		],
	};

	return (
		<>
			<JsonLd data={structuredData} />
			<AreaHero slug={area} />
			<AreaChallenge slug={area} />
			<AreaDetail slug={area} />
			<AreaApproach slug={area} />
			<IncludedSection />
			<AreaFaq slug={area} />
			<section className="bg-cal py-section">
				<div className="container-site flex flex-col gap-stack">
					<SectionIntro
						eyebrow={t("labels.otherAreas")}
						title={t("hero.title")}
						nuance={t("hero.nuance")}
					/>
					<AreaGrid exclude={area} />
				</div>
			</section>
			<CtaBand
				eyebrow={tCta("eyebrow")}
				title={tCta("title")}
				nuance={tCta("nuance")}
				body={tCta("body")}
				whatsappMessage={tCommon("whatsapp.area", {
					area: t(`areas.${area}.name`),
				})}
			/>
		</>
	);
}
