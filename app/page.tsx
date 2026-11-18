import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/containers/common/cta-band";
import { HomeDomains } from "@/components/containers/home/home-domains";
import { HomeFacts } from "@/components/containers/home/home-facts";
import { HomeHero } from "@/components/containers/home/home-hero";
import { HomeMethod } from "@/components/containers/home/home-method";
import { HomeProof } from "@/components/containers/home/home-proof";
import { HomeStatement } from "@/components/containers/home/home-statement";
import { HomeStory } from "@/components/containers/home/home-story";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("common.meta");
	return { title: { absolute: t("title") } };
}

export default async function HomePage() {
	const t = await getTranslations("home.cta");

	return (
		<>
			<HomeHero />
			<HomeStatement />
			<HomeDomains />
			<HomeMethod />
			<HomeFacts />
			<HomeStory />
			<HomeProof />
			<CtaBand
				eyebrow={t("eyebrow")}
				title={t("title")}
				nuance={t("nuance")}
				body={t("body")}
			/>
		</>
	);
}
