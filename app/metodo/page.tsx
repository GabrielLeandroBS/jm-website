import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/containers/common/cta-band";
import { FaqTeaser } from "@/components/containers/common/faq-teaser";
import { PageHero } from "@/components/containers/common/page-hero";
import { MethodChecklist } from "@/components/containers/method/method-checklist";
import { MethodRecords } from "@/components/containers/method/method-records";
import { MethodSafety } from "@/components/containers/method/method-safety";
import { MethodSteps } from "@/components/containers/method/method-steps";
import { buildFaqEntries } from "@/lib/utils/faq-entries";
import { buildPageMetadata } from "@/lib/utils/page-metadata";
import { METHOD_FAQ_PATHS } from "@/models/constants/content-keys";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("method.meta");
	return buildPageMetadata({
		title: t("title"),
		description: t("description"),
		path: ROUTES.method,
	});
}

export default async function MethodPage() {
	const [t, tFaq, tFaqGroups, tCta] = await Promise.all([
		getTranslations("method.hero"),
		getTranslations("method.faq"),
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
			<MethodSteps />
			<MethodRecords />
			<MethodChecklist />
			<MethodSafety />
			<FaqTeaser
				eyebrow={tFaq("eyebrow")}
				title={tFaq("title")}
				nuance={tFaq("nuance")}
				cta={tFaq("cta")}
				items={buildFaqEntries(tFaqGroups, METHOD_FAQ_PATHS)}
			/>
			<CtaBand
				eyebrow={tCta("eyebrow")}
				title={tCta("title")}
				nuance={tCta("nuance")}
				body={tCta("body")}
			/>
		</>
	);
}
