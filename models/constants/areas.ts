import {
	Building,
	type CarbonIconType,
	Construction,
	DeliveryTruck,
	Home,
	Industry,
} from "@carbon/icons-react";
import type { AreaSlug } from "@/models/types/area";

export const AREA_SLUGS = [
	"casa",
	"empresas",
	"obra",
	"industria",
	"mudancas",
] as const;

export const FEATURED_AREA: AreaSlug = "industria";

export const AREA_ITEM_KEYS = ["one", "two", "three", "four", "five"] as const;

export const AREA_ICONS = {
	casa: Home,
	empresas: Building,
	obra: Construction,
	industria: Industry,
	mudancas: DeliveryTruck,
} satisfies Record<AreaSlug, CarbonIconType>;

export const INCLUDED_KEYS = ["visit", "proposal", "team", "report"] as const;
