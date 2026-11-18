import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/containers/common/cta-band";
import { PageHero } from "@/components/containers/common/page-hero";
import { TeamDay } from "@/components/containers/team/team-day";
import { TeamFounder } from "@/components/containers/team/team-founder";
import { TeamJoin } from "@/components/containers/team/team-join";
import { TeamPrinciples } from "@/components/containers/team/team-principles";
import { TeamRoles } from "@/components/containers/team/team-roles";
import { TeamTraining } from "@/components/containers/team/team-training";
import { TeamUniform } from "@/components/containers/team/team-uniform";
import { getOgAlt } from "@/lib/utils/og-alt";
import { buildPageMetadata } from "@/lib/utils/page-metadata";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("team.meta");
	return buildPageMetadata({
		title: t("title"),
		description: t("description"),
		path: ROUTES.team,
		imageAlt: await getOgAlt(),
	});
}

export default async function TeamPage() {
	const [t, tCta] = await Promise.all([
		getTranslations("team.hero"),
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
			<TeamFounder />
			<TeamRoles />
			<TeamDay />
			<TeamTraining />
			<TeamUniform />
			<TeamPrinciples />
			<TeamJoin />
			<CtaBand
				eyebrow={tCta("eyebrow")}
				title={tCta("title")}
				nuance={tCta("nuance")}
				body={tCta("body")}
			/>
		</>
	);
}
