import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CareersApply } from "@/components/containers/careers/careers-apply";
import { CareersFaq } from "@/components/containers/careers/careers-faq";
import { CareersFirstMonth } from "@/components/containers/careers/careers-first-month";
import { CareersProfile } from "@/components/containers/careers/careers-profile";
import { CareersRoles } from "@/components/containers/careers/careers-roles";
import { CareersWhy } from "@/components/containers/careers/careers-why";
import { PageHero } from "@/components/containers/common/page-hero";
import { ButtonLink } from "@/components/shared/button-link";
import { getOgAlt } from "@/lib/utils/og-alt";
import { buildPageMetadata } from "@/lib/utils/page-metadata";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("careers.meta");
	return buildPageMetadata({
		title: t("title"),
		description: t("description"),
		path: ROUTES.careers,
		imageAlt: await getOgAlt(),
	});
}

export default async function CareersPage() {
	const t = await getTranslations("careers");

	return (
		<>
			<PageHero
				eyebrow={t("hero.eyebrow")}
				title={t("hero.title")}
				nuance={t("hero.nuance")}
				lead={t("hero.lead")}
			>
				<div>
					<ButtonLink
						href={`${ROUTES.careers}#candidatura`}
						variant="green"
						size="lg"
					>
						{t("apply.jump")}
					</ButtonLink>
				</div>
			</PageHero>
			<CareersWhy />
			<CareersRoles />
			<CareersProfile />
			<CareersFirstMonth />
			<CareersFaq />
			<CareersApply />
		</>
	);
}
