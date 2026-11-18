import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutChapters } from "@/components/containers/about/about-chapters";
import { AboutCommitments } from "@/components/containers/about/about-commitments";
import { AboutCoverage } from "@/components/containers/about/about-coverage";
import { AboutManifesto } from "@/components/containers/about/about-manifesto";
import { AboutStory } from "@/components/containers/about/about-story";
import { AboutValues } from "@/components/containers/about/about-values";
import { CtaBand } from "@/components/containers/common/cta-band";
import { PageHero } from "@/components/containers/common/page-hero";
import { HomeDifference } from "@/components/containers/home/home-difference";
import { HomeFacts } from "@/components/containers/home/home-facts";
import { buildPageMetadata } from "@/lib/utils/page-metadata";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("about.meta");
	return buildPageMetadata({
		title: t("title"),
		description: t("description"),
		path: ROUTES.about,
	});
}

export default async function AboutPage() {
	const [t, tDifference, tCta] = await Promise.all([
		getTranslations("about.hero"),
		getTranslations("about.difference"),
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
			<AboutStory />
			<AboutChapters />
			<HomeFacts />
			<AboutManifesto />
			<AboutCommitments />
			<AboutValues />
			<HomeDifference
				eyebrow={tDifference("eyebrow")}
				title={tDifference("title")}
				nuance={tDifference("nuance")}
			/>
			<AboutCoverage />
			<CtaBand
				eyebrow={tCta("eyebrow")}
				title={tCta("title")}
				nuance={tCta("nuance")}
				body={tCta("body")}
			/>
		</>
	);
}
