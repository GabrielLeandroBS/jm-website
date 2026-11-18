import { getTranslations } from "next-intl/server";
import { SITE_CONFIG } from "@/config/site";
import { buildLlmsText } from "@/lib/utils/llms-text";
import { AREA_SLUGS } from "@/models/constants/areas";
import { areaRoute, ROUTES } from "@/models/constants/routes";

function absolute(path: string) {
	return `${SITE_CONFIG.url}${path === "/" ? "" : path}`;
}

export async function GET() {
	const [tCommon, tServices, tMethod, tAbout, tTeam, tCareers, tFaq, tContact] =
		await Promise.all([
			getTranslations("common"),
			getTranslations("services"),
			getTranslations("method.meta"),
			getTranslations("about.meta"),
			getTranslations("team.meta"),
			getTranslations("careers.meta"),
			getTranslations("faq.meta"),
			getTranslations("contact.meta"),
		]);

	const body = buildLlmsText({
		name: SITE_CONFIG.legalName,
		summary: tCommon("meta.description"),
		details: [
			`${tCommon("brand.since")} · ${tCommon("brand.byAppointment")}`,
			`${tCommon("contactInfo.area")}: ${tCommon("contactInfo.areaValue")}`,
			`${tCommon("contactInfo.phone")}: ${SITE_CONFIG.phoneDisplay}`,
			`${tCommon("contactInfo.email")}: ${SITE_CONFIG.email}`,
		],
		sections: [
			{
				title: tCommon("nav.services"),
				links: AREA_SLUGS.map((slug) => ({
					label: `j&m. ${tServices(`areas.${slug}.name`)}: ${tServices(`areas.${slug}.title`)}`,
					url: absolute(areaRoute(slug)),
					summary: tServices(`areas.${slug}.intro`),
				})),
			},
			{
				title: tCommon("footer.company"),
				links: [
					{
						label: tServices("meta.title"),
						url: absolute(ROUTES.services),
						summary: tServices("meta.description"),
					},
					{
						label: tMethod("title"),
						url: absolute(ROUTES.method),
						summary: tMethod("description"),
					},
					{
						label: tAbout("title"),
						url: absolute(ROUTES.about),
						summary: tAbout("description"),
					},
					{
						label: tTeam("title"),
						url: absolute(ROUTES.team),
						summary: tTeam("description"),
					},
					{
						label: tCareers("title"),
						url: absolute(ROUTES.careers),
						summary: tCareers("description"),
					},
					{
						label: tFaq("title"),
						url: absolute(ROUTES.faq),
						summary: tFaq("description"),
					},
					{
						label: tContact("title"),
						url: absolute(ROUTES.contact),
						summary: tContact("description"),
					},
				],
			},
		],
	});

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
