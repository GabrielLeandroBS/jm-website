import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/containers/common/cta-band";
import { PageHero } from "@/components/containers/common/page-hero";
import { MethodSafety } from "@/components/containers/method/method-safety";
import { MethodSteps } from "@/components/containers/method/method-steps";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("method.meta");
	return {
		title: t("title"),
		description: t("description"),
		alternates: { canonical: ROUTES.method },
	};
}

export default async function MethodPage() {
	const t = await getTranslations("method.hero");
	const tCta = await getTranslations("home.cta");

	return (
		<>
			<PageHero
				eyebrow={t("eyebrow")}
				title={t("title")}
				nuance={t("nuance")}
				lead={t("lead")}
			/>
			<MethodSteps />
			<MethodSafety />
			<CtaBand
				eyebrow={tCta("eyebrow")}
				title={tCta("title")}
				nuance={tCta("nuance")}
				body={tCta("body")}
			/>
		</>
	);
}
