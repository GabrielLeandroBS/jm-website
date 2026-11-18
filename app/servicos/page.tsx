import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/containers/common/cta-band";
import { FaqTeaser } from "@/components/containers/common/faq-teaser";
import { PageHero } from "@/components/containers/common/page-hero";
import { HomeMethod } from "@/components/containers/home/home-method";
import { AreaGrid } from "@/components/containers/services/area-grid";
import { IncludedSection } from "@/components/containers/services/included-section";
import { ServicesChooser } from "@/components/containers/services/services-chooser";
import { ServicesFrequencies } from "@/components/containers/services/services-frequencies";
import { buildFaqEntries } from "@/lib/utils/faq-entries";
import { getOgAlt } from "@/lib/utils/og-alt";
import { buildPageMetadata } from "@/lib/utils/page-metadata";
import { SERVICES_FAQ_PATHS } from "@/models/constants/content-keys";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("services.meta");
	return buildPageMetadata({
		title: t("title"),
		description: t("description"),
		path: ROUTES.services,
		imageAlt: await getOgAlt(),
	});
}

export default async function ServicesPage() {
	const [t, tFaq, tFaqGroups, tCta] = await Promise.all([
		getTranslations("services.hero"),
		getTranslations("services.faq"),
		getTranslations("faq.groups"),
		getTranslations("home.cta"),
	]);

	return (
		<>
			<PageHero
				eyebrow={t("eyebrow")}
				title={t("title")}
				nuance={t("nuance")}
				lead={t("lead")}
			/>
			<section className="bg-cal py-section">
				<div className="container-site">
					<AreaGrid />
				</div>
			</section>
			<ServicesChooser />
			<ServicesFrequencies />
			<HomeMethod />
			<IncludedSection />
			<FaqTeaser
				eyebrow={tFaq("eyebrow")}
				title={tFaq("title")}
				nuance={tFaq("nuance")}
				cta={tFaq("cta")}
				items={buildFaqEntries(tFaqGroups, SERVICES_FAQ_PATHS)}
			/>
			<CtaBand
				eyebrow={tCta("eyebrow")}
				title={tCta("title")}
				nuance={tCta("nuance")}
				body={tCta("body")}
			/>
		</>
	);
}
