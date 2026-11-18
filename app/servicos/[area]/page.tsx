import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/containers/common/cta-band";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { AreaDetail } from "@/components/containers/services/area-detail";
import { AreaGrid } from "@/components/containers/services/area-grid";
import { AreaHero } from "@/components/containers/services/area-hero";
import { IncludedSection } from "@/components/containers/services/included-section";
import { isAreaSlug } from "@/lib/utils/area";
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
	return {
		title: t("labels.metaTitle", {
			area: t(`areas.${area}.name`),
			title: t(`areas.${area}.title`),
		}),
		description: t(`areas.${area}.intro`),
		alternates: { canonical: areaRoute(area) },
	};
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
			<AreaDetail slug={area} />
			<IncludedSection />
			<section className="bg-cal pt-section">
				<div className="container-site flex flex-col gap-12">
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
