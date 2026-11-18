import type { AreaSlug } from "@/models/types/area";

export const ROUTES = {
	home: "/",
	services: "/servicos",
	method: "/metodo",
	about: "/sobre",
	team: "/equipa",
	contact: "/contacto",
	faq: "/perguntas-frequentes",
	careers: "/trabalhe-connosco",
	tour: "/visita",
	privacy: "/privacidade",
	cookies: "/cookies",
	terms: "/termos",
} as const;

export function areaRoute(slug: AreaSlug) {
	return `${ROUTES.services}/${slug}` as const;
}
