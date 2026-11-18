import type about from "@/locales/pt/about.json";
import type careers from "@/locales/pt/careers.json";
import type common from "@/locales/pt/common.json";
import type contact from "@/locales/pt/contact.json";
import type faq from "@/locales/pt/faq.json";
import type home from "@/locales/pt/home.json";
import type legal from "@/locales/pt/legal.json";
import type method from "@/locales/pt/method.json";
import type services from "@/locales/pt/services.json";
import type team from "@/locales/pt/team.json";
import type tour from "@/locales/pt/tour.json";
import type { Locale } from "@/models/types/locale";

declare module "next-intl" {
	interface AppConfig {
		Locale: Locale;
		Messages: {
			common: typeof common;
			home: typeof home;
			about: typeof about;
			services: typeof services;
			method: typeof method;
			tour: typeof tour;
			team: typeof team;
			faq: typeof faq;
			careers: typeof careers;
			contact: typeof contact;
			legal: typeof legal;
		};
	}
}
