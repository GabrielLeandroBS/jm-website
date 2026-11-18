import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/containers/common/cta-band";
import { PageHero } from "@/components/containers/common/page-hero";
import { FaqGroups } from "@/components/containers/faq/faq-groups";
import { JsonLd } from "@/components/containers/seo/json-ld";
import { buildFaqEntries } from "@/lib/utils/faq-entries";
import { getOgAlt } from "@/lib/utils/og-alt";
import { buildPageMetadata } from "@/lib/utils/page-metadata";
import { buildFaqPage } from "@/lib/utils/structured-data";
import { FAQ_ITEM_PATHS } from "@/models/constants/content-keys";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("faq.meta");
	return buildPageMetadata({
		title: t("title"),
		description: t("description"),
		path: ROUTES.faq,
		imageAlt: await getOgAlt(),
	});
}

export default async function FaqPage() {
	const [t, tGroups, tCta] = await Promise.all([
		getTranslations("faq.hero"),
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
			<FaqGroups />
			<CtaBand
				eyebrow={tCta("eyebrow")}
				title={tCta("title")}
				nuance={tCta("nuance")}
				body={tCta("body")}
			/>
			<JsonLd data={buildFaqPage(buildFaqEntries(tGroups, FAQ_ITEM_PATHS))} />
		</>
	);
}
