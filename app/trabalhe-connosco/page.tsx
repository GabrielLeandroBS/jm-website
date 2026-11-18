import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CareersApply } from "@/components/containers/careers/careers-apply";
import { CareersProfile } from "@/components/containers/careers/careers-profile";
import { CareersWhy } from "@/components/containers/careers/careers-why";
import { PageHero } from "@/components/containers/common/page-hero";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("careers.meta");
	return {
		title: t("title"),
		description: t("description"),
		alternates: { canonical: ROUTES.careers },
	};
}

export default async function CareersPage() {
	const t = await getTranslations("careers.hero");

	return (
		<>
			<PageHero
				eyebrow={t("eyebrow")}
				title={t("title")}
				nuance={t("nuance")}
				lead={t("lead")}
			/>
			<CareersWhy />
			<CareersProfile />
			<CareersApply />
		</>
	);
}
