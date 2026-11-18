import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/containers/common/cta-band";
import { PageHero } from "@/components/containers/common/page-hero";
import { TeamFounder } from "@/components/containers/team/team-founder";
import { TeamPrinciples } from "@/components/containers/team/team-principles";
import { TeamRoles } from "@/components/containers/team/team-roles";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("team.meta");
	return {
		title: t("title"),
		description: t("description"),
		alternates: { canonical: ROUTES.team },
	};
}

export default async function TeamPage() {
	const t = await getTranslations("team.hero");
	const tCta = await getTranslations("home.cta");

	return (
		<>
			<PageHero
				eyebrow={t("eyebrow")}
				title={t("title")}
				nuance={t("nuance")}
				lead={t("lead")}
			/>
			<TeamFounder />
			<TeamRoles />
			<TeamPrinciples />
			<CtaBand
				eyebrow={tCta("eyebrow")}
				title={tCta("title")}
				nuance={tCta("nuance")}
				body={tCta("body")}
			/>
		</>
	);
}
