import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/containers/common/cta-band";
import { FaqTeaser } from "@/components/containers/common/faq-teaser";
import { HomeAudiences } from "@/components/containers/home/home-audiences";
import { HomeDifference } from "@/components/containers/home/home-difference";
import { HomeDomains } from "@/components/containers/home/home-domains";
import { HomeFacts } from "@/components/containers/home/home-facts";
import { HomeHero } from "@/components/containers/home/home-hero";
import { HomeMethod } from "@/components/containers/home/home-method";
import { HomeProof } from "@/components/containers/home/home-proof";
import { HomeSectors } from "@/components/containers/home/home-sectors";
import { HomeStatement } from "@/components/containers/home/home-statement";
import { HomeStory } from "@/components/containers/home/home-story";
import { buildFaqEntries } from "@/lib/utils/faq-entries";
import { buildPageMetadata } from "@/lib/utils/page-metadata";
import { HOME_FAQ_PATHS } from "@/models/constants/content-keys";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("common.meta");
	return {
		...buildPageMetadata({
			title: t("title"),
			description: t("description"),
			path: ROUTES.home,
		}),
		title: { absolute: t("title") },
	};
}

export default async function HomePage() {
	const [t, tFaq, tFaqGroups] = await Promise.all([
		getTranslations("home.cta"),
		getTranslations("home.faq"),
		getTranslations("faq.groups"),
	]);

	return (
		<>
			<HomeHero />
			<HomeSectors />
			<HomeStatement />
			<HomeAudiences />
			<HomeDomains />
			<HomeMethod />
			<HomeDifference />
			<HomeFacts />
			<HomeStory />
			<HomeProof />
			<FaqTeaser
				eyebrow={tFaq("eyebrow")}
				title={tFaq("title")}
				nuance={tFaq("nuance")}
				cta={tFaq("cta")}
				items={buildFaqEntries(tFaqGroups, HOME_FAQ_PATHS)}
			/>
			<CtaBand
				eyebrow={t("eyebrow")}
				title={t("title")}
				nuance={t("nuance")}
				body={t("body")}
			/>
		</>
	);
}
