import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutChapters } from "@/components/containers/about/about-chapters";
import { AboutManifesto } from "@/components/containers/about/about-manifesto";
import { AboutStory } from "@/components/containers/about/about-story";
import { AboutValues } from "@/components/containers/about/about-values";
import { CtaBand } from "@/components/containers/common/cta-band";
import { PageHero } from "@/components/containers/common/page-hero";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("about.meta");
	return {
		title: t("title"),
		description: t("description"),
		alternates: { canonical: ROUTES.about },
	};
}

export default async function AboutPage() {
	const t = await getTranslations("about.hero");
	const tCta = await getTranslations("home.cta");

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
			<AboutManifesto />
			<AboutValues />
			<CtaBand
				eyebrow={tCta("eyebrow")}
				title={tCta("title")}
				nuance={tCta("nuance")}
				body={tCta("body")}
			/>
		</>
	);
}
