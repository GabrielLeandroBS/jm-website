import type { AreaSlug } from "@/models/types/area";

export interface AreaSectionProps {
	slug: AreaSlug;
}

export interface AreaPageProps {
	params: Promise<{ area: string }>;
}

export interface AreaGridProps {
	exclude?: AreaSlug;
}
