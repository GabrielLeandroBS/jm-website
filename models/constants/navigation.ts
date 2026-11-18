import { ROUTES } from "@/models/constants/routes";
import type { NavLink } from "@/models/interfaces/navigation";

export const PRIMARY_NAV = [
	{ href: ROUTES.services, labelKey: "services" },
	{ href: ROUTES.method, labelKey: "method" },
	{ href: ROUTES.about, labelKey: "about" },
	{ href: ROUTES.team, labelKey: "team" },
	{ href: ROUTES.contact, labelKey: "contact" },
] as const satisfies readonly NavLink[];

export const FOOTER_COMPANY_NAV = [
	{ href: ROUTES.about, labelKey: "about" },
	{ href: ROUTES.method, labelKey: "method" },
	{ href: ROUTES.team, labelKey: "team" },
	{ href: ROUTES.careers, labelKey: "careers" },
] as const satisfies readonly NavLink[];

export const FOOTER_SUPPORT_NAV = [
	{ href: ROUTES.tour, labelKey: "tour" },
	{ href: ROUTES.faq, labelKey: "faq" },
	{ href: ROUTES.contact, labelKey: "contact" },
] as const satisfies readonly NavLink[];

export const MOBILE_NAV = [
	...PRIMARY_NAV,
	{ href: ROUTES.faq, labelKey: "faq" },
] as const satisfies readonly NavLink[];
