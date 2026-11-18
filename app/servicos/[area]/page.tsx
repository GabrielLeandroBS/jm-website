import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/containers/common/cta-band";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { AreaApproach } from "@/components/containers/services/area-approach";
import { AreaChallenge } from "@/components/containers/services/area-challenge";
import { AreaDetail } from "@/components/containers/services/area-detail";
import { AreaFaq } from "@/components/containers/services/area-faq";
import { AreaGrid } from "@/components/containers/services/area-grid";
import { AreaHero } from "@/components/containers/services/area-hero";
import { IncludedSection } from "@/components/containers/services/included-section";
import { isAreaSlug } from "@/lib/utils/area";
import { buildPageMetadata } from "@/lib/utils/page-metadata";
import { AREA_SLUGS } from "@/models/constants/areas";
import { areaRoute } from "@/models/constants/routes";
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

	return (
		<>
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
