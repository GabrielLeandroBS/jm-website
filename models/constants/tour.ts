import type { AreaSlug } from "@/models/types/area";
import type { TourSpace } from "@/models/types/tour";

export const TOUR_STAGES = [
	"welcome",
	"space",
	"method",
	"proof",
	"proposal",
] as const;

export const TOUR_SPACES = [
	"house",
	"office",
	"store",
	"construction",
	"factory",
	"moving",
] as const;

export const TOUR_FREQUENCIES = [
	"once",
	"weekly",
	"monthly",
	"contract",
] as const;

export const TOUR_PRIORITIES = [
	"discretion",
	"detail",
	"deadline",
	"compliance",
] as const;

export const SPACE_TO_AREA = {
	house: "casa",
	office: "empresas",
	store: "empresas",
	construction: "obra",
	factory: "industria",
	moving: "mudancas",
} satisfies Record<TourSpace, AreaSlug>;
