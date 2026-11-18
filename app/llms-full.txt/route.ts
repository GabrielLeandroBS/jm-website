import { getTranslations } from "next-intl/server";
import { SITE_CONFIG } from "@/config/site";
import { buildFaqEntries } from "@/lib/utils/faq-entries";
import { AREA_SLUGS } from "@/models/constants/areas";
import {
	AREA_DELIVERABLE_KEYS,
	AREA_FAQ_KEYS,
	FAQ_ITEM_PATHS,
	METHOD_STEPS,
} from "@/models/constants/content-keys";
import { areaRoute } from "@/models/constants/routes";

export async function GET() {
	const [tCommon, tServices, tMethod, tFaq] = await Promise.all([
		getTranslations("common"),
		getTranslations("services"),
		getTranslations("method.steps"),
		getTranslations("faq.groups"),
	]);

	const areas = AREA_SLUGS.map((slug) => {
		return [
			`## j&m. ${tServices(`areas.${slug}.name`)} | ${tServices(`areas.${slug}.title`)}`,
			`URL: ${SITE_CONFIG.url}${areaRoute(slug)}`,
			tServices(`areas.${slug}.intro`),
			tServices(`areas.${slug}.challenge.body`),
			`### ${tServices("labels.approach")}`,
			...METHOD_STEPS.map(
				(step) =>
					`- ${tMethod(`${step}.title`)}: ${tServices(`areas.${slug}.approach.${step}`)}`,
			),
			`### ${tServices("labels.deliverables")}`,
			...AREA_DELIVERABLE_KEYS.map(
				(key) => `- ${tServices(`areas.${slug}.deliverables.${key}`)}`,
			),
			...AREA_FAQ_KEYS.map(
				(key) =>
					`Q: ${tServices(`areas.${slug}.faq.${key}.question`)}\nR: ${tServices(`areas.${slug}.faq.${key}.answer`)}`,
			),
		].join("\n\n");
	});

	const faq = buildFaqEntries(tFaq, FAQ_ITEM_PATHS).map(
		(entry) => `Q: ${entry.question}\nR: ${entry.answer}`,
	);

	const body = [
		`# ${SITE_CONFIG.legalName}`,
		`> ${tCommon("meta.description")}`,
		`${tCommon("contactInfo.phone")}: ${SITE_CONFIG.phoneDisplay} · ${tCommon("contactInfo.email")}: ${SITE_CONFIG.email} · ${SITE_CONFIG.url}`,
		...areas,
		`## ${tCommon("nav.faq")}`,
		...faq,
	].join("\n\n");

	return new Response(`${body}\n`, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
