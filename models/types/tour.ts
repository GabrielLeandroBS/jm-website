import type {
	TOUR_FREQUENCIES,
	TOUR_PRIORITIES,
	TOUR_SPACES,
	TOUR_STAGES,
} from "@/models/constants/tour";

export type TourStage = (typeof TOUR_STAGES)[number];
export type TourSpace = (typeof TOUR_SPACES)[number];
export type TourFrequency = (typeof TOUR_FREQUENCIES)[number];
export type TourPriority = (typeof TOUR_PRIORITIES)[number];

export interface TourAnswers {
	space: TourSpace | null;
	frequency: TourFrequency | null;
	priority: TourPriority | null;
}
