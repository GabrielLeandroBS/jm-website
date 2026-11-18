import type { Locale } from "@/models/types/locale";

export async function loadMessages(locale: Locale) {
	const [
		common,
		home,
		about,
		services,
		method,
		tour,
		team,
		faq,
		careers,
		contact,
		legal,
	] = await Promise.all([
		import(`@/locales/${locale}/common.json`),
		import(`@/locales/${locale}/home.json`),
		import(`@/locales/${locale}/about.json`),
		import(`@/locales/${locale}/services.json`),
		import(`@/locales/${locale}/method.json`),
		import(`@/locales/${locale}/tour.json`),
		import(`@/locales/${locale}/team.json`),
		import(`@/locales/${locale}/faq.json`),
		import(`@/locales/${locale}/careers.json`),
		import(`@/locales/${locale}/contact.json`),
		import(`@/locales/${locale}/legal.json`),
	]);

	return {
		common: common.default,
		home: home.default,
		about: about.default,
		services: services.default,
		method: method.default,
		tour: tour.default,
		team: team.default,
		faq: faq.default,
		careers: careers.default,
		contact: contact.default,
		legal: legal.default,
	};
}
