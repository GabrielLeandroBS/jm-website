import { AREA_SLUGS } from "@/models/constants/areas";
import type { AreaSlug } from "@/models/types/area";

export function isAreaSlug(value: string): value is AreaSlug {
	return (AREA_SLUGS as readonly string[]).includes(value);
}
