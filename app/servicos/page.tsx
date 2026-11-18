import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/containers/common/cta-band";
import { PageHero } from "@/components/containers/common/page-hero";
import { AreaGrid } from "@/components/containers/services/area-grid";
import { IncludedSection } from "@/components/containers/services/included-section";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("services.meta");
	return {
		title: t("title"),
		description: t("description"),
		alternates: { canonical: ROUTES.services },
	};
}

export default async function ServicesPage() {
	const t = await getTranslations("services.hero");
	const tCta = await getTranslations("home.cta");

	return (
		<>
			<PageHero
				eyebrow={t("eyebrow")}
				title={t("title")}
				nuance={t("nuance")}
				lead={t("lead")}
			/>
			<section className="bg-cal pb-section">
				<div className="container-site">
					<AreaGrid />
				</div>
			</section>
			<IncludedSection />
			<CtaBand
				eyebrow={tCta("eyebrow")}
				title={tCta("title")}
				nuance={tCta("nuance")}
				body={tCta("body")}
			/>
		</>
	);
}
