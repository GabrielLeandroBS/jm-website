import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/containers/common/cta-band";
import { PageHero } from "@/components/containers/common/page-hero";
import { FaqGroups } from "@/components/containers/faq/faq-groups";
import { buildPageMetadata } from "@/lib/utils/page-metadata";
import { FAQ_ITEM_PATHS } from "@/models/constants/content-keys";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("faq.meta");
	return buildPageMetadata({
		title: t("title"),
		description: t("description"),
		path: ROUTES.faq,
	});
}

export default async function FaqPage() {
	const t = await getTranslations("faq.hero");
	const tGroups = await getTranslations("faq.groups");
	const tCta = await getTranslations("home.cta");

	const schema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: FAQ_ITEM_PATHS.map((path) => ({
			"@type": "Question",
			name: tGroups(`${path}.question`),
			acceptedAnswer: {
				"@type": "Answer",
				text: tGroups(`${path}.answer`),
			},
		})),
	};

	return (
		<>
			<PageHero
				eyebrow={t("eyebrow")}
				title={t("title")}
				nuance={t("nuance")}
				lead={t("lead")}
			/>
			<FaqGroups />
			<CtaBand
				eyebrow={tCta("eyebrow")}
				title={tCta("title")}
				nuance={tCta("nuance")}
				body={tCta("body")}
			/>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from translations
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
		</>
	);
}
